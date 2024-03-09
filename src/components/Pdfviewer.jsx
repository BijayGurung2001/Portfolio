import React from 'react'
import pdf from '../Images/bijay-cv.pdf'
const Pdfviewer = () => {
  return (

    <div>
      <iframe src={pdf} width="100%" height="500px" />
    </div>
  
}

export default Pdfviewer