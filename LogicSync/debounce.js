const { useEffect } = require("react");

const useDebounce=(fn,delay)=>{
    let timerId;
    return (...args)=>{
        clearTimeout(timerId);
        timerId= setTimeout(()=>{ fn(...args); }, delay)
    }
    
}

const useDebouncePromise=(fn,delay)=>{
    let timerId;
    return (...args)=>{
        return new Promise((resolve)=>{
            clearTimeout(timerId);
        timerId= setTimeout(()=>{ resolve(fn(...args)); }, delay)
        })
        
    }
    
}


function add(a,b){ console.log(a + b);}


const debounceAdd=useDebounce(add,1000)

debounceAdd(2,3)
debounceAdd(5,3)

/// promise with debounce

const debounceAddP=useDebouncePromise(add,1000)

debounceAddP(5,3).then((res)=> console.log(res))



const useDebounceHooks=(value, delay)=>{
    const [debounce, setDebounce]= useState(value);
    useEffect(()=>{
        let timerId= setTimeout(()=> setDebounce(value),delay);
        return ()=> {clearTimeout(timerId)};
    },[value, delay])

    return debounce;
}

const debouncedQuery = useDebounceHooks(query, 500);

///