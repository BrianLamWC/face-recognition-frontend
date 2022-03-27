import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            signInEmail: '',                  //initialize credentials
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
                                                                //functions to set credentials 
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://fathomless-chamber-64490.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},          //make a post request to server
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())                         //converts .json response into an object
        .then(user => {
            if (user.id) {                                        //if user id exists in the object then pass it to loadUser function and change route to 'Home' 
                this.props.loadUser(user);
                this.props.onRouteChange('Home');
            }
        })
        
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}               //Pass the event to onEmailChange function
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}             //Pass the event to onPasswordChange function
                                />
                            </div>
                        </fieldset> 
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignIn}                    //Calls onSubmitSignIn function that submits the current state of email and password
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib bw1" 
                            type="submit" 
                            value="Login"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                            onClick={() => onRouteChange('Register')}        //Change route to 'Register'
                            className="f6 link dim black db pointer">Register</p>  
                        </div>
                    </div>
                </main>
           </article>
        );
    }
}

export default Signin;
