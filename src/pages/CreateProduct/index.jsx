import { useState } from "react";
import styles from './createProduct.module.scss';

export function CreateProduct(){
    const [name, setName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

  return(
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Adicionar Produtos</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <label>Produto: </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                
                <label>Local: </label>
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Rua Exemplo, 1234"/>
            </div>
            <div className={styles.formRow}>
                <h3><strong>Contato:</strong></h3>
                <div>
                    <label>Telefone: </label>
                    <input type="text" value={contactPhone} onChange={e => setContactPhone(e.target.value)} placeholder="(XX) 9XXXX-XXXX"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={contactEmail} onChange={e => setContactEmail(e.target.value)} placeholder="exemplo@conecteagro.com"/>
                </div>
            </div>

            <div className={styles.formRow}>
                <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Inserir informações sobre o produto..."/>
            </div>
            
            <div className={styles.formSubmit}>
                <button className="btn" type="submit">Adicionar produto</button>
            </div>
            
        </form>
    </div>
  )
}