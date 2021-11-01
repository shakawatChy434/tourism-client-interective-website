import React from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { AiOutlineMail } from 'react-icons/ai';
import { FiUnlock } from 'react-icons/fi';
import { Link, useLocation, useHistory } from 'react-router-dom';
import googleIcon from '../../../images/google-sing-in.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/serviceConfirm';

    /* React hook form activities start */
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    /* React hook form activities end */

    const handlerGoogleLogin = () => {
        singInWithGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="bgImg-login">
            <div id="contact" className="col-sm-12 col-md-6 col-lg-3 ms-auto me-auto  add-contct" >
                <h3 className="text-white me-5">Log-In</h3>
                <form className="mt-4 me-5" onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-white"><AiOutlineMail /> Email </label> <br />
                    <input {...register("email", { required: true, maxLength: 20 })} placeholder="your email" /> <br />
                    <label className="text-white"><FiUnlock /> Password </label> <br />
                    <input {...register("password")} placeholder="password" type="password" /> <br /> <br />
                    <div className="col-lg-6 d-flex ms-5 ">
                        <input className="btn-submit px-4 ms-5 text-center " type="submit" />
                    </div>
                </form>
                <div className="mt-5 me-5">
                    <small className=' text-white me-2'>Create a new account ? </small>
                    <Link to="/register">
                        Sing-in
                    </Link>
                </div>
            </div>
            <div onClick={handlerGoogleLogin} className="googleIcon d-flex col-sm-12 col-md-6 col-lg-3 ms-auto me-auto  mt-5 ">
                <img src={googleIcon} alt="" />
                <h4 className="text-white mt-2 ms-4">Login With Google</h4>
            </div>
        </div>
    );
};
export default Login;









