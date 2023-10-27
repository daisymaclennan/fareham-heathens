import { defineArrayMember, defineField } from 'sanity'

const match = {
  name: 'match',
  title: 'Matches',
  type: 'document',
  fields: [
    defineField({
      name: 'when',
      title: 'When is the match?',
      type: 'datetime',
    }),
    defineField({
      name: 'homeTeam',
      title: 'Home Team:',
      type: 'reference',
      to: [{ type: 'team' }],
    }),
    defineField({
      name: 'awayTeam',
      title: 'Away Team:',
      type: 'reference',
      to: [{ type: 'team' }],
    }),
    defineField({
      name: 'players',
      type: 'array',
      title: 'Players',
      of: [
        defineArrayMember({
          name: 'player',
          title: 'Player',
          type: 'object',
          fields: [
            {
              name: 'linkedProfile',
              title: 'Linked Profile',
              type: 'reference',
              to: [{ type: 'player' }],
            },
            {
              name: 'playedPosition',
              title: 'Playing Position',
              type: 'string',
            },
          ],
        }),
      ],
    }),
  ],
}

export default match
