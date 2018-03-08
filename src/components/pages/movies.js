import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

import { request } from 'https';

//CROS - Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object.

class Movies extends Component {
  
    constructor(){
        super();
        this.state = {
            query:"trek",
            currentMovieId: "tt2488496" // This is set for the default value in the dropdownbox.
        };
    }

    /// ************************************************************************************************
    /// Called the first time the component is loaded right before the component is added to the page...
    componentWillMount()
    {

        // console.log("componentWillMount");
        // var url = " http://www.omdbapi.com?s=star&y=&r=json&plot=short&&apikey=52502553";
        // Request.get(url).then((response)=>{
        //     this.setState({
        //         movies: response
                
        //     });
        // });
    }

    /// **********************************************************
    /// Called after the component has been rendered into the page
    componentDidMount()
    {
        /*
        ///
            componentDidMount is the best place to put API calls to fetch data.
            Using DidMount makes it clear that data won’t be loaded until after the initial render.
            If you ever need to render your app on the server (SSR/isomorphic/other buzzwords), componentWillMount will actually be called twice – once on the server, and again on the client – which is probably not what you want. Putting the data loading code in componentDidMount will ensure that data is only fetched from the client.
        ///
        */

        // console.log("response");
        this.search();
        
    }

    /// componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
    /// This method is not called for the initial render.
    componentDidUpdate()
    {
        // http://www.omdbapi.com/?i=tt3896198&apikey=52502553
        
    }
    /// **********************************************************
    /// Called when the props provide to the component are changed
    componentWillReceiveProps(nextProps)
    {

    }

    /// ****************************************
    /// Called whenthe props and/or state change
    componentWillUpdate(nextProps, nextState)
    {

    }

    /// *************************************
    /// Callled when the component is removed
    componentWillUnmount()
    {

    }

    updateSearch()
    {
        this.setState({query: this.refs.query.value})
        this.search(this.refs.query.value);
    }

    selectMovie()
    {
        this.setState({currentMovieId:this.refs.movieSelector.value})
        //console.log(this.refs.movieSelector.value);
    }
  
  render() {
      var movies = _.map(this.state.movies, (movie) => {
          return <li className="list-group-item" key={movie.imdbID}>{movie.Title}</li>;
      });

      var moviesOption = _.map(this.state.movies, (movie) => {
          return <option className="last" key={`option_${movie.imdbID}`} value={movie.imdbID}>{movie.Title}</option>;
      });

      var selectedMovie = _.find(this.state. movies, (movie) => {
          return movie.imdbID == this.state.currentMovieId;
      });

      var img;
      if(selectedMovie){
          img= <img src={selectedMovie.Poster} />
      }

    return (
        
        <div className="container-fluid">

            <div className="row">

                <h1>
                    Movies Search here.
            </h1>
            </div>

            <div className="row">

                <div class="col-sm">
                    <div>
                        {/* <input ref="query" onChange={ (e) => {this.updateSearch();}} type="text" defaultValue="matrix" value={this.state.query}/> */}
                        <input ref="query" onChange={(e) => { this.updateSearch(); }} type="text" value={this.state.query} />
                        <ul className="list-group list-group-flush">{movies}</ul>
                    </div>

                </div>

                <div class="col-sm">

                    <div className="row">
                        <select ref="movieSelector" value={this.state.currentMovieId} onChange={(e) => { this.selectMovie(); }}> {moviesOption}</select>
                    </div>

                    <div class="col-sm">
                        {img}
                    </div>


                    <div className="row">
                        <button type="button" className="btn btn-primary">Search</button>
                    </div>

                </div>

            </div>
        </div>
        
    );
  }

  search(query = "star")
  {
    var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short&&apikey=52502553`;
    Request.get(url).then((response)=>{
        this.setState({
            movies: response.body.Search,
            total: response.body.totalResults
            
        });
        
    });
  }
}

export default Movies;
