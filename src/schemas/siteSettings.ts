import { defineArrayMember, defineField } from 'sanity'

const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'metadata',
      title: 'Site Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'favicon',
          title: 'Favicon',
          type: 'image',
        }),
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Details',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'string',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'sponsors',
      type: 'array',
      title: 'Club Sponsors',
      of: [
        defineArrayMember({
          title: 'Sponsor',
          name: 'sponsor',
          type: 'image',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
          ],
        }),
      ],
    }),
  ],
}

export default siteSettings
