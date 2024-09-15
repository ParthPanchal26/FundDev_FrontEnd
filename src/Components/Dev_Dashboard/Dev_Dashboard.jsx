import React from 'react'
import './Dev_Dashboard.css'

const Dev_Dashboard = () => {
    return (
        <>
            <div className="container">

                <div className="imgContainer">
                    <img src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg" alt='' className="bgimg" />
                    <img src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="profileImg" />
                </div>


                <div className="sections">

                    <div className="leftSection">

                        <div className="credHeader nameHeader">
                            <div className="name">Parth</div>
                            <div className="name">Panchal</div>
                            <div className="name uname">@UserName</div>
                            <div className="avail">
                                <div className="name uname">avail</div>
                            </div>
                        </div>


                        <div className='nameHeader'>
                            <div className='subHeader'>About me: </div>
                            <div className="credHeader bio">
                                <div className='bioContent'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad mollitia neque esse, quae quaerat numquam porro deserunt modi animi labore sapiente, provident harum? Quibusdam esse quae explicabo ipsum illo?</div>
                            </div>
                        </div>

                        <div className="credHeader portfolio nameHeader">
                            Visite my Portfolio :
                            <a href='' className="bioContent portfolioLink">&nbsp;https://parth-panchal.dev/</a>
                        </div>

                        <div>
                            <div className='subHeader roleHeader nameHeader'>Roles Looking For: </div>
                            <div className="credHeader role">
                                <p className='roleItem'>FrontEnd</p>
                                <p className='roleItem'>BackEnd</p>
                                <p className='roleItem'>Full Stack</p>
                            </div>
                        </div>

                        <div>
                            <div className='subHeader roleHeader nameHeader'>Skills: </div>
                            <div className="credHeader role">
                                <p className='roleItem'>MongoDB</p>
                                <p className='roleItem'>ExpressJs</p>
                                <p className='roleItem'>ReactJs</p>
                                <p className='roleItem'>NodeJs</p>
                            </div>
                        </div>


                    </div>

                    <div className="rightSection">

                        <div className="contactHeader">Verifications</div>

                        <div className="right-container">

                            <table className='table'>

                                <tr className='row'>
                                    <th className='rowName'>Email</th>
                                    <td className='rowName'>: parth@gmail.com</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>Contact No</th>
                                    <td className='rowName'>: 1234567890</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>LinkedIn</th>
                                    <td className='rowName'>: Linkedin.com/ParthPanchal26</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>Github</th>
                                    <td className='rowName'>: github.com/ParthPanchal26</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>Company</th>
                                    <td className='rowName'>: FAANG</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>Experience</th>
                                    <td className='rowName'>: 1 year</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>Joined On</th>
                                    <td className='rowName'>: 14-09-2024</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>DOB</th>
                                    <td className='rowName'>: 26-02-2024</td>
                                </tr>

                                <tr className='row'>
                                    <th className='rowName'>Hourly charge</th>
                                    <td className='rowName'>: 10USD</td>
                                </tr>

                            </table>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Dev_Dashboard