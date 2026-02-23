import { useState } from "react";
import PropTypes from "prop-types";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';

const AddBlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const formatDate = (date) => {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()}`;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !date || !day || !image) {
      setError("All fields are required!");
      return;
    }

    addBlog({ title, description, date: formatDate(date), day, image });

    setTitle(""); 
    setDescription(""); 
    setDate(""); 
    setDay(""); 
    setImage(null); 
    setError("");
  };

  return (
    <div className="bg-black text-white rounded-md p-6 w-sm mt-5 border border-gray-700 shadow-lg">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold tracking-wide">Add New Blog</h2>
        <button type="button" onClick={() => setClosed(true)} className="text-gray-400 hover:text-red-500 transition">
          <CloseIcon fontSize="small" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-white p-2 outline-none rounded-md bg-transparent" type="text" placeholder="Title" />

        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border-2 border-white p-2 outline-none rounded-md bg-transparent" placeholder="Description" />

        <div className="relative">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border-2 border-white p-2 outline-none rounded-md bg-transparent text-white w-full pl-10" />
          <CalendarMonthIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-white" />
        </div>

        <select value={day} onChange={(e) => setDay(e.target.value)} className="border-2 border-white p-2 outline-none rounded-md bg-transparent">
          <option className="text-black" value="">Select Day</option>
          <option className="text-black" value="Monday">Monday</option>
          <option className="text-black" value="Tuesday">Tuesday</option>
          <option className="text-black" value="Wednesday">Wednesday</option>
          <option className="text-black" value="Thursday">Thursday</option>
          <option className="text-black" value="Friday">Friday</option>
          <option className="text-black" value="Saturday">Saturday</option>
          <option className="text-black" value="Sunday">Sunday</option>
        </select>

        <label className="border-2 border-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black transition">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          Upload Image <AddAPhotoIcon />
        </label>

        {image && <img src={image} alt="Blog preview" className="rounded-md" />}
        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="border-2 border-white rounded-md font-semibold bg-white text-sm p-2 text-black hover:bg-gray-200 transition">
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















