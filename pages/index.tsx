import { NextPage } from "next";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <NextLink href="/about">About</NextLink>
    </>
  );
};

export default IndexPage;
