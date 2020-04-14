import { ref } from 'nuxt-composition-api'
import { Author } from '@/types/Author'

const seb: Author = {
  avatar: 'seb.jpg',
  name: 'Seb.L.',
  description: 'Lead front-end developer @ ABBD, Paris',
  social: {
    twitter: 'https://twitter.com/Seb_L_',
    linkedin: 'https://www.linkedin.com/in/sebastienlombard/',
    github: 'https://github.com/Seb-L',
    // medium: 'sdf sd',
    instagram: 'https://www.instagram.com/seb_l_/',
    // website: 'sdfgdsf',
  },
}

export default () => {
  const authors = ref<Author[]>([seb])

  const getAuthor = (name: string): Author | undefined => authors.value.find(author => author.name === name)

  return {
    authors,
    getAuthor,
  }
}
