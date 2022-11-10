import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Comment } from "../../typings";
import { groq } from "next-sanity";

const commentQuery = groq`*[_type == "comment" && references(*[_type== 'yak' &&_id == $yakId]._id)] {_id, ...} | order(_createdAt desc)`;

type Data = Comment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { yakId } = req.query;

  const comments: Comment[] = await sanityClient.fetch(commentQuery, { yakId });
  res.status(200).json(comments);
}
