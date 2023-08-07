import { SubmitHandler, useForm } from "react-hook-form";
import { INotes } from "../interface/globalInterface";
import { useParams } from "react-router-dom";

const EditNote = () => {

    const { id } = useParams();

    console.log("id:", id)


    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm<Partial<INotes>>();


      const onSubmit: SubmitHandler<Partial<INotes>> = async (inputData) => {

      console.log("inputData:", inputData)

      
      };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className=" md:px-5 lg:px-20 mt-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-slate-900">
              Edit Note
            </h1>
            <div className="space-y-4 mt-10">
              <div className="flex flex-wrap items-center gap-5">
                {/* title  */}
                <div>
                  <label htmlFor="title" className="text-lx ">
                    Title:
                  </label>
                  <input
                    type="text"
                    placeholder="title..."
                    id="title"
                    className="ml-2 outline-none py-1 px-2  border-2 rounded-md"
                    {...register("title", { required: "Title is required" })}
                  />
                </div>
                {/* category  */}
                <div>
                  <label htmlFor="category" className="text-lx ">
                    Category:
                  </label>
                  <input
                    type="text"
                    placeholder="category name...."
                    id="category"
                    className="ml-2 outline-none py-1 px-2  border-2 rounded-md"
                    {...register("category", {
                      required: "Category is required",
                    })}
                  />
                </div>
              </div>
              <p className="text-red-500">
                {errors?.title ? errors.title.message : ""}
              </p>
              <p className="text-red-500">
                {errors?.category ? errors.category.message : ""}
              </p>
              {/* image url  */}
              <div className="flex flex-wrap items-center gap-5">
                <div>
                  <label htmlFor="imgUrl" className="text-lx ">
                    Image url:
                  </label>
                  <input
                    type="text"
                    placeholder="(optional)"
                    id="imgUrl"
                    className=" ml-2 outline-none py-1 px-2  border-2 rounded-md"
                    {...register("imgUrl")}
                  />
                </div>
                <div>
                  <label htmlFor="tags" className="text-lx ">
                    Tags:
                  </label>
                  <input
                    type="text"
                    placeholder="separate with comma ','"
                    id="tags"
                    className=" ml-2 outline-none py-1 px-2  border-2 rounded-md"
                    {...register("tags")}
                  />
                </div>
              </div>

              {/* description  */}

              <div>
                <label htmlFor="notesDetails" className="block mb-2 text-lg ">
                  Description:
                </label>
                <textarea
                  id="notesDetails"
                  cols={20}
                  rows={10}
                  placeholder="write here..."
                  className="w-3/5 p-4 text-gray-600 bg-amber-50  outline-none rounded-md"
                  {...register("notesDetails", {
                    required: "Description is required",
                  })}
                ></textarea>
                <p className="text-red-500">
                  {errors?.notesDetails ? errors.notesDetails.message : ""}
                </p>
              </div>

              <button className=" px-6 py-1  block rounded-md text-lg font-semibold text-indigo-50 bg-[#1A120B]  ">
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
