export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'phone',
      title: 'Main Phone Number',
      type: 'string',
    },
    {
      name: 'emergencyPhone',
      title: 'After-hours Emergency Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'hoursMonFri',
      title: 'Shelter Hours (weekdays)',
      type: 'string',
    },
    {
      name: 'hoursSatSun',
      title: 'Shelter Hours (weekend)',
      type: 'string',
    },
    {
      name: 'clinicHours',
      title: 'Clinic Hours',
      type: 'string',
    },
    {
      name: 'departments',
      title: 'Department contacts',
      description: '"Who to ask for" list on the Contact page',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Department' },
            { name: 'email', type: 'string', title: 'Email' },
          ],
        },
      ],
    },
    {
      name: 'urgentBannerEnabled',
      title: 'Show Urgent Banner',
      type: 'boolean',
    },
    {
      name: 'urgentBannerText',
      title: 'Urgent Banner Text',
      type: 'text',
    },
    {
      name: 'homeStats',
      title: 'Homepage stat tiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
    },
    {
      name: 'impactStats',
      title: 'Impact page: headline stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'note', type: 'string', title: 'Note' },
          ],
        },
      ],
    },
    {
      name: 'spend',
      title: 'Impact page: where the money went',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Category' },
            { name: 'amount', type: 'string', title: 'Amount' },
            { name: 'pct', type: 'string', title: 'Percent (e.g. "58%")' },
          ],
        },
      ],
    },
    {
      name: 'intakeSources',
      title: 'Impact page: where animals came from',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'k', type: 'string', title: 'Source' },
            { name: 'v', type: 'string', title: 'Count' },
          ],
        },
      ],
    },
  ],
}
