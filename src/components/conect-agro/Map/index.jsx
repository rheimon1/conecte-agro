import { useEffect, useState, useCallback } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

import styles from './Map.module.scss'
import { Marker } from "./Marker";
import { createContext } from "react";
import { useContext } from "react";

const render = (status) => {
	return <h1>{status}</h1>;
};

const centers = [
  { lat: -25.344, lng: 131.031 },
  { lat: -25.344, lng: 100.031 },
  { lat: -30.344, lng: 121.031 },
  { lat: -15.344, lng: 131.031 },
]

export const MapContext = createContext({
})

export function MapContextProvider(props){
  const [map, setMap] = useState();
  const [markerList, setMarkerList] = useState([]);

  return (
    <MapContext.Provider value={{map, setMap, markerList, setMarkerList}}>
      {props.children}
    </MapContext.Provider>
  )
}

export function Map(props) {
  // const [map, setMap] = useState();
  const [center, setCenter] = useState(centers[0])

  const contextValues = useContext(MapContext)

  console.log(contextValues )

  const {map, setMap, markerList, setMarkerList} = contextValues;

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
        minZoom: 6,
        zoom: 6,
        center: {lat: -23.55507672953943, lng: -46.59944863553904},
      }));
    }
  }, [map, setMap])

  useEffect(() => {
    let markerCluterer
    if(map) {
      markerCluterer = new MarkerClusterer({map: map, markers: markerList})
    }

    return (() => {
      markerCluterer?.clearMarkers()
    }
    )
  }, [map, markerList])


  return (
      <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>      
        <div ref={changeMap} className={styles['map-container']} />
          {props.searchResults.map((result, index) => {
            return (
              <Marker key={index} position={result.position} label={index} content={result}/>
            )
          })}
      </Wrapper>
  )
}