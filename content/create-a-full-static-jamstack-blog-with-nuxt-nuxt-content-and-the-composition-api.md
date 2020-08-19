---
title: Create a full static JAMstack blog with Nuxt, Nuxt/content and the composition-api
description: 'Create a blog using nuxt, nuxt/content, composition-api and markdown with a full static build.'
coverImg: https://picsum.photos/800/400
draft: true
---

INTRO

So, what are we going to build:

**Features:**

- a posts index page with a search input
- a single post page that uses the post slug in the url
- full static generation with Netlify automatic deployment, no remote API, no Backend
- SEO friendly social head meta
- post scheduling
- draft status with no robot indexation

**Technical Stack:**

- NuxtJs
- TypeScript
- @nuxtjs/composition-api
- @nuxtjs/content
- @nuxtjs/tailwindcss
- @tailwindcss/typography

## Structure of a Post

- **title**: the post title
- **description**: used for the social metadata and as a post intro
- **draft**: if true, adds a `noindex` head meta to prevent indexation and hide the post from the posts index page (still available through the post url)
- **publishingDate**: the date the post is supposed to be available (can be use to schedule a post visibility)
- **coverImg**: the featured image, used as a post cover and for the social image meta
- **showToc**: if true show a Table of Content at the beginning of the post
- a body written in markdown

## Structure of our project

```
- pages
  - posts
    - index.vue
    - _slug.vue
  - tags
    - index.vue
    - _slug.vue
  - authors
    - index.vue
    - _slug.vue
```
