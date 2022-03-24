import { useParams } from "react-router-dom"
import { useState } from 'react'
import { Document, pdfjs, Page } from "react-pdf";
import './style.css'

import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

import useMediaQuery from '../../hooks/useMediaQuery'




pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CoursePastPapers() {
    const { id } = useParams()

    const [ numOfPages, setNumOfPages ] = useState(null)
    const [ pageNumber, setPageNumber ] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
      setNumOfPages(numPages)
      setPageNumber(1)
    }

    const matches = useMediaQuery('(min-width: 768px)')
    
  return (
    <>
      <h3 className="font-bold uppercase">{id.replaceAll('-', ' ')} past papers</h3>
      <div
        className='flex flex-col items-center justify-center sm:w-screen md:w-full lg:w-full'
      >
          <Document 
            file={`/past/${id}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            className='sm:w-11/12 lg:w-8/12 md:w-full flex justify-center items-center'
          >
            <Page pageNumber={pageNumber} className='border-2 border-black w-full flex justify-center overflow-hidden' width={!matches ? '430' : '600'}/>
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