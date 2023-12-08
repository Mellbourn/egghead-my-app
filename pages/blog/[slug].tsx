import { Text, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Flex margin={4}>
      <Heading as="h1" size="lg">
        Slug is "{slug}"
      </Heading>
    </Flex>
  );
};

export default BlogPage;
