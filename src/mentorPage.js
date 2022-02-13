import { Button, Checkbox, CssBaseline, Input, TextField } from "@material-ui/core";
import useStyles from "./mentorPageStyles"
import navLogo from "./images/Logo 4.svg"
import heroVideo from "./images/people-talk.mp4"
import trImg1 from "./images/Group 194.svg"
import trImg2 from "./images/anayltics.svg"
import trImg3 from "./images/pana.svg"
import mnImg1 from "./images/unsplash_h6PDEdr9IZo.svg"
import mnImg2 from "./images/unsplash_KAULAzQwxzE.svg"
import mnImg3 from "./images/unsplash_mz_4XqfxyWU.svg"
import mnImg4 from "./images/unsplash_rCyiK4_aaWw.svg"
import omImg1 from "./images/Charles Kithika.svg"
import omImg2 from "./images/michael-do.svg"
import omImg3 from "./images/christine-do.svg"
import omImg4 from "./images/raven-do.svg"
import omImg5 from "./images/kevin-do.svg"
import omImg6 from "./images/chris-do.svg"
import fImg1 from "./images/ian-logo.svg"
const MentorsPage=()=>{

    const classes=useStyles();
    return(
        < >
            {/* <CssBaseline/> */}
            <div className={classes.site}>
                 {/* <nav>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <ul>
                        <li>Mentors</li>
                        <li>Media</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </nav> */}
            {/* Hero Section  */}
            <section className={classes.heroSection}>
                <video className={classes.heroVideo1} autoPlay loop muted>
                    <source src={heroVideo} type="video/mp4"/>
                </video>
                <div className={classes.heroDiv}>
                    <h1 className={classes.heroHeader}>Mentor the next generation of entreprenuers</h1>
                    <h4 className={classes.heroText}>Join our group of mentors to help support the community</h4>
                    <Button className={classes.heroBtn} variant="contained">Join Our Community</Button>
                </div>
            </section>
            {/* Tomorrow Section  */}
            <section>
                <div className={classes.trDiv1}>
                    <h2 className={classes.trHeader}>Help Shape Tomorrow</h2>
                    <h4 className={classes.trText}>Become a mentor and help shape a generation of aspring entreprenuers and businesses</h4>
                </div>
                <div className={classes.trDiv2}>
                    <div>
                        <img className={classes.trImg} src={trImg1} alt="" />
                        <p className={classes.trText2}>Inspire <br /> Entreprenuers</p>
                    </div>
                    <div>
                        <img className={classes.trImg} src={trImg3} alt="" />
                        <p className={classes.trText2}>Pass <br /> Knowledge</p>
                    </div>
                    <div>
                        <img className={classes.trImg} src={trImg2} alt="" />
                        <p className={classes.trText2}>Make <br /> Impact</p>
                    </div>
                </div>
            </section>
            {/* Types of Mentorship  */}
            <section>
                <div className={classes.mnDiv1}>
                    <div className={classes.mnDiv2}>
                        <h2 className={classes.mnDiv2Header}>Types of Mentorships</h2>
                        <h5 className={classes.mnDiv2SubHeader}>One on One Mentorship</h5>
                        <p className={classes.mnDiv2Text}>Get to interact with a mentor on a personal level, giving them insights on their ideas and start ups</p>
                    </div>
                
                    <div>
                        <img className={classes.mnImg}src={mnImg4} alt="" />
                    </div>
                </div>
                <div className={classes.mnDiv1}>
                    <div>
                        <img className={classes.mnImg}src={mnImg2} alt="" />
                    </div>
                    <div className={classes.mnDiv2}>
                        <h5 className={classes.mnDiv2SubHeader}>Group Mentorship</h5>
                        <p className={classes.mnDiv2Text}>Help guide a group of entreprenuers through their different ideas and startups</p>
                    </div>
                </div>
                <div className={classes.mnDiv1}>
                    <div className={classes.mnDiv2}>
                        <h5 className={classes.mnDiv2SubHeader}>Technical sessions</h5>
                        <p className={classes.mnDiv2Text}>Interact with entrepreneurs in our community by having technical sessions with them, sharing industry expertise and technical skills</p>
                    </div>
                    <div>
                        <img className={classes.mnImg}src={mnImg3} alt="" />
                    </div>
                </div>
                <div className={classes.mnDiv1}>
                    <div>
                        <img className={classes.mnImg}src={mnImg1} alt="" />
                    </div>
                    <div className={classes.mnDiv2}>
                        <h5 className={classes.mnDiv2SubHeader}>MasterClass</h5>
                        <p className={classes.mnDiv2Text}>Share your technical sessions where many entrepreneurs can learn at any time</p>
                    </div>
                </div>
                
            </section>
            <section>
                <h1 className={classes.omHeader}>Our Mentors</h1>
                <div className={classes.omDiv1}>
                    <div className={classes.omDiv2}>
                        <img className={classes.omImg} src={omImg1} alt="" />
                        <p className={classes.omName}>Charles Kithika</p>
                        <p className={classes.omRole}>Product Manager</p>
                    </div>
                    <div className={classes.omDiv2}>
                         <img className={classes.omImg} src={omImg2} alt="" />
                        <p className={classes.omName}>Michael Do</p>
                        <p className={classes.omRole}>Product Manager</p>
                    </div>
                    <div className={classes.omDiv2}>
                        <img className={classes.omImg} src={omImg3} alt="" />
                        <p className={classes.omName}>Christine Do</p>
                        <p className={classes.omRole}>Product Manager</p>
                    </div>
                    <div className={classes.omDiv2}>
                        <img className={classes.omImg} src={omImg4} alt="" />
                        <p className={classes.omName}>Raven Do</p>
                        <p className={classes.omRole}>Product Manager</p>
                    </div>
                    <div className={classes.omDiv2}>
                        <img className={classes.omImg} src={omImg5} alt="" />
                        <p className={classes.omName}>Kevin Do</p>
                        <p className={classes.omRole}>Product Manger</p>
                    </div>
                    <div className={classes.omDiv2}>
                        <img className={classes.omImg} src={omImg6} alt="" />
                        <p className={classes.omName}>Chris Do</p>
                        <p className={classes.omRole}>Product Manager</p>
                    </div>
                </div>
            </section>
            {/* Testimonal Section */}
            <section>
                <div className={classes.tDivParent}>
                    <h1 className={classes.tHeader}>Testimonials</h1>
                    <div className={classes.tDiv1}>
                        <div>
                            <img className={classes.omImg} src={omImg1} alt="" />
                        </div>
                        <div>
                            <div>
                                <h3>James Mwangi</h3>
                                <h3>Product Devveloper, Oculus</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque consectetur quaerat unde est odio veritatis, nisi impedit repudiandae quod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Register Form */}
            <section>
                <div className={classes.rDiv1}>
                    <h3 className={classes.rHeader}>Register to join the community</h3>
                    <p className={classes.rText}>Please fill up the following details to register</p>
                </div>
                <div className={classes.rDiv1}>
                    <form className={classes.rDiv2} noValidate autoComplete="off">
                        <TextField label="name" variant="outlined"/>
                        <TextField label="email" variant="outlined"/>
                        <TextField label="password" variant="outlined"/>
                        <Checkbox/> 
                        <Button className={classes.rBtn1} variant="contained">Sign Up</Button>
                        <p>Already have an account?</p>
                        <Button variant="contained">Log In</Button>
                    </form>
                </div>
            </section>
            <div className={classes.ldDiv}>
                <div><h1 className={classes.lnDivHeader}>Start.Execute.Launch!</h1></div>
                <div>
                    <Button className={classes.lnDivBtn1} variant="contained" >Explore Opportunities</Button>
                    <Button className={classes.lnDivBtn2} variant="contained">Contact Us</Button></div>
            </div>
            <footer className={classes.ft}>
                <div className={classes.fDiv1}>
                    <img className={classes.fImg} src={navLogo} alt="" />
                    <img className={classes.fImg} src={fImg1} alt="" />
                </div>
                <div className={classes.fDiv2}>
                    <div className={classes.fDiv3}>
                        <h6>Mentors</h6>
                        <p>Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                    </div>
                    <div className={classes.fDiv3}>
                        <h6>Media</h6>
                        <p>Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                    </div>
                    <div className={classes.fDiv3}>
                        <h6>Our Startups</h6>
                        <p>Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                    </div>
                    <div className={classes.fDiv3}>
                        <h6>Company</h6>
                        <p>Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                    </div>
                    <div className={classes.fDiv3}>
                        <h6>Talk to us</h6>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <hr className={classes.fHr} />
                
            </footer>
            </div>   
        </>
    )
}

export default MentorsPage