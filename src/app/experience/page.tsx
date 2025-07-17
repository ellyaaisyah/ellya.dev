import { JobExperience } from "@/components/JobExperience";
import Link from "next/link";

const Experience = () => {
  return (
    <main className="container mx-auto py-8">
      <JobExperience
        period="May 2023 - Present"
        title="Front End Developer - Korsit"
        link="https://korsit.co/"
        stack={[
          "NextJS",
          "React",
          "TypeScript",
          "Tailwind",
          "Vitest",
          "Turborepo",
        ]}
      >
        <li>Build an e-commerce storefront in NextJS + Vercel.</li>
        <li>Utilize DatoCMS as the headless CMS of choice of the website.</li>
        <li>Handle tech assessment in interviews.</li>
        <li>
          Implement a reusable and customizable components following a custom
          design system.
        </li>
        <li>Initiate and lead a knowledge-sharing tradition.</li>
      </JobExperience>

      <JobExperience
        period="Oct 2019 - Apr 2023"
        title="Front End Developer - Drieam"
        link="https://drieam.com/en/"
        stack={["React", "JavaScript", "TypeScript", "SCSS", "Jest"]}
      >
        <ul className="list-disc pl-4">
          <li>
            Implemented a student led and assessment portfolio web application.
          </li>
          <li>Refactored an AngularJS LTI application to React.</li>
          <li>
            Assessed and refined UI and UX designs for technical feasibility.
          </li>
          <li>
            Implemented contextual learning and gamification of Canvas courses.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        period="Sep 2018 - Oct 2020"
        title="Freelance Web Developer - Institute SI"
        link="https://www.institutesi.org/"
        stack={["VueJS", "JavaScript", "SCSS", "Firebase", "Prismic"]}
      >
        <ul className="list-disc pl-4">
          <li>Implemented a responsive website using VueJS.</li>
          <li>Built a CMS tool to manage the content of the website.</li>
          <li>Used Firebase to manage all the data of the website.</li>
        </ul>
      </JobExperience>

      <JobExperience
        period="Jul 2015 - Sep 2019"
        title="Front End Developer - GameHouse"
        link="https://www.gamehouseoriginalstories.com/games"
        stack={["HTML", "CSS", "Ionic", "Angular", "React"]}
      >
        <ul className="list-disc pl-4">
          <li>
            Revamped the layout of an outdated website using a JavaScript
            framework.
          </li>
          <li>
            Developed a catalogue hybrid app using Ionic framework which also
            includes a card collecting meta game.
          </li>
          <li>
            Implemented an in-game experience for users to be able to purchase
            GameHouse subscription model.
          </li>
        </ul>
      </JobExperience>

      <Link className="hover:underline" href="/resume_2024.pdf" target="_blank">
        Get my current resume here.
      </Link>
    </main>
  );
};

export default Experience;
