import React from 'react';
import Card from '../../components/Card/card.component';
import Ponte from '../../assets/img/ponteMetalica.jpeg';
import MapaVlt from '../../assets/img/mapaVlt.png';
import Biometria from '../../assets/img/biometria.png';
import Cidade from '../../assets/img/cidade.png';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="homepage-body--container">
            <Card
                id = "1"
                image = ""
                chamada = ""
                title = "Quizzes"
                text = "Aprenda sobre a cidade de forma divertida e ganhe pontos para trocar por benefícios no site.Vamos jogar?"
                description = "Aprenda sobre a cidade de forma divertida e ganhe pontos para trocar por benefícios no site."
                destination = "quizzes"
                btnText = "JOGAR"
                classCard = "card--noImage"
            />

            <Card
                id = "2"
                image = {Ponte}
                chamada = "EM ALTA:"
                title = "Privatização de Espaços na Orla de Fortaleza"
                text = "Cinco pontos da orla de Fortaleza devem passar para a administração da iniciativa privada a partir do primeiro semestre de 2020. O que você acha dessa proposta?"
                description = "opine sobre a privatização de espaços na orla de fortaleza"
                destination = "opine/privatizacao"
                btnText = "OPINE"
                classCard = "card--withImage"
            />

            <Card
                id = "3"
                image = {Biometria}
                chamada = "Atenção!"
                title = "Já fez seu Cadastro Biométrico?"
                text = ""
                description = "biometria"
                destination = "forum/biometria"
                btnText = "SAIBA +"
                classCard = "card--withImage"
            />

            <Card
                id = "4"
                image = ""
                chamada = ""
                title = "Denúncias"
                text = "Constatou alguma irregularidade?Denuncie. É rápido e anônimo!"
                description = "Denúncia"
                destination = "denuncie"
                btnText = "DENUNCIE"
                classCard = "card--noImage"
            />

            <Card
                id = "5"
                image = {MapaVlt}
                chamada = "Resultado"
                title = " Pesquisa de Opinião sobre VLT Parangaba - Mucuripe está disponível."
                text = ""
                description = " Resultado Pesquisa de Opinião sobre VLT Parangaba - Mucuripe está disponível."
                destination = "resultado/vltparangabamucuripe"
                btnText = "VER"
                classCard = "card--withImage"
            />

            <Card
                id = "6"
                image = ""
                chamada = ""
                title = "Enciclopédia Urbana"
                text = "Quer saber mais sobre o espaço urbano?Conheça nossa enciclopédia."
                description = "Saiba mais sobre o espaço urbano. Conheça nossa enciclopédia."
                destination = "quizzes/enciclopediaurbana"
                btnText = "VER"
                classCard = "card--noImage"
            />

            <Card
                id = "7"
                image = ""
                chamada = ""
                title = "Mapas Interativos"
                text = "Que tal conhecer um pouco mais sobre a nossa cidade e seus dados através dos mapas interativos?"
                description = "Mapas Interativos"
                destination = "mapasinterativos"
                btnText = "VER"
                classCard = "card--noImage"
            />

            <Card
                id = "8"
                image = {Cidade}
                chamada = "Participe"
                title = "das discussões sobre a cidade!"
                text = "Através do nosso fórum você pode participar, ensinar e aprender sobre temas em alta na nossa cidade. "
                description = "forum"
                destination = "forum"
                btnText = "PARTICIPAR"
                classCard = "card--withImage"
            />
        </div>
        <div className="homepage-footer--container"></div>
    </div>
)

export default HomePage;