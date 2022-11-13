import { useEffect, useState, useRef, useCallback, cloneElement, Children, isValidElement } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import styles from './Map.module.scss'
import { Marker } from "./Marker";

const render = (status) => {
	return <h1>{status}</h1>;
};

const style = {
    height: '20rem',
    width: '20rem'
  }

const centers = [
  { lat: -25.344, lng: 131.031 },
  { lat: -25.344, lng: 100.031 },
  { lat: -30.344, lng: 121.031 },
  { lat: -15.344, lng: 131.031 },
]

export function Map(props) {
  
  const [map, setMap] = useState();
  const [center, setCenter] = useState(centers[0])
  const [zoom, setZoom] = useState(4);
  const [markerList, setMarkerList] = useState([]);

  

  useEffect(() => {
    function onClick(e) {
      console.log(e)
      setMarkerList(state => {
        return [
          ...state,
          {
            position: e.latLng
          }
        ]
      })
      console.log(markerList)
    }

    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );
      if (onClick) {
        map.addListener("click", onClick);
      }
  
      // if (onIdle) {
      //   map.addListener("idle", () => onIdle(map));
      // }
    }
  }, [map, markerList]);

  useEffect(() => {
    if(map){
      map.setCenter(center)
    }
  }, [map, center])

  const changeMap = useCallback((node) => {
    const uluru = { lat: -25.344, lng: 131.031 };
    if (node && !map) {  
      setMap(new window.google.maps.Map(node, {
        zoom: zoom,
        center: center,
      }));
    }
  }, [map, zoom, center])

  return (
    <div style={{
      width: '100%',
    }}>
      <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>      
        <div ref={changeMap} className={styles['map-container']} />
        <Marker position={{ lat: -24.344, lng: 131.031 }} map={map} />
        {markerList.map((markerPos, index) => {
          return <Marker key={index} position={markerPos.position} map={map} /> 
        })}
        <button onClick={() => setMarkerList([])}>
          Clear
        </button>
        <ul>
          <li>
            Current center: {map.getCenter().toString()}
          </li>
          {centers.map((center, index) => {
            return (
              <li key={index} onClick={() => {
                setCenter(centers[index])
                setMarkerList(state => {
                  return [
                    ...state,
                    {
                      position: centers[index]
                    }
                  ]
                })
              }}>
                <span>
                  {index} - LAT: {center.lat} e LONG:{center.lng}
                </span>
              </li>
            )
          })}
        </ul>
      </Wrapper>

    </div>
  )
}