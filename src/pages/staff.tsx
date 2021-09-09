import React, { ReactElement, useEffect, useState } from "react";
import Staff from "../components/Staff/Staff";
import { api } from "../settings";
import styles from "./../styles/Staff.module.scss";

export default function staff({}): ReactElement {
    const [staffTeam, setStaffTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchStaffTeam = async () => {
            fetch(`${api}/latest/fdevs/staffMembers`)
                .then(async (res) => {
                    setStaffTeam(await res.json());
                })
                .catch(() => {});
        };
        fetchStaffTeam().then(() => {
            setLoading(false);
        });
    }, []);
    return (
        <div className={styles.heading}>
            <h1>Our Staff Team</h1>
            {staffTeam.length == 0 && loading ? (
                <h2>LOADING</h2>
            ) : (
                staffTeam.map((staff) => (
                    <Staff color={staff.color} imageURL={staff.imageURL} staffName={staff.username} role={staff.role} />
                ))
            )}
        </div>
    );
}
