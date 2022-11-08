import { Yak } from "../typings";

export const fetchYaks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getYaks`);

  const data = await res.json();
  const yaks: Yak[] = data.yaks;

  return yaks;
};
