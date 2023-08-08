import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPage } from "../redux/features/pagination/paginationSlice";

const Pagination: React.FC<{ pages: number }> = ({ pages }) => {
  const { page } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="flex justify-center space-x-1 text-white">
        <button
          onClick={() =>
            page === 0
              ? dispatch(setPage(page - 0))
              : dispatch(setPage(page - 1))
          }
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-[#1A120B] border-yellow-500"
        >
          <BsArrowLeftSquare />
        </button>

        {[...Array(pages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => dispatch(setPage(pageNumber))}
            type="button"
            title={`Page ${pageNumber + 1}`}
            className={
              page === pageNumber
                ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border  rounded  shadow-md bg-white text-amber-900 border-amber-900"
                : "inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-[#1A120B] border-yellow-500"
            }
          >
            {pageNumber + 1}
          </button>
        ))}

        <button
          onClick={() => dispatch(setPage((page + 1) % pages))}
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-[#1A120B] border-yellow-500"
        >
          <BsArrowRightSquare />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
