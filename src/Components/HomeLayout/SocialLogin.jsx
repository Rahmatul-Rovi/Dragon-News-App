import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Social login</h2>
            <div className='grid grid-cols-1 gap-3'>
                <button className='btn btn-secondary btn-outline w-full'><FcGoogle size={24} /> Login with Google</button>
                 <button className='btn btn-primary btn-outline w-full'><FaGithub size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;