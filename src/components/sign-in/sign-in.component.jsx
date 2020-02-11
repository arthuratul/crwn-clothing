import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignInComponent extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email}
                               label="Email"/>
                    <FormInput name="password" type="password" handleChange={this.handleChange}
                               value={this.state.password} label="Password"/>
                    <div className="buttons">
                        <CustomButton type="submit">
                            Submit Form
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignInComponent;
