import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Yak } from "../../typings";
import { groq } from "next-sanity";

const feedQuery = groq`*[_type == "yak" && !blockYak] {_id, ...} | order(_createdAt desc)`;

type Data = {
  yaks: Yak[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const yaks: Yak[] = await sanityClient.fetch(feedQuery);
  console.log(yaks);
  res.status(200).json({ yaks });
}
