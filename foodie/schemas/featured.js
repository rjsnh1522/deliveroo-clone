import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
        name: "name",
        type: "string",
        title: "Feature Name",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "Short Description"
      },
      {
        name: "restaurant",
        type: "array",
        title: "Restaurants",
        of: [{
            type: "reference", to: [{
                type: "restaurant"
            }]
        }]
      }
  ],
})
