import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { id, ...rest } = router.query;
  return (
    <>
      <h2>User ID={id}</h2>
      <pre>{JSON.stringify(rest)}</pre>
    </>
  );
};

export default User;
