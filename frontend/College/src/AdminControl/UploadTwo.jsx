import React, { useEffect, useState } from 'react';
import Choose from './Choose';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Uploading on IQAC
function UploadTwo() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [deleteMsg,setDeleteMsg]=useState(null);
  let [pdfList,setPdfList]=useState([]);
  let [rePdf,setRePdf]=useState(false);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
    setUploadStatus("");
  };



   
  function showPdf()
  {
    useEffect(()=>{

fetch("http://localhost:8080/doc-iqac/list")
                .then((res)=>res.json()).then((data)=>{
                  setPdfList(data);
                  console.log(pdfList);
                  
                })
    },[rePdf])
    
  }  
      
  showPdf();
   

     


  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadStatus("Please select at least one file.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file); // 🔁 field name: "files"
    });

    try {
      const response = await fetch("http://localhost:8080/doc-iqac/upload", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setUploadStatus("Files uploaded successfully.");        
         
      } else {
        setUploadStatus("Upload failed.");
      }


    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("Error occurred during upload.");
    }finally{

     
        rePdf();
        setRePdf(true);
      
    }
  };

  let handleDelete= async (id)=>
  {
    console.log(id);
    let r=await fetch(`http://localhost:8080/doc-iqac/deletePdf/${id}`,{
      method:"POST"
    });
    let text= await r.text();
    setDeleteMsg(text);
    
    let newArr = pdfList.filter((e)=>e.id !== id)
    setPdfList(newArr);
    setTimeout(()=>{
      setDeleteMsg(null);
    },2000)
  }
  return (
    <div style={{ padding: "1rem", maxWidth: "600px", marginTop: "80px" }}>
      <h2>Upload File(s)</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        multiple
        onChange={handleFileChange}
      />
      <br />
      <button
        onClick={handleUpload}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Upload
      </button>
      <div style={{marginTop:"2px", color:"green"}}>{deleteMsg && deleteMsg}</div>
      <p style={{ marginTop: "10px" }}>{uploadStatus}</p>
        <div style={{display:"flex" ,gap:"15px",width:"100vw",boxShadow:"2px,2px,black", flexWrap:"wrap",padding:"15px"}}>
        {
             pdfList.map((e,i)=>{
                    return(
                <Card style={{ width: '18rem', padding:"15px"}}>
                      <Card.Body>
                        <Card.Title>Pdf Document  {i+1}</Card.Title>
                        <Card.Text>{e.fileName}</Card.Text>
                        {/* <Button variant="primary" style={{position:"relative", top:"0px"}}>Delete</Button> */}
                        <button style={{position:"absolute", bottom:"2px", backgroundColor:"lightblue", border:"none", padding:"10px",borderRadius:"8px", left:"5px"}} onClick={()=>{handleDelete(e.id)}} > Delete</button>
                      </Card.Body>
                    </Card>
                    )
                  })
                }
        </div>
                

   

      <Choose/>
    </div>
  );
}

export default UploadTwo;
