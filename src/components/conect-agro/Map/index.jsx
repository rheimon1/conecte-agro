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
  const [markerClusterer, setMarkerClusterer] = useState();
  const sao_paulo = { lat: -25.344, lng: 131.031 }
  const [center, setCenter] = useState(sao_paulo)

  const contextValues = useContext(MapContext)

  console.log(JSON.stringify(props.searchResults, null, 2))

  const {map, setMap, markerList } = contextValues;

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
    if(map && !markerClusterer) {
      setMarkerClusterer(new MarkerClusterer({map: map, markers: markerList}))
    }

    if(markerClusterer && markerList.length > 0) {
      markerClusterer.clearMarkers()
      markerClusterer.addMarkers(markerList)
    }

    return (() => {
      if(markerClusterer){
        markerClusterer?.clearMarkers()
      }
    }
    )
  }, [map, markerList, markerClusterer])


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