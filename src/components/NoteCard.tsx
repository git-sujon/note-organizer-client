import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";

const NoteCard = ({ note }) => {

    const deleteHandler = () => {
        const confirmation = window.confirm("Do you want to delete?")

    }


  const formattedDate = new Date(note?.createdAt).toLocaleDateString();
  return (
    <div className="relative block overflow-hidden rounded-lg border border-slate-300 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl h-16">
            {note?.title}
          </h3>
          {note?.imgUrl && (
            <img
              src={note?.imgUrl}
              className="w-full"
              alt=""
            />
          )}
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
          <dd className="text-xs text-gray-500">{note?.category}</dd>
        </div>
        <div className="flex items-center gap-5 text-xl">
          <button className="">
            <TbEdit />
          </button>
          <button onClick={()=> deleteHandler()} className="">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
