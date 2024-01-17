import React from "react";

export const workTile = (props) => {

    return (
        <div
         style={{
            display: "flex",
            border: "2px solid magenta",
            flexDirection: "row",
            margin: "5px",
            padding: "5px",
         }}
         >
            <p style={{fontFamily: "verdana"}}>{props.albumId}</p>
            <p style={{fontFamily: "verdana"}}>{props.Id}</p>
            <p style={{fontFamily: "verdana"}}>{props.title}</p>
            <p style={{fontFamily: "verdana"}}>{props.url}</p>
            <p style={{fontFamily: "verdana"}}>{props.thumbnailUrl}</p>
         </div>
    )
}