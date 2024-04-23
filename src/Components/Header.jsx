import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div className='text-center'>
              <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
          <h2 className='text-center'> <i className='fa-solid fa-cart-shopping mx-3'></i>Products Carts</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

        
    </div>
  )
}

export default Header