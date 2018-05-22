import React, { Component } from 'react';
import Box from '../pages/box.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadColor} from '../../actions/productAction.js'; // Cannot understrand this...

class BoxContainer extends Component{
    render()
    {
        console.log("color ", this.props.color)
        return(
            <div> 
                <Box handleClick={this.props.loadColor} color={this.props.color}/>
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
        color: state.productsR.color
    }
};
export default connect(mapStateToProps, {loadColor})(BoxContainer);