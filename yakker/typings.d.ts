import { StringExpression } from "mongoose";

export interface Yak extends YakBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "yak";
}

export type YakBody = {
  text: string;
  username: string;
  profilePic: image;
  blockYak: boolean;
};

export type CommentBody = {
  comment: string
  yakId: string
  username: string
  profilePic: string

}

export interface Comment extends CommentBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "comment";
  yak: {
    _ref: string
    _type: 'reference'
  }
}