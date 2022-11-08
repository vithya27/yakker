export default {
  name: "username",
  title: "Username",
  type: "document",
  fields: [
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
