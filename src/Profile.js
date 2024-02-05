import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';



export default function Profile() {
  return (
    
              <MDBCardBody className="p-1">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '100px', borderRadius: '10px' }}
                      src='https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Bengaluru Dev</MDBCardTitle>
                    <MDBCardText>Software Developer</MDBCardText> 
                  </div>
                </div>
              </MDBCardBody> 
  );
}