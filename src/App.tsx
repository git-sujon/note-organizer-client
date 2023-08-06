import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/Firebase";
import { Toaster } from "react-hot-toast";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (auth && user) {
        dispatch(setUser(user));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Toaster  position="top-center" />
      <MainLayout />
    </>
  );
}

export default App;
