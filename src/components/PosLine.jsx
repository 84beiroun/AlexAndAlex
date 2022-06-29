import React from "react";

const PosLine = (props) => {
    return (
        <div><p>{props.pos.id}</p>
            <p>{props.pos.title}</p>
            <p>{props.pos.body}</p>
        </div>
    );
};
export default PosLine;
