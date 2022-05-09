// FUNÇÕES DO REACT
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
			<Header />
            <Body />
		</div>
    );
}


function Header() {
    const icones = [
        <ion-icon name="paper-plane-outline"></ion-icon>,
        <ion-icon name="compass-outline"></ion-icon>,
        <ion-icon name="heart-outline"></ion-icon>,
        <ion-icon name="person-outline"></ion-icon>
    ]

    return (
        <div class="navbar">
			<div class="container"> 
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="/build/assets/img/logo.png" alt="" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    {icones}
                </div>
            </div>
		</div>
    );
}

const lista = App();
ReactDOM.render(lista, document.querySelector(".root"));

function Body() {
    return (
         <div class="corpo"> 
             <div class="esquerda">
                 <Stories />
                 <Posts />
             </div>

            <div class="sidebar">
                 <Usuario />
                 <Sugestoes />

                 <div class="links">
                 Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                 </div>

                 <div class="copyright">
                 © 2021 INSTAGRAM DO FACEBOOK
                 </div>
             </div>
         </div>
     );
 }

 function Stories() {
 const storiesImagens = ["assets/img/9gag.svg", "assets/img/9gag.svg", "assets/img/9gag.svg"];
 const storiesTexto = ["9gag", "9gag", "9gag"];
 const componentesImagens = storiesImagens.map(storiesImagem => <img src={storiesImagem}/>)


     return (
         <div class="stories">
             <div class="story">
               <div class="imagem">
                 {componentesImagens}
               </div>
               <div class="usuario">
                 9gag
               </div>
             </div>

             <div class="setinha">
               <ion-icon name="chevron-forward-circle"></ion-icon>
             </div>
         </div>
     );
 }

