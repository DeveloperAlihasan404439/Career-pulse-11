import { useLoaderData, useNavigate } from "react-router-dom";
import BannerShared from "../../shared/BannerShared/BannerShared";
import { useContext } from "react";
import { AuthContext } from "../../page/Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from 'axios'
const DatelisCatagory = () => {
  const { user } = useContext(AuthContext);
  const singleData = useLoaderData();
  const navigate = useNavigate()
  const {
    email,
    job_title,
    them_url,
    deadline,
    maximum_price,
    minimum_price,
    description,
    category,
  } = singleData || {};
  const hendelBidOnTheProject = () =>{
    axios.post('http://localhost:5000/myBids')
    .then(res =>{
      console.log(res.data)
    })
    /* Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Successfull in the login",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/myBids") */

  }
  return (
    <div>
      <BannerShared url={them_url} title={job_title} catagory={category} />
      <div className="w-11/12 mx-auto pt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img src={them_url} alt="" className="rounded-md" />
        </div>
        <div>
          <h1 className="text-2xl font-medium text-black">
            Job Name : {job_title}
          </h1>
          <h1 className="text-sm md:text-xl text-black">
            Job Category :{category}
          </h1>
          <h1 className="text-sm md:text-xl text-black">
            Deadline :{deadline}
          </h1>
          <h1 className="text-sm md:text-xl text-black">
            Maximum Price {maximum_price}
          </h1>
          <h1 className="text-sm md:text-xl text-black">
            minimum_price{minimum_price}
          </h1>
          <h1 className="text-sm md:text-xl text-black my-2">{description}</h1>
          <div className="flex items-center gap-1 pt-5">
            <div
              className="bg-[#142F5C] w-[100px] text-xl text-white p-2"
              style={{
                clipPath:
                  "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
              }}
            >
              Buyer
            </div>
            <h1 className="text-sm md:text-xl text-black"> {email}</h1>
          </div>
          <div className="flex items-center gap-1 pt-2 pb-5">
            <div
              className="bg-[#142F5C] w-[100px] text-xl text-white p-2"
              style={{
                clipPath:
                  "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
              }}
            >
              My
            </div>
            <h1 className="text-sm md:text-xl text-black my-2">
              {" "}
              {user.email}
            </h1>
          </div>
          {
              email === user.email?<button disabled onClick={hendelBidOnTheProject}
              className="text-3xl font-medium text-white py-2 px-4 rounded-xl bg-[#142F5C]">
              Bid on the project{" "}
            </button>
            :<button onClick={hendelBidOnTheProject}
            className="text-3xl font-medium text-white py-2 px-4 rounded-xl bg-[#142F5C]">
            Bid on the project{" "}
          </button>
          }
          
          
        </div>
        <div />
      </div>
    </div>
  );
};

export default DatelisCatagory;
