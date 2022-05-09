

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
    const infos = [{image: "../public/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}, {image: "/build/assets/img/filomoderna.svg", text: "9gag"}];

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
    const infos = [{userPhoto: "../public/assets/img/gato-telefone.svg", userName: "meowed", contentImage: "/build/assets/img/gato-telefone.svg", likedByPhoto: "/build/assets/img/respondeai.svg", likedByName: "repondeai"}, {userPhoto: "/build/assets/img/gato-telefone.svg", userName: "meowed", contentImage: "/build/assets/img/gato-telefone.svg", likedByPhoto: "/build/assets/img/gato-telefone.svg", likedByName: "repondeai"}, {userPhoto: "/build/assets/img/gato-telefone.svg", userName: "meowed", contentImage: "/build/assets/img/gato-telefone.svg", likedByPhoto: "/build/assets/img/gato-telefone.svg", likedByName: "repondeai"}];

     return (
         <div class="posts">
            {infos.map(info => <Post userPhoto={info.userPhoto} userName={info.userName} contentImage={info.contentImage} likedByPhoto={info.likedByPhoto} likedByName={info.likedByName} />)}
         </div>
     );
 }

 export default function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
} 