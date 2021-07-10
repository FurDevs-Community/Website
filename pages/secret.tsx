import Head from "next/head";
import Image from "next/image";
import { featuresList } from "../components/Features";
import Staff from "../components/Staff";
import styles from "../styles/Secret.module.css";
import Feature from "../components/Feature";
import { useEffect, useState } from "react";
import { api } from "../settings";
import moment from "moment/moment";
import { members } from "../oneYearSpecial";


export default function Secret() {
    return (
        <div className={styles.main}>
            <h1>FurDevs 1 Year Anniversary!</h1>
            <p>From our First Member, to our Latest member we want to thank y'all for making FurDevs awesome from day one, take a look at where you're at and see how the server grown.</p>
            <div className={styles.bigPicture}>
            {members.membersAvatars.map(member => (
                <div>
                    <img src={member.avatar ? member.avatar : "https://play-lh.googleusercontent.com/hjJxprwkClyF4b6YY6zIt2eXZpn7eh68y5EWdiBmBqVz8Z0KiuFIf5KMTWJG8j5Lzio"} alt="" />
                    <h2>{member.name}</h2>
                    <h3>{moment(member.date).format("LLLL")}</h3>
                </div>
            ))}
            </div>

        </div>
    );
}
