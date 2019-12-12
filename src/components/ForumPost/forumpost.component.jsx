import React from 'react';
import CommentIcon from "../../assets/img/commentIcon.png";
import LikedIcon from "../../assets/img/likedIcon.png";
import LikeIcon from "../../assets/img/likeIcon.png";
import './forumpost.styles.scss';


const ForumPost = ({img, alt, title, text, author, tag, answers, likes, liked}) => (
    <div className="forumPage--content-discussion">
    <div className="forumPage--discussion-topic">
                  <img src={img} alt={alt} />
                  <div className="forumPage--topic-description">
                    <h3>{title}</h3>
                    <p>
                      {text}
                    </p>
                    <h4>{author}</h4>
                  </div>
                </div>
                <div className="forumPage--topic-container">
                  <div className="forumPage--topic-tag">
                    <h2>{tag}</h2>
                  </div>
                  <div className="forumPage--topic-status">
                    <div className="forumPage--status-answers">
                      <img src={CommentIcon} alt="comments" />
                      <h3>Respostas ({answers})</h3>
                    </div>
                    <div className="forumPage--status-likes">
                    {liked ? <img src={LikedIcon} alt="likes" /> : <img src={LikeIcon} alt="likes" />}
                      <h3>Curtidas ({likes})</h3>
                    </div>
                  </div>
                </div>
                </div>
)

export default ForumPost
        