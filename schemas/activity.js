export default {
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Only used internally to help you recognise this activity',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'This content is shown to the user',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emoji',
      title: 'Emoji',
      description: 'This emoji is shown next to the description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      description: 'The categories that this activity is applicable to',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
