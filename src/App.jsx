import { useState} from 'react';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import EditForm from './components/EditForm';
import AddBlogForm from './components/AddBlogForm';
import Data from './components/Data';


function App() {
  const [blogPosts, setBlogPosts] = useState(Data ); 
  const [showAddBlogForm, setShowAddBlogForm] = useState(false);

  // Add new blog post
  const addBlog = (newBlog) => {
    const newEntry = { id: Date.now(), ...newBlog }; // Use Date.now() for unique ID
    const updatedBlogPosts = [...blogPosts, newEntry];
    setBlogPosts(updatedBlogPosts);
    localStorage.setItem("data", JSON.stringify(updatedBlogPosts));
    setShowAddBlogForm(false);
    alert("Blog post added successfully!");
  };

  // Delete a blog post
  const deleteBlog = (id) => {
    const updatedBlogPosts = blogPosts.filter((item) => item.id !== id);
    setBlogPosts(updatedBlogPosts);
    localStorage.setItem("data", JSON.stringify(updatedBlogPosts));
    alert("Blog post deleted successfully");
  };

  // Edit blog post
  const editBlog = (id) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  // Update blog post after editing
  const updateBlog = (modifiedBlog, id) => {
    const updatedBlogPosts = blogPosts.map((item) =>
      item.id === id ? { ...modifiedBlog, id, isEditing: false } : item
    );
    setBlogPosts(updatedBlogPosts);
    localStorage.setItem("data", JSON.stringify(updatedBlogPosts));
    alert("Blog post updated successfully");
  };

  // Show Add Blog Form
  const handleAddBlogClick = () => {
    setShowAddBlogForm(true);
  };

  

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 pb-4 mt-20 relative">
        <div
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1526938084645-692eb352bf7e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <div className="text-white absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-10 pt-4">
            <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg text-yellow-700 font-serif">
              Blog
            </h1>
            <button
              className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddBlogClick}
            >
              Add Blog
            </button>
            {showAddBlogForm && <AddBlogForm addBlog={addBlog} />}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-48">
          {blogPosts.map((item) =>
            item.isEditing ? (
              <EditForm
                key={item.id || Date.now()} // Ensure key is always unique
                item={item}
                updateBlog={(updatedItem) => updateBlog(updatedItem, item.id)}
              />
            ) : (
              <BlogPost
                key={item.id || Date.now()} // Ensure key is always unique
                item={item}
                deleteBlog={deleteBlog}
                editBlog={editBlog}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;





