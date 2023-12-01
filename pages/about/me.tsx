import { NextPage } from "next";
import Link from "next/link";

const AboutMePage: NextPage = () => {
  return (
    <>
      <h1>This is ABOUT/ME page</h1>
      <Link href="/about">Go back to ABOUT</Link>
    </>
  );
};

export default AboutMePage;
