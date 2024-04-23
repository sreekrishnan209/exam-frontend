import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';





function Home() {

  const base_url= 'http://localhost:8000'

  const [homeData,setHomeData]= useState([])

  const fetchData = async()=>{
    const result = await axios.get(`${base_url}/get-all-products`)
    console.log(result.data.products);
    setHomeData(result.data.products)
  }
  console.log(homeData);

   const DeleteProduct=async(id)=>{
    const result = await axios.delete(`${base_url}/delete-product/${id}`)
    alert(result.data.message);
    fetchData()
   }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
        <div className="container m-5 border">
          <div style={{marginLeft:"80px"}} className="row m-5 text-center">
            <input style={{width:"50%"}} type="text" placeholder='Search' className='form-control'  />
            <i style={{marginTop:"-25px", marginLeft:"-30px"}} className='fa-solid fa-search'></i>
          </div>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Title</th>
          <th scope='col'>Price</th>
          <th scope='col'>Description</th>
          <th scope='col'>Category</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          homeData.map((item)=>(
            <tr>
            <td>
              {item.id}
           
            </td>
            <td>
              {item.title}
            </td>
            <td>
              {item.price}
            </td>
            <td>
                {item.description}
            </td>
            <td>
              {item.category}
            </td>
            <td>
              <div>
               <Link to={`view/${item.id}`}>
               <i className='fa-solid fa-eye mx-3 fs-5 text-success'></i> 
               </Link>
               
               <i onClick={()=>DeleteProduct(item.id)} className='fa-solid fa-trash mx-3 fs-5 text-danger'></i>
              
              </div>
            </td>
          </tr>
          ))
        }
      </MDBTableBody>
    </MDBTable>
        </div>
 
    </div>
  )
}

export default Home