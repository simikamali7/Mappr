
import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "./App.css"
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  const [showPopup, setShowPopup] = React.useState(true);

  // empty array for initial array ==> array in useState is empty
  const[pins, setPins] = useState([])

  // function for getting the pins data from the backend.
  // using Rest .get method.
  // use try catch block
  // call setPins state function to set the pins data to the 
  
  useEffect(()=> {
    const getPins = async ()=> {
      try{
        const res = await axios.get("/pins");
        setPins(res.data);
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


      {/* DONT NEED --> NOT WORKING */}

      {/* the standard pin icon component provided by react-map-gl */}
      {/* <Marker longitude={2.294694} latitude={48.858093} color="red"></Marker> */}
      
      {/* popup card for the Eiffel Tower*/}
      {/* {showPopup && (<Popup 
        longitude={48.858093} 
        latitude={2.294694}
        closeButton={true}
        closeOnClick={false}
        // onClose{() => setShowPopup(false)}
        anchor="left">
        <div className='card'>
          <label>Place</label>
          <h4 className='place'>Eiffel Tower</h4>
          <label>Review</label> 
          <p>An Exquisite Marvel of Architecture.</p>
          <label>Rating</label>
          <label>Information</label>
        </div>
      </Popup>)} */}

      {/* DONT NEED --> OLD VERSION -->NOT working */}
        </>
      ))};
      </ReactMapGL>
    </div>
  );
}
export default App;


// features to add: change the size of the icon when zooming. - 48th minute.
// popup state? --> 52 mins