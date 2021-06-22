// youtube.js
import {FaQuoteLeft} from 'react-icons/fa'

export default {
  name: 'review',
  type: 'object',
  title: 'Review',
  icon: FaQuoteLeft,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Review Author'
    },
    {
      name: 'content',
      type: 'text',
      title: 'Review Content'
    }
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'content'
    }
  }
}
