export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Page <title>',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Active',
      description: 'Should this page be available on the site?',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pathname',
      title: 'Pathname',
      description:
        'Pathname the page should be accessible at e.g. https://roadtofree.md/england',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Meta description',
      description: 'Content for <meta name="description">',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'canonical',
      title: 'Meta canonical',
      description: 'Content for <link rel="canonical">',
      type: 'url',
    },
    {
      name: 'countryName',
      title: 'Country name',
      description: 'Name of the country used in links',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emoji',
      title: 'Emoji',
      description: 'This emoji will be shown next to the country name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headingOne',
      title: 'Heading one',
      description: 'Content for <h1>',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageDescription',
      title: 'Page description',
      description:
        'Content for the description paragraph shown at the top of the page',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timeline',
      title: 'Timeline',
      description: 'The timeline steps shown for this page',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'step' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'indexPage',
      title: 'Use as home page?',
      description: 'Show this page content on the home page?',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'indexTitle',
      title: 'Home page title',
      description:
        'Content for <title> when this page is being used on the home page',
      type: 'string',
    },
    {
      name: 'indexDescription',
      title: 'Home page Meta description',
      description:
        'Content for <meta name="description"> when this page is being used on the home page',
      type: 'string',
    },
    {
      name: 'indexHeadingOne',
      title: 'Home page heading one',
      description:
        'Content for <h1> when this page is being used on the home page',
      type: 'string',
    },
    {
      name: 'indexPageDescription',
      title: 'Page description',
      description:
        'Content for the description paragraph shown at the top of the page when this page is being used on the home page',
      type: 'string',
    },
  ],
  initialValue: {
    active: false,
    indexPage: false,
  },
};
