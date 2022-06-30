import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import JobComment from "../Jobs/JobComment";
import axios from "axios";
import { isCreator, getLoggedInUserId } from "../../lib/auth.js";
import ApplyModal from "./ApplyModal.js";

export default function ShowJob() {
  const navigate = useNavigate();
  const currUser = getLoggedInUserId();

  const [likes, setLikes ] = useState(undefined);
  const [ showApplyModal, setShowApplyModal ] = useState(false)

  const [formDataInput, setformDataInput] = useState({
    content: "",
  });

  const [job, setJob] = useState(undefined);
  const { jobId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/jobs/${jobId}`, {
          headers: {
            "authorization": localStorage.getItem("token"),
          },
        })
        setJob(data)
        setLikes(data.likes)
      } catch (error) {
        console.log(error);
      }
    }
    getData()

  }, [jobId, likes, formDataInput]);

  //Handles change in our inputs

  function handleChangeEvent(e) {
    console.log(e);
    setformDataInput({
      [e.target.name]: e.target.value,
    });
  }

  async function handleDelete() {
    const deleteJob = await axios.delete(`/api/jobs/${jobId}`, {
      headers: {
        "authorization": localStorage.getItem("token"),
      },
    });
    console.log(deleteJob);
    navigate("/jobs/index");
  }


  async function handleCommentPost(e) {
    e.preventDefault();
    const addComment = await axios.post(
      `/api/jobs/${jobId}/comment`,
      formDataInput,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(addComment);
    console.log("here");
    setformDataInput({
      content: "",
    })
  }

  async function handleCommentDelete (commentId) {
    console.log(commentId);
    const deleteJob = await axios.delete(`/api/jobs/${jobId}/${commentId}`,  {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
    console.log(deleteJob);
    console.log("here");
    setformDataInput({
      content: "",
    })
  }


  const handleLike = async () => {
    setLikes(await axios.put(`/api/jobs/${jobId}/likes`, { currentUser: currUser, likes: likes + 1 }))
  }

  const handleApplyJob = () => {
    setShowApplyModal(true)
  }



  return (
    <section className="section">
      <div className="container">
        {job ? (
          <div>
            <h2 className="title has-text-centered">{job.JobTitle}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={job.companyImage} alt={job.companyName} />
                </figure>

                {isCreator(job.user._id) && (
                  <button className="button is-danger" onClick={handleDelete}>
                    Delete job
                  </button>
                )}

                {isCreator(job.user._id) && (
                  <Link to={`/jobs/edit/${jobId}`}>
                    <button className="button is-warning">Edit Job</button>
                  </Link>
                )}
                {currUser && (
                  <button onClick={handleApplyJob} className="button is-warning">Apply</button>
                )}
                <button
                  onClick={handleLike}
                >
                  <div className="like-button">
                    <span>Like</span>
                  </div>
                </button>
                <h4 className="title is-4"></h4>
                <hr />
                <p>{job.likes}</p>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Job Description</h4>
                <p>{job.jobDescription}</p>
                <hr />
                <h4 className="title is-4">Salary</h4>
                <hr />
                <p>{job.jobSalary}</p>
                <hr />
                <h4 className="title is-4">Job Location</h4>
                <p>{job.jobLocation}</p>
                <hr />
                <h4 className="title is-4">Job Type</h4>
                <hr />
                <p>{job.jobType}</p>
                <hr />
                <h4 className="title is-4">Job Added By</h4>
                <p>{job.user.username}</p>
                <hr />
                
                {currUser && <div className=" box">
                  <h4 className="title is-4">Post Comments</h4>
                  <div className="">
                    <form onSubmit={handleCommentPost}>
                      <div className="field">
                        <div className="control columns">
                          <button className="button mx-4 is-outlined">
                            Post your comment
                          </button>
                          <input
                            className="input column text is-secondary"
                            type="text"
                            name={"content"}
                            value={formDataInput.content}
                            onChange={handleChangeEvent}
                            placeholder="Type Comment Here"
                          /> 
                        </div>
                      </div>
                    </form>
                  </div>
                </div> }
                {currUser && job.comments.map((comment) => {
                  return (
                    <JobComment
                      key={comment._id}
                      comments={comment}
                      jobId={jobId}
                      username={job.user.username}
                      handleCommentDelete={handleCommentDelete}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>

      {
        showApplyModal && <ApplyModal/>
      }
    </section>
  );
}
