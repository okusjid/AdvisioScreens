import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const FeedbackResults = ({ adId }) => {
  const imageId = adId;
  const [feedbackCounts, setFeedbackCounts] = useState({});
  const [totalResponses, setTotalResponses] = useState(0);
  const [error, setError] = useState('');

  const questions = [
    { id: 1, text: "Relevance to Audience" },
    { id: 2, text: "Message Clarity" },
    { id: 3, text: "Engagement Level" },
    { id: 4, text: "Negative Impact" },
    { id: 5, text: "Interest in Product/Brand" },
  ];

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/get-feedback/?item_id=${imageId}`);
        const feedbackData = response.data;
        setFeedbackCounts(feedbackData);
        const total = Object.values(feedbackData).reduce((acc, count) => acc + count, 0);
        setTotalResponses(total);
      } catch (error) {
        setError('Failed to fetch feedback data.');
      }
    };

    fetchFeedback();
  }, [imageId]);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (totalResponses === 0) {
    return <Typography>No feedback available yet.</Typography>;
  }

  const data = questions.map(question => ({
    name: question.text,
    percentage: feedbackCounts[question.id] ? (feedbackCounts[question.id] / totalResponses * 100).toFixed(1) : 0,
  }));

  return (
    <Box margin={2} sx={{ width: '100%', height: '400px' }}>
      <Typography variant="h6" fontWeight="bold" marginBottom={2}>
        Feedback Results
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage" fill="#8884d8" barSize={50}>
            <LabelList dataKey="percentage" position="top" style={{ fill: 'black' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default FeedbackResults;
