import React, { useEffect, useState } from "react";
import { Yak, Comment } from "../typings";
import Timeago from "react-timeago";
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { fetchComments } from "../utilities/fetchComments";

interface Props {
  yak: Yak;
}

const ShowYaks = ({ yak }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(yak._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
    console.log(comments);
  }, []);

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        <img className="h-10 w-10 rounded-full object-cover" src="" alt="pic" />

        <div className="flex items-center space-x-1">
          <p className="mr-1 font-bold"></p>
          <Timeago className="text-sm text-gray-500" date={yak._createdAt} />
        </div>
      </div>
      <div>
        <p className="ml-10 pt-1">{yak.text}</p>
      </div>

      <div className="mt-5 flex justify-between">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatBubbleOvalLeftIcon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ArrowPathRoundedSquareIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
      </div>
      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((comment) => (
            <div className="flex space-x-2" key={comment._id}>
              <hr className="relative left-5 top-12 h-8 border-x border-yak/30" />
              <img
                className=" mt-2 h-7 w-7 rounded-full object-cover"
                src=""
                alt="pic"
              />
              <div className="">
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">Hello</p>
                  <Timeago
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowYaks;
