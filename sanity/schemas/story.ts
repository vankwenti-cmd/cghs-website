export default {
  name: 'story',
  title: 'Success Story',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Pet Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'when',
      title: 'Adoption Date/Timeline',
      type: 'string',
      description: 'e.g., "Adopted May 2024"',
    },
    {
      name: 'text',
      title: 'Story',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'when',
      media: 'image',
    },
  },
}
