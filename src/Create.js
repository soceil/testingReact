import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Dhakrey');
    const [isPending, setIsPending] = useState(false);
    const history=useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const blog={title,body,author};

    setIsPending(true);
    // console.log(blog);
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"content-Type":'application/json'},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log('Blog created');
        setIsPending(false);
        // history.go(-1);
        history.push('/');
    })

}
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Dhakrey">Dhakrey</option>
                    <option value="Harendra">Harendra</option>
                </select>
                {!isPending&&<button>Add Blog</button>}
                {isPending&&<button disabled>Adding Blog..</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
     );
}
 
export default Create;