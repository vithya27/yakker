import React from "react";
import { Yak } from "../typings";
import Timeago from "react-timeago";

interface Props {
  yak: Yak;
}

const ShowYaks = ({ yak }: Props) => {
  return (
    <div className="flex">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={`${yak.profilePic.asset._ref}.jpg`}
          alt="pic"
        />
      </div>

      <div>
        <div className="flex items-center space-x-1">
          <p className="mr-1 font-bold">{yak.username}</p>
          <Timeago className="text-sm text-gray-500" date={yak._createdAt} />
        </div>
        <p>{yak.text}</p>
      </div>
    </div>
  );
};

export default ShowYaks;
