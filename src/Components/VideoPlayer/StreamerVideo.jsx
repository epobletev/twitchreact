import '../VideoPlayer/Streamervideo.css'
export const StreamerVideo = () =>{
    return(
        <div className="embedVideo">
            <iframe
            title='Stream from Twitch'
            width="1200"
            height="720"
            allowFullScreen = 'true'
            src="https://player.twitch.tv/?channel=moonmoon&parent=localhost">
            </iframe>
        </div>
    )
}