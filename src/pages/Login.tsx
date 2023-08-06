import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IUserLogin } from "../interface/authInterfaces";
import { Link } from "react-router-dom";
import {  loginUser } from "../redux/features/user/userSlice";
import { useAppDispatch } from "../redux/hooks";


const LoginPage = () => {

  const dispatch = useAppDispatch()

  const onSubmit = async (inputData: IUserLogin) => {
    dispatch(loginUser({ email: inputData?.email, password: inputData?.password }));
    console.log({ email: inputData?.email, password: inputData?.password });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } =  useForm<IUserLogin>();

  return (
    <div className="h-full bg-slate-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <div className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Don't have account?{" "}
            <Link
             to="/signup"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
   
              Sign up here
            </Link>
          </div>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <FcGoogle className="text-3xl" />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                aria-labelledby="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <p className="text-red-500">
                {errors?.email ? errors.email.message : ""}
              </p>
            </div>
            <div className="mt-6  w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />

                <p className="text-red-500">
                  {errors?.password ? errors.password.message : ""}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 text-sm font-semibold leading-none text-white focus:outline-none bg-slate-700 border rounded hover:bg-slate-600 py-4 w-full"
              >
                Create my account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
