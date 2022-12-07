import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RightBodyPart from './rightPart/rightPartBody';
import LeftBodyPart from './leftPart/leftPartBody';

function body() {
    return ( 
    <>

        <div className="bodyMain">
            <Container>
                <Row>
                    <Col xl={6}><LeftBodyPart></LeftBodyPart></Col>
                    <Col xl={6}><RightBodyPart></RightBodyPart></Col>
                </Row>
            </Container>
        </div>
        

    </>
     );
}

export default body;