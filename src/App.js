/* import { Chat } from '@material-ui/icons'; */
import { useDispatch, useSelector } from "react-redux";
import Chat from "./Chat";
import React, { useEffect } from 'react';
import  "./App.css";
import Sidebar from './Sidebar';
import { selectUser } from "./features/counter/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/counter/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

 useEffect(() => {
   auth.onAuthStateChanged((authUser) =>  {
    if (authUser) {
      // the user is logged in
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,
      }))
    } else{
      // user is logged out
      dispatch(logout());
    }
   });
 }, [dispatch]);

  return (
    <div className="app">
     {user ? (
       <>
         <Sidebar />
         <Chat />
      </>
     ) : (
       <Login />
     )}
     
    </div>
  );
}

export default App;
 