import { BsSearch } from "react-icons/bs";
import { useAppDispatch } from "../redux/hooks";
import { setSortField, setSortValue } from "../redux/features/sorting/sortSlice";

const Search = () => {

    const dispatch = useAppDispatch()


  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    const searchValue =  (event.target as HTMLInputElement).searchValue.value;
    if(searchValue) {
        dispatch(setSortField("searchTerm"))
        dispatch(setSortValue(searchValue))
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>

      <input
        type="text"
        id="Search"
        placeholder="Search for..."
        name="searchValue"
        className="w-full rounded-md border-amber-200 py-1.5 pe-10 shadow-sm sm:text-sm outline-amber-400 pl-2 drop-shadow-md"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="submit" className="text-amber-600 hover:text-amber-700">
          <span className="sr-only">Search</span>
          <BsSearch />
        </button>
      </span>
    </form>
  );
};

export default Search;
