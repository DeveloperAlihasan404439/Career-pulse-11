import axios from "axios";
import Swal from "sweetalert2";

const BidRequestTable = ({ mybid, index, refetch }) => {
    console.log(mybid);
  const { _id, job_title, user_email, deadline, price,status } = mybid;
  const hendelAccept = (_id) => {
    console.log("Accept", _id);
  };
  const hendelReject = (id) => {
    axios
      .patch(`http://localhost:5000/myBids/reject?id=${id}`, mybid)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "Bid job requst has be canceled ",
            icon: "success",
            background: "black",
            color: "white",
          });
          refetch()
        }
      });
  };
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{job_title}</td>
      <td>{user_email}</td>
      <td>{deadline}</td>
      <td>{price}</td>
      <th>
        <div className="flex justify-around">
          <button
            onClick={() => hendelAccept(_id)}
            className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
          >
            Accept
          </button>
          <button
            onClick={() => hendelReject(_id)}
            className="px-3 bg-[#142F5C] text-white py-1 h-full rounded-lg"
          >
            {
                status === "Canceled"?"Rejected":"Reject"
            }
            
          </button>
        </div>
      </th>
    </tr>
  );
};

export default BidRequestTable;
