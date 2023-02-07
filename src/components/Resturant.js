import React, { useEffect } from 'react'
import { useState } from 'react' // hook 
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restactionlist';
import { useDispatch, useSelector } from 'react-redux';

function Resturant() {
    const [resturantlist,setresturantlist]=useState([]) // defined a state


//create a function for api call

// const getResturent = async()=>{  
//     //async await
    
//    await fetch('/restaurants.json') //async call , await for if there occured an delay 
//    .then((data)=> //to get response
//          data.json() // to get json data
//     .then((result)=>
//         setresturantlist(result.restaurants)
//         // console.log(result.restaurants)
//     )
//     // console.log(data); to get response
//    )   
// }


// console.log(resturantlist);
const dispatch=useDispatch()
const result =useSelector(state=>state.restreducer)
console.log(result);


// const {resturantlist}=result 
// console.log(resturantlist);

useEffect(()=>{  // hook like use effect : To view things what we done
    // getResturent()
    dispatch(RestListAction())
},[])




  return (

<Row className='ms-2 me-2'>
  {

    
    
result.restlist.map(item=>(
<Restcard restaurants={item}/>
  ))
  }




 </Row>
  )
}

export default Resturant