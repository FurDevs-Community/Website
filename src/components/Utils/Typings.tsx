import React, { ReactElement, useState } from "react";
import styles from "./Typings.module.css";

interface Props {
    text: String;
    ms: number;
}

export default function Typings({ text, ms }: Props): ReactElement {
    const [textShown, setTextShown] = useState("");
    const textAsArray = text.split("");
    setTimeout(() => {
        return setTextShown(
            textAsArray.slice(0, textShown.length + 1).join("")
        );
    }, ms);
    return (
        <>
            {textShown}
            <span className={styles.cursor}>|</span>
        </>
    );
}
