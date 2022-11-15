export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "url",
      title: "Url",
      type: "text",
    },
  ],
};
