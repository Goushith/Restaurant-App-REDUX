import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ListGroup from 'react-bootstrap/ListGroup';


import {
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane
} from 'mdb-react-ui-kit';




function Restop({op}) {

  const [basicActive, setBasicActive] = useState('Monday');

  const handleBasicClick = (value:String) => {
    if (value === basicActive) return;

    setBasicActive(value);
  }



  console.log(op);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><br/>
      <Button variant="primary" onClick={handleShow}> 
      OPENING HOURS :
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OPENING HOURS</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        

        <MDBRow>
      <MDBCol size={4}>
        <MDBListGroup light small>
          <MDBTabs>
            <MDBListGroupItem action active={basicActive === 'Monday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Monday')}>Monday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'Tuesday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Tuesday')}>Tuesday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'Wednesday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Wednesday')}>Wednesday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'Thursday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Thursday')}>Thursday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'Friday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Friday')}>Friday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'Saturday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Saturday')}>Saturday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'Sunday'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('Sunday')}>Sunday</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
          </MDBTabs>
        </MDBListGroup>
      </MDBCol>

      <MDBCol size={8}>
        <MDBTabsContent>
          <MDBTabsPane show={basicActive === 'Monday'}>
            {op.Monday}
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'Tuesday'}>
          {op.Tuesday}
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'Wednesday'}>
          {op.Wednesday}
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'Thursday'}>
          {op.Thursday}
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'Friday'}>
          {op.Friday}
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'Saturday'}>
          {op.Saturday}
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'Sunday'}>
          {op.Sunday}
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop