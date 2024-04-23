import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';




function View() {

  const base_url= 'http://localhost:8000'


  const {id}=useParams()
  console.log(id);

  const [productData, setProductData] = useState({})

  const fetcchAnItem= async(id)=>{
    const result = await axios.get(`${base_url}/get-an-product/${id}`)
    console.log(result.data.products);
    setProductData(result.data.products)
  }
  console.log(productData);

  useEffect(()=>{
    fetcchAnItem(id)
  },[])


  return (
    <div>
            <div className="container m-5 p-5">
      {
              <MDBCard style={{width:"400px"}}>
              <MDBCardBody>
                <MDBCardTitle>PRoduct Cart Details</MDBCardTitle>
                <MDBCardText>
        
                <MDBListGroup style={{ minWidthL: '22rem' }} light>
              <MDBListGroupItem>Id: {productData.id}</MDBListGroupItem>
              <MDBListGroupItem>Title : {productData.title}</MDBListGroupItem>
              <MDBListGroupItem>Price : {productData.price}</MDBListGroupItem>
              <MDBListGroupItem>Description : {productData.description}</MDBListGroupItem>
              <MDBListGroupItem>Category : {productData.category}</MDBListGroupItem>
            </MDBListGroup>
        
                </MDBCardText>
                <MDBBtn>Buy Now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
      }

      </div>
      <div className='text-center'>
        <Link to={'/'}>
        <button className='btn btn-danger mb-5'>Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default View