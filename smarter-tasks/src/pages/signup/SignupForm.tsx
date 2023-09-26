import React from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    organisationName: string
    userName: string
    userEmail: string
    userPassword: string
}
const SignupForm: React.FC = () => {
    localStorage.setItem('authToken', "");
    localStorage.setItem('userData', "");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { organisationName, userName, userEmail, userPassword } = data

        try {
            const response = await fetch(`${API_ENDPOINT}/organisations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword }),
            });

            if (!response.ok) {
                throw new Error('Sign-up failed');
            }
            console.log('Sign-up successful');

            // extract the response body as JSON data
            const data = await response.json();

            // if successful, save the token in localStorage
            localStorage.setItem('authToken', data.token);
            navigate("/account");
            // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
        } catch (error) {
            console.error('Sign-up failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
                <input  {...register("organisationName", { required: true })} type="text" name="organisationName" id="organisationName" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.organisationName && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
                <input {...register("userName", { required: true })} type="text" name="userName" id="userName" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.userName && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input {...register("userEmail", { required: true })} type="email" name="userEmail" id="userEmail" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.userEmail && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                <input {...register("userPassword", { required: true })} type="password" name="userPassword" id="userPassword" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                {errors.userPassword && <span>This field is required</span>}
            </div>
            <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
        </form>
    );
};

export default SignupForm;