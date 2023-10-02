import { CommentData } from "./types";

const initialData: CommentData = [
  {
    id: 1,
    description: "I've completed the design task. The development team can start working on it.",
    owner: 1,
    User:{
      name: "John Doe",
      email: "johndoe@me.com",
      id: 1
    },
    updatedAt: "2022-01-01T00:00:00+00:00",
  },
  {
    id: 2,
    description: "I've completed the design task. The development team can start working on it.",
    owner: 1,
    User:{
      name: "John Doe",
      email: "johndoe@me.com",
      id: 1
    },
    updatedAt: "2022-01-01T00:00:00+00:00",
  }
];

export default initialData;