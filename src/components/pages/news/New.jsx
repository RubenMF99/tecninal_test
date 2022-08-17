import {useState} from 'react'
import { Button, Modal, Row, Container } from "react-bootstrap";
const New = ({new_not}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="card col-3 m-lg-4">
    <img
      src={new_not.urlToImage}
      className="card-img-top img-responsive center-d-inline-block"
    />

    <div className="card-body">
      <p className="card-text">{new_not.title}</p>
      <p className="card-text">{new_not.author}</p>
      <p className="card-text"> {new_not.description}</p>
    </div>

    <div className="Productall card-footer">
      
         <Button className="btn-success" onClick={handleShow}>
          Ver Mas
        </Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{new_not.title}</Modal.Title>
        </Modal.Header>
        <form >
        <Modal.Body>  
             <p>{new_not.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  </div>
  )
}

export default New