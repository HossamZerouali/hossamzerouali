import React from 'react';
import './title-buttons.css';

const TitleButtons = () => {
    const handleDownloadCVClick = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1vZCL22ZPMTJRDwkjVpOJytpPMpATX3Te';
    };

    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/hossam-zerouali-385643305/';
    };

    const handleGithubClick = () => {
        window.location.href = 'https://github.com/HossamZerouali';
    };

    return (
        <div className="container">
            <div className='title-desc'>
                <h1 className='presentation'>
                    Full Stack Developer & Designer
                </h1>
                <p className='descripcion'>
                I am a Software Engineering student with experience in
                web and mobile development and design. I am always looking for new challenges
                and opportunities to improve my skills.
                </p>
            </div>
            <div className="buttons-container">
                <button className="btn" onClick={handleDownloadCVClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:cloud-download.svg?color=white" alt="CV Icon" /> Download CV
                </button>
                <button className="btn" onClick={handleLinkedInClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:social-linkedin.svg?color=white"  alt="LinkedIn Icon" /> LinkedIn
                </button>
                <button className="btn" onClick={handleGithubClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:social-github.svg?color=white" alt="Github Icon" /> Github
                </button>
            </div>
            <div className="arrow-container">
                <img src="https://api.iconify.design/ep:bottom.svg?color=rgb(111, 184, 159)" className="down-arrow" alt="Scroll Down" />
            </div>
        </div>
    );
}

export default TitleButtons;
