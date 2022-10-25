import React from 'react';
import { useForm } from "react-hook-form";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='mx-auto items-center justify-center flex'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card w-96 bg-base-100 shadow-md'>
                    <figure className=''>
                        <LazyLoadImage
                            src="https://placeimg.com/400/225/arch"
                            alt="Shoes"
                            loading='lazy'
                            // height={500}
                            // width={333}
                            // effect=""
                            placeholderSrc='https://placeimg.com/400/225/arch'
                        />
                    </figure>
                    <div className='card-body font-mono'>
                        <h3 className='text-2xl text-center'>
                            Login form
                        </h3>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Enter your ID</span>
                                <label className="label">
                                    <span className="label-text-alt">Alt label</span>
                                </label>
                            </label>
                            <input {...register("idName")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Enter your ID</span>
                                <label className="label">
                                    <span className="label-text-alt">Alt label</span>
                                </label>
                            </label>
                            <input {...register("password")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;