import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import styles from './createProduct.module.scss';

export function CreateProduct() {
    const [producer, setProducer] = useState({});
    const [name, setName] = useState("");
    const [reference, setReference] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const { user_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:3000/produtor/${user_id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const _producer = await response.json();
                setProducer(_producer);
            } catch (error) {
                console.log("error", error);
            }
        }
        
        fetchData();
    }, {});
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `http://localhost:3000/produtos`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "nome": name,
                "produtorId": parseInt(user_id),
                "nomeProdutor": producer.nomeProdutor,
                "quantidade": quantity,
                "ref": reference,
                "estado": "SP",
                "preco": price,
                "imagem": "/fotos/products/tomate2.jpg",
            })
        };

        const response = await fetch(url, requestOptions);

        console.log(response);

        navigate(`/main/producer/${user_id}`);

        alert(`Produto criado com sucesso!`);
    }

  return(
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Adicionar Produtos</h1>
        </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Produto</Form.Label>
                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="0" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Referẽncia</Form.Label>
                <Form.Control type="text" value={reference} onChange={e => setReference(e.target.value)} placeholder="1 unidade - 100g" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" value={price} onChange={e => setPrice(e.target.value)}  />
            </Form.Group>
            <Button variant="primary" type="submit">
                Adicionar produto
            </Button>
        </Form>
    </div>
  )
}