import movies from "../data/movies";

function Card(){
    return(
        <div className="w-[100%] flex flex-col justify-center items-center  ">
            {movies.map((movie,index)=>(
                <div key={index} className="w-[450px] h-[250px]  mb-[20px] rounded-[10px] bg-white">
                    
                    <div className="flex justify-between mt-[20px] ml-[30px]">
                    
                    <div ><img src={movie.image} alt={movie.title} className="rounded-[10px] w-[102px] h-[100px] "/></div>
                    
                    <div className="w-[231px] h-[211px] font-kanit text-[18px]  align-middle flex flex-col justify-between mr-[5px]">
                    <h2>Title : {movie.title} </h2>
                    <h2>Year : {movie.year}</h2>
                    <h2>Runtime : {movie.runtime}</h2>

                    <p className="flex">  Genres : {movie.genres.map((genres,index)=>(
                        <span key={index} className="text-[14px] rounded-[10px] flex bg-[rgb(234,172,153)] flex justify-center ml-1  " > {genres}</span>
                    ))}</p>

                    <h2>IDMB Ratings : {movie.imdbRating}</h2>
                    <h2>IDMB Votes : {movie.imdbVotes}</h2>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Card