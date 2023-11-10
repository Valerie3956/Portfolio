import React from "react";


export default function PortfolioList(props){



    return(
        <div className = "portfolio">
            <h3>Project Name: {props.name}</h3>
            <p>Framework: {props.framework}</p>
            <div className = "links">
{  props.live &&  <a href = {props.live} className = "github">View Live</a>}
<a href = {props.link} className = "github">See on Github</a>
            </div>
<div>
<img src = {props.img1} className = "portfolio--image" ></img>
<img src = {props.img2} className = "portfolio--image" ></img>
<img src = {props.img3} className = "portfolio--image" ></img>
</div>
        </div>
    )
}