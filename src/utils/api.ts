const API_URL = "https://webmosaic.petrichor.events";

const getAllPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const posts = await res.json();
  return posts["posts"];
};

const getPost = async (id: string): Promise<PostDetails> => {
  const url = new URL(`${API_URL}/post`);
  const params = new URLSearchParams({
    id,
  });
  const res = await fetch(`${url}?${params}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const post = await res.json();
  return post;
};

const getAbout = async (): Promise<{ about: string }> => {
  const res = await fetch(`${API_URL}/about`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const about = await res.json();
  return about;
};

const getAuthor = async (id: string): Promise<Author> => {
  const url = new URL(`${API_URL}/author`);
  const params = new URLSearchParams({
    id,
  });
  const res = await fetch(`${url}?${params}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const author = await res.json();
  return author;
};

const getCommentsWithPostId = async (id: string): Promise<Comment[]> => {
  const url = new URL(`${API_URL}/comments`);
  const params = new URLSearchParams({
    post_id: id,
  });
  const res = await fetch(`${url}?${params}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const comments = await res.json();
  return comments;
};

export default {
  getAllPosts,
  getPost,
  getAbout,
  getAuthor,
  getCommentsWithPostId,
};
