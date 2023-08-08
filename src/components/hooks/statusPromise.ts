/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";

const statusPromiseHandler = async (
  result:any,
  navigate: (arg0: string) => void,
  navigateRoute: string,
) => {
  if (result.data.success) {
    await navigate(navigateRoute);

    toast.success(result.data.message);
  }
  if (result.error.status) {
    toast.error(result.error.status);
  }
};

export default statusPromiseHandler;
