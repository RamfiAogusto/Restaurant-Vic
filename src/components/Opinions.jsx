import React from "react";

function Opinions() {
    return (
        <div className="py-20 px-5 lg:px-20">
            <h2 className="text-5xl font-bold mb-5">
                What peoples say about us
            </h2>
            <p className="max-w-lg">
                The experiences of those who have visited us speak for
                themselves. Discover why we are the favorite destination for
                lovers of good cuisine.
            </p>
            <div className="flex justify-center items-center gap-7 mt-4 flex-wrap flex-col lg:flex-row lg:flex-nowrap">
                <div className="flex card shadow-xl w-96">
                    <div className="card-body  bg-base-100">
                        <div className=" flex gap-2">
                            <div className="avatar">
                                <div className="w-11 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="card-title">Card title!</h3>
                                <div className="flex gap-1">
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                </div>
                            </div>
                        </div>
                        <p>
                            A sublime gastronomic experience. The flavors
                            transported me to another world. I'll be back
                            without a doubt!
                        </p>
                    </div>
                </div>
                <div className="flex card shadow-xl w-96">
                    <div className="card-body  bg-base-100 ">
                        <div className=" flex gap-2">
                            <div className="avatar">
                                <div className="w-11 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="card-title">Card title!</h3>
                                <div className="flex gap-1">
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                </div>
                            </div>
                        </div>
                        <p>
                            Impeccable service and exquisite food. Every visit
                            is a delight for the senses.
                        </p>
                    </div>
                </div>
                <div className="flex card shadow-xl w-96">
                    <div className="card-body  bg-base-100 ">
                        <div className=" flex gap-2">
                            <div className="avatar">
                                <div className="w-11 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="card-title">Card title!</h3>
                                <div className="flex gap-1">
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                    <div className="mask mask-star-2 bg-yellow-500 w-4 h-4"></div>
                                </div>
                            </div>
                        </div>
                        <p>
                            A culinary oasis in the city. The attention to
                            detail in each dish is astonishing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opinions;
