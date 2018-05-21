import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

import { request } from 'https';

//CROS - Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object.

class Movies extends Component {

    constructor() {
        super();
        this.state = {
            query: "trek",
            currentMovieId: "tt0796366" // This is set for the default value in the dropdownbox.
        };
    }

    search(query = this.state.query) {
        var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short&&apikey=52502553`;
        Request.get(url).then((response) => {
            let movies = response.body.Search;
            this.setState({
                movies: response.body.Search,
                total: response.body.totalResults,
                currentMovieId: (movies && movies[0]) ? movies[0].imdbID : 'tt0796366'

            });

        });
    }

    /// ************************************************************************************************
    /// Called the first time the component is loaded right before the component is added to the page...
    componentWillMount() {

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
    componentDidMount() {
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
    componentDidUpdate() {
        // http://www.omdbapi.com/?i=tt3896198&apikey=52502553

    }
    /// **********************************************************
    /// Called when the props provide to the component are changed
    componentWillReceiveProps(nextProps) {

    }

    /// ****************************************
    /// Called whenthe props and/or state change
    componentWillUpdate(nextProps, nextState) {

    }

    /// *************************************
    /// Callled when the component is removed
    componentWillUnmount() {

    }

    updateSearch = (e) => {
        // this.setState({ query: this.refs.query.value })
        this.setState({ query: e.target.value }, this.search(e.target.value));
        //this.search({query: e.target.value});
        //this.selectMovie();
        // let movies = (this.state.movies) ? this.state.movies : []

        //this.setState({ currentMovieId: movies[0] });
        //this.setState({currentMovieId:this.refs.movieSelector.value})
        //console.log("Calling updateSearch", movies[0], "ref movieSelector", this.refs.movieSelector.value);
    }

    selectMovie() {
        this.setState({ currentMovieId: this.refs.movieSelector.value })
        //console.log("selectMovie",this.refs.movieSelector.value);
        //this.setState({currentMovieId:this.refs.movieSelector.value})
    }

    render() {
        var movies = _.map(this.state.movies, (movie, i) => {
            //console.log("movie.imdbID", movie.imdbID);trek
            return <li className="list-group-item" key={movie.imdbID + i}>{movie.Title}</li>;
        });

        var moviesOption = _.map(this.state.movies, (movie, i) => {
            //console.log("moviesOption.imdbID", movie.imdbID);
            return <option className="last" key={`option_${movie.imdbID + i}`} value={movie.imdbID}>{movie.Title}</option>;
        });

        var selectedMovie = _.find(this.state.movies, (movie) => {
            //console.log("selectedMovie",this.state.currentMovieId, "imdID -", movie.imdbID , "movie.imdbID == this.state.currentMovieId", movie.imdbID == this.state.currentMovieId)

            return movie.imdbID == this.state.currentMovieId;
        });

        var img;
        //console.log("img selectedMovie",selectedMovie )
        if (selectedMovie) {
            img = <img src={selectedMovie.Poster} />
        }

        return (

            <div className="container-fluid">

                <div className="row ml-4">

                    <h1>
                        Movies Search here
                    </h1>
                </div>

                <div className="row ml-2">

                    <div className="col-sm">
                        <div className="mb-2">
                            {/* <input ref="query" onChange={ (e)now => {this.updateSearch();}} type="text" defaultValue="matrix" value={this.state.query}/> */}
                            <input ref="query" onChange={(e) => { this.updateSearch(e); }} type="text" value={this.state.query} />
                            <ul className="list-group list-group-flush">{movies}</ul>
                        </div>

                    </div>

                    <div className="col-sm">
    
                    <div className="row mb-2 ml-3">
                            <select ref="movieSelector" value={this.state.currentMovieId} onChange={(e) => { this.selectMovie(); }}> {moviesOption}</select>
                        </div>
                        <div className="col-sm">
                            {img}
                        </div>


                        <div className="row mt-2 ml-3">
                            <button type="button" className="btn btn-dark btn-outline-dark">Search</button>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default Movies;
