import { useState } from "react";
import PropTypes from "prop-types";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const EditForm = ({ item, updateBlog }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [date, setDate] = useState(item.date);
  const [day, setDay] = useState(item.day);
  const [image, setImage] = useState(item.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog({ title, description, date, day, image }, item.id);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="bg-black text-white rounded-md p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
          type="text"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
          placeholder="Description"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
          type="date"
        />
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
          type="text"
          placeholder="Day"
        />
        
        <label className="border-2 border-white p-2 outline-none rounded-md cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          Update Image <AddAPhotoIcon />
        </label>

        {image && (
          <div className="mt-4">
            <img src={image} alt="Blog preview" className="max-w-full h-auto rounded-md" />
          </div>
        )}

        <button
          type="submit"
          className="border-2 border-white rounded-md font-semibold bg-white text-sm p-2 text-black"
        >
          Update
        </button>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  item: PropTypes.item,
  updateBlog: PropTypes.updateBlog,
};


export default EditForm;



