export interface PostMeta {
  title: string;
  author: string;
}

export interface Post {
  meta: PostMeta;
  body: string;
  slug: string;
  singlePostComponent: any
}
