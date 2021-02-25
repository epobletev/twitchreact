export const StreamerStatus = (status) =>{
    let message = status.is_live === true ? 'En Vivo!' : 'Offline'
    return (
        <div>
            <h3>{message}</h3>
        </div>
    )
}