import { useEffect, useState } from "react";
import { GroupWidget } from "./GroupWidget";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Box } from "@mui/material";

const GroupsWidget = () => {
  const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    const groupsCollection = collection(db, "groups");
    const querySnapshot = await getDocs(groupsCollection);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ _id: doc.id, ...doc.data() });
    });

    setGroups(data);
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <>
      {Array.isArray(groups) ? (
        groups.map(({ _id, name, description, mentalHealthTopics, objectives, rules }) => (
          <Box margin="5px">
              <GroupWidget
                key={_id}
                groupId={_id}
                name={name}
                description={description}
                mentalHealthTopics={mentalHealthTopics}
                objectives={objectives}
                rules={rules}
              />
          </Box>
        ))
      ) : (
        <p>Loading groups...</p>
      )}
    </>
  );
};

export default GroupsWidget;
