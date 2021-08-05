import { featuresList } from "../components/Featuring/Features";
import Staff from "../components/Staff/Staff";
import styles from "./../styles/RulesInfo.module.css";
import Feature from "../components/Featuring/Feature";
import { useEffect, useState } from "react";
import { api } from "../settings";
import Typings from "../components/Utils/Typings";

export default function RulesInfo() {
    return (
        <div className={styles.rulesInfo}>
            <section className={styles.heading}>
                <h2>Rules</h2>
                <p>
                    <em>Last Updated: 06/10/21</em>
                </p>
                <div>
                    <p>
                        1. You must follow the discord terms of service. Further
                        action WILL BE TAKEN
                    </p>
                    <p>2 - Be Civil and Respect everyone in this community </p>
                    <div>
                        <p>2.1 - No toxicity </p>
                        <p>
                            2.2 - Attacking a member based on their appearance
                            or identity will result in a Ban & Further Actions
                            will be taken.
                        </p>
                        <p>
                            2.3 - Blackmailing, Dox threats, threats are not
                            allowed
                        </p>
                        <p> 2.4 - Don't start Drama </p>
                        <p>
                            2.5 - Any arguments must be taken in you're dms not
                            in here
                        </p>
                        <p> 2.6 - Please respects other privacy</p>
                    </div>
                    <p>3 - Post things in their respective channel </p>
                    <p>
                        4 - Spamming, Flooding the chat, Shitposting, Userbots,
                        Masspinging is not allowed
                    </p>
                    <p>
                        5 - Advertising is not allowed (If you want to partner
                        with FurDevs contact staff)
                    </p>
                    <p>
                        6 - KEEP EVERYTHING SFW This also includes being
                        suggestive and mentioning a brand/website that's
                        considered NSFW
                    </p>
                    <p>
                        7 - Please make sure you provide screenshots, snippets
                        of your code or a pastebin when asking questions
                    </p>
                    <p>8 - Use Common Sense</p>
                    <p>
                        9 - Don't beg for someone to help you out in programming
                        and please be patient
                    </p>
                    <p>
                        10 - There should be no discussions about Politics nor
                        Venting If you would like to talk about these topics
                        please take it to the DMs
                    </p>
                    <p>
                        11 - You can get punished by any staff member if you
                        seem suspicious as of part of a raid or troll
                    </p>
                    <p>12 - No Spoonfeeding, and don't be a Help Vampire</p>
                    <p>
                        13 - Admins and Staff doesn't wanna deal will shit so
                        please do less shit
                    </p>
                </div>
            </section>
            <section>
                <h2>Partnership requirements</h2>
                <div>
                    <p>
                        - Server must relate to either <strong>furries</strong>
                        and/or <strong>programming</strong>
                    </p>
                    <p>
                        - Server must have <strong>400+ Members</strong>
                        (exceptions can be made)
                    </p>
                    <p>
                        - Your server shouldn't more than{" "}
                        <strong>4 servers monthly</strong>
                    </p>
                    <p>
                        - NSFW Channels must be gated with proper verification
                    </p>
                </div>
            </section>
            <section>
                <h2>Supporting FurDevs</h2>
                <h3>
                    As we're growing to be a big programming server and a furry
                    server with something unique we will appreciate what you can
                    do.
                </h3>
                <div>
                    <p>- Bumping the Server</p>
                    <p>- Leave us a Review in Disboard/TopGG</p>
                    <p>- Leaving Suggestions in the Suggestions Channel</p>
                    <p>
                        - Contributing to our Projects <em>like this</em>
                    </p>
                    <p>- Invite your friends here</p>
                </div>
            </section>
        </div>
    );
}
