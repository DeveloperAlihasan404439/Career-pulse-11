import axios from "axios";
import BannerShared from "../../shared/BannerShared/BannerShared";
import useMyBids from "../../shared/Hooks/useMyBids";
import Loding from "../../shared/Loding/Loding";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const { data, isLoading } = useMyBids();

  const hendelComplete = (id) => {
    axios
      .patch(`http://localhost:5000/myBids/complete?id=${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "Bid job requst  has be complete",
            icon: "success",
            background: "black",
            color: "white",
          });
          refetch();
        }
      });
  };
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Career Pulse | My Bids</title>
      </Helmet>
      <BannerShared
        url="https://img.freepik.com/free-photo/characters-looking-job_1156-558.jpg?w=826&t=st=1699287748~exp=1699288348~hmac=7360adafb1f27898b9c5d90a6860b7ccc415975b998c827d4cfe8419c0fc4122"
        title="My Bids All Jobs"
        catagory="My Bids"
      />
      <div className="w-11/12 mx-auto overflow-x-auto mb-5">
        <h1 className="text-center text-2xl md:text-4xl font-medium my-4">
          <span className="border-b-4 p-2 rounded-xl border-orange-500">
            My Bids All Jobs
          </span>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>status</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loding />
            ) : (
              <>
                {data?.map((mybid, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{mybid?.job_title || "no title"}</td>
                    <td>{mybid.user_email}</td>
                    <td>{mybid.deadline}</td>
                    <td>{mybid.status}</td>
                    {mybid.status === "Complete" ? (
                      ""
                    ) : (
                      <th>
                        {mybid.status === "In progress" ? (
                          <button
                            onClick={() => hendelComplete(mybid._id)}
                            className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
                          >
                            Complete
                          </button>
                        ) : (
                          <button
                            disabled
                            className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
                          >
                            Complete
                          </button>
                        )}
                      </th>
                    )}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
