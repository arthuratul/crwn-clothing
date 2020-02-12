import React from 'react';
import './sign-up.styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export class SignUpComponent extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleSubmit = async (event) => {

        event.preventDefault();

        const { email, password, confirmPassword, displayName } = this.state;

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (e) {
            console.log('Error', e.message);
        }
    };

    handleChange = (event) => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I donot have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        value={this.state.displayName}
                        name='displayName'
                        handleChange={this.handleChange}
                        label="Name"
                        required
                    />
                    <FormInput
                        type="email"
                        value={this.state.email}
                        name='email'
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        value={this.state.password}
                        name='password'
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        value={this.state.confirmPassword}
                        name='confirmPassword'
                        handleChange={this.handleChange}
                        label="Confirm password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}
