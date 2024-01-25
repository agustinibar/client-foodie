import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Collapse,
  useTheme,
} from "@mui/material";
import { WidgetWrapper } from "components/WidgetWrapper";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";

export const CreateGroupWidget = () => {

  const { _id } = useSelector((state)=> state.user);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [mentalHealthTopics, setMentalHealthTopics] = useState({
    Anxiety:false,
    Depression:false,
    Stress:false,
    EatingDisorders:false,
    Relationships:false,
    PersonalCare:false,
  });
  const [groupObjectives, setGroupObjectives] = useState("");
  const [groupRules, setGroupRules] = useState("");
  const { palette } = useTheme();

  const groupRef = collection(db, "groups");



  const handleCreateGroup = async() => {
    if (groupName.trim() !== "") {
      
      const newGroup={
        name: groupName,
        description: groupDescription,
        mentalHealthTopics,
        objectives: groupObjectives,
        rules: groupRules,
        creatorId: _id
      };
    console.log(_id)
      await addDoc(groupRef, newGroup);

      setGroupName("");
      setGroupDescription("");
      setMentalHealthTopics({
        Anxiety:false,
        Depression:false,
        Stress:false,
        EatingDisorders:false,
        Relationships:false,
        PersonalCare:false,
      });
      setGroupObjectives("");
      setGroupRules("");
     
      setIsFormVisible(false);
    }
  };

  return (
    <WidgetWrapper>
      <Typography
        color={palette}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Create a Group
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Cancel" : "Create Group"}
      </Button>
      <Collapse in={isFormVisible}>
        <Box mt={2}>
          <TextField
            label="Group Name"
            variant="outlined"
            fullWidth
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <TextField
            label="Group Description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            sx={{ mt: 2 }}
          />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Mental Health Topics</FormLabel>
            <FormGroup>
              {Object.entries(mentalHealthTopics).map(([topic, checked]) => (
                <FormControlLabel
                  key={topic}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() =>
                        setMentalHealthTopics((prev) => ({
                          ...prev,
                          [topic]: !checked,
                        }))
                      }
                    />
                  }
                  label={topic}
                />
              ))}
            </FormGroup>
          </FormControl>
          <TextField
            label="Group Objectives"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={groupObjectives}
            onChange={(e) => setGroupObjectives(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Group Rules"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={groupRules}
            onChange={(e) => setGroupRules(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleCreateGroup( _id )}
            sx={{ mt: 2 }}
          >
            Create
          </Button>
        </Box>
      </Collapse>
    </WidgetWrapper>
  );
};
