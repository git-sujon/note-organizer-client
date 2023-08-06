import { useAppSelector } from "../redux/hooks";

const Dashboard = () => {

    const user = useAppSelector(state => state.user)

    console.log("user:", user)


    return (
        <div>
            this is Dashboard
        </div>
    );
};

export default Dashboard;