import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chefs from './chefs'
import orders from './orders'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs, orders],
}
