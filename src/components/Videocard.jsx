import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { deletevideoAPI } from '../services/allAPI';


function Videocard(video) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);

  const{title,link}=video
let today= new Date()
// console.log(new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",
// hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));

let timeStamp= new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",
  hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
  

  const videoHistory= (title,link,timeStamp)
  // make api call

  const removeVideo=async(id)=>{
    await deletevideoAPI(id)
    setDeleteVideoResponse(true)
  }
  const dragStart=(e,id)=>{
    console.log("dragstarted"+id);
    e.dataTransfer.setdata("videoId",id)
    
  }

  return (
    <>
      <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStart(e,video?.id)}>
        <Card.Img variant="top" src={video.url}
        onClick={handleShow} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h3>{video.title}</h3>
           {insideCategory?null: <button className='btn-btn-link ' onClick={e=>removeVideo(video?.id)}><i className='fa-solid fa-trash text-danger '></i></button>}
          </Card.Title>

        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="350" src={`${video.link}`} title="John Wick Official Trailer #1 (2014) - Keanu Reeves, Willem Dafoe Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </Modal.Body>
        
      </Modal>
    </>
  )
}
}

export default Videocard