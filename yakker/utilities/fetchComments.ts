import { Comment } from "../typings";

export const fetchComments = async (yakId: string) => {
  const res = await fetch(`api/getComments?yakId=${yakId}`);

  const comments: Comment[] = await res.json();

  return comments;
};
