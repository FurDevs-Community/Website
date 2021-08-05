import { ProjectCard } from "../components/Projects/ProjectCard";
import styles from "./../styles/CommunityProjects.module.scss";

export default function CommunityProjects() {
    return (
        <div className={styles.communityProjects}>
            <section className={styles.heading}>
                <h2>Community Projects</h2>
                <p>
                    Community Projects is a a place where you can showcase your
                    projects, progress, git commit, sneak peeks, important
                    information and much more. This channel is dedicated for
                    your Projects and feedbacks of the projects from members
                    within the server.
                </p>
            </section>
            <section className={styles.projects}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </div>
    );
}
