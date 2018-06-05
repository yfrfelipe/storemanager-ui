import React from "react";

const CardHeader = props => {
    return (
        <section className="card">
            <div className="card-header bg-transparent txt">
                {props.title}
            </div>
            {props.children}
        </section>
    )
}

export default CardHeader;