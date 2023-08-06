import { useEffect } from "react";
import Home from "./pages/Home";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/Firebase";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App;
