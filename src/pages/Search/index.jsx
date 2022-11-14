import { Map } from "../../components/conect-agro/Map";
import { SearchResult } from "../../components/conect-agro/SearchResult";

const searchResults = [
  {
    image: "/producer-icon.svg",
    propertyName: "Recanto da felicidade",
    producerName: "Alexa Barbosa",
    contactNumber: "11989958546",
    email: "AlexaBarbosa@email.com",
    productList: ["Tomate", "Laranja"],
    slug: "#",
  },
  {
    image: "/producer-icon.svg",
    propertyName: "Camarote colorida",
    producerName: "Beatriz Baltazar",
    contactNumber: "11969840946",
    email: "BeatrizBaltazar@email.com",
    productList: ["Mamao"],
    slug: "#",
  },
]

const selectedResult = 0

export function Search(){
  return(
    <div>
    <form action="">
      <label htmlFor="search-box">Encontre o que procura:</label>
      <input id="search-box" type="text" />
      <button type="submit">Pesquisar</button>
    </form>
    <Map />
    <div>
      <h2>Resultados para: XXXXXX</h2>
      <ul>
        {
          searchResults.map((result, index) =>{
            if(index === selectedResult){
              return (
                <li key={index}>
                  <SearchResult {...result} index={index} selected={true}/> 
                </li>
              )
            }
            return (
              <li key={index}>
                <SearchResult {...result} index={index} /> 
              </li>
            )
          })
        }
      </ul>
    </div>
    </div>
  )
}