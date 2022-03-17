import { useParams } from "react-router-dom"

function CoursePastPapers() {
    const { id } = useParams()
  return (
    <h3>{id.replaceAll('-', ' ').toUpperCase()} PAST PAPERS</h3>
  )
}

export default CoursePastPapers