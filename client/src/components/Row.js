import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const row = ({id, fullname, email, age, country}) => {
  return (
    <Tr>
        <Td> 
        <Avatar name={fullname}/>
        </Td>
        <Td>{fullname} </Td>
        <Td>{email}</Td>
        <Td>{age}</Td>
        <Td>{country}</Td>
        <Td>
          <Box display={'flex'} gap={'1'}>
          <Button color={'blue'}>
            <AiFillEdit/>
          </Button>
          <Button color={'red'}>
            <AiFillDelete/>
          </Button>

          </Box>
        </Td>
        
    </Tr>
  )
}

export default row