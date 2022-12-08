import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function rightBodyPart() {
    return (<>
        <Container>
            <div className="rightBodyMain" >
                <div className='floatingIcons1'>
                    <div className='floatingIconsImage' >  <i className="ri-image-2-line"></i> <label>Drop.png</label> </div>
                    <div className='floatingIconsImage1' >  <div className='floatingIconsImageInner'> <i className="ri-music-2-line"></i> </div> </div>
              
                </div>
                <div className="rightBodyMainInner">
                    <h1 className='rightBodyh1'>About</h1>
                    <h1 className='rightBodyh2'>Array Share</h1>
                    <p>Transfer files the easy way, just drag & drop the file and we will handle the rest. 
                        Like Apple AirDrop, but works and on all major platforms and computers that don't 
                        support AirDrop.
                    </p>
                </div>
                <div className='floatingIcons2'>
                <div className='floatingIconsImage1' >  <div className='floatingIconsImageInner '> <i className="ri-upload-cloud-line"></i> </div> </div>
                <div className='floatingIconsImage' >   <i className="ri-folder-shield-2-line"></i> <label>*****</label> </div>
                
              
                </div>
                <div className='rightBodyMainFooter'>
                    <label>© 2011-2022 ArrayShare.com  -  Made in <a href='#'>Array Digitals</a></label>
                </div>
                
            </div>
        </Container>
    </>);
}

export default rightBodyPart;