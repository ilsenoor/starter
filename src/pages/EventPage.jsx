import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export const EventPage = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState([null]);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const response = await fetch(`http://localhost:3000/events/${eventId}`);
      const eventDetails = await response.json();
      setEventDetails(events);
    };
    fetchEventDetails();
  }, [id]);

  return (
    <Box
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="20px"
      backgroundColor="blue.100"
    >
      <Text>Event Detail Page</Text>
      <Text>{event.title}</Text>
      <Text>Description: {event.description}</Text>
      <img
        src={event.image}
        alt={event.title}
        style={{ maxWidth: "50%", height: "50%" }}
      />
      <Text>Starting time: {event.startTime}</Text>
      <Text>End time: {event.endTime}</Text>
      <Text>Created by: {event.createdBy}</Text>
    </Box>
  );
};
