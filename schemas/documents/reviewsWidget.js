// import {format} from 'date-fns'
import {FiFile} from 'react-icons/fi'

export default {
  name: 'reviewsWidget',
  title: 'Home Reviews Widget',
  type: 'document',
  icon: FiFile,
  liveEdit: false,
  __experimental_actions: [ 'update', 'publish' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'reviews',
      title: 'Reviews Carousel',
      type: 'array',
      of: [ {type: 'review'} ],
      validation: Rule => Rule.min(1).max(10)
    }
  ],
  orderings: [
    {
      name: 'createdAt',
      title: 'Created older->newer',
      by: [
        {
          field: '_createdAt',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', slug = {}}) {
      const path = `/${slug.current}/`
      return {
        title,
        subtitle: path
      }
    }
  }
}
