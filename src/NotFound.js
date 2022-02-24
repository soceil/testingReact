import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>The requested page could not be found</h1>
            <Link to='/'>Back to home</Link>
        </div>
     );
}
 
export default NotFound;