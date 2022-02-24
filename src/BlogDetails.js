import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,isPending,error}=useFetch(`http://localhost:8000/blogs/${id}`);
    const history=useHistory();
    
    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
            {isPending&&<p>Loading...</p>}
            {error&&<p>{error}</p>}
            {blog&&(
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    {/* <br /> */}
                    <p>Written by {blog.author}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;