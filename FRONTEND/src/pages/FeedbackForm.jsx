import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const imageId = urlParams.get("imageId");
  const userId = urlParams.get("userId");
  const Navigate = useNavigate();

  const [selectedOptionId, setSelectedOptionId] = useState("");
  const questions = [
    {
      id: 1,
      text: "The advertisement is relevant to me as the target audience.",
    },
    {
      id: 2,
      text: "The advertisement can clearly and effectively convey its message",
    },
    {
      id: 3,
      text: "The ad engages me, encouraging participation and sparking interest.",
    },
    { id: 4, text: "The advertisement is negatively impacting the audience." },
    {
      id: 5,
      text: "The Advertisement Makes me want to learn more about the product or brander.",
    },
  ];

  const handleOptionChange = (e) => {
    setSelectedOptionId(parseInt(e.target.value)); // Convert value to integer
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post(
        "http://localhost:8000/api/get-feedback/",
        {
          option_id: selectedOptionId,
          image_id: imageId,
          user_id: userId,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSelectedOptionId("");
      Navigate("/");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Feedback Form
      </h2>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        {questions.map((question) => (
          <div key={question.id} style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id={`option-${question.id}`}
              value={question.id} // Pass the question ID as the value
              checked={selectedOptionId === question.id}
              onChange={handleOptionChange}
              style={{ marginRight: "5px" }}
            />
            <label htmlFor={`option-${question.id}`}>{question.text}</label>
          </div>
        ))}
        <Button
          variant="contained"
          type="submit"
          style={{ width: "20%", marginTop: "20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
