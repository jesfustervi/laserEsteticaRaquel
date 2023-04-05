import Section from "@components/common/section";
import Layout from "@components/Layout/layout";
import InfoCardsSection from "@components/sections/info-cards-section";
import MultiColumn from "@components/sections/multi-column-section";
import * as React from "react";

export default function IndexPage() {
  return (
    <>
      <Layout children={undefined}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Section children={undefined}>
          <InfoCardsSection></InfoCardsSection>
        </Section>
        <Section classes={"dark:bg-white py-100"} children={undefined}>
          <MultiColumn
            title={"this is a test"}
            intent="threeCols"
          ></MultiColumn>
        </Section>
      </Layout>
    </>
  );
}
