import { JobExperience } from "@/components/job-experience";

const Experience = () => {
  return (
    <main className="container mx-auto">
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
        period="Oct 2019 - Apr 2023"
        title="Freelance Web Developer - Drieam"
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
        period="May 2023 - Present"
        title="Freelance Web Developer - Korsit"
        link="https://korsit.co/"
        stack={["NextJS", "React", "TypeScript", "Tailwind", "Jest"]}
      >
        <p>
          Deliver a high-quality, maintable, and performant e-commerce website
          using NextJS. Build a component library to be used throughout the
          company for all of their applications.
        </p>
      </JobExperience>

      <a className="hover:underline" href="/resume.pdf" target="_blank">
        Get my current resume here.
      </a>
    </main>
  );
};

export default Experience;
