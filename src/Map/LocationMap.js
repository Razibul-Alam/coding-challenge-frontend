
import React,{useState,useEffect} from 'react';
import Map,{Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap=({lat,lan})=>{
    const [viewState, setViewState] = useState({
        latitude:23.81,
        longitude:90.41,
        zoom: 8,
        pitch:50
      });

  return (
      <div>
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: 300, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={"pk.eyJ1IjoicmF6dTEyMzQiLCJhIjoiY2wyNzVyd29sMDFmaDNqcmpqYWI1emdocyJ9.d3XjVVNXYg9I5SDUNe4bLA"}
    >
      <Marker longitude={lan} latitude={lat} color="red" />
    </Map>

    </div>
  );
}
export default LocationMap;