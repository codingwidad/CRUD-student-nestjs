import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button ,FormControl, FormLabel, Input} from "@chakra-ui/react";
import { useState } from "react";

function AddStudentDrawer({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Add Student</DrawerHeader>

        <DrawerBody>
          <FormControl>
            <FormLabel>Fullname</FormLabel>
            <Input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input type="number" name="age" value={formData.age} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input type="text" name="country" value={formData.country} onChange={handleChange} />
          </FormControl>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Add
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AddStudentDrawer;