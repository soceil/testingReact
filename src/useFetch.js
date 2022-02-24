import { useState, useEffect } from "react";

const useFetch=(url)=>{

    // const [blogs, setBlogs] = useState(null);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();

        // console.log('Home component rendered');
        // console.log(blogs);
        setTimeout(()=>{
            // fetch('http://localhost:8000/blogs')
            fetch(url,{signal:abortCont.signal})
                .then(res=>{
                    console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch the data');
                    }
                    return res.json();
                })
                .then(data=>{
                    // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    // console.log(err.message);
                    if(err.name==='AbortError'){
                        console.log('Fetch aborted');
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        },1000);

        return ()=>abortCont.abort();
    },[url]);
    return {data,isPending,error};
};


export default useFetch;