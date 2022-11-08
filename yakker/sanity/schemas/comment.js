export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "string",
    },
    {
      name: "yak",
      title: "Yak",
      description: "Yak that the comment was made on",
      type: "reference",
      to: {
        type: "yak",
      },
    },
  ],
};
