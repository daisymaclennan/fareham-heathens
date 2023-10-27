import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import homePage from './homePage'
import match from './match'
import player from './player'
import post from './post'
import siteSettings from './siteSettings'
import team from './team'

export const schemaTypes = [post, blockContent, siteSettings, homePage, team]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, siteSettings, homePage, team, player, match],
}
