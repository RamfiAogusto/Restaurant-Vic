import React from "react";

function ContactUs() {
    return (
        <div className="p-20" >
            <div className="flex justify-center gap-16">
                <div className="max-w-xs  p-2 w-1/3">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
                {/* ------------- */}
                <div className="p-2 w-1/3">
                    <h3 className="text-3xl font-bold mb-4" >Contact us</h3>
                    <h4 className="mb-2 text-xl">Contact us in a convenient way:</h4>
                    <span className="text-lg">Phone:</span>
                    <p className="mb-2">809-809-8099</p>
                    <span className="text-lg">schedule:</span>
                    <p className="mb-2">8:30 - 23:00</p>
                    <button className="btn btn-primary">Send mail</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
