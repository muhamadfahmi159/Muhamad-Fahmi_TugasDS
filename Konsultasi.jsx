import React from 'react';
import { Button, Col, Container, Row , Form} from 'react-bootstrap';
import Konsultasi2 from './Konsultasi2.jsx';
import { useState, useEffect, useRef } from "react";

const Konsultasi = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const [formValues, setFormValues] = useState({
        name: "",
        jeniskelamin: "",
        umur: "",
      });
      const [isFormVisible, setIsFormVisible] = useState(true);
  
      const inputFileRef = useRef();
  
      const handleChange = (event) => {
          const { name, value } = event.target;
          console.log(name, value);
  
          setFormValues({ ...formValues, [name]: value });
      };
  
    //   const handleSubmit = (e) => {
    //       e.preventDefault();
    //       console.log(formValues);
    //       console.log(inputFileRef?.current?.files);
    //       setIsFormVisible(false);
    //   };
    return (
        <div className="project" id='konsultasi'>
            <div>
                <Container className="text-white d-flex justify-content-center">
                    <Row>
                        <Col>
                        {/* <center><h4>Silahkan mengisi identitas</h4></center> */}
                            <div className="form p-4">
                                <Form>  {/*onSubmit={handleSubmit} */}
                                    <Form.Group className="mb-3" controlId="formGroupNama">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" placeholder="Nama Lengkap" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupJenisKelamin">
                                        <Form.Label>Jenis Kelamin</Form.Label>
                                        <Form.Select defaultValue="Jenis Kelamin...">
                                            <option>Laki-laki</option>
                                            <option>Perempuan</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Umur</Form.Label>
                                        <Form.Control type="number" placeholder="Umur" />
                                    </Form.Group>
                                    <Button type='submit' variant='light'>Submit</Button>
                                    {/* <Button variant='dark' onClick={this.changeState}>Submit</Button> */}
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Konsultasi