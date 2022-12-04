import { useState } from "react"
import { Form, Button, Card } from 'react-bootstrap';
import { Header } from "../../components/conect-agro/Header";
import styles from './signup.module.scss';

export function Signup() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        profile: '' // required
    })

    function handleCancel(e) {
        e.preventDefault();

        setFormData({
            email: '',
            password: '',
            profile: ''
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <Card className={styles.card}>
                    <Card.Header>
                        <h3>Cadastro</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={e => handleSubmit(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name='email' onChange={e => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" name="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formProfile">
                                <Form.Label>Perfil</Form.Label>
                                <Form.Select aria-label="Default select example" name="profile">
                                    <option>Selecione seu perfil</option>
                                    <option value="producer">Produtor</option>
                                    <option value="consumer">Consumidor</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" style={{ float: 'right' }}>
                                Cadastrar
                            </Button>
                            <Button variant="danger" style={{ float: 'right', marginRight: '0.5em' }} onClick={e => handleCancel(e)}>
                                Cancelar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </main>
        </div>
    )
}