import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  // Use a combination of VStack, HStack, Image, Heading and Text components.

  return (
    <VStack
      backgroundColor="#ffffff"
      borderRadius="md"
      boxShadow="md"
      padding={4}
      spacing={4}
      width="100%"
    >
      <Image
        alt={title}
        borderRadius="md"
        height="auto"
        maxHeight="200px"
        maxWidth="100%"
        objectFit="cover"
        src={imageSrc}
        width="100%"
      />
      <VStack alignItems="flex-start" spacing={0} width="100%">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack
        alignItems="center"
        color="#3182ce"
        justifyContent="flex-end"
        spacing={0}
        width="100%"
      >
        <Text color={"black"}>See more </Text>
        <FontAwesomeIcon
          style={{ padding: "012px", cursor: "pointer", color: "black" }}
          icon={faArrowRight}
          size="1x"
        />
      </HStack>
    </VStack>
  );
};

export default Card;
