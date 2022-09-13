/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import JobComment from "../Jobs/JobComment";
import axios from "axios";
import { isCreator, getLoggedInUserId } from "../../lib/auth.js";
import ApplyModal from "./ApplyModal.js";
import styles from "./ShowJob.module.css"
import baseUrl from "../../config"

export default function ShowJob() {
  const navigate = useNavigate();
  const currUser = getLoggedInUserId();

  const [likes, setLikes] = useState(undefined);
  const [showApplyModal, setShowApplyModal ] = useState(false)
  const [deletedComment, setDeletedComment] = useState(undefined)
  const [newComment, setNewComment] = useState(undefined)

  const [isHeartRed, setIsHeartRed] = useState(false)

  //Needs some logic to maintain the heart


  const [formDataInput, setformDataInput] = useState({
    content: "",
  });

  const [job, setJob] = useState(undefined);

  const { jobId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/jobs/${jobId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
        )
        setJob(data)
        setLikes(data.likes)
        const userLiked = job.userLiked.filter((user) => {
          return currUser === user
        })
        if (userLiked.length > 0) {
          setIsHeartRed(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData()

  }, [jobId, likes, deletedComment, newComment]);



  //Handles change in our inputs

  function handleChangeEvent(e) {
    console.log(e);
    setformDataInput({
      [e.target.name]: e.target.value,
    });
  }

  console.log(job);

  async function handleDelete() {
    const deleteJob = await axios.delete(`${baseUrl}/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }
    );
    console.log(deleteJob);
    navigate("/jobs/index");
  }


  async function handleCommentPost() {
    const addComment = await axios.post(
      `${baseUrl}/jobs/${jobId}/comment`,
      formDataInput,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    );
    setNewComment(addComment)
  }

  async function handleCommentDelete (commentId) {
    const deleteComment = await axios.delete(`${baseUrl}/jobs/${jobId}/${commentId}`,  {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }
    )
    setDeletedComment(deleteComment)
  }


  const handleLike = async () => {
    setLikes(await axios.put(`/api/jobs/${jobId}/likes`, { currentUser: currUser, likes: likes + 1 }))
    setIsHeartRed(true)
  }

  const handleApplyJob = () => {
    setShowApplyModal(true)
  }



  return (
    <section className="section">
      <div className="container">
        {job ? (
          <div>
            <h2 className={styles.job_title}>{job.jobTitle}</h2>
            <hr />
            <div className="columns">
              <div className={`column is-half ${styles.left_col}`}>
                <figure className={styles.image_class}>
                  <img src={job.companyImage} alt={job.companyName} />
                </figure>

                {currUser && (
                  <div className={styles.apply_button_container}>
                    <button onClick={handleApplyJob} className={styles.apply_button}>Apply Now</button>
                  </div>
                )}

                {isCreator(job.user._id) && (
                  <div className={styles.admin_buttons_container}>
                    <button className={styles.del_button} onClick={handleDelete}>
                      Delete job
                    </button>
                    <Link to={`/jobs/edit/${jobId}`}>
                      <button className={styles.edit_button}>Edit Job</button>
                    </Link>
                  </div>
                )}

                <div className={styles.likes_container}>
                  <div onClick={handleLike} className={`${styles.heart} ${isHeartRed && styles.is_active}`}></div>
                  <p>{job.likes} {job.likes > 1 ? "likes" : "like"}</p>
                  <h4 className="title is-4"></h4>
                </div>
              </div>
              <div className={`column is-half ${styles.right_col}`}>
                <h4>Salary</h4>
                <p>{job.jobSalary}</p>
                <h4>Job Location</h4>
                <p>{job.jobLocation}</p>
                <h4>Job Type</h4>
                <p>{job.jobType}</p>
                <h4>Job Added By</h4>
                <p>{job.user.username}</p>
                <h4>Job Description</h4>
                <p>{job.jobDescription}</p>
              </div>
            </div>
            <article className={styles.comments_container}>
              {currUser && <div>
                <div >
                  <form onSubmit={handleCommentPost}>
                    <div className={styles.post_comment}>
                      <textarea
                        className={styles.comment_input}
                        type="text"
                        name={"content"}
                        value={formDataInput.content}
                        onChange={handleChangeEvent}
                        placeholder="Type Comment Here"
                      /> 
                      <button className={styles.post_comment_button}>
                        Comment
                      </button>
 
                    </div>
                  </form>
                </div>
              </div> }
              {currUser && job.comments.map((comment) => {
                return (
                  <JobComment
                    key={comment._id}
                    comment={comment}
                    jobId={jobId}
                    username={job.user.username}
                    handleCommentDelete={handleCommentDelete}
                  />
                );
              })}
            </article>

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
