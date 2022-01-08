import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {GiScooter, GiForkKnifeSpoon} from "react-icons/gi"
import {IoBeerOutline} from "react-icons/io5";

const MobileTab = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id:"delivery",
            icon:<GiScooter />,
            name:"Delivery",
            isActive: false
        },
        {
            id:"dining",
            icon:<GiForkKnifeSpoon />,
            name:"Dining Out",
            isActive: false
        },
        {
            id:"night",
            icon:<IoBeerOutline />,
            name:"Night Life",
            isActive: false
        }
    ]);

    const {type} = useParams();
    return(
        <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-grey-500 border">
            {allTypes.map((items)=>(
                <Link to={`/${items.id}`}>
                    <div
                    className={
                        type===items.id
                        ? "flex flex-col items-center text-xl relative text-red-700"
                        : "flex flex-col items-center text-xl"

                    }
                    >
                        <div 
                        className={
                            type===items.id && "absolute -top-3 w-full h-2 border-t-2 border-red-700"
                        }
                        />
                        {items.icon}
                        <h5 className="text-sm">{items.name}</h5>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
};

const FoodTab = () => {
    return (
        <>
        <div>
            <MobileTab />
        </div>
        </>
    );
};

export default FoodTab;