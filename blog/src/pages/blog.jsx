
import { useContext, createContext } from 'react'
import Post from '../components/Post';
import './home.css';

function Blog() {
    const BlogContext = createContext("");

    const Layout = ({children}) => {
        return (
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        )
    }
    const Header = () => {
        return (
            <header>
                <BlogInfo/>              
            </header>
        )
    }

    const BlogInfo = () => {
        const blogHeader = useContext(BlogContext)
        return (
            <>
                <h2 className='text-3xl text-blue-900'>{blogHeader.blogName}</h2>
            </>
        )
    }

    const blogHeader = {
        blogName: "About Bags",
    }

  return (
    <BlogContext.Provider value={blogHeader}>
      <Layout>
        <Post />
      </Layout>
    </BlogContext.Provider>
  );

}

export default Blog