import {
  Hero,
  HookSteps,
  ProjectTree,
  ScriptsTable,
  Section,
  SetupChecklist,
  SiteFooter,
  SiteHeader,
  StackList
} from '@/components';

const Home = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Section
          id="layout"
          title="Project layout"
          intro="Every folder has one job. Most are empty on purpose, ready for your code."
        >
          <ProjectTree />
        </Section>
        <Section
          id="stack"
          title="What is wired up"
          intro="The tools that are installed and how they are configured."
        >
          <StackList />
        </Section>
        <Section
          id="checks"
          title="Checks that run for you"
          intro="Git hooks keep broken code out of the repository."
        >
          <HookSteps />
        </Section>
        <Section
          id="scripts"
          title="Commands"
          intro="Everything runs through pnpm."
        >
          <ScriptsTable />
        </Section>
        <Section
          id="get-started"
          title="Make it yours"
          intro="Six things to do before you build on top of it."
        >
          <SetupChecklist />
        </Section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
