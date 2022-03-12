import React from 'react';
import imageInSrc from "../firstimg.jpg"

export default function HomePage() {
  return (
    <div>
        <div style={{border:"solid 1px black",maxWidth:"100vw",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1 className="title red">Your name here</h1>
            <br />
            <div className='picture'>
                <img src={imageInSrc} alt="FirstImage" />
            </div>
            <div className='picture'>
                <img src="/secondimg.jpg" alt="SecondeImage"/>
            </div>
        </div>
        <video width="320" height="240" controls>
            <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  )
}
