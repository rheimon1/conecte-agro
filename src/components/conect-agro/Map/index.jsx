import { useEffect, useState, useCallback, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import styles from './Map.module.scss'
import { Marker } from "./Marker";

const render = (status) => {
	return <h1>{status}</h1>;
};

const centers = [
  { lat: -25.344, lng: 131.031 },
  { lat: -25.344, lng: 100.031 },
  { lat: -30.344, lng: 121.031 },
  { lat: -15.344, lng: 131.031 },
]

export function Map(props) {
  
  const [map, setMap] = useState();
  const [center, setCenter] = useState(centers[0])
  // const [markerList, setMarkerList] = useState([]);

  

  // useEffect(() => {
  //   function onClick(e) {
  //     console.log(e)
  //     setMarkerList(state => {
  //       return [
  //         ...state,
  //         {
  //           position: e.latLng
  //         }
  //       ]
  //     })
  //     console.log(markerList)
  //   }

  //   if (map) {
  //     ["click", "idle"].forEach((eventName) =>
  //       window.google.maps.event.clearListeners(map, eventName)
  //     );
  //     if (onClick) {
  //       map.addListener("click", onClick);
  //     }
  
  //   }
  // }, [map, markerList]);

  // useEffect(() => {
  //   if(map){
  //     map.setCenter(center)
  //   }
  // }, [map, center])

  const changeMap = useCallback((node) => {
    if (node && !map) {  
      setMap(new window.google.maps.Map(node, {
        zoom: 4,
        center: center,
      }));
    }
  }, [map, center])


  return (
      <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>      
        <div ref={changeMap} className={styles['map-container']} />
        <Marker position={{ lat: -24.344, lng: 131.031 }} map={map} />
        {/* {markerList.map((markerPos, index) => {
          return <Marker key={index} position={markerPos.position} map={map}/> 
        })} */}
      </Wrapper>
  )
}