import { useEffect} from "react";

const useTitle=title=>{
    useEffect(()=>{
        document.title=`Khan Market ${title}`
    },[title])
};

export default useTitle