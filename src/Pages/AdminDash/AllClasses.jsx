import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllClasses = () => {
  const axiosSecure = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/class");
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center">All Classes</h1>
      <h1>{classes.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Email</th>
              <th>Short Des</th>
              <th>Action</th>
              <th>Action</th>
              <th>See Progress</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.title}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{item.email}</td>
                <td>{item.shortDes}</td>
                <td>
                  <button className="btn btn-ghost bg-green-500 text-white hover:text-black">
                    Approve
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost bg-red-500 text-white hover:text-black">
                    Reject
                  </button>
                </td>
                <th>
                  <button className="btn btn-ghost bg-orange-600 text-white hover:text-black">
                    Progress
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
