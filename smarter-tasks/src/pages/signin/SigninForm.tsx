import React from 'react';
// First we will import the API_ENDPOINT constant from the `config` folder
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string
    password: string
}
const SigninForm: React.FC = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    localStorage.setItem('authToken', "");
    localStorage.setItem('userData', "");

    // Then we will define the handle submit function
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data
        try {
            const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Sign-in failed');
            }

            console.log('Sign-in successful');

            // extract the response body as JSON data
            const _data = await response.json();


            // After successful signin, first we will save the token in localStorage
            localStorage.setItem('authToken', _data.token);
            localStorage.setItem('userData', JSON.stringify(_data.user));
            navigate("/account");


        } catch (error) {
            console.error('Sign-in failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input {...register("email", { required: true })} type="email" name="email" id="email" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                <input {...register("password", { required: true })} type="password" name="password" id="password" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.password && <span>This field is required</span>}
            </div>
            <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>
        </form>
    );
};

export default SigninForm;