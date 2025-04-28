import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function Add(setUploadVideoResponse) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({id:'',title:'',url:'',link:''})

  const getYouTubeLink=(e)=>{
const {value}=e.target
// console.log(value);
if(value.includes("v=")){
let VID=value.split('v=')[1].slice(0,11)

.
setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID})`})


}else{
setUploadVideo({...uploadVideo,link:""})
  }
}

const handleAdd=async()=>{
  if(!id || !title || !url || !link){
    alert("please fill missing fields")

  }

  //upload video to json server
  const result=await uploadvideoAPI(uploadVideo)
  console.log(result);
  if(result.status>=200 && result.status<300){
    handleClose()
    setUploadVideo({id:'',title:'',url:'',link:''})
    setUploadVideoResponse(result.data)}
  
    else{
alert(result.message)
    }
  }
  


  return (
    <div className='d-flex mb-5 mt-5 align-iems-center'>
      <h2>Upload Videos</h2>
      <button className="btn btn-link"><i class="fa-solid fa-upload fa-beat"></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form>
         <FloatingLabel
        controlId="floatingInput1"
        label="VideoId"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Videoid" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.targer.value,link:e.targer.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput2"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video name" onChange={getYoutubeLink}  />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput3"
        label="VideoId"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput4"
        label="Video URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Videoid" />
      </FloatingLabel>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Add