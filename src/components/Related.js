import React from "react"

const Related = (props) => {
    return (
        <div>
            {/* {props.related.Icon.URL !== "" && <img src={props.related.Icon.URL}>} */}
            <a href={props.related.FirstURL}>{props.related.Text}</a>
        </div>
    );
}

export default Related;