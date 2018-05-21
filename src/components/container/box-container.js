import React, { Component } from 'react';
import Box from '../pages/box.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/productAction.js'; // Cannot understrand this...

class BoxContainer extends Component{
    render()
    {
        return(
            <div> 
                <Box color={this.props.color}/>
            </div>
        )
    }
}

// const BoxContainer = () => (

//     <div>
//         <Box color={this.props.color}/>
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
};
export default connect(mapStateToProps, actionCreators)(BoxContainer);