import React from 'react';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state= {                                                   //initialize credentials
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {                                    //functions to set credentials 
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://fathomless-chamber-64490.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,                //make a post request to server
                name: this.state.name
            })
        })
        .then(response => response.json())                 //converts .json response into an object
        .then(user => {
            if (user.id) {                                //verification done at server
                this.props.loadUser(user)                 //if user id exists in the object then pass it to loadUser function and change route to 'Home'
                this.props.onRouteChange('Home');         
            }
        })
        
    }

    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.onNameChange}    //Pass the event to onNameChange function
                                />       
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}    //Pass the event to onEmailChange function
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}   //Pass the event to onPasswordChange function
                                />
                            </div>
                        </fieldset> 
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignIn}           //Calls onSubmitSignIn function that submits the current state of name, email and password
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib bw1" 
                            type="submit" 
                            value="Register"
                            />
                        </div>
                    </div>
                </main>
           </article>
        );
    }
    
}

export default Register;
