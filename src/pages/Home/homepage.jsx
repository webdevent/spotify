import {useEffect} from 'react'
import PopularArtist from "./PopularArtist.jsx";
import PopularAlbum from "./PopularAlbum.jsx"
import HomeNav from "./homeNav.jsx"
import GenreDisplay from "./genreDisplay.jsx";

function HomePage() {
   useEffect(() => {
    document.title = 'Spotify Home'
   })
    return (
        <div className="home-page">
            <HomeNav/>
            <PopularArtist />
            <PopularAlbum />
            <GenreDisplay />
        </div>
    )
}
export default HomePage;