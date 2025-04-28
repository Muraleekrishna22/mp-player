import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
      <Row className="mt-5 d-flex align- items center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>Welcome to <span
            className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam
            mollitia! Velit a nobis exercitationem debitis. Iure distinctio, facilis
            reiciendis accusamus unde accusantium recusandae temporibus? Temporibus quos
            blanditiis molestias cumque?</p>
          <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
        </Col>
        <Col lg={5}>
          <img src="https://media.tenor com/lh1lDEsS FNNEAAAC, /music-beat.gif" alt="" />
        </Col>
        <Col></Col>



      </Row>
      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5 className="text-warning" style={{ fontSize: '40px' }}>Features</h5>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imgs.search.brave.com/YqSJmedELZ3DTW_G3WLynUR5oL5AQ7oxmKg5vii1_oY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvc3RvcC1t/b3Rpb24tZmlyZS1j/cmFja2VyLXJlYjVx/aTZzZTVjc2FpMncu/Z2lm.gif" />
            <Card.Body>
              <Card.Title>Managing videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imgs.search.brave.com/YqSJmedELZ3DTW_G3WLynUR5oL5AQ7oxmKg5vii1_oY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvc3RvcC1t/b3Rpb24tZmlyZS1j/cmFja2VyLXJlYjVx/aTZzZTVjc2FpMncu/Z2lm.gif" />
            <Card.Body>
              <Card.Title>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imgs.search.brave.com/YqSJmedELZ3DTW_G3WLynUR5oL5AQ7oxmKg5vii1_oY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvc3RvcC1t/b3Rpb24tZmlyZS1j/cmFja2VyLXJlYjVx/aTZzZTVjc2FpMncu/Z2lm.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">
        <div className="col-lg-5">
          <h4 className="text-warning" >Simple,Powerful and Fast</h4>
          <h6 className="mb-5 mt-4"><span className="text-warning">Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eos praesentium placeat! Doloremque minima modi inventore nisi ut atque fugit laboriosam soluta illum harum mollitia, repudiandae voluptatem tenetur esse architecto! </h6>
          <h6 className="mb-5 mt-4"><span className="text-warning">Categorize Videos</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eos praesentium placeat! Doloremque minima modi inventore nisi ut atque fugit laboriosam soluta illum harum mollitia, repudiandae voluptatem tenetur esse architecto!</h6>
          <h6 className="mb-5 mt-4"><span className="text-warning">Managing Videos</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eos praesentium placeat! Doloremque minima modi inventore nisi ut atque fugit laboriosam soluta illum harum mollitia, repudiandae voluptatem tenetur esse architecto!</h6>

        </div>
        <div className="col-lg-5 ms-5">
          
          <iframe width="518" height="350" src="https://www.youtube.com/embed/JPRutz0yEIc" title="Start After 40 Years – Will This Abandoned RETRO BUS Start?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </div>

    </>
  )
}

export default Landingpage