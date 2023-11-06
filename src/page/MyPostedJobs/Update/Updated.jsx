import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Updated = () => {
  const navigate = useNavigate()
  const loader = useLoaderData()
  const [selectedTypeValue,setSelectedTypeValue] = useState(loader.type)
  const [selectedCategoryValue,setSelectedCategoryValu] = useState(loader.category)
    const {
        _id,
      email,
      job_title,
      deadline,
      minimum_price,
      maximum_price,
      description,
    } = loader || {};
  const hendelUpdated = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const title = target.title.value;
    const deadline = target.deadline.value;
    const description = target.description.value;
    const minimumPrice = target.minimumPrice.value;
    const maximumPrice = target.maximumPrice.value;
    const updatedJob = {
        email:email,
        job_title: title,
        deadline: deadline,
        description: description,
        category: selectedCategoryValue,
        type: selectedTypeValue,
        minimum_price: minimumPrice,
        maximum_price: maximumPrice,
    }
    console.log(updatedJob);
    axios
      .put(`http://localhost:5000/catagory/updated?id=${_id}`, updatedJob)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success the updated job",
            showConfirmButton: false,
            timer: 1500,
            background: "black",
            color: "white",
          });
          navigate("/myPostedJobs");
        }
      });
  };
    return (<div className="w-11/12 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
    <div>
      <img src="https://img.freepik.com/free-vector/job-offer-application-letter-response-career-opportunity-business-proposition-recruitment-agreement-man-receives-employment-contract-by-mail_335657-2696.jpg?size=626&ext=jpg&ga=GA1.1.1505135152.1696615291&semt=ais" alt="" />
    </div>
    <div>
      <div className="card flex-shrink-0 w-full shadow-xl bg-base-100">
        <form onSubmit={hendelUpdated} className="card-body">
          <div className="md:flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                className="input input-bordered"
                placeholder="email of the employer"
                readOnly
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={job_title}
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
                defaultValue={deadline}
                className="input input-bordered"
                placeholder="deadline"
                readOnly
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
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
                defaultValue={minimum_price}
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
                defaultValue={maximum_price}
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
              value={selectedCategoryValue}
              onChange={(e) => setSelectedCategoryValu(e.target.value)}
            >
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
              value={selectedTypeValue}
              onChange={(e) => setSelectedTypeValue(e.target.value)}
            >
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
              updated Jobs{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div />
  </div>
    );
};

export default Updated;