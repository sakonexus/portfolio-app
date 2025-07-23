export default {
  name: 'emailCards',
  title: 'Email Cards',
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              type: 'string',
              title: 'Card ID',
            },
            {
              name: 'cardTitle',
              type: 'string',
              title: 'Card Title',
            },
            {
              name: 'cardBody',
              type: 'array',
              title: 'Card Body',
              of: [{type: 'block'}],
            },
            {
              name: 'githubUrl',
              type: 'url',
              title: 'Github URL',
            },
            {
              name: 'githubCodeUrl',
              type: 'url',
              title: 'Github Code URL',
            },
          ],
        },
      ],
    },
  ],
}
