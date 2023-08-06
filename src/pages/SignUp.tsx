import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IUserSignUp } from "../interface/authInterfaces";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { createUser } from "../redux/features/user/userSlice";

const SignUpPage = () => {

  const dispatch = useAppDispatch();

  const onSubmit = async (inputData: IUserSignUp) => {

    dispatch(
      createUser({
        userName: inputData?.name,
        imageUrl: inputData?.imageUrl,
        email: inputData?.email,
        password: inputData?.password,
      })
    );
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserSignUp>();

  return (
    <div className="h-full bg-slate-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Sign Up to your account
          </p>
          <div className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Already have an account
            <Link
              to="/login"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer ml-2"
            >
              Login here
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
                id="name"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Name
              </label>
              <input
                aria-labelledby="name"
                type="name"
                {...register("name", { required: "Name is required" })}
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <p className="text-red-500">
                {errors?.name ? errors.name.message : ""}
              </p>
            </div>
            <div>
              <label
                id="imageUrl"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Photo Url
              </label>
              <input
                aria-labelledby="imageUrl"
                type="imageUrl"
                {...register("imageUrl", { required: "Photo Url is required" })}
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <p className="text-red-500">
                {errors?.imageUrl ? errors.imageUrl.message : ""}
              </p>
            </div>
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
            <div className="  w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="">
                <input
                  id="pass"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 "
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

export default SignUpPage;
