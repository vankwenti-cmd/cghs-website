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
      description: 'e.g., CGHS-2411',
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
      name: 'breed',
      title: 'Breed',
      type: 'string',
      description: 'e.g., "Shepherd mix"',
    },
    {
      name: 'sex',
      title: 'Sex',
      type: 'string',
      options: {
        list: ['Male', 'Female'],
      },
    },
    {
      name: 'age',
      title: 'Age band',
      type: 'string',
      description: 'Used for filtering',
      options: {
        list: ['Young (under 2)', 'Adult (2-7)', 'Senior (8+)'],
      },
    },
    {
      name: 'ageText',
      title: 'Age (display text)',
      type: 'string',
      description: 'e.g., "4 years", "9 months"',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['Small', 'Medium', 'Large', 'Extra large'],
      },
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'e.g., "58 lb"',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: ['The Dalles, OR', 'Hood River, OR', 'Portland, OR', 'Yakima, WA'],
      },
    },
    {
      name: 'meta',
      title: 'Meta Description',
      type: 'string',
      description: 'e.g., "Female dog, 4 years, Shepherd mix"',
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
      name: 'daysInCare',
      title: 'Days in care',
      type: 'number',
      description: 'Used to show "waited longest" and sort the homepage',
    },
    {
      name: 'waited',
      title: 'Time Waited (display text)',
      type: 'string',
      description: 'e.g., "118 days with us"',
    },
    {
      name: 'tone',
      title: 'Status tone',
      type: 'string',
      description: 'Controls the color of the status badge',
      options: {
        list: ['approved', 'neutral', 'review', 'flagged'],
      },
    },
    {
      name: 'badgeText',
      title: 'Status badge text',
      type: 'string',
      description: 'e.g., "Ready today", "Longest resident", "Bonded pair", "Senior"',
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
