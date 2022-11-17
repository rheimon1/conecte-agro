import { useState, useEffect, useContext } from "react";
import styles from './Marker.module.scss'
import ReactDOM from 'react-dom/client';
import { MapContext } from ".";


export const Marker = (props) => {
  const [marker, setMarker] = useState();
  const { map, setMarkerList } = useContext(MapContext)

  const infoWindow = useInfoWindow(marker, props.content);


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
      marker.setOptions({position: props.position, label: props.label.toString() ,map: map});
    }
  }, [marker, props, map]);

  useEffect(() => {
    if(marker) {
      setMarkerList((state) => {
        return [
          ...state,
          marker
        ]
      })
    }
  }, [marker, setMarkerList])

  return null;
};


function useInfoWindow (marker, content) {

  const [infoWindow, setInfoWindow] = useState();
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const {
    index = 1,
    image = "/producer-icon.svg",
    propertyName = "Nome da propriedade",
    producerName = "Nome do produtor",
    contactNumber = "9 9999-9999",
    email = "contact@email.com",
    productList = ["Alface", "Tomate", "Laranja"],
    slug = "#",
    selected = false,
  } = content;

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
      <img src={image} alt="" />
      <div className={styles.infoWindowContent}>
        <h2 className={styles.title} >{propertyName}</h2>
        <p className={styles.subTitle}>{producerName}</p>
        <p>Rua XXXXXXX, Bairro XXXX, XX</p>
        <p>Valinhos/SP</p>
      </div>
      <div>
        <p className={styles.title}>Principais produtos</p>
            <ul className={styles.productList}>
              {productList.map((productName, index) => {
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
      
      marker.addListener("click", () => {
        infoWindow.setContent(contentElement);
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
