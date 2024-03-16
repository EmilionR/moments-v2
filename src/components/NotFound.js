import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

import React from 'react'

const NotFound = () => {
  return (
    <div className={styles.topmargin}>
      <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist." />
    </div>
  )
}

export default NotFound
