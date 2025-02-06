import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
const BlogPost = ({ item, deleteBlog }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-end">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-xl" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-600 mt-2">{item.date} | {item.day}</p>
      </div>
      <DeleteIcon className='text-red-600' onClick={() => deleteBlog(item.id)} />
    </div>
  );
};

BlogPost.propTypes = {
  item: PropTypes.item,
  deleteBlog: PropTypes.deleteBlog,
};

export default BlogPost;


