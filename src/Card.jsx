import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Tag,
  Text
} from "@chakra-ui/react";

export function Card() {
  return (
    <Center as="section" bg="gray.100" h="100vh">
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="https://cdn.pixabay.com/photo/2013/07/13/09/50/yoghurt-156133_1280.png"
          alt="Svartifoss WaterfallYogaBar Muesli+ Fruit, Nuts & Seeds - 400g"
          borderRadius="x2"
        
          objectFit="cover"
          mx="auto"
          boxSize="250px"
        />
        <HStack mt="5" spacing="3">
          {["healthy", "Nutritions"].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
    YogaBar Muesli+ Fruit, Nuts & Seeds - 400g
        </Heading>
        <Text>
        Yogurt is a dairy product made by fermenting milk with a bacterial yogurt culture. It provides protein and calcium, and it may enhance healthy probiotic gut bacteria. 
        </Text>
        <Center my="6">
          <Button colorScheme="blue">Learn more</Button>
        </Center>
      </Box>
    </Center>
  );
}
