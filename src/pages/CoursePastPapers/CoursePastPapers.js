import { useParams } from "react-router-dom"
import { useState } from 'react'
import { Document, pdfjs, Page } from "react-pdf";
import './style.css'

import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'




pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CoursePastPapers() {
    const { id } = useParams()

    const [ numOfPages, setNumOfPages ] = useState(null)
    const [ pageNumber, setPageNumber ] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
      setNumOfPages(numPages)
      setPageNumber(1)
    }

    console.log(numOfPages)
    
  return (
    <>
      <h3>{id.replaceAll('-', ' ').toUpperCase()} SUMMARY NOTES</h3>
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
        file="/past/lit21.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page style={{width: '100%'}} pageNumber={pageNumber} />
      </Document>
      <p>
        <button
          onClick={() => {
            if(pageNumber > 1){
              setPageNumber(pageNumber - 1)
            }
          }}

          className='next-cta'

        >
          <FaAngleDoubleLeft />
        </button>
        Page {pageNumber} of {numOfPages}
        <button
          onClick={() => {
            if(pageNumber < numOfPages){
              setPageNumber(pageNumber + 1)
            }
            
          }}
          className='next-cta'
        ><FaAngleDoubleRight /></button>
      </p>
      </div>
      
    </>

  )
}

export default CoursePastPapers