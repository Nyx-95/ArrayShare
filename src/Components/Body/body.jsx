import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RightBodyPart from './rightPart/rightPartBody';
import LeftBodyPart from './leftPart/leftPartBody';
import $ from 'jquery';
import { useEffect } from 'react';

function Body() {
    useEffect(() => {
        let screenWidth = window.innerWidth;
        if (screenWidth <= 991) {
            $(".rightMenu").hide()
          
        }
        else {
            $(".rightMenu").show()
        
        }

    });
    return ( 
    <>

        <div className="bodyMain">
            <Container fluid="xl">
                <Row>
                    <Col md={12} lg={6} xl={6}><LeftBodyPart></LeftBodyPart></Col>
                    <Col md={0} lg={6} xl={6} className="rightMenu"><RightBodyPart></RightBodyPart></Col>
                </Row>
            </Container>
        </div>
        

    </>
     );
}

export default Body;