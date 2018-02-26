import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

import { request } from 'https';

//CROS - Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object.

class Movies extends Component {
  
    constructor(){
        super();
        this.state = {};
    }

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
        var url = " http://www.omdbapi.com?s=star&y=&r=json&plot=short&&apikey=52502553";
        Request.get(url).then((response)=>{
            this.setState({
                movies: response.body.Search,
                total: response.body.totalResults
                
            });
            
        });
    }

    componentDidUpdate()
    {
        // http://www.omdbapi.com/?i=tt3896198&apikey=52502553
        
    }
    componentWillReceiveProps(nextProps)
    {

    }
    componentWillUpdate(nextProps, nextState)
    {

    }
    componentWillUnmount()
    {

    }
  
  render() {
      var movies = _.map(this.state.movies, (movie) =>{
          return <li>{movie.Title}</li> ;
      });
    return (
        
           <div className="container-fluid">
            
            <h1>
              Movies Search here.
            </h1>

            <div>
                <input ref="textBox" type="text" />
                <ul>{movies}</ul>
            </div>

            <div>
             <button type="button" className="btn btn-primary">Search</button>
            </div>
           

           </div>
        
    );
  }
}

export default Movies;
