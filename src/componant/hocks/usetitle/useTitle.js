import { useEffect} from "react";

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} Khan Market `
    },[title])
};

export default useTitle