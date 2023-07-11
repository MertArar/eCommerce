import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Mert ",
    lastName: "Arar",
    email: "mertarar.ma@gmail.com",
    password: "test1234567",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
