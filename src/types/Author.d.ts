interface Social {
  twitter?: string
  linkedin?: string
  github?: string
  medium?: string
  instagram?: string
  website?: string
}

export interface Author {
  name: string
  description: string
  avatar: string
  social?: Social
}
