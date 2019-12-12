import React, {Component} from "react";
import User01 from "../../assets/img/user_01.svg";
import User02 from "../../assets/img/user_02.svg";
import User03 from "../../assets/img/user_03.svg";
import CommentIcon from "../../assets/img/commentIcon.png";
import LikedIcon from "../../assets/img/likedIcon.png";
import LikeIcon from "../../assets/img/likeIcon.png";
import ForumModal from "../../components/ForumModal/forummodal.component";
import Nav from "../../components/Nav/nav.component";
import NavigationSchema from "../../components/NavigationSchema/navigationschema.component";
import ForumPost from "../../components/ForumPost/forumpost.component";
import "./forumpage.styles.scss";
import {firestore, forumPath} from "../../firebase/firebase.utils";
import ForumUiModel from "../../components/ForumModal/forum.ui.model";

class ForumPage extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
            formList: []
        };
    }

    componentDidMount() {
        const callback = this.assembleForumUiModel;
        firestore
            .collection(forumPath)
            .get()
            .then(function (docsRef) {
                let uiModels = docsRef.docs.map((item) => new ForumUiModel(item));
                callback(uiModels);
            }).catch(function (error) {
            console.error("Error adding document: ", error);
        }).finally({});
    }

    assembleForumUiModel = (firebaseDocsRef) => {
        console.log("uiModels: ", firebaseDocsRef);
        this.setState({
            formList: firebaseDocsRef
        })
    };

    showModal = (e) => {
        // e.preventDefault();
        this.setState({show: !this.state.show});
    };

    render() {
        const {show, liked} = this.state;
        return (
            <React.Fragment>
                <Nav/>
                <NavigationSchema/>
                {show ? (
                    <div
                        style={{
                            backgroundColor: "#000",
                            opacity: "0.5",
                            maxWidth: "100vw",
                            width: "100%",
                            height: "157vh",
                            position: "absolute",
                            top: "0",
                            bottom: "0"
                        }}
                    />
                ) : null}
                <div className="forumPage">
                    <div className="forumPage--intro">
                        <div className="forumPage--title">
                            <h1>Pergunte e Responda</h1>
                            <h3>
                                Um espaço para compartilhar conhecimento, questionar e conhecer
                                melhor a sua cidade.
                            </h3>
                        </div>
                        <button onClick={this.showModal}>CRIAR DISCUSSÃO</button>
                    </div>
                    <div className="forumPage--main">
                        <div className="forumPage--main-indice">
                            <ul>
                                <li>Escolha um Tópico</li>
                                <li>Todos (3.930)</li>
                                <li id="selected--listItem">Em Alta (50)</li>
                                <li>Seguindo (300)</li>
                                <li>Eventos (20)</li>
                                <li>Inovação (100)</li>
                                <li>Educação (200)</li>
                                <li>Saúde (500)</li>
                                <li>Tecnologia (230)</li>
                                <li>Habitação (700)</li>
                                <li>Serviços (560)</li>
                                <li>Lazer (400)</li>
                                <li>Diversos (240)</li>
                                <li>Infraestrutura (200)</li>
                                <li>Prefeitura (430)</li>
                            </ul>
                        </div>
                        <div className="forumPage--main-content">
                            {show ? (
                                <div style={{position: "absolute", top: "30%", left: "35%"}}>
                                    <ForumModal show={show} close={this.showModal}/>
                                </div>
                            ) : null}
                            <ul className="forumPage--list">
                                <li>Discussão</li>
                                <div className="forumPage--main-contentList">
                                    <li>Tópicos</li>
                                    <li>Respostas</li>
                                </div>
                            </ul>
                            <ForumPost
                                img={User01}
                                alt="user01"
                                title="Oficina de Fotografia no Dia das Crianças"
                                text="Tópico para pensar uma oficina de fotografia no Dia das
                      Crianças (12.10). Precisamos de voluntários para ajudar
                      com a produção, conseguir material, divulgação,
                      professores, alimentação, etc. Ainda precisamos definir o
                      local do evento."
                                author="Por Matheus - há 10min"
                                tag="EVENTOS"
                                answers="180"
                                likes="100"
                                liked={true}
                            />

                            <ForumPost
                                img={User02}
                                alt="user02"
                                title="Reforma Praça do João XXIII"
                                text="Os moradores do João XXIII estão fazendo uma pesquisa de
                      opinião pública e coletando assinaturas para solicitar a
                      reforma da pracinha do bairro. Pedimos que ajudem e votem
                      - na aba opine - para nos ajudar. Aqui também podemos
                      discutir outras medidas a serem tomadas."
                                author="Por Amanda - há 1hora"
                                tag="LAZER"
                                answers="200"
                                likes="240"
                                liked={false}
                            />

                            <ForumPost
                                img={User03}
                                alt="user03"
                                title="UPA do Jangurussu"
                                text="A UPA do Jangurussu segue com atendimento precário e com
                      poucos médicos. Por vezes não conseguimos atendimento ou
                      medicamentos e semana passada um garoto morreu na fila. É
                      muito descaso, precisamos discutir como reagir a essa
                      situação."
                                author="Por Bárbara - há 2horas"
                                tag="SAÚDE"
                                answers="150"
                                likes="120"
                                liked={true}
                            />
                            <div className="forumPage--pagination">
                                <ul className="paginationList">
                                    <li>{"<"}</li>
                                    <li>
                                        <span>1</span>
                                    </li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>...</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>{">"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ForumPage;
