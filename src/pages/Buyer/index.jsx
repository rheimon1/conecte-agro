import react, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../../components/conect-agro/ProductCard";
import styles from './buyer.module.scss';

export function Buyer(props){
  const [producer, setProducer] = useState({});
  const [products, setProducts] = useState([]);

  const { producer_id } = useParams();

  function handleProductQuantity(e, productId) {
    const _products = products.map((product) => {
      if (product.id === productId) {
        if (e.target.name === 'add') {
          return { ...product, currentQuantity: product.currentQuantity+1 }
        } else {
          return { ...product, currentQuantity: product.currentQuantity-1 }
        }
      } else {
        return { ... product }
      }
    })
    setProducts(_products);
  }

  useEffect(() => {
    const url = `http://localhost:3000/produtor/${producer_id}?_embed=produtos`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const _producer = await response.json();
        const _products = _producer.produtos && _producer.produtos.map((element) => {
          return {
            ...element,
            currentQuantity: 0
          }
        })
        setProducer(_producer);
        setProducts(_products);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return(
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{producer.nomeProdutor}</h1>
        </div>
        <div className={styles.producer}>
          <div>
            <img src={`${producer.foto}.jpg`} />
          </div>
          <div>
            <div>
              <p><strong>Descrição:</strong></p>
              <textarea value={producer.description || 'Estou a procura de compradores para alfaces que não necessito mais. Oferto por R$2,50 o pé, mas posso negociar no chat de acordo com o que for proposto.'} />
            </div>
            {/* <div>
              <p><strong>Foco de vendas:</strong></p>
              {
                producer.salesFocus.map((element) => {
                  return (
                    <span>{element}</span>
                  );
                })
              }
            </div> */}
          </div>
          <div>
            <div>
              <h3><strong>Contato</strong></h3>
              <p><strong>Telefone:</strong> {producer.telefone}</p>
              <p><strong>Email:</strong> {producer.email}</p>
            </div>
            <div>
              <h3><strong>Local:</strong></h3>
              <p>{`${producer.rua}, ${producer.numero}, ${producer.bairro} - ${producer.cidade}`}</p>
            </div>
          </div>
          <div>
              <img src="/mapsiclemap.png" />
          </div>
        </div>
        <div>
          <div className={styles.productsTitle}>
            <h1>Produtos Disponíveis</h1>
            <Link to={`/main/my-products/new/${producer_id}`} className="btn button">Selecionar produto</Link>
          </div>
          <div className={styles.products}>
            {products.map((product) => {
              return (
                <ProductCard 
                  product={product}
                  handleProductQuantity={handleProductQuantity}
                  type="buyer"
                />
              )
            })}
          </div>
        </div>
        <div>
      </div>
    </div>
  )
}