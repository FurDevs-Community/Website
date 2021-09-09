import React, { ReactElement, useState } from "react";

export default function staff({}): ReactElement {
    const [staffTeam, setStaffTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchStaffTeam = async () => {
    //         fetch(`${api}/latest/fdevs/staffMembers`).then(async (res) => {
    //             setStaffTeam(await res.json());
    //         });
    //     };
    //     fetchStaffTeam().then(() => {
    //         setLoading(false);
    //     });
    // }, []);
    return (
        <div>
            <h1>Our Staff Team</h1>
        </div>
    );
}
