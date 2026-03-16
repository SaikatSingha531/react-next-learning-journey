import axios from "axios";
import{ useState, type ChangeEvent } from "react";


export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };

  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  base: string;

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  visibility: number;

  wind: {
    speed: number;
    deg: number;
  };

  clouds: {
    all: number;
  };

  dt: number;

  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise?: number;
    sunset?: number;
  };

  timezone: number;
  id: number;
  name: string;
  cod: number;
}


export default function WeatherUI() {
  const Key = "de9af8ed5f90311a3bb6733f5938aebd";

  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherData = async (e:ChangeEvent) => {
    e.preventDefault();
    if (!city.trim()) return setError("Please enter a city name.");

    setLoading(true);
    setError("");

    try {
      // use units=metric so temperatures come in °C
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${Key}&units=metric`
      );

      setData(res.data);
    } catch (err) {
      console.error(err);
      setError("Unable to find weather for that city. Try another name.");
      // setData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7fafc] to-[#eef2f7] p-6">
      <form
        onSubmit={()=>getWeatherData}
        className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-gray-100 p-6 transform transition-all hover:-translate-y-1"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Weather Today 🌦️
        </h2>

        <div className="flex gap-3 mb-4">
          <input
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-200 transition"
            type="text"
            placeholder="Enter Your City "
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-100 to-teal-50 border border-transparent shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5"
            aria-label="Search weather"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && (
          <p className="text-sm text-rose-600 bg-rose-50 p-2 rounded mb-4">
            {error}
          </p>
        )}

        <div className="space-y-3">
          {!data && (
            <p className="text-sm text-gray-600 text-center">
              No city searched yet. Try "Kolkata".
            </p>
          )}

          {data && (
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {data.weather?.[0]?.icon ? (
                    <img
                      src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      alt={data.weather[0].description}
                      className="w-20 h-20"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                      --
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {data.name}, {data.sys?.country}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {data.weather?.[0]?.main}
                    </span>
                  </div>

                  <p className="text-3xl font-extrabold text-gray-800 mt-1">
                    {Math.round(data.main?.temp ?? 0)}°C
                  </p>

                  <div className="text-sm text-gray-600 mt-2 grid grid-cols-2 gap-2">
                    <div>
                      Feels like:{" "}
                      <span className="font-medium">
                        {Math.round(data.main?.feels_like ?? 0)}°C
                      </span>
                    </div>
                    <div>
                      Humidity:{" "}
                      <span className="font-medium">
                        {data.main?.humidity}%
                      </span>
                    </div>
                    <div>
                      Max:{" "}
                      <span className="font-medium">
                        {Math.round(data.main?.temp_max ?? 0)}°C
                      </span>
                    </div>
                    <div>
                      Pressure:{" "}
                      <span className="font-medium">
                        {data.main?.pressure} hPa
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                Coordinates: {data.coord?.lat}, {data.coord?.lon}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
