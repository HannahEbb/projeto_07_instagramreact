// FUNÇÕES DO REACT

//import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
			<Header />
			<Container />
		</div>
    );
}

function Container() {
    return (
        <div>
			<Column01 />
			<Column02 />
		</div>
    );
}

function Column01() {
    return (
        <div>
			<Stories />
			<Posts />
		</div>
    );
}

function Column02() {
    return (
        <div>
			<Sidebar />
		</div>
    );
}

// Componentes menores

function Header() {
    return (
    <div class="header">
        <div class="headercontain">
            <div class="header01">
                <div><ion-icon name="logo-instagram"></ion-icon></div>
                <div class="linha"></div>
                <div><img src="/media/logo.png" alt=""/></div>
            </div>
            <div class="header02">
                <input type="text" placeholder="Pesquisar"/> 
            </div>
            <div class="header03">
                <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                <div><ion-icon name="compass-outline"></ion-icon></div>
                <div><ion-icon name="heart-outline"></ion-icon></div>
                <div><ion-icon name="person-outline"></ion-icon></div>
            </div>
        </div>
    </div>
    );
}

function Stories() {
    return (
    <div class="stories">
        <StoriesPerfil />

        <div class="setinha"><ion-icon name="chevron-forward-circle"></ion-icon></div>

    </div>
    );
}

// Nesta função adiciona a parte lógica para repetir várias vezes o elemento 'storiesperfil'
function StoriesPerfil() {
    return (
    <div class="storiesperfil">
            <div class="strbackg">
                <img src="/media/perfis-stories/stories_background 1.svg"/>
                <div class="perfilstories"><img src="/media/perfis-stories/meowed 1.svg"/></div>
        </div>
            <div><h4 class="roboto12 w400 color-black">meowed</h4></div>
        </div>
    );
}

function Posts() {
    return (
    <div class="posts">
        <Post />
    </div>
    );
}

function Post() {
    return (
        <div class="post">
            <div class="topopost">
                <div class="topopost01">
                    <div><img src="/media/perfis-posts/meowed 2.svg"/></div>
                    <div><h4 class="roboto14 w500 color-black">meowed</h4></div>
                </div>
                <div class="topopost02">
                    <div><h4 class="roboto14 w700 color-black">...</h4></div>
                </div>
            </div>

            <div><img src="/media/foto-posts/gato-telefone 1.svg"/></div>

            <div class="basepost">
                <div class="iconespost">
                    <div class="icones01">
                        <div><ion-icon name="heart-outline"></ion-icon></div>
                        <div><ion-icon name="chatbubble-outline"></ion-icon></div>
                        <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                    </div>
                    <div class="icones02">
                        <div><ion-icon name="bookmark-outline"></ion-icon></div>
                    </div>  
                </div>

                <div class="finalpost">
                    <div><img src="/media/perfis-curtidopor/respondeai 2.svg"/></div>
                    <div class="curtidopor"><h4 class="roboto14 w300 color-black">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></h4></div>
                </div>
            </div>
        </div>
    );
}
