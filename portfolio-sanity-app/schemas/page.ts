export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subheader',
      type: 'string',
      title: 'Subheader',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body',
    },
    {
      name: 'cta',
      type: 'object',
      title: 'CTA',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Text',
        },
        {
          name: 'url',
          type: 'string',
          title: 'URL',
        },
      ],
    },
  ],
}
