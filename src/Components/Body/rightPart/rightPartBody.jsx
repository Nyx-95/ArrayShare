import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function rightBodyPart() {
    return (<>
        <Container>
            <div className="rightBodyMain" >
                <div className="rightBodyMainInner">
                    <h1 className='rightBodyh1'>About</h1>
                    <h1 className='rightBodyh2'>Array Share</h1>
                    <p>Transfer files the easy way, just drag & drop the file and we will handle the rest. 
                        Like Apple AirDrop, but works and on all major platforms and computers that don't 
                        support AirDrop.
                    </p>
                </div>
            </div>
        </Container>
    </>);
}

export default rightBodyPart;