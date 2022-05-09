export default function Header() {
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
                    <img src="../public/assets/img/logo.png" alt="" />
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