type Project = {
  name: string
  description: string
  link: string
  // video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Digital Garden',
    description:
      'A collection of notes on technical I wrote in my free time. Not update regularly',
    link: 'https://github.com/shiroNaux/notes',
    // video:
    //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'notes',
  },
  {
    name: 'Common Vagrant files',
    description: 'Vagrantfiles I use for development',
    link: 'https://github.com/shiroNaux/Vagrantfiles',
    // video:
    //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'vagrant',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'MH Solution',
    title: 'Data Engineer',
    start: '07/2020',
    end: '02/2025',
    link: 'https://mhsolution.vn/',
    id: 'mh',
  },

]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/shiroNaux',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/naux',
  },
]

export const EMAIL = 'xuan.vt.1999@gmail.com'
