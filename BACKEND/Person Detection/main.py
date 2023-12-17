from people_detector import PeopleDetector


def main():
    """Main method to run the Realtime People Detection in Video Feed System.

    Returns:
        None
    """
    versions = ["v5", "v8"]

    detector = PeopleDetector(versions[1])
    detector.process_video()


if __name__ == "__main__":
    main()
