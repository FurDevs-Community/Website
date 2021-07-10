import Head from "next/head";
import Image from "next/image";
import { featuresList } from "../components/Features";
import Staff from "../components/Staff";
import styles from "../styles/Secret.module.css";
import Feature from "../components/Feature";
import { useEffect, useState } from "react";
import { api } from "../settings";
import moment from "moment/moment";

export default function Secret() {
    const [avatars, setMemberAvatars] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchAvatars = async () => {
            fetch(`${api}/latest/fdevs/oneYearSpecial`).then(async res => {
                setMemberAvatars(await res.json())
            })
        }
        fetchAvatars().then(() => {
            setLoading(false)
        })
    }, [])
    return (
        <div>

            <h1>FurDevs 1 Year Anniversary!</h1>
            <div className={styles.bigPicture}>
            {!loading && avatars ? avatars.membersAvatars.map(member => (
                <div>
                    <img src={member.avatar} alt="" />
                    <h2>{member.name}</h2>
                    <h3>{moment(member.date).format("LLLL")}</h3>
                </div>
            )) : (<h1>A</h1>)}
            </div>

        </div>
    );
}
