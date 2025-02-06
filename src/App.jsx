import  { useState } from 'react';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import Data from './components/Data';
function App() {
  const [blogPosts, setBlogPosts] = useState(Data);
  
  const deleteBlog = (id) => {
    setBlogPosts(blogPosts.filter((item) => item.id !== id));
  };
  
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 pb-4 mt-20 relative">
        <div className="h-screen bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(https://images.unsplash.com/photo-1526938084645-692eb352bf7e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
          <div className="text-white absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-10 pt-4">
            <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg text-yellow-700 font-serif">Blog</h1>
            <div className="text-lg font-medium text-shadow-md text-yellow-600 font-serif shadow-md p-2 rounded">Recent Travel Blog Posts</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-48">
          {blogPosts.map((item) => {
            return (
              <BlogPost item={item} key={item.id} deleteBlog={deleteBlog} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
