import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <div className="pnf">
            <div className="data">
                <h1 className='pnf-title'>
                    404
                </h1>        
                
                <h2 className='pnf-text'>
                    Oops... Your requested page not found! (:
                </h2>
            </div>
            
            <div className="back">
                <Link to="/" className="backBtn">Back to Home</Link>
            </div>
    
        </div>
    </div>
  )
}

export default PageNotFound