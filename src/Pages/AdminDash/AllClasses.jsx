import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllClasses = () => {

    const axiosSecure = useAxiosSecure();

    const {data: classes = [], refetch} = useQuery({
        queryKey: [' allClasses'],
        queryFn : async () => {
            const res = axiosSecure.get('/class');
            return (await res).data;
        }
    })

    return (
        <div>
            <h1>All classes</h1>
        </div>
    );
};

export default AllClasses;