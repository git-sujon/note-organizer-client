import { ICategory } from "../interface/globalInterface";
import { useGetAllCatagoriesQuery } from "../redux/api/apiSlice";
import { setSortValue, setSortField } from "../redux/features/sorting/sortSlice";
import { useAppDispatch } from "../redux/hooks";
import Spinner from "./UI/Spinner";

const AllCatagories = () => {
  const { data, isLoading } = useGetAllCatagoriesQuery(undefined);
  const dispatch = useAppDispatch();
  console.log("data:", data?.data);
  const catagories = data?.data;

  if (isLoading) {
    return <Spinner />;
  }

  const selectCategoryHandler = (id:string) => {
    if(id){
        dispatch(setSortField("category"))
        dispatch(setSortValue(id))
    }
    
  }

  return (
    <div className="mt-5">
      {catagories?.map((category: ICategory) => (
        <button
          key={category._id}
          onClick={()=> selectCategoryHandler(category?._id)}
          className="px-1.5 py-1 bg-pink-700 text-slate-100 rounded m-2 hover:bg-pink-100 hover:text-slate-900 border focus:outline-none focus:ring active:text-rose-500 font-semibold text-xs"
        >
          {category?.title}
        </button>
      ))}
    </div>
  );
};

export default AllCatagories;
