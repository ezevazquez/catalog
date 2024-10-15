// schemas/product.ts
import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'size',
      title: 'Tamaño',
      type: 'string',
      options: {
        list: ['S', 'M', 'L', 'XL', 'XXL'], // Opciones de talle
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Imagenes',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'code',
      title: 'Código de producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Cantidad disponible',
      type: 'number',
      description: '(Opcional) Cantidad disponible en stock',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
