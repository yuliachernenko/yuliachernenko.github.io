import { usePost } from "./PostContext";

const PostMain = () => {
  const post = usePost();
  return <p className="text-green-500 text-lg">{post.content}</p>;
};

export default PostMain;
