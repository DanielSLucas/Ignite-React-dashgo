import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Daniel Lucas</Text>
        <Text color="gray.300" fontSize="small">
          daniellucas-pms@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Daniel Lucas" src="https://github.com/DanielSLucas.png"/>
    </Flex>
  )
}
