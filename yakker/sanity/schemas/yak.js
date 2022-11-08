export default {
  name: "yak",
  title: "Yak",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in Yak",
      type: "string",
    },
    {
      name: "blockYak",
      title: "Block Yak",
      description: "ADMIN Controls: Toggle if Yak is deemed inappropriate",
      type: "boolean",
    },

    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
