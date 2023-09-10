import React from "react";
import Card from "./Card";

const List = ({ title, users }) => {
    console.log(users);
    return (
        <div className="md:w-[30%] lg:w-[30%]">
            <h1 className="text-4xl font-bold "> {title} </h1>{" "}
            <div>
                {" "}
                {users.map((e) => {
                    return (
                        <div key={e.id}>
                            <Card user={e} />{" "}
                        </div>
                    );
                })}{" "}
            </div>{" "}
        </div>
    );
};

export default List;
