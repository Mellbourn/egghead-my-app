import { NextApiHandler } from "next";
import data from "../../../lib/data.json";

const user: NextApiHandler = (req, res) => {
  const {
    query: { id },
  } = req;

  const userData = data.find((user) => user.id === Number(id));

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found` });
  }
};

export default user;
