import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get('https://abrahamamani.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
        
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
            <button className="btn" onClick={() => this.handleFilter("JavaScript")}>
              JavaScript
            </button>
            <button className="btn" onClick={() => this.handleFilter("Python")}>
              Python
            </button>
            <button className="btn" onClick={() => this.handleFilter("Other")}>
              Other
            </button>
            <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
              All
            </button>
        
          
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
        
    
    );
  }
}

    // state = class based component will not work in a functional component
    // Lifecycle hooks tools to help you with events= you need to use class based
    // to just render content than a functional component is the way to go
    // if you know you are going to use state=dynamic data and update it in component and react to changes=probably need to use class based
    // to want to just render content use functional component
    // (portfolio-item is just being passed data)
    //class based component performs operations and all the data it is managing
    ////constructor//////
    //constructor lets you set up processes-setting data
    //constructor allows you to to set an initial state and set a custom function
    //constructor lets you set up processes-setting data
    //constructor allows you to to set an initial state and set a custom function
    //you can only put a cunstortor in a class component(built in name is js)
    //(super call= when ever we are extending another class component, it has different functions we have to bring in, in JS we have to use the super word, tells the class component you want access to them)=go up to parent class, then bring in all of it
    //constructor is where you place the initial state
    //instantiated=creating a class and making a real version of it-then renders it on the page