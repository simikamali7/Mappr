import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "./App.css"
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';

function App() {
  const [showPopup, setShowPopup] = React.useState(true);

  // empty array for initial array ==> array in useState is empty
  const[pins, setPins] = useState([])

  // function for getting the pins data from the backend.
  // using Rest .get method.
  // use try catch block
  // call setPins state function to set the pins data to the 
  
  useEffect(() => {
    const getPins = async () => {
      try{
        const res = await axios.get("/pins/");
        setPins(res.data);
        console.log(res.data);
        console.log(pins);
      }catch(err){
        console.log(err)
      }
    };
    // need to call asynch getPins function to get the pin data.
    getPins()
  }, []);

  return (
    <div className="App">
      <ReactMapGL
      initialViewState={{
        //latitude: 37.8,
        //longitude: -122.4,
        latitude: 48.858093,
        longitude: 2.294694,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      // style of the map
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    >
      {/* to show the pins */}
      {pins.map(p=>(
      <>
        <Marker longitude={p.long} latitude={p.lat}>
          <RoomIcon style = {{color: 'slateblue'}}/>
        </Marker>

      {showPopup && (
        <Popup 
          longitude={p.long} 
          latitude={p.lat}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
                                            {/* text in the textbook --> b/w Popup component opening and closing tags */}
          <div className='card'>
          <label>Location:</label>
          <h4 className='place'><b>Eiffel Tower</b></h4>
          <label>Review:</label> 
          <p className='descript'>An Exquisite Marvel of Architecture.</p>
          <label>Rating:</label>
          <div className='ratingStars'>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
          </div>
          <label>Information: </label>
          <span className='username'>Created by: <b>Simi </b></span>
          <span className='date'>- 1 Hour ago</span>
        </div>
      </Popup>)}
        </>
      ))};
      </ReactMapGL>
    </div>
  );
}

export default App;


// features to add: change the size of the icon when zooming. - 48th minute.
// popup state? --> 52 mins