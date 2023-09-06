import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RawPost.css'
import {imageUrl,API_KEY} from'../../Constants/Constants'
import axios from '../../Axios'
function RawPost(props) {
  const[Movies, setMovies]=useState([])
  const[urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')

    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovieTrailer=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      // console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array is empty')
      }
    })

  }
  return (
    <div className='Row'>
        <h2>{props.title}</h2>
        <div className='Posters'>
          {Movies.map((obj)=>
             <img onClick={()=>handleMovieTrailer(obj.id)} className={ props.isSmall ? 'SmallPoster':'Poster'} alt="Poster" src={`${imageUrl+obj.backdrop_path}`} />
          )}
           
           
        </div>
       { urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RawPost