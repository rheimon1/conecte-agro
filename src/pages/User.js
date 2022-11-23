import React from "react";
import Header from "../components/common/Header";

const User = () => {
	return (
		<div class="parent">
			<div class="child header">Header</div>
			<div class="main">
				<div class="child sidebar">
					<div class="sidebar-items">
						<a class="active" href="#home">Meu Perfil</a>
						<a href="#news">Meus Favoritos</a>
						<a href="#contact">Chat</a>
						<a href="#about">Meus Produtos</a>
						<a href="#about">Transações</a>
						<a href="#about">Sair</a>
					</div>
				</div>
				<div class="child content">
					<div className="title">
						<h5>Encontre o que você procura: </h5>
					</div>
					<div className="search">
						<input type="text" id="txtBusca" placeholder="Buscar..."/>
						<button className="btn">Pesquisar</button>
					</div>
					<div className="maps">
						<img src="/mapsicle.png" alt="mapa" />
					</div>
					<div className="results">
						<h4>Resultados para: Beterraba</h4>
						<div className="items">
							<img src="produtor.png" alt="beterraba" />
							<div>
								<h5>Carlos</h5>
								<p>Beterraba da última safra por R$4,50 o maço com 9 beterrabas.</p>
								<button className="btn">Mais informações</button>
							</div>
						</div>
					</div>
				</div>  
			</div>
		</div>
	);
};

export default User;
