import axios from "axios";
import { useState,useEffect } from "react";
import Content from "../../components/Content/Content";
import './Trending.css';


const Trending=()=>{
    const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

        const fetchTrending = async () => {
            const { data } = await axios.get(
              `https://api.themoviedb.org/3/trending/movie/week?api_key=adc9a09811ed6c37b4f7626f438268d0`
            );
        
            console.log(data);
            setContent(data.results);
        };
            useEffect(()=>{
                fetchTrending();
            },[]);
         
            return(
                <div>
                   <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div> 
                </div>
            )
    
}
export default Trending;

// https://api.themoviedb.org/3/movie/550?api_key=adc9a09811ed6c37b4f7626f438268d0