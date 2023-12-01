import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/react";

const AboutPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin="4">
      <Heading as="h1" size="2xl" marginY="2rem">
        This is ABOUT page
      </Heading>
      <NextLink href="/">
        <Link>Home</Link>
      </NextLink>
    </Flex>
  );
};

export default AboutPage;
