import React, { Component } from "react";
import "./forumpage.styles.scss";

class ForumPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="forumPage">
        <div className="forumPage--intro">
          <div className="forumPage--title">
            <h1>Pergunte e Responda</h1>
            <h3>
              Um espaço para compartilhar conhecimento, questionar e conhecer
              melhor a sua cidade.
            </h3>
          </div>
          <button>CRIAR DISCUSSÃO</button>
        </div>
        <div className="forumPage--main">
          <div className="forumPage--main-indice">
            <ul>
              <li>Escolha um Tópico</li>
              <li>Todos (3.930)</li>
              <li>Em Alta (50)</li>
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
            <ul>
              <li>Discussão</li>
              <div className="forumPage--main-contentList">
                <li>Tópicos</li>
                <li>Respostas</li>
              </div>
            </ul>
            <div className="forumPage--content-discussion">
              <div className="forumPage--discussion-topic">
                <img src="" alt="user" />
                <div className="forumPage--topic-description">
                  <h3>Oficina de Fotografia no Dia das Crianças</h3>
                  <p>
                    Tópico para pensar uma oficina de fotografia no Dia das
                    Crianças (12.10). Precisamos de voluntários para ajudar com
                    a produção, conseguir material, divulgação, professores,
                    alimentação, etc. Ainda precisamos definir o local do
                    evento.
                  </p>
                  <h4>Por Matheus - há 10min</h4>
                </div>
              </div>
              <div className="forumPage--topic-container">
                <div className="forumPage--topic-tag">
                  <h2>EVENTOS</h2>
                </div>
                <div className="forumPage--topic-status">
                  <div className="forumPage--status-answers">
                    <img src="" alt="user" />
                    <h3>Respostas (100)</h3>
                  </div>
                  <div className="forumPage--status-likes">
                    <img src="" alt="user" />
                    <h3>Curtidas (230)</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="forumPage--pagination">
              <ul>
                <li>{"<"}</li>
                <li>1</li>
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
    );
  }
}

export default ForumPage;
