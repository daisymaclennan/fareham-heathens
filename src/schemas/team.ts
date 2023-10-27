import { defineArrayMember, defineField } from 'sanity'

const team = {
  name: 'team',
  title: 'Teams',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'teamPhoto',
      title: 'Team Photo',
      type: 'image',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        defineArrayMember({
          title: 'Sponsor',
          name: 'sponsor',
          type: 'image',
          fields: [
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'players',
      type: 'array',
      title: 'Players',
      of: [
        defineArrayMember({
          name: 'player',
          title: 'Player',
          type: 'reference',
          to: [{ type: 'player' }],
        }),
      ],
    }),
  ],
}

export default team
