import React from "react";

export const WorkTile = (props) => {

    return (
        <div
         style={{
            display: "flex",
            border: "2px solid magenta",
            borderRadius: 25,
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
            flexDirection: "column",
            margin: "20px",
            padding: "5px",
         }}
         >
            <p style={{fontFamily: "verdana", fontWeight: "bold"}}>{props.albumId}</p>
            <p style={{fontFamily: "verdana"}}>{props.Id}</p>
            <p style={{fontFamily: "verdana"}}>{props.title}</p>
            <p style={{fontFamily: "verdana"}}>{props.url}</p>
            <p style={{fontFamily: "verdana"}}>{props.thumbnailUrl}</p>
         </div>
    )
}