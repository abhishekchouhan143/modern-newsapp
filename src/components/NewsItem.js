import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, publishedAt, url, content, author } =
      this.props;
    return (
      <>
        <div className="card">
          <img src={!urlToImage?"https://image.cnbcfm.com/api/v1/image/107357433-1704989885576-gettyimages-1917729948-AFP_34EL3EN.jpeg?v=1728594314&w=1920&h=1080":urlToImage} alt="news images" />
          <div className="card-body">
            <p className="card-text"><strong>Author :- </strong>{author}</p>
            <p className="card-text"><strong>Date :- </strong>{publishedAt}</p>
            <h5 className="card-title"><strong>Title :- </strong> {title}</h5>
            <p className="card-text"><strong>Description :- </strong>{description}</p>
            <p className="card-text"><strong>Content :- </strong>{content}</p>
            <a href={url} target="_blanks" className="btn btn-sm btn-primary">
              Read More ...
            </a>
          </div>
        </div>
         
      </>
    );
  }
}
