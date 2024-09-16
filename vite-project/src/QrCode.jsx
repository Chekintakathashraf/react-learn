import { useState } from "react"

const QrCode = () => {
    // const [img,setImg] = useState("images/2.jpeg")
    const [img,setImg] = useState("")
    const [loading,setLoading] = useState(false)
    // const [qrData,setQrData] = useState("Example")
    const [qrData,setQrData] = useState("https://www.youtube.com/")
    const [qrSize,setQrSize] = useState(150)

    // function generateQR(){
    //     setImg("images/1.jpeg")
    // }

    async function generateQR(){
        setLoading(true)
        try{
            // const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
            setImg(url)
            
        } catch(error){
            console.error("Error generating QR code",error)
        } finally{
            setLoading(false)
        }
    }
    
    function downloadQR(){
        fetch(img).then((response)=> response.blob()).then((blob) => {
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download = "qrcode.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
        .catch((error => {
            console.error("Error downloading QR code",error)
        }))
    }
   
    
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {/* <img src="images/1.jpeg" className="qr-code-image" alt="" /> */}
        {/* <img src={img} className="qr-code-image" alt="" /> */}
        {img && <img src={img} className="qr-code-image" alt="" /> }
        {loading && <p>Please wait...</p>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for Qr code:
            </label>
            {/* <input type="text" id="dataInput" placeholder="Enter data for Qr code" /> */}
            <input type="text" value={qrData} id="dataInput" placeholder="Enter data for Qr code" onChange={(e)=> setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">
                Image size (e.g.,150):
            </label>
            <input type="text" value={qrSize} id="sizeInput" placeholder="Enter image size" onChange={(e)=> setQrSize(e.target.value)}/>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate Qr code</button>
            <button className="download-button" onClick={downloadQR}>Download Qr code</button>
        </div>
    </div>
  )
}

export default QrCode
