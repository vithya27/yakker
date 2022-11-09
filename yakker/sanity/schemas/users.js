export default {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "E-mail Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "username",
      title: "Username",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error("A username of min. 10 characters is required"),
        Rule.max(30).warning(
          "Your username should be shorter than 30 characters"
        ),
      ],
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
    },
  ],
};
