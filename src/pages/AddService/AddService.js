import React from 'react';
import { useForm } from 'react-hook-form';
import { FcManager } from 'react-icons/fc';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('https://mysterious-plains-45538.herokuapp.com/services', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Service added");
                    reset();
                }
            })

    }
    return (
        <div className="bgImg-login">
            <div id="contact" className="col-sm-12 col-md-6 col-lg-3 ms-auto me-auto  add-contct" >
                <h3 className="text-white">Add Service</h3>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                    <label className="text-white"><FcManager /> Name </label><br />
                    <input {...register("name")} placeholder="your name" /> <br />

                    <label className="text-white"><FcManager /> Image Url </label><br />
                    <input {...register("img")} placeholder="img url" /> <br />

                    <label className="text-white"><FcManager /> Price </label><br />
                    <input {...register("amount")} placeholder="your amount" /> <br />


                    <label className="text-white"><FcManager /> Description </label><br />
                    <textarea {...register("description")} placeholder="your text" /> <br /> <br /> <br />


                    <div className="col-lg-6 d-flex ms-5 ">
                        <input className="btn-submit px-4 ms-5 text-center " type="submit" /> <br />
                    </div> <br />
                </form> <br />
            </div>
        </div>
    );
};

export default AddService;