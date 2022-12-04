import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Header } from "../../components/conect-agro/Header";
import styles from './login.module.scss';

export function Login() {

    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data.user))
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
                        <h3>Login</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={e => handleSubmit(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name='email' onChange={e => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 mt-2">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
            </main>
        </div>
    )
}