import {useState, useEffect} from 'react'
import Navbar from "./Navbar.jsx";
import GenrePage from '../player/Genrepage.jsx';
import Player from '../player/player.jsx'
import HomePage from "./homepage.jsx"
import PlayerList from '../player/playlist.jsx';
import AlbumPage from '../player/albumpage.jsx';
import Search from './search.jsx';
import ShowAll from './showall.jsx';
import { Route, Routes } from 'react-router-dom'
import "./Home.css";


function Home() {
  const [selectedSong, setSelectedSong] = useState(null);
    return (
        <div className="home">
            <div className="home-top">
                <Navbar/>
                <div className="home-right">
                    <div className="home-topBottom">
                       <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/artist/:id" element={<PlayerList  onSelectSong={setSelectedSong}/>} />
                            <Route path="/genre/:name" element={<GenrePage onSelectSong={setSelectedSong}/>}/>
                            <Route path='/album/:name' element={<AlbumPage onSelectSong={setSelectedSong}/>}/>
                            <Route path="/search" element={<Search/>}/>
                            <Route path="/show" element={<ShowAll/>}/>
                       </Routes>
                    </div>
                </div>
            </div>
            <div className="home-bottom">
            <Player selectedSong={selectedSong}/>
            </div>      
        </div>
    )
}

export default Home;