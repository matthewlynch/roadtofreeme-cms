export default {
  name: 'step',
  title: 'Timeline step',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:
        'Only used internally to help you recognise this timeline step',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'ISO 8601 Date',
      description:
        'The date this timeline step comes into effect. Use https://timestampgenerator.com to generate the correct format. Make sure you copy the "ISO 8601" format.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'activities',
      title: 'Activities',
      description:
        'List of activities you can do once this step comes into effect',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'activity' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
