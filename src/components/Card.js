import React from "react";
import Logo from "./Logo";

const Card = ({ user }) => {
    return (
        <div className="flex flex-col gap-2 my-6 shadow-2xl p-4">
            <h4 className="text-lg font-semibold">{user.name}</h4>
            <div className="flex gap-6">
                <Logo />
                {user.last_updated_at}
            </div>
            <div className="flex gap-6">
                <Logo />
                {user.location}
            </div>
            <div className="flex gap-6">
                <Logo />
                {user.gender}
            </div>
        </div>
    );
};

export default Card;
