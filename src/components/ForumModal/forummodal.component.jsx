import React from "react";
import "./forummodal.styles.scss";
import {firestore, forumPath} from "../../firebase/firebase.utils";
import * as firebase from "firebase";

class ForumModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            theme: "",
            discussion: ["comentario1", "comentario2"],
            likes: 0,
            user_name: "Fulano",
            user_profile: "https://www.hypeness.com.br/wp-content/uploads/2019/04/Machado_Negro_3.jpg",
            liked: false
        };
    }

    updateTitleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addForum = e => {
        e.preventDefault();

        firestore.collection(forumPath).add({
            title: this.state.title,
            description: this.state.description,
            tag: this.state.theme,
            discussion: this.state.discussion,
            likes: this.state.likes,
            user_name: this.state.user_name,
            user_profile: this.state.user_profile,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            liked: this.state.liked
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        }).finally(this.props.close);

        this.setState({
            title: "",
            description: "",
            theme: ""
        });
    };

    render() {
        return (
            <div className="forumModal">
                <h1>Faça uma Publicação</h1>
                <form className="form-style-7" onSubmit={this.addForum}>
                    <ul>
                        <li>
                            <label htmlFor="title">TÍTULO</label>
                            <input type="text"
                                   name="title"
                                   maxLength="100"
                                   onChange={this.updateTitleInput}
                                   value={this.state.title}
                            />
                            <span>Crie um título</span>
                        </li>
                        <li>
                            <label htmlFor="description">DESCRIÇÃO</label>
                            <textarea
                                name="description"
                                onChange={this.updateTitleInput}
                                value={this.state.description}
                            />
                            <span>Descreva seu tópico</span>
                        </li>
                        <li>
                            <label htmlFor="theme">CATEGORIA</label>
                            <input type="text"
                                   name="theme"
                                   maxLength="100"
                                   onChange={this.updateTitleInput}
                                   value={this.state.theme}
                            />
                            <span>Informe a categoria do seu tópico</span>
                        </li>
                        <li>
                            <button type="submit">PUBLICAR</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }

}

export default ForumModal;
