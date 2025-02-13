import { useState } from "react";
import PropTypes from "prop-types";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const AddBlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date || !day || !image) {
      setError("All fields are required!");
      return;
    }

    const newBlog = {
      title,
      description,
      date: formatDate(date),
      day,
      image,
    };

    addBlog(newBlog);
    setTitle("");
    setDescription("");
    setDate("");
    setDay("");
    setImage(null);
    setError(""); 
  };

  return (
    <div className="bg-black text-white rounded-md p-4 w-sm mt-5">
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
 
<div className="flex flex-col gap-2">
<div className="relative">
<input
id="date-picker"
value={date}
onChange={(e) => setDate(e.target.value)}
className="border-2 border-white p-2 outline-none rounded-md bg-transparent text-white w-full pl-10"
type="date"
title="Click to select a date"
/>
<CalendarMonthIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-white" />
</div>
</div>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border-2 border-white p-2 outline-none rounded-md"
        >
          <option className="text-black" value="">Select Day</option>
          <option className="text-black" value="Monday">Monday</option>
          <option className="text-black" value="Tuesday">Tuesday</option>
          <option className="text-black" value="Wednesday">Wednesday</option>
          <option className="text-black" value="Thursday">Thursday</option>
          <option className="text-black" value="Friday">Friday</option>
          <option className="text-black" value="Saturday">Saturday</option>
          <option className="text-black" value="Sunday">Sunday</option>
        </select>

        <label className="border-2 border-white p-2 outline-none rounded-md cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          Upload Image <AddAPhotoIcon />
        </label>

        {image && (
          <div className="mt-4">
            <img src={image} alt="Blog preview" className="max-w-full h-auto rounded-md" />
          </div>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        
        <button
          type="submit"
          className="border-2 border-white rounded-md font-semibold bg-white text-sm p-2 text-black"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

AddBlogForm.propTypes = {
  addBlog: PropTypes.addBlog,
};

export default AddBlogForm;







