import { useState, useEffect, forwardRef } from "react";
import styles from './Marker.module.scss'
import ReactDOM from 'react-dom/client';
import { SearchResult } from "../SearchResult";


export const Marker = (props) => {
  const [marker, setMarker] = useState();

  const infoWindow = InfoWindow()

  console.log(props)

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({position: props.position, map: props.map});
      console.log(props.InfoWindow)
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map: props.map
        })
      })
    }
  }, [marker, props, infoWindow]);

  return null;
};

function InfoWindow (props) {
  
  // const content = `
  // <div>
  //   <span>My first infoWindow</span>
  // </div>
  // `

  

  const [infoWindow, setInfoWindow] = useState();


  useEffect(() => {
    if (!infoWindow) {
      setInfoWindow(new window.google.maps.InfoWindow());
    }

    return () => {
      if (infoWindow) {
        infoWindow.close();
      }
    };
  }, [infoWindow]);

  useEffect(() => {
    
    const contentElement = document.createElement('div')

    if (infoWindow) {
      infoWindow.setContent(contentElement);
    }


    const infoWindowRoot = ReactDOM.createRoot(contentElement)
    infoWindowRoot.render(
      <SearchResult />
    )

    return 
    
  }, [infoWindow]);

  return infoWindow;
};