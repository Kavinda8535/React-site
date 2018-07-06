import React, { Component } from 'react';
import SignupForm from './SignupForm';


export class Member extends Component{
    constructor(props){
        super(props);
        console.log("props", props)
        // this.memberId = props.signupId;
        // this.name = props.name;
        // this.email = props.email;
        // this.country = props.country; // Inted of these assigments we can use this.props.country.
        
        // The machanisum behind this is if we set something like this code <Member email={membr.email} memberId={membr.memberId} key={membr.key}/>
        // We are putting a property call "email" , "memberId", "Key" in to props in REACT.(React may automatically asssigin in to it.) IF we do same in redux also same thing happenning.
        // 
    }
    render(){
        return(
            <div className="list-group">
                <p className="list-group-item">{this.props.name} - {this.props.email} - {this.props.memberId} <button type="button" className="close" aria-label="Close"><span>&times;</span></button></p>
            </div>
        )
    }
}

class Members extends Component{
    constructor(props) {
        super(props);
        this.state = {
            members: //[this.props.members]
            [
                {name: "namatha", email: "namatha@gmail.com", memberId: 1530598179511, key: 1530598179511},
                {name: "samantha", email: "samantha@ymail.com", memberId: 1530598380759, key: 1530598380759},
                {name: "priyantha", email: "priyantha@ymail.com", memberId: 1530598380789, key: 1530598380789},
                {name: "udantha", email: "udantha@ymail.com", memberId: 1530598380779, key: 1530598380779}
            ]
        };
    }

    render(){
        return(
            <div>
                

                {
                    this.state.members.map((membr) => {
                        console.log("member",membr)
                        return(
                            <Member name={membr.name} email={membr.email} memberId={membr.memberId} key={membr.key}/>
                        )    
                    })
                    
                    
                    
                }
                
            </div>
        )
    }
}

export default Members;