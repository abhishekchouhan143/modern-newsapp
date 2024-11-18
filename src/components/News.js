// news components

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    console.log("hello i am a constructor from news components");
    this.state = {
      articles: [],
      loading: true,
    };
  }
  // url async await fetch
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc21667ba8924ea29c357ba4fa823ff5&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  // buttons prev and next
  // previous button
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc21667ba8924ea29c357ba4fa823ff5&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  // Next button

  handleNextClick = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc21667ba8924ea29c357ba4fa823ff5&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center">
            <strong>Abp-News</strong> Top Headlines
          </h3>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    urlToImage={element.urlToImage}
                    author={element.author}
                    title={element.title}
                    description={element.description}
                    publishedAt={element.publishedAt}
                    content={element.content}
                    url={element.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                class="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; previous
              </button>
              <button
                type="button"
                class="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
