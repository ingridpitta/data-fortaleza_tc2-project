import React from "react";
import "./forummodal.styles.scss";
import {firestore, forumPath} from "../../firebase/firebase.utils";

class ForumModal extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description: "",
            theme: ""
        };
    }

    updateTitleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addForum = e => {
        e.preventDefault();

        const forumRef = firestore.collection(forumPath).add({
            title: this.state.title,
            description: this.state.description,
            themes: this.state.theme.split(", ")
        });

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
                            {/*<button type="submit" value="PUBLICAR" onClick={close}/>*/}
                            <button type="submit">PUBLICAR</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }

}

export default ForumModal;
