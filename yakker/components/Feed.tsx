import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import YakPost from "./YakPost";
import { Yak } from "../typings";
import ShowYaks from "./ShowYaks";

interface Props {
  yaks: Yak[];
}

const Feed = ({ yaks }: Props) => {
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="h-6 w-6 mr-5 mt-5 cursor-pointer transition-all duration-500 ease-out hover:rotate-180  hover:text-yakker active:scale-125" />
      </div>
      <div>
        <YakPost />
      </div>
      <div>
        {yaks.map((yak) => (
          <ShowYaks key={yak._id} yak={yak} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
