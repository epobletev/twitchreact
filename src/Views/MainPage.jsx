import { useEffect, useState } from 'react';
import { getStreamInfo } from '../Helper/Service';
import { StreamerAvatar } from '../Components/Avatar/StreamerAvatar'
import { StreamerStatus } from '../Components/Status/StreamerStatus'
import { StreamerTitle } from '../Components/Title/StreamerTitle'
import { StreamerHeader } from '../Components/Header/StreamerHeader'
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
    //let status = filter[0].is_live === true ? 'En Vivo!' : 'Offline'
    return(
        <div>
            {!loading && (
        <> <StreamerHeader header = {filter[0].display_name}></StreamerHeader>
            <StreamerAvatar url = {filter[0].thumbnail_url}></StreamerAvatar>
            <StreamerStatus status = {filter[0].is_live}></StreamerStatus>
            <StreamerTitle title = {filter[0].title}></StreamerTitle>
        </>
            )}
        </div>
        
        
    )

}