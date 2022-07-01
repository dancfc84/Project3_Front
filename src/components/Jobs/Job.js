import React from "react"
import { Link } from "react-router-dom"
import "bulma"
import styles from "./Job.module.css"


const Job = (props) => {

  return <div className={styles.card_margin}>
    <Link style={{ textDecoration: "none" }} to={`/jobs/${props.jobInfo._id}`}>
      <div className={`card ${styles.card_dimensions}` }>
        <div className="card-header">
          <div className={`card-header-title ${styles.card_header_text}`}>{props.jobInfo.jobTitle}</div>
        </div>
        <div className={`card-image ${styles.card_image_size}`}>
          <figure className={styles.card_image_size} >
            <img src={props.jobInfo.companyImage} alt={props.name} />  
          </figure>
        </div>
        <div className={`card-content ${styles.card_content_style}`}>
          <p>{props.jobInfo.jobShortSummary}</p>
        </div>
      </div>
    </Link>
  </div>
}

export default Job