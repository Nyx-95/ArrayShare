import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import logoImage from '../../Assets/logoHeader.png'


function Header() {
    return (
        <>
            <div className='headerMainDiv'>
                <Container>
                    <Row>
                        <Col xl={3}> <img src={logoImage} /></Col>
                        <Col xl={6}>
                            <div className='headerButtonGroupDiv'>
                                <ButtonGroup className="mb-2">
                                    <Button className='headerGroupButton'>How it Works</Button>
                                    <Button className='headerGroupButton'>Download</Button>
                                    <Button className='headerGroupButton'>Upgrade</Button>
                                    <Button className='headerGroupButton'>Feedback</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col xl={1}> <div className='headerDarkButton'><a href='#'><i className="ri-sun-line"></i> </a></div></Col>
                        <Col xl={2}> <div className='headerLoginButton'><Button>Login / Register</Button></div></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Header;