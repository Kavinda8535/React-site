import React, { Component } from 'react';
import SignUpForm from "./SignupForm";
import Members from "./Members";

class SignUpPage extends Component 
{
    render()
    {
        return(

            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h3> Signup Here </h3>
                    <SignUpForm />
                </div>

                <div className= "col-md-2">
                </div>

                <div className="col-md-6 col-md-offset-4">
                <h3> Member List </h3>
                    <Members/>
                </div>
                
            </div>
            </div>
            
            
        );
    }
}

export default SignUpPage;