import React from 'react'
import './title-buttons.css'

const TitleButtons = () => {
    return (
        <div className="container">
            <div className='title-desc'>
                <h1 className='presentation'>
                    Full Stack Developer & Designer
                </h1>
                <p className='descripcion'>
                I am a Software Engineering student with experience in
                web and mobile development and design. I am always looking for new challenges
                and opportunities to learn new things.
                </p>
            </div>
            <div className="buttons-container">
                <button className="btn">Portfolio</button>
                <button className="btn">About Me</button>
                <button className="btn">Contact</button>
            </div>
        </div>
    )
}

export default TitleButtons