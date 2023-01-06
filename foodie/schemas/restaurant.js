import {
  defineField,
  defineType
} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [{
      name: "name",
      type: "string",
      title: "Restaurants name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description"
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude"
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address"
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from 1 to 5 starts",
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{
        type: "category"
      }]
    }, {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{
        type: "reference",
        to: [{
          type: "dish"
        }]
      }],
    }
  ],

})