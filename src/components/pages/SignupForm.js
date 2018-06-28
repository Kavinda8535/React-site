import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';
import { connect } from "react-redux";
import { setUserNamePassword } from "../../actions/signUpAction"

export class Password extends Component
{
    constructor(props){
        super(props);
        this.state = {
        pwtype: 'input'
        }
        this.showHide = this.showHide.bind(this);
    }

    showHide(e)
    {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            //type: this.state.type === 'input' ? 'password' : 'input',
            pwtype: this.state.pwtype === 'input' ? 'password' : 'input'
        })
    }

    onChange=(e)=>
    {
        this.props.setUserNamePassword(e.target.value)
    }

    render(){
    return(
        <div className="input-group">
        {/* {console.log("retype", this.state.repwtype)} */}
            <input value={this.state.password} onChange={this.onChange} type={this.state.pwtype} name="password" className="form-control" placeholder="Enter password" />
            <span className="input-group-btn">
                <button className="btn btn-default reveal" type="button" onClick={this.showHide}>{this.state.pwtype === 'input' ? 'Hide' : 'Show'}<i className="glyphicon glyphicon-eye-open"></i></button>
            </span>
        </div>
        )

    }


}

export class ReEnterPassword extends Component
{
    constructor(props){
        super(props);
        this.state = {
        repwtype: 'input'
        }
        this.showHide = this.showHide.bind(this);
    }

    showHide(e)
    {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            //type: this.state.type === 'input' ? 'password' : 'input',
            repwtype: this.state.repwtype === 'input' ? 'password' : 'input'
        })
    }

    render(){
        return(
            <div className="input-group">
            {/* {console.log("retype", this.state.repwtype)} */}
                <input value={this.state.passwordConfirmation} onChange={this.onChange} type={this.state.repwtype} name="passwordConfirmation" className="form-control" placeholder="Re-enter password" />
                <span className="input-group-btn">
                    <button className="btn btn-default reveal" type="button" onClick={this.showHide}>{this.state.repwtype === 'input' ? 'Hide' : 'Show'}<i className="glyphicon glyphicon-eye-open"></i></button>
                </span>
            </div>
            )
    
        }

}

class SighupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation:'',
            timeZone: '',
            type: 'input',
            score: 'null'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showHide = this.showHide.bind(this);
        //this.passwordStrength = this.passwordStrength.bind(this);
    }

    showHide(e)
    {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            //type: this.state.type === 'input' ? 'password' : 'input',
            repwtype: this.state.repwtype === 'input' ? 'password' : 'input'
        })
    }

    // passwordStrength(e)
    // {
    //     if(e.target.value === '')
    //     {
    //         this.setState({
    //             score: 'null'
    //         })
    //     }
    //     else
    //     {
    //         var pw = zxcvbn(e.target.value);
    //         this.setState({
    //             score: pw.score
    //         });
    //     }
    // }

    onChange(e)
    {
        //this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e)
    {
        e.preventDefault();
        console.log("submit state:", this.state);
    }

    render(){
        const options = map(timezones, (val, key) => 
        <option key={val} value={val}> {key} </option>
        );
        return(
            <form className="ml-2" onSubmit={this.onSubmit}>
                <h1>Welome to join community</h1>

                <div className="form-group">
                    <label className="controle-label">Username</label>
                    <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control" placeholder="ABC123@gmail.com"/>

                </div>

                <div className="form-group">
                    <label className="controle-label">Email</label>
                    <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control" placeholder="Email Address"/>
                </div>

                <div className="form-group">
                    <label className="controle-label" placeholder="Enter password">Password</label>
                    <Password setUserNamePassword={this.props.setUserNamePassword}/>

                    {/* <div className="input-group">
                        <input value={this.state.password} onChange={this.onChange} type={this.state.type} name="password" className="form-control" placeholder="Enter password">
                        </input>
                     
                        <span className="input-group-btn">
                            <button className="btn btn-default reveal" type="button" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}<i className="glyphicon glyphicon-eye-open"></i></button>
                        </span>
                    </div> */}
                    

                </div>

                <div className="form-group">
                    <label className="controle-label">Password Confirmation</label>
                    <ReEnterPassword/>
                    {/* <div className="input-group">
                    {console.log("retype", this.state.repwtype)}
                        <input value={this.state.passwordConfirmation} onChange={this.onChange} type="password" name="passwordConfirmation" className="form-control" placeholder="Re-enter password" />
                        <span className="input-group-btn">
                            <button className="btn btn-default reveal" type="button" onClick={this.showHide}>{this.state.repwtype === 'input' ? 'Hide' : 'Show'}<i className="glyphicon glyphicon-eye-open"></i></button>
                        </span>
                    </div> */}

                </div>

                <div className="form-group">
                    <label className="controle-label">Time Zone</label>
                    <select value={this.state.timeZone} onChange={this.onChange} type="text" name="timeZone" className="form-control">

                        <option value="" disabled>Choose your Timezone </option>
                        {options}
                    </select>
                </div>

                <div className="form-setUserNamegroup">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {setUserNamePassword})(SighupForm);