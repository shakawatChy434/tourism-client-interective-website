import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'
import { GrLocation, GrUserManager } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FiUnlock, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="bgImg">
            <div id="contact" className="col-sm-12 col-md-6 col-lg-3 ms-auto me-auto  add-contct" >
                <div className="bg-primary py-4 rounded-3">
                    <small className='text-warning'>Contact Us</small>
                    <h3 className='text-black'>If You Have Any Question <br /> Drop A Message..!!!</h3>
                </div>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="#"><GrUserManager /> Name : </label>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="your name" />
                    <label htmlFor="#"><AiOutlineMail /> Email: </label>
                    <input {...register("email", { required: true, maxLength: 20 })} placeholder="your email" />
                    <label htmlFor="#"><FiUnlock /> Password: </label>
                    <input {...register("password")} placeholder="password" type="password" />
                    {/* <input {...register("password")} placeholder="resubmit-password" type="password" /> */}
                    <label htmlFor="#"><FiPhoneCall /> Contact No : </label>
                    <input type="number" {...register("#")} placeholder="your mobile no" />
                    <label htmlFor="#"><BsChatLeftText /> Description: </label>
                    <textarea  {...register("name", { required: true, maxLength: 20 })} placeholder="Type what you want to know...!!!!!!!" />
                    <div className="col-lg-6 d-flex ms-5 ">
                        <input className="btn-submit px-4 ms-5 text-center " type="submit" />
                    </div>

                </form>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-12  add-contct d-flex mt-5 ">
                <div className="d-flex  icon-details">
                    <GrLocation className="icon mt-5" />
                    <h5 className="ms-2 mt-5 text-black ms-2 ">1532 Robinson Lane Jackson <br /> OH 3590 </h5>  <br />
                </div>
                <div className="d-flex ms-4 icon-details">
                    <RiCustomerService2Line className="icon mt-5 ms-2" />
                    <h5 className="ms-2 mt-5 text-black ">(+1) 740-396-3276 <br /> (+1) 740-873-65382</h5>
                </div>
                <div className="d-flex ms-4 icon-details">
                    <MdAlternateEmail className="icon mt-5 ms-2" />
                    <h5 className="ms-2 mt-5 text-black ">
                        help@turista.com <br /> info@turista.com
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;