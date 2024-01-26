interface Post {
  name: string;
  id: number;
}

interface PostDetails {
  name: string;
  id: number;
  body: string;
  likes: number;
  dislikes: number;
  author_id: number;
}

interface Author {
  name: string;
  id: number;
}

interface Comment {
  id: number;
  body: string;
  author_id: number;
  post_id: number;
}
