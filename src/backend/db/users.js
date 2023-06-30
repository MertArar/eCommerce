import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Mert ",
    lastName: "Arar",
    email: "test@apple.com",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
