import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react' // hook 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {

    const urlParams =useParams()
    console.log(urlParams.id);

    const [resturantlist,setresturantlist]=useState([]) // defined a state


    //create a function for api call
    
    const getResturent = async()=>{  
        //async await
        
       await fetch('/restaurants.json') //async call , await for if there occured an delay 
       .then((data)=> //to get response
             data.json() // to get json data
        .then((result)=>
            setresturantlist(result.restaurants)
            // console.log(result.restaurants)
        )
        // console.log(data); to get response
       )   
    }
    
    
    // console.log(resturantlist);


    
    
    useEffect(()=>{  // hook like use effect : To view things what we done
        getResturent()
    },[])



    const viewrest=resturantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest);

    
  return (
    <div>
        {
 viewrest?(
    <Row className='ms-5 me-5 mt-5 mb-5'>
<Col sm={12} md={6} lg={4} xl={3}>

    <Image style={{ width:'100%'}} src={viewrest.photograph} fluid/>


</Col>
<Col>
<h1>{viewrest.name}</h1>
<MDBListGroup style={{ minWidth: '22rem' }} light>
        {/* <MDBListGroupItem tag='a' href='#' action noBorders className='px-3 rounded-3 mb-2'>
          Dapibus ac facilisis in
        </MDBListGroupItem> */}
        <MDBListGroupItem tag='a' href='#' action noBorders color='primary' className='px-3 rounded-3 mb-2'>
          Restaurant No: {viewrest.id}
        </MDBListGroupItem>
        <MDBListGroupItem tag='a' href='#' action noBorders color='secondary' className='px-3 rounded-3 mb-2'>
          NAME : {viewrest.name}
        </MDBListGroupItem>
        <MDBListGroupItem tag='a' href='#' action noBorders color='dark' className='px-3 rounded-3 mb-2'>
          Cusine :{viewrest.cuisine_type}
        </MDBListGroupItem>
        <MDBListGroupItem tag='a' href='#' action noBorders color='success' className='px-3 rounded-3 mb-2'>
          ADDRESS :{viewrest.address}
        </MDBListGroupItem>
        <MDBListGroupItem tag='a' href='#' action noBorders color='danger' className='px-3 rounded-3 mb-2'>
         NEIGHBOURHOOD :{viewrest.neighborhood}
        </MDBListGroupItem>
     
       
      </MDBListGroup>

      <> <Restop op={viewrest.operating_hours}/> </> <br/>
      <> <Restreview rev={viewrest.reviews}/></>


</Col>
</Row>):'null'
        }
       



    </div>
  )
}

export default Viewrest