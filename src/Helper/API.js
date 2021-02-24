const axios = require('axios');

export const twitchApi = axios.create({
    headers:{
        'Client-ID':'niaeshvoa69syea1azomz6pa1toep2'
    }
});