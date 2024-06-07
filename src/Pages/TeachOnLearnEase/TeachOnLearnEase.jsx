import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const TeachOnLearnEase = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: teacher = [], refetch } = useQuery({
    queryKey: ["teacherDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/teacher/${user.email}`);
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const experience = data.experience;
    const category = data.category;
    const image = data.image;
    const status = "pending";
    const info = { name, email, experience, category, image, status };
    axiosPublic.post("/teacher", info).then((res) => {
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Teacher request successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center mt-10">
        Become a Teacher: Shape the Future with Us
      </h1>

      <div>
        {teacher.status === "pending" && <div>Already Apply Waiting for conformantion</div>}

        {teacher.status === "approved" && <div>teacher request approved</div>}

        {teacher.status === "rejected" && <div>apply again</div>}

        <div className="bg-gray-200 p-10 mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Name*</span>
                </div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </label>

              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Email*</span>
                </div>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Type here"
                  disabled
                  className="input input-bordered w-full"
                />
                <input type="hidden" defaultValue={user.email} {...register("email")} />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </label>
            </div>

            <div className="flex gap-5">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Experience*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("experience", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={"default"}>
                    Select a level
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="Mid-level">Mid-Level</option>
                  <option value="experienced">Experienced</option>
                </select>
              </label>

              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={"default"}>
                    Select a category
                  </option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Graphic Design">Graphics Design</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </label>
            </div>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Image URL*</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                disabled
                defaultValue={user?.photoURL}
                className="input input-bordered w-full"
              />
              <input type="hidden" defaultValue={user.photoURL} {...register("image")} />
            </label>

            <button
              type="submit"
              className="flex w-full text-white gap-2 items-center py-2 px-3 btn bg-[#e67e22] mt-2 hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeachOnLearnEase;
