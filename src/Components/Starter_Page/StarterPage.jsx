import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './StarterPage.css';  // Adjusted path for styles

const StarterPage = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');  // Navigate to the correct signup route
    };

    return (
        <>
            <button className='redirectBtnleft'>LOGO</button>

            <button onClick={handleSignupClick} className="redirectBtn">Get Started &#10137;</button>

            <div className='container'>
                <div className="upperBox">&nbsp;</div>
                <div className="greet">
                    <div>
                        <p>1. What is our mission? <br />
                            We aim to bridge the gap between entrepreneurs, investors, and developers by providing a platform where innovative ideas come to life.</p>
                        {/* Other content */}
                    </div>
                </div>
                <div className="lowerBox">&nbsp;</div>
            </div>
        </>
    );
}

export default StarterPage;
