import { useEffect, useState } from 'react';
import { getStreamInfo } from '../Helper/Service';
import { StreamerTitle } from '../Components/Title/StreamerTitle'
import { StreamerVideo } from '../Components/VideoPlayer/StreamerVideo'
import { NavBar } from '../Components/NavBar/NavBar'
import '../Views/style.css'
export const Mainpage =() =>{
    const [info,setInfo] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getStreamInfo().then((response) =>{
            setInfo(response.data)
            setLoading(false)

        });
    },[]);
    let filter =  info.filter((streamer) => streamer.id === '121059319')
    return(
        <>
            {!loading && (
                <>
                <NavBar streamername = {filter[0].display_name} image = {filter[0].thumbnail_url } status={filter[0].is_live}></NavBar>
                &nbsp
                <StreamerVideo></StreamerVideo>
                <StreamerTitle title = {filter[0].title}></StreamerTitle>
                </>
            )} 
        </>

    )

}