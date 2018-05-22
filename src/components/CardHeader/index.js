import React from "react";

const CardHeader = props => {
    return (
        <section class="card">
            <div class="card-header bg-transparent txt">
                {props.title}
            </div>
            {props.children}
        </section>
    )
}

export default CardHeader;