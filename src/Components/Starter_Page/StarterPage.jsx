import React from 'react'
import './StarterPage.css'

const StarterPage = () => {
    return (
        <>

            <button className='redirectBtnleft'>LOGO</button>

            <button className="redirectBtn">Get Started &#10137;</button>

            <div className='container'>
                <div className="upperBox">&nbsp;</div>
                <div className="greet">
                    <div>
                        <p>1. What is our mission? <br />
                            We aim to bridge the gap between entrepreneurs, investors, and developers by providing a platform where innovative ideas come to life.</p>

                        <p>2. Who are we?<br />
                            A collaborative ecosystem for visionaries, investors, and developers to work together on groundbreaking projects.</p>

                        <p>3. What do we offer?<br />
                            Entrepreneurs can share their ideas, investors can back promising projects, and developers can bid on opportunities to build and earn.</p>

                        <p>4. How does it work?<br />
                            Entrepreneurs post ideas, investors fund them, and developers compete to bring them to reality.</p>

                        <p>5. Why choose us?<br />
                            We provide a streamlined, transparent, and secure platform for innovation, collaboration, and growth.</p>

                        <p>6. Who can join?<br />
                            Any entrepreneur with a vision, investor looking for potential, or developer seeking work opportunities.</p>
                    </div>
                </div>
                <div className="lowerBox">&nbsp;</div>
            </div>
        </>
    )
}

export default StarterPage