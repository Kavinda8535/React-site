import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';
import { connect } from "react-redux";
import { setUserNamePassword, setReEnterPassword, setFormData, setMembersDataToList } from "../../actions/signUpAction";
import { DB_CONFIG } from "../../config/firebase";
import firebase from "firebase/app";
import "firebase/database";
//import * as firebase from "firebase";

//export default !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();

export class Password extends Component
{
    constructor(props){
        super(props);
        this.state = {
        pwtype: 'password'
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
        //this.props.setFormData('password', e.target.value)
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
        repwtype: 'password'
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

    onChange=(e)=>
    {
        this.props.setReEnterPassword(e.target.value) // setting the re-entered password values to redux store.
        //this.props.setFormData('confirmPassword', e.target.value);
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
            score: 'null',
            signupId: '',
            members: []
        }
        //this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //this.onClick = this.onClick.bind(this);
        //this.showHide = this.showHide.bind(this);
        //this.passwordStrength = this.passwordStrength.bind(this);
        this.addMembers = this.addMembers.bind(this);
        this.removeMember = this.removeMember.bind(this);

        // if(!firebase.apps.length){
        //     console.log("initialize ")
        //     this.app = firebase.initializeApp(DB_CONFIG);
        // }
        // else
        // {
        //     firebase.app();
        // }
        this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();

        //console.log("app ",this.app);
        this.database = this.app.database().ref().child('members');
        
    }

    componentWillMount(){
        //const previousMembers = [...this.props.members] !== null || undefined ? [...this.props.members] : '' ;

        let existingMembers = firebase.database().ref("members/");
        const previousMembers = this.state.members;
        //DataSnapshot object
        //let existingMembers = this.database.ref().child("members/");
        existingMembers.on('child_added', function(data){
           // console.log(data.val());
            let arry = data.val()
           // arry = arry.map((m)=>{return m.member})sdsdfsdfsf
           console.log("data.val()",arry.member);
           previousMembers.push(arry.member);
            //this.loadexisitingMembers(data.val());
            
        })
        this.setState({
            members : previousMembers
            } //,()=>{ console.log("after==== ", this.state.members);} <=== This is callback. You can see what set to the state by doing this.
    
        )
    }

    // showHide(e)
    // {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     this.setState({
    //         //type: this.state.type === 'input' ? 'password' : 'input',
    //         repwtype: this.state.repwtype === 'input' ? 'password' : 'input'
    //     })
    // }

    // pemailmembers
    // {emailmembers
    //     ifmembers
    //     {
    //       members
    //       members
    //       members
    //     }
    //     elmembers
    //     {
    //         var pw = zxcvbn(e.target.value);
    //         this.setState({
    //             score: pw.score
    //         });signupId
    //     }
    // }

    // onChange(e)addMembersstate
    // {members
    //  members]: addMembersstate
    //  members', addMembers
    // }members

    addMembers(m)
    {
         const previousMembers = [...this.state.members];

        // IF we set this member when the its push into the DB it will get as member variable as the KEY. Others are values.
        let member = { 
            password: m.password,
            confirmPassword: m.confirmPassword,
            username: m.username,
            email: m.email,
            timeZone: m.timeZone,
            signupId: m.signupId,
         }
         
         // In below after the state is set then oush inito the DB.This code can be write as below * mark commented place.
         previousMembers.push(member);
         this.setState({
             members : previousMembers
         },()=>{
            this.database.push().set({member})
         }//,() => {
        //     this.database.on('child_added', snap => {
        //         previousMembers.push({
        //             id: snap.key,
        //             members: snap.val().members
                    
        //         })
        //         console.log("DB_Data ", previousMembers)
        //     })
        // }, () => {
        //     this.setState({
        //         member : previousMembers
        //     })
        // }
        )
        
        /*************************** */
        /*
            this.database.push().set( member : {
                password: m.password,
                confirmPassword: m.confirmPassword,
                username: m.username,
                email: m.email,
                timeZone: m.timeZone,
                signupId: m.signupId,
            })

            previousMembers.push(m);
            this.setState({
             members : previousMembers
            }

        */

         //this.state.members.push(m);
         console.log("addM_Membrs ", previousMembers);
         
    }

    removeMember(mId)
    {
        this.database.child(mId).remove();
    }

    // we dont wnat to bind from above if we write the removeMember(mId) method like below
    // removeMember = (mId) =>
    // {
    //     this.database.child(mId).remove();
    // }


    onClick(e)
    {
        console.log("onclick state:", this.props.signupState);
    }

    onSubmit(e)
    {
        e.preventDefault();
        console.log("submit state:", this.props.membersState);
        this.addMembers(this.props.signupState);
    }

    setDDData = (value) => {
             this.setState({timeZone:value})
    }

    render(){
        //console.log("mRenderInSide ", this.state.members);

        const options = map(timezones, (val, key) => 
        <option key={val} value={val}> {key} </option>
        );
        return(
            <form className="ml-2" onSubmit={this.onSubmit}>
                <h2>Welome to join community</h2>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input onChange={(e) => {
                        this.props.setFormData('username', e.target.value);
                    }} type="text" name="username" className="form-control" placeholder="ABC123@gmail.com"/>

                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input onChange={(e) => {
                        this.props.setFormData('email', e.target.value);
                    }} type="text" name="email" className="form-control" placeholder="Email Address"/>
                </div>

                <div className="form-group">
                    <label className="control-label" placeholder="Enter password">Password</label>
                    <Password setUserNamePassword={this.props.setUserNamePassword}/>

                    {/* <div className="inpusignupIdt-group">
                        <input value={this.ssignupIdtate.password} onChangsignupStatee={this.onChange} type={this.state.type} name="password" className="form-control" placeholder="Enter password">
                        </input>signupStatesignupId
                     signupStatesignupId
                        <span className="input-                        this.props.setMembersDataToList(this.state.members);
group-btn">
                            <button className="btn btn-default reveal" type="button" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}<i className="glyphicon glyphicon-eye-open"></i></button>
                        </span>
                    </div> */}
                    

                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <ReEnterPassword setReEnterPassword={this.props.setReEnterPassword}/>
                    {/* <div className="input-group">
                    {console.log("retype", this.state.repwtype)}
                        <input value={this.state.passwordConfirmation} onChange={this.onChange} type="password" name="passwordConfirmation" className="form-control" placeholder="Re-enter password" />
                        <span className="input-group-btn">
                            <button className="btn btn-default reveal" type="button" onClick={this.showHide}>{this.state.repwtype === 'input' ? 'Hide' : 'Show'}<i className="glyphicon glyphicon-eye-open"></i></button>
                        </span>
                    </div> */}

                </div>

                <div className="form-group">
                    <label className="control-label">Time Zone</label>

                     <select value={this.state.timeZone} onChange={(e)=> {
                    this.props.setFormData('timeZone', e.target.value);   
                    this.setDDData(e.target.value);     
                    }} type="text" name="timeZone" className="form-control">

                        <option value="" disabled>Choose your Timezone </option>
                        {options}state
                    </select>
                </div>

                <div className="form-setUserNamegroup">
                    <button className="btn btn-primary btn-lg" onClick={(e)=>{
                        this.props.setFormData('signupId', Date.now());
                        this.props.setMembersDataToList(this.state.members);
                    }}>
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}


const mapStateToProps = (state) => ({
     signupState : state.signup,
     membersState : state.signup.members
})

export default connect(mapStateToProps, {setUserNamePassword, setReEnterPassword, setFormData, setMembersDataToList})(SighupForm);