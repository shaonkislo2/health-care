import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Login/Firebase/firebase.init"

initializeAuthentication(); 

const useFirebase = () => {
    const [user, setUser] =useState({});
    const [isLoading, setIsLoading] = useState (true);
    const auth = getAuth();
    
   const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider )
        .finally(()=> setIsLoading(false));   
    }
    // observe user state change

    useEffect(() => {
    const unSubscribed =  onAuthStateChanged (auth, user => {
        if (user) {
            setUser(user);
        }
        else{
            setUser({})
        }
        setIsLoading(false);
    });
    return () =>unSubscribed; 
    },[])

     const logOut = () =>{
       setIsLoading(true);
       signOut(auth)
      .then(()=>{})
      .finally(() =>setIsLoading(false));
    }

    return{
     user,
     isLoading,
     logOut,
     signInUsingGoogle
    }
};

export default useFirebase;