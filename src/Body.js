

export default function Body() {
    return (
        <div class="corpo"> 
            <Esquerda />
            <Sidebar />
        </div>
     );
 }

// 01 - COMPONENTES ESQUERDA

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
} 

//Componente do componente Stories - declarado antes
function Story(props) {
    return (
       <div class="story">
           <div class="imagem">
               <img src={props.image} />
           </div>
           <div class="usuario">
               {props.text}
           </div>
     </div>
    );
}


 function Stories() {
    const infos = [{image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}, {image: "assets/img/filomoderna.svh", text: "9gag"}];

     return (
         <div class="stories">
             {infos.map(info => <Story image={info.image} text={info.text}/>)}

             <div class="setinha">
               <ion-icon name="chevron-forward-circle"></ion-icon>
             </div>
         </div>
     );
 }



 //Componente do componente Posts - declarado antes
function Post(props) {
    return (
    <   div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userPhoto} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.contentImage} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.likedByPhoto} />
                    <div class="texto">
                        Curtido por <strong>{props.likedByName}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


 function Posts() {
    const infos = [{userPhoto: "assets/img/gato-telefone.svg", userName: "meowed", contentImage: "assets/img/gato-telefone.svg", likedByPhoto: "assets/img/respondeai.svg", likedByName: "repondeai"}, {userPhoto: "assets/img/gato-telefone.svg", userName: "meowed", contentImage: "assets/img/gato-telefone.svg", likedByPhoto: "assets/img/respondeai.svg", likedByName: "repondeai"}, {userPhoto: "assets/img/gato-telefone.svg", userName: "meowed", contentImage: "assets/img/gato-telefone.svg", likedByPhoto: "assets/img/respondeai.svg", likedByName: "repondeai"}];

     return (
         <div class="posts">
            {infos.map(info => <Post userPhoto={info.userPhoto} userName={info.userName} contentImage={info.contentImage} likedByPhoto={info.likedByPhoto} likedByName={info.likedByName} />)}
         </div>
     );
 }

 // 02 - COMPONENTES SIDEBAR

function Sugestao(props) {
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src={props.userPhoto} />
          <div class="texto">
            <div class="nome">{props.userName}</div>
            <div class="razao">Segue você</div>
          </div>
        </div>
        <div class="seguir">Seguir</div>
      </div>
    );
}


 function Sidebar() {
     const ownerInfo = [{accountPhoto: "assets/img/catanacomics.svg", accountName: "catanacomics", accountOwner: "Catana"}];

    const infos = [{userPhoto: "assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}];

     return (
         <div class="sidebar">
             <div class="usuario">
                <img src={ownerInfo.accountPhoto} />
                <div class="texto">
                    <strong>{ownerInfo.accountName}</strong>
                    {ownerInfo.accountOwner}
                </div>
             </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {infos.map(info => <Sugestao userPhoto={info.userPhoto} userName={info.userName}/>)}


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

