import { defineField } from 'sanity'

const player = {
  name: 'player',
  title: 'Player',
  type: 'document',
  fields: [
    defineField({
      title: 'Profile Image',
      name: 'player',
      type: 'image',
    }),
    defineField({
        title: 'Name',
        name: 'name',
        type: 'string',
      }),
  ],
}

export default player
