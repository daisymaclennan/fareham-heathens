import { defineField } from 'sanity'

export const hero = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
        name: 'image',
        title: 'Background Image',
        type: 'image',
      }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
  ]
})
