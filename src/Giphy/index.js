import React, { Component } from 'react';
import DisplayGiphy from './DisplayGiphy';
import SearchGiphy from './SearchGiphy';

class Giphy extends Component {
  constructor(){
    super();
    this.state = {
      giphyData: [],
      giphyState: false,
    }
  }

  getGiphy = async (e) => {
    e.preventDefault();

    const search = e.target.elements.search.value;
    console.log(search);

    try {
      const giphy = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&limit=20&api_key=WtnalXjzVokzCR138YmcmfhJY0t2aLPZ`);
      const giphyJson = await giphy.json();

      this.setState({
        giphyData: giphyJson
      })
    }
    catch(err) {
      return err;
    }
  }
  handleClick = (e) => {
    e.preventDefault();

    if (this.state.giphyState) {
      this.setState({
        giphyState: false
      })
    } else {
      this.setState({
        giphyState: true
      })
    }


    console.log(this.state.giphyState);
  }


  render(){
    return(
      <div>
        <button onClick={this.handleClick}>GIPHY</button>
        {this.state.giphyState ? <SearchGiphy searchData={this.getGiphy} /> : null}
        {this.state.giphyData.data ? < DisplayGiphy giphyData={this.state.giphyData.data} /> : null}

      </div>
    );
  }
}

export default Giphy;
