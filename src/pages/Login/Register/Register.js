import React from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineMail } from 'react-icons/ai';
import { FiUnlock } from 'react-icons/fi';
import { FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="bgImg-login">
            <div id="contact" className="col-sm-12 col-md-6 col-lg-3 ms-auto me-auto  add-contct" >
                <h3 className="text-white">Create a new account</h3>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                    <label className="text-white"><FcManager /> Name </label>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="your name" />
                    <label className="text-white"><AiOutlineMail /> Email </label>
                    <input {...register("email", { required: true, maxLength: 20 })} placeholder="your email" />
                    <label className="text-white"><FiUnlock /> Password </label>
                    <input {...register("password")} placeholder="password" type="password" />
                    <label className="text-white"><FiUnlock /> Re-submit password </label>
                    <input {...register("password")} placeholder="re-submit password" type="password" />
                    <div className="col-lg-6 d-flex ms-5 ">
                        <input className="btn-submit px-4 ms-5 text-center " type="submit" />
                    </div>
                </form>
                <div className="mt-5 me-5">
                    <small className=' text-white'>Already have an account? </small>
                    <Link to="/login">
                        Log-in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;