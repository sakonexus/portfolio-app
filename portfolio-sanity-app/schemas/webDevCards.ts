export default {
  name: 'webDevCards',
  title: 'Web Development Cards',
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
              name: 'cardImage',
              type: 'image',
              title: 'Card Image',
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
              name: 'cardUrl',
              type: 'url',
              title: 'Card URL',
            },
          ],
        },
      ],
    },
  ],
}
