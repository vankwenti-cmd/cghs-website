export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'day',
      title: 'Day',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(31),
    },
    {
      name: 'when',
      title: 'When',
      type: 'string',
      description: 'e.g., "10am–12pm"',
    },
    {
      name: 'where',
      title: 'Where',
      type: 'string',
      description: 'Location or "TBD"',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'CTA Text',
      type: 'string',
      description: 'e.g., "Learn more"',
    },
  ],
}
