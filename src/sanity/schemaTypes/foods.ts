import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType ( {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
      defineField({
        name: 'foodName',
        type: 'string',
        title: 'Food Name',
      }),
     defineField( {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'foodName',
            maxLength: 96,
        },
        validation:Rule=>Rule.required()
    }),
      defineField({
        name: 'category',
        type: 'string',
        title: 'Category',
        description:
          'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Current Price',
      }),
      defineField({
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Price before discount (if any)',
      }),
       defineField({
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [
          defineArrayMember({ type: 'string' })],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
      }),
      defineField({
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the food item',
      }),
      

       defineField({
        name: 'summary',
        type: 'text',
        title: 'Description',
        description: 'Full description of the food item',
        validation:Rule=>Rule.required(),
    }),
   
      defineField({
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      }),
    ],
  });