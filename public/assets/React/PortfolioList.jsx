import React from "react";


export default function PortfolioList(props){



    return(
        <div className = "portfolio">
            <h3>Project Name: {props.name}</h3>
            <p>Technologies Used: {props.framework}</p>
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


{/* <article>
									<header>
										<span class="date">April 24, 2017</span>
										<h2><a href="#">Sed magna<br />
										ipsum faucibus</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
									<ul class="actions special">
										<li><a href="#" class="button">Full Story</a></li>
									</ul>
								</article> */}