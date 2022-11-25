import react, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from './myProducts.module.scss';
import Context from '../../contexts/product/productContext';

const produtsData = [
  {
    id: 1,
    name: 'Alface',
    image: "/alface.png",
    contactPhone: '38922222222',
    contactEmail: 'teste@mail.com',
    description: 'Estou a procura de compradores para alfaces que não necessito mais. Oferto por R$2,50 o pé, mas posso negociar no chat de acordo com o que for proposto.',
    location: 'Rua Álvaro Antônio Zini, 1234',
  }
];

export function MyProducts(){
  const [products, setProducts] = useState(produtsData);

  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Meus Produtos</h1>
      </div>
      {
        products.map((product) => {
          return (
            <div key={product.id} className={styles.product}>
              <div>
                <img src={product.image} />
                <h4><strong>Produto:</strong></h4>
                <p>{product.name}</p>
              </div>
              <div>
                <h3><strong>Contato</strong></h3>
                <p><strong>Telefone:</strong>{product.contactPhone}</p>
                <p><strong>Email:</strong>{product.contactEmail}</p>
                <p>{product.description}</p>
              </div>
              <div>
                <h3><strong>Local:</strong></h3>
                <p>{product.location}</p>
              </div>
              <div>
                <img src="mapsiclemap.png" />
              </div>
            </div>
          )
        })
      }
      <div>
        <Link to="new" className="btn button">Adicionar produto</Link>
      </div>
    </div>
  )
}