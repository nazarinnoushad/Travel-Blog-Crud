const Navbar = () => {
  return (
    <nav className="bg-gray-900 h-20 px-10 flex justify-center items-center fixed top-0 w-full z-50">
    <div className="container mx-auto flex justify-center items-center md:justify-between">
    <div href="" className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-100 font-serif">Travel Diaries </div>
    <ul className="flex items-center space-x-4 hidden md:flex">
    <li className="text-gray-300 hover:text-white transition duration-300">Home</li>
    <li className="text-red-500 font-bold transition duration-300">Blog</li>
    <li className="text-gray-300 hover:text-white transition duration-300">Destinations</li>
    <li className="text-gray-300 hover:text-white transition duration-300">Categories</li>
    <li className="text-gray-300 hover:text-white transition duration-300">Gallery</li>
    <li className="text-gray-300 hover:text-white transition duration-300">About</li>
    <li className="text-gray-300 hover:text-white transition duration-300">Contact</li>
    </ul>
    </div>
    </nav>
  );
};

export default Navbar;

