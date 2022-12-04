import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import FeaturedSlider from "../components/sliders/FeaturedSlider";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";
import { Link } from 'react-router-dom';
import { Logo } from "../components/conect-agro/Logo";

const Home = () => {
	return (
		<main>
			<div style={{ width: '100%', display: 'flex' }}>
				<div style={{ width: '50%' }}>
					<img src="alimentos.png" style={{ width: '100%' }}/>
				</div>
				<div style={{ width: '50%', background: '#F7F7F7' }}>
					<div style={{ 
						display: 'flex', 
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginTop: '1.5em'
					}}>
						<Link to={`/about`} style={{ textDecoration: 'none', color: 'black' }}>Sobre</Link>
						<Link to={`/contact`} style={{ textDecoration: 'none', color: 'black' }}>Contato</Link>
						<Link to={`/login`} style={{ textDecoration: 'none', color: 'black' }}>Entrar</Link>
					</div>
					<div style={{
						marginTop: '5em', 
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '3em'
					}}>
						<div style={{ display: 'flex', marginBottom: '3em' }}>
							<h1 style={{ marginRight: '0.5em' }}>Conecte Agro</h1>
							<img src="favicon.svg" />
						</div>
						<div style={{ maxWidth: '265px' }}>
							<h3 style={{ color: '#90C290', fontSize: '24px' }}>A Conecte Agro facilita as suas conexões</h3>
							<p style={{ textAlign: 'justify', fontSize: '14px' }}>
								Nosso maior objetivo é de aproximar os dois lados interessados, os produtores agrícolas com os potenciais compradores.
								Assim o  produtor consegue cada vez mais dar vazão a sua produção de forma eficiente, gerando lucro e o empreendedor tem uma diversidade de opções, qualidades e preços.
							</p>
							<button style={{
								width: '250px',
								height: '51px',
								background: '#415F33',
								borderRadius: '5px',
								color: 'white'
							}}>Cadastre-se</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
