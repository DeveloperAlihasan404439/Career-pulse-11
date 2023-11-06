import axios from "axios";
import Swal from "sweetalert2";
const MyPostedJobsCart = ({ myjob, refetch }) => {
  const {
    _id,
    job_title,
    deadline,
    minimum_price,
    maximum_price,
    email,
    description,
  } = myjob || {};
  const hendelDelete = (id) => {
    axios
      .delete(`http://localhost:5000/catagory/delete?id=${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success the delete product",
            showConfirmButton: false,
            timer: 1500,
            background: "black",
            color: "white",
          });
          refetch();
        }
      });
  };
  const hendelUpdated = (id) =>{
    console.log(id);
  }
  return (
    <div className="p-5 mb-5 border-2 rounded-xl bg-base-200">
      <h2 className="text-lg md:text-2xl text-left font-medium text-black">
        {job_title}
      </h2>
      <h1 className="text-sm md:text-lg p-1 text-left font-medium text-black">
        Deadline : {deadline}
      </h1>
      <h1 className="text-sm md:text-lg text-left font-medium text-black">
        {" "}
        Minimum Price : {minimum_price}
      </h1>
      <h1 className="text-sm md:text-lg text-left font-medium text-black">
        {" "}
        Maximum Price : {maximum_price}
      </h1>
      <h1 className="text-sm md:text-lg text-left pb-2 font-medium text-black">
        {" "}
        Email : {email}
      </h1>
      <h1 className="text-sm md:text-md text-left font-medium text-black  mb-4">
        Description : {description}
      </h1>
      <div className=" md:flex gap-5 ">
        <button onClick={()=> hendelUpdated(_id)} className="uppercase py-2 px-6 w-full mb-2 md:mb-0 md:w-fit items-center justify-center bg-[#142F5C] text-white text-2xl font-medium  rounded-xl">
          update
        </button>
        <button
          onClick={() => hendelDelete(_id)}
          className="uppercase py-2 px-6 w-full md:w-fit items-center justify-center bg-[#142F5C] text-white text-2xl font-medium rounded-xl"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default MyPostedJobsCart;