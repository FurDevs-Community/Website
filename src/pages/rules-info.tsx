import styles from "./../styles/RulesInfo.module.scss";

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
                        1. You must follow the Discord Terms of Service. Further action <strong>WILL BE TAKEN</strong>
                    </p>
                    <p>2 - Be Civil and Respect everyone in this community </p>
                    <div>
                        <p>2.1 - No toxicity (We're strictly enforcing this rule!)</p>
                        <p>2.2 - Attacking a member based on their appearance/indenity is NOT ALLOWED</p>
                        <p>2.3 - Blackmailing, Dox threats, threats are not allowed</p>
                        <p>2.4 - Don't start Drama </p>
                        <p>2.5 - Any arguments must be taken in you're dms not in here</p>
                        <p>2.6 - Please respects other privacy</p>
                    </div>
                    <p>3 - Post things in their respective channel </p>
                    <p>4 - Spamming, Flooding the chat, Shitposting, Userbots, Masspinging is not allowed</p>
                    <p>5 - Advertising is not allowed (If you want to partner with FurDevs contact staff)</p>
                    <p>6 -Keep Topics SFW Anything Suggestive/NSFW will be punished accordingly</p>
                    <p>7 - Use Common Sense</p>
                    <p>8 - Don't beg for someone to help you out in programming and please be patient</p>
                    <p>9 - Venting, Sensitive Topics such as Politics, Religion is not allowed</p>
                    <p>10 - No Spoonfeeding, and don't be a Help Vampire</p>
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
                        - Your server shouldn't more than <strong>4 servers monthly</strong>
                    </p>
                    <p>- NSFW Channels must be gated with proper verification</p>
                </div>
            </section>
            <section>
                <h2>Supporting FurDevs</h2>
                <h3>
                    As we're growing to be a big programming server and a furry server with something unique we will
                    appreciate what you can do.
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
