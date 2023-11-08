import { useQuery } from "@tanstack/react-query";
import CandidatesCart from "./CandidatesCart";
import { useState } from "react";
import Loding from "../../shared/Loding/Loding";
const Candidates = () => {
    const [pagenition, setPagenition] = useState(1)
    const {data, isLoading} = useQuery({
        queryKey: ['pages',pagenition],
        queryFn: async()=>{
            const candidatesData = await fetch(`http://localhost:5000/candidates?pages=${pagenition}`)
            const candidates = await candidatesData.json()
            return candidates;
        }
    })
    const result = data?.result
    const countpages = data?.counter;
    const totlePages = Math.ceil(countpages / 7)
    const pages = [... new Array(6).fill(0)]
  return (
    <div className="pb-5 md:mb-16">
      <div
        className="h-[60vh]"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.1051774158.1699368414&semt=ais)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#03050891] h-full flex items-center relative">
          <div className="w-11/12 mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-white drop-shadow-2xl pb-3 text-center">
              Discover Candidates
            </h1>
            <p className="md:w-8/12 mx-auto text-xl md:text-2xl font-medium text-white text-center"> Candidate discovery is an intuitive search capability that gives recruiters a head start by helping them quickly create a short list of past candidates who are a fit for new positions. This saves recruiters time, because they can now easily identify and re-engage known candidates instead of spending time trying to find new ones.</p>
          </div>
        </div>
      </div>
     <div className="w-11/12 mx-auto">
     {
      isLoading? <Loding/>
      : <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
            result?.map(results =><CandidatesCart key={results._id} results ={results}/>)
        }
      </div>
     }
      <div className=" mt-10 flex gap-2 justify-center items-center">
        {
            pages?.map((page, i) => <button onClick={()=> setPagenition(i+1)} className="text-xl text-white bg-black py-3 px-5 rounded-[50%]" key={i}>{i + 1}</button>)
        }
      </div>
     </div>
    </div>
  );
};

export default Candidates;
