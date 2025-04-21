import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';

// Define the props interface
interface ProductProps {
  name: string;
  url: string;
}

const Product: React.FC<ProductProps> = ({ name, url }) => {
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={url} fluid alt={name} />
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          {/* Optional description text here if needed */}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Product;