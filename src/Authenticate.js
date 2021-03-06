import React from 'react';
import firebase from 'firebase';

class Authenticate extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: '',
            error: '',
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleEmailChange(e) {
       this.setState({email: e.target.value}); 
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value}); 
    }

    handleCreateUser() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            this.setState({error: error.message})
        });
    }
    handleLogIn() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            this.setState({error: error.message})
        });
    }

    render() {
        return (
            <form>
                <div> {this.state.error} </div>
                <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <button type="button" onClick={this.handleCreateUser}> New user </button>
                <button type="button" onClick={this.handleLogIn}> Login </button> 
            </form>
        );
    }
}

export default Authenticate;