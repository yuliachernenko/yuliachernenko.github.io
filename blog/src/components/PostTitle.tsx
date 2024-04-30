import { usePost } from "./PostContext";

const PostTitle = () => {
  const post = usePost();
  return (
    <h3 className= "font-medium text-xl text-red-500 inline-block mb-2">
      {post.title} {post.id}
    </h3>
  );
};

export default PostTitle;
