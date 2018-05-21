import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Box extends Component{
    render()
    {
        return(
            <div> 
                <button> Change Color </button>
            </div>
        )
    }
}

// const Box = () => (

//     <div> 
//          <button type="button" className="btn btn-light btn-outline-dark"> Change Color </button>
//      </div>
// );

function mapStateToProps(state)
{
    return {box: state.box}
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators()
}

export default connect(mapStateToProps)(Box);