import React, { ReactElement } from "react";
import { IFeatures } from "./Features";

interface Props {}

export default function Feature({
    description,
    icon,
    title,
}: IFeatures): ReactElement {
    return (
        <div>
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
