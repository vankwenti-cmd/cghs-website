export default {
  name: 'page',
  title: 'Page Content',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Page Slug',
      type: 'string',
      validation: (Rule: any) => Rule.required().unique(),
      options: {
        list: ['home', 'about', 'contact'],
      },
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroText',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Page Content',
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
