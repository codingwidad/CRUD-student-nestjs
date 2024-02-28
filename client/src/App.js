import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Row from './components/Row';
import { useContext, useEffect, useState } from 'react';
import { StudentContext } from './context/mycontext';

function App() {
  const { FetchStudents, Search, students } = useContext(StudentContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchStudents();
  }, []);

  const handleSearchInputChange = () => {
    Search(query);
  };
  return (
    <div className="App">
      <Container maxW={'full'} p={'4'} fontSize={'18px'}>
        <Box rounded={'lg'} boxShadow={'5px'} p={'4'}>
          <Box mt={'2'} gap={'2'} mb={'4'} display={'flex'}>
            <FormControl>
              <Input type="text" onChange={(e) => setQuery(e.target.value)} />
            </FormControl>
            <Button
              leftIcon={<AiOutlineSearch />}
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW={'150px'}
              onClick={handleSearchInputChange}
            >
              Search
            </Button>
          </Box>
        </Box>

        <Box mt={'5'} rounded={'lg'} boxShadow={'base'}>
          <Box p={'4'} display={'flex'} justifyContent={'space-between'}>
            <text fontSize={'xl'} fontWeight={'bold'}>
              List Student
            </text>
            <Button
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW={'150px'}
              leftIcon={<AiOutlinePlus fontSize={'20px'} />}
            >
              Add Student
            </Button>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>Fullname</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {students?.map(({ _id, fullname, email, age, country }) => {
                  return (
                    <Row
                      key={_id}
                      id={_id}
                      fullname={fullname}
                      email={email}
                      age={age}
                      country={country}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
}

export default App;
