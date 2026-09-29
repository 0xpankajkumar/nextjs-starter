import {
  SetupChecklist,
  ScriptsTable,
  ProjectTree,
  SiteFooter,
  SiteHeader,
  HookSteps,
  StackList,
  Section,
  Hero
} from "@/components";

const Home = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Section
          intro="Every folder has one job. Most are empty on purpose, ready for your code."
          title="Project layout"
          id="layout"
        >
          <ProjectTree />
        </Section>
        <Section
          intro="The tools that are installed and how they are configured."
          title="What is wired up"
          id="stack"
        >
          <StackList />
        </Section>
        <Section
          intro="Git hooks keep broken code out of the repository."
          title="Checks that run for you"
          id="checks"
        >
          <HookSteps />
        </Section>
        <Section
          intro="Everything runs through pnpm."
          title="Commands"
          id="scripts"
        >
          <ScriptsTable />
        </Section>
        <Section
          intro="Six things to do before you build on top of it."
          title="Make it yours"
          id="get-started"
        >
          <SetupChecklist />
        </Section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
