function Songlist({songs, setCurrentIndex, setIsPlaying}) {
    return(
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map((song, index) =>(
                    <li
                        key={song.id}
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsPlaying(true);

                        }}
                    >
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default Songlist;