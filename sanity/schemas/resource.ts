export default {
  name: 'resource',
  title: 'Pet Care Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'kind',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Guide', 'Checklist', 'FAQ', 'Article'],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
      ],
    },
  ],
}
