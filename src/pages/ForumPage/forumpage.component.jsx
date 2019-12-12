import React, {Component} from "react";
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
            forumListData: []
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
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
            forumListData: firebaseDocsRef.sort((a, b) => b.getTime() - a.getTime())
        })
    };

    showModal = (e) => {
        this.setState({show: !this.state.show});
    };

    closeModal = (e) => {
        this.fetchData();
        this.showModal();
    };

    render() {
        const {show} = this.state;
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
                                    <ForumModal show={show} close={this.closeModal}/>
                                </div>
                            ) : null}
                            <ul className="forumPage--list">
                                <li>Discussão</li>
                                <div className="forumPage--main-contentList">
                                    <li>Tópicos</li>
                                    <li>Respostas</li>
                                </div>
                            </ul>
                            {this.state.forumListData.map((element) => {
                                return (
                                    <ForumPost
                                        key={element.id}
                                        img={element.getImageUrl()}
                                        alt={element.getAuthor()}
                                        title={element.title}
                                        text={element.description}
                                        author={element.author}
                                        tag={element.tag}
                                        answers={element.answersCount}
                                        likes={element.likesCount}
                                        liked={element.liked}
                                    />
                                );
                            })}
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
