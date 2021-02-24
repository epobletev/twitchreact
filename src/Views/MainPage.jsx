import { useEffect, useState } from 'react';
import { test } from '../Helper/Service';

export const Mainpage =() =>{

    // let example = {
    //     "data": [
    //         {
    //             "broadcaster_language": "en",
    //             "broadcaster_login": "a_seagull",
    //             "display_name": "A_Seagull",
    //             "game_id": "511224",
    //             "id": "19070311",
    //             "is_live": false,
    //             "tag_ids": [],
    //             "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a_seagull-profile_image-4d2d235688c7dc66-300x300.png",
    //             "title": "hey",
    //             "started_at": ""
    //         },
    //         {
    //             "broadcaster_language": "en",
    //             "broadcaster_login": "fundamentally_a_seagull",
    //             "display_name": "fundamentally_a_seagull",
    //             "game_id": "509110",
    //             "id": "438322552",
    //             "is_live": false,
    //             "tag_ids": [],
    //             "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/75f246a1-88c0-481b-9ccd-9f99eab6e944-profile_image-300x300.png",
    //             "title": "The Rain Gets Riskier ",
    //             "started_at": ""
    //         }
    //     ],
    //     "pagination": {}
    // }
    const [info,setInfo] = useState();
    useEffect(()=>{
        test().then((response) =>{
            setInfo(response.data)
            

        });
    },[]);
   
    console.log(info);
    return(
        <div><p>Got items:</p>
        
        </div>
        
        
    )

}