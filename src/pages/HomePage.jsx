import { Link } from "react-router-dom";
import useFetch from "../helpers/useFetch";

const HomePage = () => {
  const { loading, error, data } = useFetch("http://localhost:5178/movies");

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>, console.log(error);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a to={"#"} className="font-semibold inline-block">
              Trending Movies
            </a>
          </div>
          <a to={"#"}>See All</a>
        </div>

        {/* Loop through the movies data */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {data.map((movie, id) => (
            <div key={id} className="rounded overflow-hidden shadow-lg">
              <Link to={"#"}>
                <div className="relative">
                  <img
                    className="w-full"
                    src={movie.image}
                    alt={movie.title}
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div>
              </Link>
              <Link to={"#"}>
                <div className="px-6 py-4">
                  <Link
                    to={"#"}
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    {movie.title}
                  </Link>
                  <p className="text-gray-500 text-sm">
                    {movie.description}
                  </p>
                </div>
                <div className="px-6 py-4 flex flex-row items-center">
                  <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                   
                    <span className="ml-1">{movie.date}</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
