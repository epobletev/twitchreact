const axios = require('axios');

export const test = async () =>{
    const clID = 'niaeshvoa69syea1azomz6pa1toep2'
    const authTok = 'Bearer erkuyeynhezk2ss1w105sro4dwxlgb'
    try{
        let data = await axios({
                url:'https://api.twitch.tv/helix/search/channels?query=a_seagull',
                method:'GET',
                headers:{'Client-Id':clID,
                        'Authorization':authTok }
            });
            return data
    }
    catch(err){
        console.log(err.message);
    }
}