import $ from 'jquery'
import Button from 'react-bootstrap/Button';

function leftBodyPart() {

    
    
   const changePositionText = () => {
    $(".textButton").css("left", "0%");
    $(".fileButton").css("right", "0%");

    $(".textButton").css("transition", "1s");
    $(".fileButton").css("transition", "1s");

    $(".formUploadAreaDiv").css("display", "none");
    $(".formTextAreaDiv").css("display", "block");

    $(".fileButton").css({"font-size": "40px", "bottom": "15%"});
    $(".textButton").css({"font-size": "60px", "bottom": "8%"});

    
    $(".fileButton").css({"color": "rgba(255, 255, 255, 0.3)"});
    $(".textButton").css({"color": "white"});
  
    }
    const changePositionFile = () => {
        $(".fileButton").css("right", "55%");
        $(".textButton").css("left", "70%");

        $(".textButton").css("transition", "1s");
        $(".fileButton").css("transition", "1s");

        $(".formUploadAreaDiv").css("display", "flex");
        $(".formTextAreaDiv").css("display", "none");

        $(".fileButton").css({"font-size": "60px", "bottom": "8%"});
        $(".textButton").css({"font-size": "40px", "bottom": "15%"});

        $(".fileButton").css({"color": "white"});
        $(".textButton").css({"color": "rgba(255, 255, 255, 0.3)"});
    }
   
    
    return ( 
        <>
        <div className="leftBodyMain">
            <div className="glass">

                <div className="glassInner">
                    <div className="formTextDiv">
                        <div className="formTextLabel">
                            <button className="textButton" onClick={changePositionText}>Text</button>
                            <button className='fileButton' onClick={changePositionFile}>Files</button>
                        </div>
                       <div className="formTextAreaDiv"><textarea type='text' placeholder="Type Something..."  rows="8"></textarea> <a href="#"><i className="ri-download-line"></i></a></div>
                       <div className="formUploadAreaDiv">
                        <p className='formUploadFirstParagraph'>Drag and Drop any 2 files</p>
                        <p>Upto 5Mbs each</p>
                        <p>or</p>
                        <Button className="formUploadButton">Browse</Button>
                        
                        </div>
                    </div>
                </div>
                <div className="glassFooter"><label> <a href="#">Upgrade</a> to get more space</label></div>

            </div>
        </div>
        </>
     );
}

export default leftBodyPart;