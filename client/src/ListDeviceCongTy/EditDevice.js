import React ,{useState ,useRef} from 'react'
import {Link} from 'react-router-dom'
import Slibar from '../slibar/slibar.js'
import { Button ,ButtonGroup,Form } from "react-bootstrap";
import './editdevice.scss'
function EditDevice() {

   

    const [baseImage , setBaseImage] =useState({
        img:null
      })
      const targetupload = useRef(null)
      const handleUpload  = (e)=>{
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setBaseImage({img:reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
       }

   
    
    return ( 
    <div className="ListUser">
    <Slibar/>
    
       <div className="main-content">
            <header>
                <div className="social-icons">
                    <span className="ti-bell"></span>
                    <div></div>
                </div>
            </header>
            
            <div className="editDevice">

            <Form className='formtong'>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Tên thiết bị</Form.Label>
    <Form.Control type="text" placeholder="Tên thiết bị..." />
    <Form.Text className="text-muted">
    Email của bạn sẽ được giữ kín
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumberDevice">
    <Form.Label>Số lượng</Form.Label>
    <Form.Control type="text" placeholder="Số lượng ..." />
    <Form.Text className="text-muted">
    Email của bạn sẽ được giữ kín
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPriceDevice">
    <Form.Label>Giá tiền </Form.Label>
    <Form.Control className='fgiatien' type="text" placeholder="Giá tiền..." />
    <Form.Text className="text-muted">
    Email của bạn sẽ được giữ kín
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Label>Ảnh User Cũ</Form.Label>
    <br />
     <img src="" alt="" width="150"  height="150"/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
      
      
      <br />
      <Form.Label> Ảnh Mới</Form.Label>
      <div className="imguseredit" onClick={()=>targetupload.current.click()} > {baseImage.img ===null ? '': <img src={baseImage.img}  width="100" height="100"/>} 
   <input ref={targetupload}  type="file"  onChange={(e)=>handleUpload(e)} /> </div> 
    </Form.Group>

    <ButtonGroup className='grpbutton'>
    <Button variant="primary">Sửa thông tin</Button>

    <Link to="/listdevice" > <Button variant="secondary" className='backbtn'>
    Trở lại
  </Button> </Link>
  </ButtonGroup>

</Form>




                </div>
                </div>
                </div>

)}

export default EditDevice