import NoteCard from "../components/NoteCard";
import NoData from "../components/UI/ErrorPages/NoData";
import ServerError from "../components/UI/ErrorPages/ServerError";
import PageLoader from "../components/UI/PageLoader";
import { INotes } from "../interface/globalInterface";
import { useGetAllNotesQuery } from "../redux/api/apiSlice";

const Dashboard = () => {
  const { data, isLoading, error } = useGetAllNotesQuery(undefined);


  if (isLoading) {
    return <PageLoader />;
  }

  const notes = data?.data?.data;

  



  if (error) {
    return <ServerError />;
  }

  return (
    <>
    {
        !notes.length  && <NoData />
    }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {notes?.map((note: INotes) => (
          <NoteCard key={note?._id} note={note} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
