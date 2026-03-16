import { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Demo = () => {
    const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [params] = useSearchParams();
  const sort = params.get("sort");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setBlogs(data.posts);
    } catch {
      setError("Failed to load posts!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const sortedBlogs = [...blogs];
  if (sort === "asc") sortedBlogs.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "desc")
    sortedBlogs.sort((a, b) => b.title.localeCompare(a.title));

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* Page Title */}
      <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">
        Blog Posts
      </h1>



      {/* Loading & Error */}
      {loading && <p className="text-xl text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Grid – 3 Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg 
                       hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {blog.title}
            </h2>

            <p className="text-gray-500 mb-4">Author ID: {blog.userId}</p>

            <button
            onClick={()=>
              navigate(`blogdetails/${blog.id}`)
            }
              className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md 
                         hover:bg-black transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
