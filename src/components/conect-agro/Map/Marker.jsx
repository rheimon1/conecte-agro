import { useState, useEffect, forwardRef } from "react";
import styles from './Marker.module.scss'
import ReactDOM from 'react-dom/client';
import { SearchResult } from "../SearchResult";


export const Marker = (props) => {
  const [marker, setMarker] = useState();

  const infoWindow = useInfoWindow(marker);
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
    if (marker) {
      marker.setOptions({position: props.position, map: props.map});

    }
  }, [marker, props]);





  return null;
};


function useInfoWindow (marker, content) {

  const [infoWindow, setInfoWindow] = useState();
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

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

    const infoWindowRoot = ReactDOM.createRoot(contentElement)
    infoWindowRoot.render(
      <div className={styles.infoWindowContainer}>
      <img src="/producer-icon.svg" alt="" />
      <div className={styles.infoWindowContent}>
        <h2 className={styles.title} >Nome da propriedade</h2>
        <p className={styles.subTitle}>Nome do produtor</p>
        <p>Rua XXXXXXX, Bairro XXXX, XX</p>
        <p>Valinhos/SP</p>
      </div>
      <div>
        <p className={styles.title}>Principais produtos</p>
            <ul className={styles.productList}>
              {["Alface", "Tomate"].map((productName, index) => {
                return (
                  <li key={index}>
                    {productName}
                  </li>
                )
              })}
            </ul>
      </div>
    </div>
    )

    if (infoWindow) {
      infoWindow.setContent(contentElement);

      marker.addListener("click", () => {
        if(!infoWindowOpen){
          setInfoWindowOpen(true)
          infoWindow.open({
            anchor: marker,
            map: marker.getMap()
          })
        } else {
          infoWindow.close()
          setInfoWindowOpen(false)
        }
    })
    }

    return () => {
      contentElement.remove()
    }
    
  }, [infoWindow, infoWindowOpen, marker]);

  return infoWindow
};
