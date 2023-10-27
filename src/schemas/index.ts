import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import siteSettings from './siteSettings'

export const schemaTypes = [post, blockContent, siteSettings]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, siteSettings],
}
