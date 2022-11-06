import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <section id="error_page" className="section">
                <div className="container">
                    <div className="error_page_content">
                        <h1>404</h1>
                        <h3>Desculpe, essa pagina nao foi encontrada.</h3>
                        <Link to="/" className="btn">Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;