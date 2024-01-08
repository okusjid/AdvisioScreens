import cv2
import numpy as np
import datetime

# Load YOLO
net = cv2.dnn.readNet(
    r"BACKEND\Vehicle Detection\yolov3.weights",
    r"BACKEND\Vehicle Detection\yolov3.cfg"
)
layer_names = net.getLayerNames()
unconnected_out_layers = net.getUnconnectedOutLayers().flatten()
output_layers = [layer_names[i - 1] for i in unconnected_out_layers]

# Default video source is a video file. Change the path accordingly.
default_video_source = r"BACKEND\Vehicle Detection\Video.mp4"

# Log file for storing timestamp data
log_file_path = 'traffic_log.txt'

# Uncomment the following line and comment out the default_video_source line above to switch to webcam input.
# default_video_source = 0  # Typically 0 is the device index for the default webcam

# Initialize video
cap = cv2.VideoCapture(default_video_source)

# Define the counting line position and the counter
count_line_position = 550
counter = 0
already_counted = []

def detect_vehicles(frame):
    global counter, already_counted
    height, width, channels = frame.shape
    blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    outs = net.forward(output_layers)
    
    # Identifying specific vehicle class IDs
    vehicle_ids = [2, 3, 5, 7]  # Assuming these are the class IDs for car, motorcycle, bus, and truck
    
    boxes = []
    confidences = []
    class_ids = []
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.5 and class_id in vehicle_ids:  # Filter out non-vehicle and low confidence detections
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                
                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)
    
    # Applying Non-Maximum Suppression
    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)  # Thresholds for NMS

    for i in indexes.flatten():
        x, y, w, h = boxes[i]
        if y < count_line_position + 6 and y > count_line_position - 6:  # Check if within the line area
            vehicle_center = (x + w // 2, y + h // 2)  # Central point of the box
            if vehicle_center not in already_counted:
                counter += 1
                already_counted.append(vehicle_center)  # Add the center to the list of counted vehicles
                
                # Log timestamp and vehicle count
                with open(log_file_path, 'a') as log_file:
                    log_file.write(f"{datetime.datetime.now()} {counter}\n")

        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    return frame

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = detect_vehicles(frame)
    cv2.putText(frame, "VEHICLE COUNT : " + str(counter), (450, 70), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 5)
    cv2.line(frame, (25, count_line_position), (1200, count_line_position), (255, 127, 0), 3)  # Draw the counting line
    cv2.imshow('Video Original', frame)

    if cv2.waitKey(1) == 13:  # 13 is the Enter Key
        break

cap.release()
cv2.destroyAllWindows()