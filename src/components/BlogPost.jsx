import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BlogPost = ({ item, deleteBlog, editBlog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-300 w-sm mx-auto flex flex-col" style={{ minHeight: '450px' }}>
      <img
        src={item.image}
        alt={`Image for ${item.title}`}
        className="w-full h-64 object-cover rounded-t-xl"
      />
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-wide mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-2 line-clamp-3">{item.description}</p>
          <p className="text-gray-600">{item.date} | {item.day}</p>
        </div>
        
        <div className="flex space-x-4 mt-4">
          <DeleteIcon
            className='text-red-600 cursor-pointer'
            onClick={() => deleteBlog(item.id)}
          />
          <EditIcon
            className="text-black cursor-pointer"
            onClick={() => editBlog(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  item: PropTypes.item,
  deleteBlog: PropTypes.deleteBlog,
  editBlog: PropTypes.editBlog,
};

export default BlogPost;


