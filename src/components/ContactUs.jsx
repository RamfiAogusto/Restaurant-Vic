import React from "react";
import vegpicados1 from "../assets/imgVegetales/vegPicados1.png";
import cebolla1 from "../assets/imgVegetales/cebolla1.png";
function ContactUs() {
    return (
        <div className="px-2 py-20 lg:px-20 relative overflow-hidden" >
            <img src={vegpicados1} className="absolute -z-10 -right-60 w-96 lg:right-0 " />
            <img src={cebolla1} className="absolute w-96 -left-60 lg:-left-20 bottom-0 -rotate-90" />
            <div className="flex justify-center items-center gap-16 flex-col lg:flex-row">
                <div className="max-w-xs w-2/3 p-2 lg:w-1/3">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">
                                What is your email?
                            </span>
                            
                        </div>
                        <input
                            type="mail"
                            placeholder="Mail"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    {/* ----------phone------ */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">
                                What is your Phone number?
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    {/* ---------message------- */}
                    <textarea
                        className="textarea textarea-bordered w-full max-w-xs mt-4"
                        placeholder="What is your Message"
                    ></textarea>
                    {/* --------button send--- */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>
                {/* ------------- */}
                <div className="p-2 w-2/3 lg:w-1/3">
                    <h2 className="text-3xl font-bold mb-4" >Contact us</h2>
                    <h4 className="mb-2 text-xl">Contact us in a convenient way:</h4>
                    <span className="text-lg dorado font-semibold">Phone:</span>
                    <p className="mb-2">809-809-8099</p>
                    <span className="text-lg dorado font-semibold">schedule:</span>
                    <p className="mb-2">8:30 - 23:00</p>
                    <button className="btn btn-primary">Go to mail</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
