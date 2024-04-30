import { usePost } from "./PostContext";

const Header = () => {
  const post = usePost();
  return (
    <div className="relative"> 
      <img className="w-full" src={post.cover} alt={post.title} />
    </div>
  );
};

export default Header;




