import { useEffect, useState } from "react";

const useAdmin=email=>{
    const [isAdmin,setisAdmin]=useState(false)
    const [isadminloding,setisadminloding]=useState(true)
    useEffect(()=>{
        if(email){
            // fetch(`http://localhost:5000/users/admin/${email}`)
            fetch(`https://daraz-e-comarch-server.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setisAdmin(data.isAdmin)
                setisadminloding(false)
            })
        }
    },[email])

    return [isAdmin,isadminloding]
}

export default useAdmin