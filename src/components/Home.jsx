import React from "react";
// import {Redirect} from "react-router";
// import {Link} from "react-router-dom";

import {Button, Card, CardTitle, Navbar, NavItem, Parallax, Image} from 'react-materialize';
import 'materialize-css';


class Home extends React.Component {
    render(){
        return(
            <div className = "main">
            
                <Navbar className="orange lighten-2" brand=" Philip Kappaz II" id="navName" right>
                    <NavItem href='get-started.html'>Portfolio</NavItem>
	                <NavItem href='#bot'>Connect</NavItem>
                </Navbar>

                <Parallax imageSrc="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/27066923_10155416354372635_3270921727834528641_n.jpg?oh=34a6b39f08bbae796993ed5187328057&oe=5AFA3FFB"/>
                    <div className="section grey lighten-5 z-depth-5">
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="icon-block">     
                                    <h4 className="center">Oh, hello there!</h4>
                                    <p className="light" id="me">I'm Philip, most people call me Phil and I have fallen in love with the art of web development. 
                                        By day I live at a lovely start-up (well, not so much anymore) company, Anovia Payments. Who I have been with since day one back in 2013.
                                        By night I'm a web dev fiend... occasionally a rock climber.
                                        <br/> 
                                        <br/>
                                        I began my journey early in 2017 in online classes such as codeschool.com, but decided I needed to take the extra step.
                                        I soon enrolled in the Full Stack Web Development bootcamp at Southern Methodist Univserity in Dallas, TX. Jump forward to 2018 and here I am.
                                        Through earning my certificate and countless hours of homework and group projects, I can finally say that I am a well qualified developer.
                                        I definitely lean more towards the front-end and UI design aspects, but am well equipped to handle any full stack opportunity thrown my way.
                                        <br/>
                                        <br/>
                                        At 29 I have already helped build a company. Now I plan to build websites.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12">
                                
                                    {/* <h5 className="center">Libraries I write with daily</h5> */}
                                    <div>
                                        <ul className="center">
                                            <i className="devicon-html5-plain-wordmark" id="devIcon"></i>
                                            <i className="devicon-css3-plain-wordmark" id="devIcon"></i>
                                            <i className="devicon-javascript-plain" id="devIcon"></i>
                                            <i className="devicon-react-original" id="devIcon"></i>
                                            <i className="devicon-nodejs-plain" id="devIcon"></i>
                                            <i className="devicon-express-original colored" id="devIcon"></i>
                                            <i className="devicon-mongodb-plain" id="devIcon"></i>
                                            <i className="devicon-github-plain colored" id="devIcon"></i>                                            
                                        </ul>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                <Parallax imageSrc="https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg?w=680"/>
                <div class="section grey lighten-5 z-depth-5">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m12 center">
                                <h4>Projects</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4">
                                <Card className='small z-depth-2'
                                    header={<CardTitle image='https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/19247724_10155416489392635_8281414810922210010_n.jpg?oh=bfb53615898f9bcf6ebb0c069b12aa30&oe=5ADC920A'>
                                    </CardTitle>}>
                                    <a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-1" href="http://checkyourcheckers.herokuapp.com/#/" target="_blank" >
                                        <i class="material-icons">trending_flat</i>
                                    </a>
                                    Check your checkers
                                </Card>
                            </div>
                            <div className="col s12 m4">
                                <Card className='small z-depth-2'
                                    header={<CardTitle image='http://avani-ghetia.herokuapp.com/img/portfolio/work-2.png'>
                                    </CardTitle>}>
                                    <a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-1" href="https://github.com/PhilipK2/Bamazon" target="_blank" >
                                        <i class="material-icons">trending_flat</i>
                                    </a>
                                    Bamazon!
                                </Card>
                            </div>
                            <div className="col s12 m4">
                                <Card className='small z-depth-2'
                                    header={<CardTitle image='https://trendsinternational.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/8/885088_rick-and-morty_fc.jpg'>
                                    </CardTitle>}>
                                    <a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-1" href="https://philipk2.github.io/Trivia-Game/" target="_blank">
                                        <i class="material-icons">trending_flat</i>
                                    </a>
                                    <p>Rick and Morty Trivia</p>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 center">
                                <p>check out my <a href="#" style={{color: "#00acc1"}}>portfolio page</a> for more</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="page-footer orange lighten-2">
                    <div class="container">
                        <div class="row">
                            <div class="col l12 s12 center">
                                <ul>
                                    <a name="bot"></a>
                                    <a href="https://www.facebook.com/philip.kappaz" target="_blank"><i className="fab fa-facebook-f fa-2x"></i></a>
                                    <a href="https://www.linkedin.com/in/philip-kappaz2/" target="_blank"><i className="fab fa-linkedin-in fa-2x"></i></a>
                                    <a href="https://github.com/PhilipK2" target="_blank"><i className="fab fa-github-alt fa-2x"></i></a>
                                    <a href="mailto:p.c.kappaz2@gmail.com" target="_blank"><i class="fas fa-envelope fa-2x"></i></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container center">
                            Made by <a class="grey-text text-darken-3" href="#">Philip Kappaz</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Home