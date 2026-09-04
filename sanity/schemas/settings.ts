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
      title: 'Phone Number',
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
      title: 'Hours (Mon-Fri)',
      type: 'string',
    },
    {
      name: 'hoursSatSun',
      title: 'Hours (Sat-Sun)',
      type: 'string',
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
  ],
}
