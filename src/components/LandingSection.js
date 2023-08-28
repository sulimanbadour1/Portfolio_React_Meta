import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey, This is Suli";
const bio1 = "A frontend developer";
const bio2 = "UI/UX designer";
const url =
  "https://media.licdn.com/dms/image/D4E03AQHgdwEHydniXw/profile-displayphoto-shrink_800_800/0/1682795954705?e=2147483647&v=beta&t=AhThGTEUKfO_N3g8SlPxA-zlPPGY8iVdeTyARMe71HY";

// Implement the UI for the LandingSection component according to the instructions.

// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    return(
    <VStack>
      <Avatar src={url} size="2xl" />
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>
      <Heading as="h2" size="md">
        {bio1}
      </Heading>
      <Heading as="h2" size="md">
        {bio2}
      </Heading>
    </VStack>
    )
  </FullScreenSection>
);

export default LandingSection;
