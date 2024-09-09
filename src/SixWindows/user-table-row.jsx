import $ from 'jquery';

import PropTypes from 'prop-types';
import React,{ useRef,useState,useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import TableRow from '@mui/material/TableRow';

import TableCell from '@mui/material/TableCell';




const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function UserTableRow({
  m,
  testMode,
  board,
  sr,
  key,

  
}) {
  // const [ setOpen] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message,setMessage]=useState("");
  const [type,setType]=useState("");
  const [isMuted, setIsMuted] = useState(true);
 
  // const [pin,setPin]=useState("");
  // const [pulse,setPulse]=useState("");
 

  // const [disable]=useState(false);

  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showImage, setShowImage] = useState(true);

 

  const showAlertMessage = () => {
    setShowAlert(true);

    // You can optionally set a timeout to hide the alert after a few seconds
    setTimeout(() => {
    setShowAlert(false);
    }, 5000); // Hide the alert after 5 seconds (5000 milliseconds)
};




  // Close popup function of technicaian form
  const handleModalClose = () => {
    setOpenModal(false);
  };


  const handleClick=()=>{
    setShowImage(false);
      setShowVideo(true);
      setIsMuted(false);
     

  }





  // submit form of technician form 
  const SubmitForm=()=>{
    const obj={
    machineNumber: $('[name="machine"]').val(),
    userName: $('[name="userName"]').val(),
    fault:$('[name="fault"]').val(),
    action:$('[name="action"]').val(),
    status:$('[name="faultStatus"]').val(),
    Lat:sessionStorage.getItem("Lattitude"),
    Long:sessionStorage.getItem("Longitude"),
    }
    // SaveFaultReport(obj).then((r)=>{
    //    showAlertMessage();
    //    setType('success');
    //    setMessage("Saved Succesfully");
    //    handleModalClose();

    // })

  }

  useEffect(() => {
 
   
    
      console.log(m,board);
      if(parseInt(m)==board)
      {
        
         handleClick();
         

     
       
      }
     
    
   
  }, [m]);

  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowImage(true);
   
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay with sound failed. Trying to notify the user or play muted.", error);
      });
    }
  }, [showVideo]);
  
  

  // const online = a => moment().diff(moment.utc((a.lastHeartBeatTime)), 'minute') < 10;



  return (
    <>
    {/* Alert popup ui */}
       <Stack spacing={2} sx={{ width: '100%'}}>
    
    <Snackbar  anchorOrigin={{ vertical:'bottom', horizontal:'right' }} open={showAlert} autoHideDuration={4000} onClose={()=>setShowAlert(false)}>
      <Alert onClose={()=>setShowAlert(false)} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>

     </Stack>
      <TableRow hover tabIndex={-1} role="checkbox" sx={{paddingBottom:"200px"}}>
        
     
        
        
     
        <TableCell >
      {/* <button
        type="button"
        className="btn btn-sm btn-outline-success btn-tt heading6"
        onClick={handleOpenMenu}
        
      >
        View
      </button> */}
    </TableCell>
  
      </TableRow >

       {/* hight changed */}
      <div 
  style={{border:"1px solid grey", overflow: "auto", height:'40vh',paddingTop:"5px",paddingLeft:'2px',marginTop:"-20px"}}
>
  {showImage && (
    <div 
      style={{ 
        width: '100%', 
        height: "100%" 
      }}  
      role="button"
      tabIndex={0}
      onClick={handleClick}
    >
      <img  
        width='100%'
        height='100%'
        src="https://th.bing.com/th/id/OIP.pdfFhhpDtb1wiuMMXpcXTwHaDt?rs=1&pid=ImgDetMain" 
        alt="img"
      />
    </div>
  )}
  {showVideo && (
    <video 
      ref={videoRef} 
      width="100%" height='100%'
      controls 
      autoPlay  
      onEnded={handleVideoEnd}
      muted={isMuted}
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      <track src="path-to-your-captions.vtt" kind="captions" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  )}
</div>

      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        
           <Box sx={{ ...style, width: 500 }}>
           <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">FAUALT REPORT</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleModalClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>Machine No.:</h6>
                            <input readOnly type="text" className="form-control" name="machine" />
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>User Name:</h6>
                            <input readOnly type="text" className="form-control" name="userName" />
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                     <div className="col-md-12">
                        <div className="form-group my-2">
                            <h6>Fault Reported:</h6>
                            <input type="text" className="form-control" name="fault" />
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                     <div className="col-md-12">
                        <div className="form-group my-2">
                            <h6>Action Taken:</h6>
                            <input type="text" className="form-control" name="action" />
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                            <h6>Status:</h6>
                            <select className="form-control" name="faultStatus">
                                <option value="Completed" selected>Completed</option>
                                <option value="Pending">Pending</option>
                              

                            </select>
                            <div className="invalid-feedback"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={SubmitForm}>Save Report</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleModalClose}>Close</button>
            </div>
        </div>
    </div>
            </Box>
            </Modal>
    </>
  );
}

UserTableRow.propTypes = {
 
  m:PropTypes.any,
  key: PropTypes.any,
  sr:PropTypes.any,
  testMode:PropTypes.any,
  board:PropTypes.any,


};
