import React from "react";
import styles from "./ProjectCard.module.scss";

interface Props {}

export const ProjectCard = (props: Props) => {
    return (
        <div className={styles.projectCard}>
            <img src="/images/logo.png" alt="" />
            <h1>Project name</h1>
            <p>Breif Desciption about the project :)</p>
            <button className={"grow"}>View</button>
        </div>
    );
};
