import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";

const ClassDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: details = [] } = useQuery({
    queryKey: ["detailsClass"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classdetails/${id}`);
      return res.data;
    },
  });

  return (
    <div className="mt-10">
      <div className="max-w-xl mx-auto">
        <img src={details.image} alt="" />
      </div>
      <div className="max-w-2xl mx-auto mt-3">
      <div className="flex gap-10 justify-between">
        <p className="text-xl font-semibold">Title : {details.title}</p>
        <p className="text-xl font-semibold">Price : ${details.price}</p>
      </div>
      <p className="mt-1 text-lg font-medium">Teacher : {details.name}</p>
      <p className="mt-1">Short Description : {details.shortDes}</p>
      <p className="mt-1">Description : {details.description}</p>
      <Link to={`/payment/${details._id}`}><button className="btn btn-ghost bg-[#e67e22] text-white hover:text-black w-full mt-2">Pay</button></Link>
      </div>
    </div>
  );
};

export default ClassDetails;
