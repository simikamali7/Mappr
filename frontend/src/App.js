// import usestate hook and ReactMapGl
// import { useState } from 'react';
// import ReactMapGL from 'react-map-gl';
// import { Marker } from 'react-map-gl';
// import RoomIcon from '@mui/icons-material/Room';
// import "mapbox-gl/dist/mapbox-gl.css";


// function App() {
//   const [viewport, setViewport] = useState({
//     width: "200vw",
//     height: "200vh",
//     latitude: 46,
//     longitude: 17,
//     zoom: 4
//   });
//   return (
//     <div className="App">
//       <ReactMapGL
//         {...viewport}
//         mapStyle= "mapbox://styles/mapbox/satellite-v9"
//         onViewPortChange={nextViewport => setViewport(nextViewport)}
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX}
//       >
//       {/* marker inside of ReactMapGL */}
//         <Marker 
//           longitude={2.294694} 
//           latitude={48.858093} 
//           offsetLeft={-20}
//           offsetright={-10} 
//         >
//           {/* <RoomIcon/> */}
//           </Marker>  
//       </ReactMapGL>      
//     </div>
//   );
// }

// import * as React from 'react';
// import Map from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import {render} from 'react-dom';

// function App() {
//   return (
//     <Map
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     />
//   );
// }

import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "./App.css"
import { useState } from 'react';


function App() {
  const [showPopup, setShowPopup] = React.useState(true);

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
      {/* popup card for eiffel tower containing a description*/}
      {showPopup && (
        <Popup 
          longitude={2.294694} 
          latitude={48.858093}
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
      {/* using the room (pin) icon component from material UI  */}
      <Marker longitude={2.294694} latitude={48.858093}>
        <RoomIcon style = {{color: 'slateblue'}}/>
      </Marker>
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
      </ReactMapGL>
    </div>
  );
}
export default App;


// features to add: change the size of the icon when zooming. - 48th minute.
// popup state? --> 52 mins