import NoteCard from "../components/NoteCard";
import PageLoader from "../components/UI/PageLoader";
import { useGetAllNotesQuery } from "../redux/api/apiSlice";


const Dashboard = () => {

    const {data, isLoading} = useGetAllNotesQuery(undefined)


    if(isLoading){
        return <PageLoader />
    }

    const notes =data?.data?.data

    console.log("notes:", notes)







    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
                notes?.map(note => <NoteCard key={note?._id} note={note}/>)
            }
        </div>
    );
};

export default Dashboard;