import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Box extends Component{
    render()
    {
        console.log("color ", this.props)
        return(
            
            <div style={{backgroundColor:`${this.props.color}`, minBlockSize:10}}> 
                <button onClick={()=> {this.props.handleClick()}}> Change Color </button>
            </div>
        )
    }
}

// const Box = () => (

//     <div> 
//          <button type="button" className="btn btn-light btn-outline-dark"> Change Color </button>
//      </div>
// );

// function mapStateToProps(state)
// {
//     return {color: state.color}
// }

// function matchDispatchToProps(dispatch)
// {
//     return bindActionCreators()
// }

 export default Box;
