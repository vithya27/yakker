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
