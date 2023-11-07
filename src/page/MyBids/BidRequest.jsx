import Loding from '../../shared/Loding/Loding';
import BannerShared from '../../shared/BannerShared/BannerShared';
import useMyBids from '../../shared/Hooks/useMyBids';
import BidRequestTable from './BidRequestTable';
import { Helmet } from 'react-helmet';

const BidRequest = () => {
    const {data, isLoading, refetch} = useMyBids()
  return (
    <div><Helmet>
    <title>Career Pulse | Bid Request</title>
  </Helmet>
      <BannerShared
        url="https://img.freepik.com/free-photo/characters-looking-job_1156-558.jpg?w=826&t=st=1699287748~exp=1699288348~hmac=7360adafb1f27898b9c5d90a6860b7ccc415975b998c827d4cfe8419c0fc4122"
        title="Bid Requests All Jobs"
        catagory="Bid Requests"
      />
      <div className="w-11/12 mx-auto overflow-x-auto mb-5">
        <h1 className="text-center text-2xl md:text-4xl font-medium my-5"><span className="border-b-4 p-2 rounded-xl border-orange-500">Bid Requests All Jobs</span></h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>
                <div className="flex justify-around">
                    <h1>Status</h1>
                    <h1 className="mr-4">Complete</h1>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading? <Loding/>
              :<>
              {data?.map((mybid, index) => <BidRequestTable key={index} mybid={mybid} index={index} refetch ={refetch}/>)}
              </>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;