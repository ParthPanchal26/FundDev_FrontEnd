import React from 'react';
import './StarterPage.css';  // Adjusted path for styles

const StarterPage = () => {

    let questions = ["1. What is our mission? ", "2. Who are we?", "3. What do we offer?", "4. How does it work?", "5. Why choose us?", "6. Who can join?"];

    let answers = ["We aim to bridge the gap between entrepreneurs, investors, and developers by providing a platform where innovative ideas come to life.", "A collaborative ecosystem for visionaries, investors, and developers to work together on groundbreaking projects.", "Entrepreneurs can share their ideas, investors can back promising projects, and developers can bid on opportunities to build and earn.", "Entrepreneurs post ideas, investors fund them, and developers compete to bring them to reality.", "We provide a streamlined, transparent, and secure platform for innovation, collaboration, and growth.", "Any entrepreneur with a vision, investor looking for potential, or developer seeking work opportunities."];

    return (
        <>
            <div className="bodyContainer">

                <nav className="navbarMain">
                    <div className="navContainer">
                        <div className="logo">LOGO</div>
                        <button className="btnright">Get Started</button>
                    </div>
                </nav>

                <section className="mainSection">

                    <section className="sectionContainer">

                        <section className="left">

                            {questions.map((que, index) => (
                                <div key={index}>
                                    <div className="que">{que}</div>
                                    <div className="ansBody">
                                        <p className='ansarrow'>&#10137;</p>
                                        <p className='ans'>{answers[index]}</p>
                                    </div>
                                </div>
                            ))}

                        </section>

                        <section className="right">
                            <div className='rightGreet'>
                                <div className="greet">
                                    Welcome
                                    <div className="greetUnderline"></div>
                                </div>
                            </div>
                        </section>

                    </section>

                </section>

            </div>
        </>
    );
}

export default StarterPage;
