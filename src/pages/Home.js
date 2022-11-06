import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import FeaturedSlider from "../components/sliders/FeaturedSlider";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";

const Home = () => {
	return (
		<main>
			<div id="home">
				<div
					id="alimentos"
					style={{ backgroundImage: "url(alimentos.png)" }}
				></div>
				<div id="home_header">
					<ul>
						<li>Sobre</li>
						<li>Contato</li>
						<li>Entrar</li>
					</ul>
				</div>
				<h1>Conecte Agro</h1>
				<h2>A Conecte Agro facilita as suas conexões</h2>
				<h3>
					Nosso maior objetivo é de aproximar os dois lados
					interessados, os produtores agrícolas com os potenciais
					compradores. Assim o produtor consegue cada vez mais dar
					vazão a sua produção de forma eficiente, gerando lucro e o
					empreendedor tem uma diversidade de opções, qualidades e
					preços.
				</h3>
				<button className="btn">Cadastre-se</button>
			</div>
			{/* <div
				id="alimentos"
				style={{ backgroundImage: "url(/alimentos.png)" }}
			>
				Text
			</div> */}
			{/* 

            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Destaques" />
                    <FeaturedSlider />
                </div>
            </section>

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Destaques" />
                    <TopProducts />
                </div>
            </section> */}

			{/* <Services /> */}
		</main>
	);
};

export default Home;
