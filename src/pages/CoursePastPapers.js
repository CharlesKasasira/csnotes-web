import { useParams } from "react-router-dom"
import { useState } from 'react'
import { Document, pdfjs, Page } from "react-pdf";
import './style.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CoursePastPapers() {
    const { id } = useParams()

    const [ numOfPages, setNumOfPages ] = useState(null)
    const [ pageNumber, setPageNumber ] = useState(1)

    function onDocumentLoadSuccess({ numOfPages }) {
      setNumOfPages(numOfPages)
      console.log('success')
    }
    
  return (
    <>
      <h3>{id.replaceAll('-', ' ').toUpperCase()} PAST PAPERS</h3>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Document 
        file="/DICT(summary).pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page style={{width: '100%'}} pageNumber={pageNumber} />
      </Document>
      <p>
        {pageNumber} of {numOfPages}
      </p>
      </div>
      
    </>

  )
}

export default CoursePastPapers