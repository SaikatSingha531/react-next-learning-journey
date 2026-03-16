import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-black text-white flex justify-center items-center gap-6 py-4">
        <span
        onClick={()=>navigate("/todo")}
         className="bg-white text-black px-4 py-2 rounded cursor-pointer">
          ToDo List
        </span>
        <span
        onClick={()=>navigate("/watch")}
         className="bg-white text-black px-4 py-2 rounded cursor-pointer">
          Stop Watch
        </span>
      </div>
    </>
  );
};

export default Navbar;
