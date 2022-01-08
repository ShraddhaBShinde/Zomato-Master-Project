import React from "react";

import DeliveryFoodCategory from "./DeliveryfoodCategory";

const DeliveryCarousal = () => {
    return (
        <>
        <h1 className="text-xl font-semibold my-3">Order Food Online</h1>
        <div className="flex flex-wrap justify-between gap-3">
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
        </div>
        </>
    )
};

export default DeliveryCarousal;