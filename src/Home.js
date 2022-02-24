// import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    // let name='Coordinarts';
    // const [name, setName] = useState('Coordinarts');
    // const [age, setAge] = useState(25);
    
    // const handleClick = () => {
    //     // name='Coordinarts World';
    //     setName('Coordinarts World');
    //     setAge(26);
    //     console.log(name);
    // }


    // const [name,setName]=useState('Coordinarts');

    // const handleDelete = (id) => {
    //     const newBlogs=blogs.filter((blog)=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }
   const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    
    return (  
        <div className="home">
            {/* <h2>Select from our wide array of products</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click for coupons</button> */}
            {error && <div>{error}</div>}
            {isPending && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/* {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />} */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.id>1)} title="HD's blogs!" /> */}
            {/* <button onClick={()=>setName('Coords')}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}
 
export default Home;