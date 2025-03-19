import movies from "../data/movies";

function MoviesList(){
    return(
       <div className="flex flex-col item-center"> 
        <h1 className="text-center text-black text-[40px] font-bold mt-10 mb-4">Movie List Section</h1>
        {/* Movie Card */}
        {movies.map((movie) => (
            <div className="bg-white rounded-lg shadow-md p-6 my-6 w-lg h-[250px] mx-auto border border-gray-300 rounded-lg" key={movie.title}>
            <div className="flex gap-4 h-full">
            {/* Movie Image */}
                <img
                src={movie.image}
                alt={movie.title}
                className="w-25 h-25 rounded-lg object-cover"
                />
                {/* Movie Details */}
                <div className="flex flex-col justify-between">
                <p className="text-[20px] text-[#181818] font-semibold">Title: {movie.title}</p>
                <p className="text-[#181818] text-[20px]">Year: {movie.year}</p>
                <p className="text-[#181818] text-[20px]">Runtime: {movie.runtime}</p>
                <div >
                    <span className="text-[20px] text-black">Genres:</span>
                    {movie.genres.map((genre)=>(
                        <span className="bg-[#EAAC99] text-black px-3 py-1 rounded-full text-[16px] ml-2">{genre}</span>
                    ))}
                </div>
                <p className="text-[#181818] text-[20px]">IMDB Ratings: {movie.imdbRating}</p>
                <p className="text-[#181818] text-[20px]">IMDB Votes: {movie.imdbVotes}</p>
                </div>
            </div>
            </div>
        
        ))}
        </div>
    );
}

export default MoviesList;