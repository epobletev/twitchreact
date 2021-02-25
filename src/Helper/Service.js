const axios = require('axios');
const config = require('../Config/Config.json');
const endpoint = config.endpoint
const clientID = config.clID
export const getStreamInfo = async () =>{
    const authTok = 'Bearer lfbz5wh8hnrer1pcu251vntb2xsho0'
    try{
        let { data } = await axios({
                url:`${endpoint}search/channels?query=moonmoon`,
                method:'GET',
                headers:{'Client-Id':clientID,
                        'Authorization':authTok }
            });
            return data
    }
    catch(err){
        console.log(err.message);
    }
}