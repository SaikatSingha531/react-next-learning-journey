import axios from "axios";
import { useEffect, useState } from "react";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
}

const Jokes = () => {
  const [jokes, setJokes] = useState<Joke>({
    type: "",
    setup: "",
    punchline: "",
  });

  const [animate, setAnimate] = useState(false);

  const getJoke = async (): Promise<void> => {
    try {
      setAnimate(false);

      const response = await axios.get<Joke>(
        "https://official-joke-api.appspot.com/random_joke"
      );

      setTimeout(() => {
        setJokes(response.data);
        setAnimate(true);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center p-4">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center border border-white/30">

        <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-xl">
          😂 Random Joke Generator
        </h1>

        {/* Joke Type */}
        <p className="text-lg font-semibold text-yellow-200 tracking-wide mb-3">
          {jokes?.type ? jokes.type.toUpperCase() : "LOADING..."}
        </p>

        {/* Setup */}
        <p
          className={`text-2xl font-semibold text-white mb-6 transition-all duration-500 
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="border-b-4 border-yellow-300 pb-1">
            {jokes?.setup ?? "Fetching a funny setup..."}
          </span>
        </p>

        {/* Punchline */}
        <p
          className={`text-3xl font-extrabold text-green-300 drop-shadow-lg mb-8 tracking-wide
          transition-all duration-700 
          ${animate ? "opacity-100 scale-110" : "opacity-0 scale-95"}`}
        >
          {jokes?.punchline ?? ""}
        </p>

        {/* Button */}
        <button
          onClick={getJoke}
          className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Get New Joke 😂
        </button>

      </div>
    </div>
  );
};

export default Jokes;
