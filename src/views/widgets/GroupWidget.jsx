import React from "react";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { Message } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const GroupWidget = ({ groupId, name, description, mentalHealthTopics, objectives, rules }) => {
    const navigate = useNavigate()
  return (
    <Card>
      <CardHeader
        title={
          <>
            {name}
            <IconButton onClick={() => navigate("/messages")}>
              <Message sx={{ fontSize: "25px" }} />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="div">
          <p>Description: {description}</p>
          {mentalHealthTopics && (
            <p>Mental Health Topics: {Object.keys(mentalHealthTopics).filter(topic => mentalHealthTopics[topic]).join(", ")}</p>
          )}
          <p>Objectives: {objectives}</p>
          <p>Rules: {rules}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};


