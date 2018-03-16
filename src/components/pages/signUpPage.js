import React, { Component } from 'react';
import SignUpForm from "./SignupForm"

class SignUpPage extends Component 
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm />
                </div>
                <h3> Signup Here </h3>
            </div>
            
        );
    }
}

export default SignUpPage;