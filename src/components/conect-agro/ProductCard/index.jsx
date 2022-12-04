import react, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './ProductCard.module.scss';

export function ProductCard(props) {
    const { product, handleProductQuantity, type, setRequestData } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteProduct = async (e) => {
        console.log(product.id);
        const url = `http://localhost:3000/produtos/${product.id}`;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch(url, requestOptions);
        console.log(response);
        setShow(false);
        setRequestData(new Date());
    }

    return (
        <div key={product.id} className={styles.card}>
            {type === 'producer' && (
                <div className={styles.deleteProduct}>
                    <button onClick={handleShow}>X</button>
                </div>
            )}
            <div>
                <img src={product.imagem} alt="berinjela" style={{ marginTop: '1em' }} />
            </div>
            <div className={styles.productInfo}>
                <h3>{product.nome}</h3>
                <h5>Preço unitário: R$ {product.preco}</h5>
                <p>Quantidade mínima: {product.quantidade}</p>
            </div>
            {type === 'buyer' && (
                <div className={styles.productQuantity}>
                    <button name="subtract" onClick={e => handleProductQuantity(e, product.id)}>-</button>
                    <div className={styles.productQuantityNumber}>
                        <p>{product.currentQuantity}</p>
                    </div>
                    <button name="add" onClick={e => handleProductQuantity(e, product.id)}>+</button>
                </div>
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Atenção</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que quer excluir esse produto?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleDeleteProduct}>
                    Excluir
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}