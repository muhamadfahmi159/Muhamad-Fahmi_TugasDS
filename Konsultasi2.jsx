import { Button, Col, Container, Row , Form, Table } from 'react-bootstrap';
import React from 'react';
import ReactDOM from "react-dom";
import { Component } from 'react';

class Konsultasi2 extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            Nama: "",
            JenisKelamin: "",
            Umur: "",
            suhu: 36,
            sakit_kepala: false,
            batuk: false,
            pilek: false,
            radang_mata: false,
            sakit_tenggorokan: false,
            bercak: false,
            diare: false,
            mual: false,
            lesu: false,
            leher_telinga_bengkak: false,
            hilang_nafsu_makan: false,
            nyeri_sendi: false,
            nanah: false,
            log: "",
            
            minValue: 0,
            maxValue: 12,
            step: 1,
            ruam: false,
            ui_state:"diagnosa"
        };
        this.updateRuam = this.updateRuam.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillMount(){
        this.setState({ruam: this.state.minValue, secondValue: this.state.maxValue});
    }
        
    handleSubmit() {
        console.log(this.state)
        this.setState({ui_state:"hasil"})
    }

    updateNama(e){
        this.setState({Nama:e.target.value})
    }
    
    updateJenisKelamin(e){
        this.setState({JenisKelamin:e.target.value})
    }

    updateUmur(e){
        this.setState({Umur:e.target.value})
    }

    updatesuhu(e){
        this.setState({suhu:e.target.value})
    }

    updateSakitKepala(e){
        if(e.target.value === 'Tidak'){
            this.setState({sakit_kepala:false})
        }else{
            this.setState({sakit_kepala:true})
        }
        
    }
    
    updatePersebaranRuam(e){
        this.setState({PersebaranRuam:e.target.value})
    } 

    updateRuam(name,e){
         this.setState({ruam: parseInt(e.target.value)});
    }
    updatebatuk(e){
        this.setState({batuk:e.target.value})
    }
    updatepilek(e){
        this.setState({pilek:e.target.value})
    }
    updateradang_mata(e){
        this.setState({radang_mata:e.target.value})
    }
    updatesakit_tenggorokan(e){
        this.setState({sakit_tenggorokan:e.target.value})
    }
    updatebercak(e){
        this.setState({bercak:e.target.value})
    }
    updatediare(e){
        this.setState({diare:e.target.value})
    }
    updatemual(e){
        this.setState({mual:e.target.value})
    }
    updatelesu(e){
        this.setState({lesu:e.target.value})
    }
    updateleher_telinga_bengkak(e){
        this.setState({leher_telinga_bengkak:e.target.value})
    }
    updatehilang_nafsu_makan(e){
        this.setState({hilang_nafsu_makan:e.target.value})
    }
    updatenyeri_sendi(e){
        this.setState({nyeri_sendi:e.target.value})
    }
    updatenanah(e){
        this.setState({nanah:e.target.value})
    }
    updatelog(e){
        this.setState({log:e.target.value})
    }

    diagnosa(){
        this.setState({checking:true})
        
        console.log(this.state)
        const option = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                    suhu: parseFloat(this.state.suhu),
                    ruam: this.state.ruam,
                    batuk: this.state.batuk,
                    pilek: this.state.pilek,
                    sakit_tenggorokan: this.state.sakit_tenggorokan,
                    radang_mata: this.state.radang_mata,
                    bercak: this.state.bercak,
                    diare: this.state.diare,
                    sakit_kepala: this.state.sakit_kepala,
                    leher_telinga_bengkak: this.state.leher_telinga_bengkak,
                    hilang_nafsu_makan: this.state.hilang_nafsu_makan,
                    lesu: this.state.lesu,
                    mual: this.state.mual,
                    nyeri_sendi: this.state.nyeri_sendi,
                    nanah: this.state.nanah
            })
        }
    
    console.log(option)
        fetch("https://tugas-fuzzy-sbathld7ya-et.a.run.app/api/fuzzy/min",option)
          .then(response => response.json())
          .then(data => {
            this.setState({result:data.payload})
            console.log(data.payload)
            this.setState({checking:false})
            console.log(this.state)
            this.setState({ui_state:"hasil"})
          })
      }

    render(){
        if(this.state.ui_state==="diagnosa"){
            return (
                <section className="project" id="konsultasi2">
                    <div>
                        <Container className="text-white d-flex justify-content-center">
                            <Row className="align-items-center">
                                <Col className="my-1">
                                    <div className="form p-4">
                                        <Form onSubmit={this.handleSubmit}>
                                            <Row>
                                                <h4>Identitas</h4>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="formGroupNama">
                                                        <Form.Label>Nama Lengkap</Form.Label>
                                                        <Form.Control type="text" placeholder="Nama Lengkap" 
                                                            name="fullName" 
                                                            value={ this.state.Nama} onChange={this.updateNama.bind(this)}/>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="formGroupJenisKelamin">
                                                            <Form.Label>Jenis Kelamin</Form.Label>
                                                            <Form.Select defaultValue="Jenis Kelamin..." name="jeniskelamin"
                                                                value={this.state.JenisKelamin} onChange={this.updateJenisKelamin.bind(this)}>
                                                                <option>Laki-laki</option>
                                                                <option>Perempuan</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                                            <Form.Label>Umur</Form.Label>
                                                            <Form.Control type="number" placeholder="Umur"
                                                                name="umur" 
                                                                value={this.state.Umur} onChange={this.updateUmur.bind(this)}/>
                                                    </Form.Group>
                                                
                                                    <h4>Gejala Umum</h4>
                                                    <Col>
                                                        <Form.Group as={Row} className="mb-3">
                                                            <Form.Label column lg={5}>Suhu Tubuh</Form.Label>
                                                            <Col sm={7}>
                                                                <Form.Control type="text" placeholder="36" value={this.state.suhu}
                                                                onChange={this.updatesuhu.bind(this)}/>
                                                            </Col>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group as={Row} className="mb-3">
                                                            <Form.Label column lg={5}>Sakit Kepala</Form.Label>
                                                            <Col sm={7}>
                                                                <Form.Select onChange={this.updateSakitKepala.bind(this)}>
                                                                    <option>Ya</option>
                                                                    <option>Tidak</option>
                                                                    <option>Diawal Gejala</option>
                                                                </Form.Select>
                                                            </Col>
                                                        </Form.Group>
                                                    </Col>
                                                </Col>

                                                <Col md>
                                                    <h4>Gejala Spesifik</h4>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Batuk-batuk"
                                                        value={this.state.batuk} onChange={this.updatebatuk.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Pilek"
                                                        value={this.state.pilek} onChange={this.updatepilek.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Radang Mata"
                                                        value={this.state.radang_mata} onChange={this.updateradang_mata.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Sakit Tenggorokan"
                                                        value={this.state.sakit_tenggorokan} onChange={this.updatesakit_tenggorokan.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Bercak Koplik"
                                                        value={this.state.bercak} onChange={this.updatebercak.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Diare"
                                                        value={this.state.diare} onChange={this.updatediare.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Mual"
                                                        value={this.state.mual} onChange={this.updatemual.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Lesu"
                                                        value={this.state.lesu} onChange={this.updatelesu.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Leher/Telinga Bengkak"
                                                        value={this.state.leher_telinga_bengkak} onChange={this.updateleher_telinga_bengkak.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Hilang Nafsu Makan"
                                                        value={this.state.hilang_nafsu_makan} onChange={this.updatehilang_nafsu_makan.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Nyeri Sendi"
                                                        value={this.state.nyeri_sendi} onChange={this.updatenyeri_sendi.bind(this)}/>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Nanah/Kerak Kulit"
                                                        value={this.state.nanah} onChange={this.updatenanah.bind(this)}/>
                                                    </Col>
                                                </Col>
                                                <Col>
                                                    <Col xs="auto"><br></br><br></br>
                                                        <Form.Label>Distribusi Ruam : {this.state.ruam}</Form.Label>
                                                        <section className="range-slider">
                                                            <input type="range" 
                                                                value={this.state.ruam} min={this.state.minValue} 
                                                                max={this.state.maxValue} step={this.state.step}  
                                                                onChange={this.updateRuam.bind(this, "first")}
                                                            />
                                                        </section>
                                                        {/* <InputRange step={2} value={this.state.value} onChange={value => this.setState({ value })} /> */}
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Form.Label>Persebaran Ruam :</Form.Label>
                                                        <Form.Select placeholder="Ringan/Sedang/Berat" name="persebaran_ruam"
                                                            value={this.state.persebaran_ruam} onChange={this.updatePersebaranRuam.bind(this)}>
                                                            <option>Ringan</option>
                                                            <option>Sedang</option>
                                                            <option>Berat</option>
                                                        </Form.Select>
                                                    </Col>
                                                    {/* <Col xs="auto">
                                                        <Form.Label>Log</Form.Label>
                                                        <Form.Control as="textarea" onChange={this.updatelog.bind(this)}
                                                        value={this.state.log} style={{height: '100px'}}/>
                                                    </Col> */}
                                                </Col>
                                            </Row><br></br>
                                            <Col className="padding 500px">
                                            <Button variant='primary' onClick={this.diagnosa.bind(this)}>Cek Diagnosa</Button></Col>
                                        </Form>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            );
        }else if(this.state.ui_state==="hasil"){
            return(
                <section className="project2" id="konsultasi2">
                    <div>
                        <Container className="text-white d-flex justify-content-center">
                            <Row>
                                <Col className="my-1">
                                    <div>
                                    <center><h1>Hasil Diagnosa</h1></center>
                                    </div>
                                    <div>
                                        <h3>Halo {this.state.Nama}, {this.state.Umur} tahun </h3>
                                        <div><h3>
                                          <div>
                                            <Table bordered className="text-white">
                                              <thead>
                                                <tr>
                                                  <th>Penyakit</th>
                                                  <th>Tingkat Keparahan</th>
                                                  <th>Confidence</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {this.state.result.decision.map(item =>(
                                                  <tr>
                                                    <td>{item.penyakit}</td>
                                                    <td>{item.tingkat_keparahan}</td>
                                                    <td>{item.confidence}</td>
                                                  </tr>
                                                  ))
                                                }
                                              </tbody>
                                            </Table>
                                          </div>                                          
                                          </h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            );
        }
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Konsultasi2/>, rootElement);
export default Konsultasi2;