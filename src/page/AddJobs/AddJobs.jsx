import Lottie from "lottie-react";
import addjob from "./job.json";
import { useState } from "react";
const AddJobs = () => {
    const [selectedTypeValue,setSelectedTypeValue] = useState('')
    const [selectedCategoryValue,setSelectedCategoryValue] = useState('')
  const hendelAddJob = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const title = target.title.value;
    const deadline = target.deadline.value;
    const description = target.description.value;
    const minimumPrice = target.minimumPrice.value;
    const maximumPrice = target.maximumPrice.value;
    const addJobData = {
        email,
        job_title: title,
        deadline,
        description,
        category: selectedCategoryValue,
        type: selectedTypeValue,
        minimum_price: minimumPrice,
        maximum_price: maximumPrice,
    }
    console.log(addJobData)
};
  return (
    <div>
      <div className="w-11/12 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <Lottie animationData={addjob} loop={true} />
        </div>
        <div>
          <div className="card flex-shrink-0 w-full shadow-xl bg-base-100">
            <form onSubmit={hendelAddJob} className="card-body">
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    placeholder="email of the employer"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Job title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="input input-bordered"
                    placeholder="job title"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    className="input input-bordered"
                    placeholder="deadline"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="input input-bordered"
                    placeholder="sort description"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Minimum price</span>
                  </label>
                  <input
                    type="text"
                    name="minimumPrice"
                    className="input input-bordered"
                    placeholder="minimum price"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Maximum price</span>
                  </label>
                  <input
                    type="text"
                    name="maximumPrice"
                    className="input input-bordered"
                    placeholder="maximum-price"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  
                <select
                  id="input"
                  className="input input-bordered"
                //   value={selectedBrandValue}
                  onChange={(e) => setSelectedCategoryValue(e.target.value)}
                >
                  <option>Select Option Category</option>
                  <option value="Web development">Web development</option>
                  <option value="Digital marketing">Digital marketing</option>
                  <option value="Graphics design" >Graphics design</option>
                </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  
                <select
                  id="input"
                  className="input input-bordered"
                  onChange={(e) => setSelectedTypeValue(e.target.value)}
                >
                  <option>Select Option Type</option>
                  <option value="Development">Development</option>
                  <option value="Marketing" >Marketing</option>
                  <option value="Graphics">Graphics</option>
                </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-[#142F5C] hover:bg-[#142F5C] text-white"
                >
                  Add Jobs{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default AddJobs;
