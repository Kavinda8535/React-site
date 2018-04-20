import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';

class SighupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation:'',
            timeZone: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);        
    }

    onChange(e)
    {
        this.setState({[e.target.name]: e.target.value})
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
                    <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control"/>

                </div>

                <div className="form-group">
                    <label className="controle-label">Email</label>
                    <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control"/>

                </div>

                <div className="form-group">
                    <label className="controle-label">Password</label>
                    <input value={this.state.password} onChange={this.onChange} type="text" name="password" className="form-control"/>

                </div>

                <div className="form-group">
                    <label className="controle-label">Password Confirmation</label>
                    <input value={this.state.passwordConfirmation} onChange={this.onChange} type="text" name="passwordConfirmation" className="form-control"/>

                </div>

                <div className="form-group">
                    <label className="controle-label">Time Zone</label>
                    <select value={this.state.timeZone} onChange={this.onChange} type="text" name="timeZone" className="form-control">

                        <option value="" disabled>Choose your Timezone </option>
                        {options}
                    </select>

                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

export default SighupForm;