

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

function Usuario(props) {
    return (
      <div class="usuario">
      <img src={props.accountPhoto} />
      <div class="texto">
          <strong>{props.accountName}</strong>
          {props.accountOwner}
      </div>
   </div>
    );
}


export default function Sidebar() {
    const ownerinfo = [{accountPhoto: "./assets/img/catanacomics.svg", accountName: "catanacomics", accountOwner: "Catana"}];

    const infos = [{userPhoto: "./assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "./assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "./assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "./assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}, {userPhoto: "./assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes"}];

     return (
         <div class="sidebar">
            {ownerinfo.map(info => <Usuario accountPhoto={info.accountPhoto} accountName={info.accountName} accountOwner={info.accountOwner}/>)}

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
