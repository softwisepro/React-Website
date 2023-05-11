import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import background_image from '../assets/background-home-image.jpg';
import { GoogleLogin } from '@react-oauth/google';
import { client } from '../client';

export const Login = () => {
    
    const navigate = useNavigate();


    const onSuccess = (response) => {
        //console.log(response);
         const userObject = jwt_decode(response.credential);
         //console.log(userObject);
         localStorage.setItem('user', JSON.stringify(userObject));
         const { name, sub, picture } = userObject;
         const doc = {
           _id: sub,
           _type: 'user',
           userName: name,
           image: picture,
         };
         client.createIfNotExists(doc).then(() => {
           navigate('/', { replace: true });
         });
     
       }

    const onFailure = (response) => {
        console.log("LOGIN FAILED! res: ", response);
    }

    return (
        <div className='h-screen flex justify-start items center flex-col'>
            <div className='relative w-full h-full'>
                <img
                    src={background_image}
                    alt='Pixgram'
                    className='w-full h-full object-cover'
                />

                <div className='absolute flex flex-col items-center justify-center top-0 left-0 right-0 bottom-0 home'>
                    <div className='p-5 cursor-pointer opacity-90'>
                        <h1 className='text-white text-3xl mx-auto'>pixgram</h1>
                    </div>

                    <div className='shadow-2xl'>
                        <GoogleLogin
                            buttonText='Sign Up with Google'
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login