export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Only used internally to help you recognise this category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      description: 'Label for category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emoji',
      title: 'Emoji',
      description: 'Emoji shown next to the label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
