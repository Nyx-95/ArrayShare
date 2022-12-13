import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import logoImage from '../../Assets/logoHeaderBlack.png'
import logoImage1 from '../../Assets/logoHeaderWhite.png';
import { useState, useEffect } from 'react';
import $ from 'jquery'
import * as React from 'react';
import sunlogo from "../../Assets/sun.png"
import Moonlogo from "../../Assets/Moon.png"
import ClickAwayListener from '@mui/material/ClickAwayListener';



function Header(props) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        document.getElementById("menu__toggle").checked = false;
        setOpen(false);
    };

    useEffect(() => {
        let screenWidth = window.innerWidth;
        if (screenWidth <= 991) {
            $(".header1").hide()
            $(".header2").show()
        }
        else {
            $(".header1").show()
            $(".header2").hide()
        }

        if(props.theme === 'light'){
            $(".headerCheck").prop("checked", false);
        }
        else{
            $(".headerCheck").prop("checked", true);
        }

    });


    return (
        <>
            <div className='headerMainDiv'>
                <Container>
                    <Row className='header1'>
                        <Col md={3} lg={3} xl={3}>
                            <img src={props.theme === 'light' ? logoImage : logoImage1} alt="logo" />
                        </Col>

                        <Col md={5} lg={5} xl={5}>
                            <div className='headerButtonGroupDiv'>
                                <ButtonGroup className="mb-2">
                                    <Button className='headerGroupButton'>How it Works</Button>
                                    <Button className='headerGroupButton'>Download</Button>
                                    <Button className='headerGroupButton'>Upgrade</Button>
                                    <Button className='headerGroupButton'>Feedback</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col md={2} lg={2} xl={2}>
                            <div className='headerDarkButton'>
                                <img className='sunlogo' src={sunlogo}></img>
                                <label className="switch">
                                    <input type="checkbox" onChange={props.changeTheme} className="headerCheck" />
                                    <span className="slider round"></span>
                                </label>
                                <img className='moonlogo' src={Moonlogo}></img>
                            </div>
                        </Col>
                        <Col md={2} lg={2} xl={2}> <div className='headerLoginButton'><Button>Login / Register</Button></div></Col>
                    </Row>

                    <Row className='header2'>
                        <Col xs={6} sm={6} md={6} lg={3} xl={3}>
                            <img src={props.theme === 'light' ? logoImage : logoImage1} alt="logo" />
                        </Col>
                        <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}  >

                            <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                <div className="hamburger-menu">
                                    <div className="hamburger-menu-inner">
                                        <input id="menu__toggle" type="checkbox" />
                                        <label className="menu__btn" htmlFor="menu__toggle" onClick={handleClick}>
                                            <span></span>
                                        </label>
                                        {open ? (
                                            <ul className="menu__box">
                                                <li><a className="menu__item" href="#">Login / Signup</a></li>
                                                <li><a className="menu__item" href="#" onClick={props.changeTheme}>Change Theme</a></li>
                                                <li><a className="menu__item" href="#">How it works</a></li>
                                                <li><a className="menu__item" href="#">Download</a></li>
                                                <li><a className="menu__item" href="#">Upgrade</a></li>
                                                <li><a className="menu__item" href="#">Feedback</a></li>
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            </Col>

                        </ClickAwayListener>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Header;