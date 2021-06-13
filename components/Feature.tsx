import React, { ReactElement } from "react";
import { IFeatures } from "./Features";
import styles from './../styles/Features.module.css'

export default function Feature({
    description,
    icon,
    title,
}: IFeatures): ReactElement {
    return (
        <div className={styles.feature}>
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
