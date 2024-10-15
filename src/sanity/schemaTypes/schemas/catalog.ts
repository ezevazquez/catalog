// schemas/catalog.ts
import { defineField, defineType } from 'sanity'

export const catalog = defineType({
  name: 'catalog',
  title: 'Catalog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Catalog Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
  ],
})
