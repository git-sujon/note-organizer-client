import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import { INotes } from "../interface/globalInterface";
import { useDeleteNoteMutation, useGetSingleCategoryQuery } from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const NoteCard: React.FC<{ note: INotes }> = ({ note }) => {

  
  const {data} = useGetSingleCategoryQuery(note.category)



  const [deleteNote, { error}] = useDeleteNoteMutation();

  const deleteHandler = async (id: string) => {
    const confirmation = window.confirm("Do you want to delete?");
    if (confirmation) {
      const result = await deleteNote({ _id: id });

      if ('data' in result) {
        const message = result.data.message;
        toast.success(message);
      } else {
        toast.error("Something Went Wrong");
      }
    }
    if (error) {
      toast.error("Something Went Wrong");
    }
  };
  const categoryName = data?.data?.title
  const formattedDate = new Date(note?.createdAt).toLocaleDateString();
  return (
    <div className="relative block overflow-hidden rounded-lg border bg-amber-50 border-amber-300 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-amber-300 via-amber-700 to-amber-900"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl h-16">
            {note?.title}
          </h3>
          {note?.imgUrl && <img src={note?.imgUrl} className="w-full" alt="" />}
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">
          {note?.notesDetails}
        </p>
      </div>

      <div className="mt-6 flex justify-between gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">{formattedDate}</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Category</dt>
          <dd className="text-xs text-gray-500">{categoryName}</dd>
        </div>
        <div className="flex items-center gap-5 text-xl">
          <Link to={`/dashboard/${note?._id}`} className="">
            <TbEdit />
          </Link>
          <button onClick={() => deleteHandler(note?._id)} className="">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};


export default NoteCard;
