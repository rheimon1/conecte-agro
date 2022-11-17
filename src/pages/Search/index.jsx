import { useState } from "react";
import { Map, MapContextProvider } from "../../components/conect-agro/Map";
import { SearchResult } from "../../components/conect-agro/SearchResult";
import styles from './search.module.scss'

function generatePosition(lat, lng) {

  const ops = [1, -1];

  const latOperation = ops[Math.round(Math.random() % 2)]
  const lngOperation = ops[Math.round(Math.random() % 2)]

  let newLat = lat + Math.random() * latOperation
  let newLng = lng + Math.random() * lngOperation

  return {lat: newLat, lng: newLng}
}
 
const center = {lat: -22.279040044371495, lng: -48.97861099476778}

const searchResults1 = [
  {
    image: "/producer-icon.svg",
    propertyName: "Recanto da felicidade",
    producerName: "Alexa Barbosa",
    contactNumber: "11989958546",
    email: "AlexaBarbosa@email.com",
    productList: ["Tomate", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
]

const searchResults2 = [
  {
    image: "/producer-icon.svg",
    propertyName: "Recanto da felicidade",
    producerName: "Alexa Barbosa",
    contactNumber: "11989958546",
    email: "AlexaBarbosa@email.com",
    productList: ["Tomate", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote preto e Branco",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao", "Laranja"],
    slug: "#",
    position: generatePosition(center.lat, center.lng)
  },
]

const selectedResult = 0

export function Search(){

  const [searchResults, setSearchResults] = useState(searchResults1);

  return(
    <div className={styles.container}>
      <form action="" className={styles.searchBox}>
        <div>
          <label htmlFor="search-box">Encontre o que procura:</label>
          <button className={styles.filterButton}>Filtrar por</button>
          <input id="search-box" type="text" />
        </div>
        <button type="submit" className={styles.searchButton}>Pesquisar</button>
      </form>
      <MapContextProvider>
        <Map searchResults={searchResults} />
      </MapContextProvider>
      <div>
        <h2>Resultados para: XXXXXX</h2>
        <ul className={styles.resultsList}>
          {
            searchResults.map((result, index) =>{
              if(index === selectedResult){
                return (
                  <li key={index}>
                    <SearchResult {...result} index={index+1} selected={true}/> 
                  </li>
                )
              }
              return (
                <li key={index}>
                  <SearchResult {...result} index={index+1} /> 
                </li>
              )
            })
          }
        </ul>
      </div>
      <button onClick={() => {
        setSearchResults([...searchResults2])
      }}>
        Toggle results
      </button>
    </div>
  )
}