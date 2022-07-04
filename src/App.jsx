import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import React from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { delActionRequest, delActionSuccess } from './redux/action'
import {
  
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'

import { Table } from '@chakra-ui/react'
function App() {
  const loading=useSelector(state=>state?.loading)
  const [count, setCount] = useState(0)
  const [data,setData]=useState([]);
  const dispatch=useDispatch()
  const deleteFxn=((e)=>{
    
  })
 const sort=((e)=>{
   const {id}=e.target;
   console.log('id',id)
   axios.get(`http://localhost:8080/country?_sort=population&_order=${id}`).then((res)=>{
    setData(res.data)
   })
 })
  useEffect(()=>{
    dispatch(delActionRequest())
    axios.get('http://localhost:8080/country').then((res)=>{
       setData(res.data)
    }).then((res)=>{
      dispatch(delActionSuccess())
    })
  },[])

  return (
    <div className="App">
   

<div style={{display:"flex"}}>
  <Button onClick={sort} id='asc' >sort by asc</Button>
  <Button onClick={sort} id='dsc'  >Sort by dsc</Button>
</div>

<TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>Country</Th>
        <Th >City</Th>
        <Th>Population</Th>
        <Th >Edit</Th>
        <Th >Delete</Th>
      </Tr>
    </Thead>


    <Tbody>
  {data?.map((e)=>{
    return <>
      <Tr >
        <Th>{e.id}</Th>
        <Th>{e.country}</Th>
        <Th >{e.city}</Th>
        <Th>{e.population}</Th>
        <Th >Edit</Th>
        <Th ><button disabled={loading==true} onClick={(()=>{
          dispatch(delActionRequest()) 
          axios.delete(`http://localhost:8080/country/${e.id}`).then((r)=>{
           setData(r.data)
          }).then((e)=>{
           dispatch(delActionSuccess())
          })
        })} >delete</button></Th>
      </Tr>
    </>
  })}
     
    
    </Tbody>
  
  </Table>
</TableContainer>
 


     
    </div>
  )
}

export default App
