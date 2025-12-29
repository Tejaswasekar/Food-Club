import { useState, useEffect } from "react";


const useOnlineStatus = () => {
    const [onlinestatus, setStatus] = useState(true);

    useEffect (() => {
        window.addEventListener("offline", () => {
            setStatus(false);
            console.log("You are offline");
        });

        window.addEventListener("online", () => {
            setStatus(true);
            console.log("You are online");
        });

    },[]);


    return onlinestatus;
};

export default useOnlineStatus;