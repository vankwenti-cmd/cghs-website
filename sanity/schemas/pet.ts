export default {
  name: 'pet',
  title: 'Pet',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ref',
      title: 'Reference ID',
      type: 'string',
      description: 'e.g., CG-2024-001',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'species',
      title: 'Species',
      type: 'string',
      options: {
        list: ['Dog', 'Cat'],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'age',
      title: 'Age',
      type: 'string',
      options: {
        list: ['Puppy/Kitten', 'Young', 'Adult', 'Senior'],
      },
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['Small', 'Medium', 'Large', 'Extra Large'],
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['Hood River', 'The Dalles', 'Gorge', 'Transport'],
      },
    },
    {
      name: 'meta',
      title: 'Meta Description',
      type: 'string',
      description: 'e.g., "2-year-old calico cat"',
    },
    {
      name: 'blurb',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'altImages',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'waited',
      title: 'Time Waited',
      type: 'string',
      description: 'e.g., "Waited 23 days"',
    },
    {
      name: 'facts',
      title: 'Facts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'k', type: 'string', title: 'Label' },
            { name: 'v', type: 'string', title: 'Value' },
          ],
        },
      ],
    },
    {
      name: 'livesWith',
      title: 'Lives Well With',
      type: 'string',
      description: 'e.g., "Other cats, dogs, children"',
    },
    {
      name: 'adoptionFee',
      title: 'Adoption Fee',
      type: 'number',
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      description: 'Show in the "Looking for a home" section',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'meta',
      media: 'image',
    },
  },
}
