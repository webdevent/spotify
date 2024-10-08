import chrisbrownImage from '../pictures/chris-brown.jpg'
import chrisBrownCover from '../pictures/cbcover.png'
import chrisBrownCoverThree from '../pictures/chris-brown-freaky-friday.png'
import chrisBrownCoverTwo from "../pictures/chris-brown-dont-judge.jpeg"
import wizkhalifeImage from '../pictures/wizkhaimage.jpg'
import wizkhalifeCover from '../pictures/wizkhacover.jpg'
import wizkhalifeCoverTwo from "../pictures/wizkhalifa-see-you-again.jpg"
import rajahwildImage from "../pictures/rajahwild.jpg"
import rajahwildCover from "../pictures/rajahwildcover.jpg"
import rajahwildCoverTwo from "../pictures/rajahwild-lights-off.jpeg"
import rihannaCover from "../pictures/rihanna-wild.png"
import lilMoseyCover from "../pictures/lilmosey-cover-image.jpeg"
import lilMoseyCoverTwo from "../pictures/lilmosey-notice.jpg"
import theWeekendCover from "../pictures/the-weekend-the-hills.jpg"
import theWeekndCoverTwo from "../pictures/the-weekend-starboy.jpeg"
import theWeekndCoverThree from '../pictures/the-weekend-creepin.jpg'
import eddyGBombaCover from "../pictures/eddygbomba-song.jpg"
import popSmokeCover from "../pictures/pop-smoke-song.jpg"
import popSmokeCoverTwo from "../pictures/pop-smoke-cover-two.jpg"
import brysonTillerImg from "../pictures/brsyson-tiller-pfp.jpeg"
import brysonTillerCover from "../pictures/brsyson-tiller-cover.jpeg"
import brysonTillerCoverTwo from "../pictures/bryson-tiller-blame.jpg"
import brysonTillerCoverThree from '../pictures/bryson-tiller-outta-time.jpg'
import summerWalkerCover from '../pictures/summer-walker-playing-games.png'
import summerWalkerCoverTwo from "../pictures/summer-walker-thru.jpeg"
import summerWalkerCoverThree from '../pictures/summer-walker-body.webp'


const genreList = [
    { 
        name: 'Dancehall',
        image: rajahwildImage,
        cover: rajahwildCover,
        color: "rgba(235, 73, 87, 0.658)",
        songs: [
            {
                id: 1,
                artistname: 'Rajah Wild',
                songname: 'Wild Out',
                cover: rajahwildCover,
            },
            {
                id: 2,
                artistname: 'Rajah Wild',
                songname: 'Lights Off',
                cover: rajahwildCoverTwo,
            },
            {
                id: 3,
                artistname: 'Eddy G',
                songname: "NO CAP",
                cover: eddyGBombaCover,
            },
        ]
    },
    { 
        name: 'RAP',
        image: wizkhalifeImage,
        cover: wizkhalifeCover,
        color: "rgba(102, 193, 223, 0.658)",
        songs: [
            {
                id: 1,
                artistname: 'Wiz Khalifa',
                songname: "Dem Boyz",
                cover: wizkhalifeCover,
            },
            {
                id: 2,
                artistname: "Pop Smoke",
                songname: "WHAT YOU KNOW ABOUT LOVE",
                cover: popSmokeCover,
            },
            {
                id: 3,
                artistname: "Lil Mosey",
                songname: "Blueberry Faygo",
                cover: lilMoseyCover,
            },
            {
                id: 4,
                artistname: "Pop Smoke",
                songname: "The Woo",
                cover: popSmokeCoverTwo,
            },
            {
                id: 5,
                artistname: "Lil Mosey",
                songname: "Noticed",
                cover: lilMoseyCoverTwo,
            },
            {
                id: 6,
                artistname: 'Wiz Khalifa',
                songname: "See You Again",
                cover: wizkhalifeCoverTwo,
            },
        ]
    },
    { 
        name: 'HipHop',
        image: chrisbrownImage,
        cover: chrisBrownCover,
        color: "rgba(162, 73, 235, 0.658)",
        songs: [
            {
                id: 1,
                artistname: 'Chris Brown',
                songname: "Sensational",
                cover: chrisBrownCover,
            },
            {
                id: 2,
                artistname: 'The Weekend',
                songname: "Starboy",
                cover: theWeekndCoverTwo,
            },
            {
                id: 3,
                artistname: 'Rihanna',
                songname: "Wild Thoughts",
                cover: rihannaCover,
            },
            {
                id: 4,
                artistname: 'Chris Brown',
                songname: "Don't Judge",
                cover: chrisBrownCoverTwo,
            },
            {
                id: 5,
                artistname: 'The Weeknd',
                songname: "The Hills",
                cover: theWeekendCover,
            },
            {
                id: 6,
                artistname: 'Chris Brown',
                songname: "Freaky Friday",
                cover: chrisBrownCoverThree,
            },
            {
                id: 7,
                artistname: 'The Weeknd',
                songname: 'Creepin',
                cover: theWeekndCoverThree
            }
        ]
    },
    {  
        name: 'Trap Soul',
        image: brysonTillerImg,
        cover: brysonTillerCover,
        color: "rgba(255, 6, 6, 0.363)",
        songs: [
            {
                id: 1,
                artistname: 'Bryson Tiller',
                songname: "Right My Wrong",
                cover: brysonTillerCover,
            },
            {
                id: 2,
                artistname: 'Summer Walker',
                songname: "Come Thru",
                cover: summerWalkerCoverTwo,
            },
            {
                id: 3,
                artistname: 'Bryson Tiller',
                songname: "Blame",
                cover: brysonTillerCoverTwo,
            },
            {
                id: 4,
                artistname: 'Summer Walker',
                songname: "Playing Games",
                cover: summerWalkerCover,
            },
            {
                id: 5,
                artistname: 'Bryson Tiller',
                songname: "Outta Time",
                cover: brysonTillerCoverThree,
            },
            {
                id: 6,
                artistname: 'Summer Walker',
                songname: "Body",
                cover: summerWalkerCoverThree,
            }
        ]
    },
]

export default genreList;