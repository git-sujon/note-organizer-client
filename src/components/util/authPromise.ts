import toast from "react-hot-toast";

const authPromiseHandler = async (
  result: { meta: { requestStatus: string } },
  navigate: (arg0: string) => void
) => {
  if (result.meta.requestStatus === "fulfilled") {
    await navigate("/dashboard");
    toast.success("Welcome back");
  } else if (result.meta.requestStatus === "rejected") {
    toast.error("Email or Password incorrect");
  }

 
};

export default authPromiseHandler;
