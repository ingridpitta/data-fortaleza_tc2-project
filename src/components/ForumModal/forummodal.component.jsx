import React from "react";
import "./forummodal.styles.scss";

const ForumModal = ({close}) => (
    <div className="forumModal">
        <h1>Faça uma Publicação</h1>
        <form className="form-style-7">
            <ul>
                <li>
                    <label for="title">TÍTULO</label>
                    <input type="text" name="title" maxlength="100"/>
                    <span>Crie um título</span>
                </li>
                <li>
                    <label for="description">DESCRIÇÃO</label>
                    <textarea
                        name="description"
                        onkeyup="adjust_textarea(this)"
                    />
                    <span>Descreva seu tópico</span>
                </li>
                <li>
                    <label for="theme">CATEGORIA</label>
                    <input type="text" name="theme" maxlength="100"/>
                    <span>Informe a categoria do seu tópico</span>
                </li>
                <li>
                    <input type="submit" value="PUBLICAR" onClick={close}/>
                </li>
            </ul>
        </form>
    </div>
);

export default ForumModal;
