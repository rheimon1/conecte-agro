import React from "react";
import Header from "../components/common/Header";

const User = () => {
	return (
		<div class="parent">
			<div class="child header">
				<h1>Conecte Agro</h1>
				<img src="favicon.svg" />
				<div className="items">
					<a href="#news">Sobre</a>
					<a href="#contact">Contato</a>
				</div>
			</div>
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
					<form class="search" action="action_page.php">
						<input type="text" name="search" />
						<button type="submit">Pesquisar</button>
					</form>
					<div className="maps">
						<img src="/mapsicle.png" alt="mapa" />
					</div>
					<div className="results">
						<h4>Resultados para: Beterraba</h4>
						<div className="items">
							<div className="block"></div>
							<img src="produtor.png" alt="beterraba" />
							<div style={{ marginRight: '1em' }}>
								<h5>Nome da propriedade</h5>
								<p>Nome do produtor</p>
								<p><strong>Telefone:</strong> (11)92222-2222</p>
								<p><strong>Email:</strong> teste@teste.com</p>
							</div>
							<div>
								<h5>Principais produtos</h5>
								<p>Alface, Tomate, Laranja</p>
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
