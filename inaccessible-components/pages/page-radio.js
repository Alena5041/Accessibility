import Head from "next/head";
import Layout from "../core-components/Layout";
import RadioGroup from "../components/Radio";
import AccessibleRadioGroup from "../components/Radio/Accessible";

export default function PageRadios() {
  return (
    <>
      <Head>
        <title>Radio group | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Radio group</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>

        <RadioGroup />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Small clickable area.</summary>
          Difficult to click on radio, because small clickable area. Better have
          clickable area on radio and label together.
        </details>

        <details>
          <summary>Impossible to use keyboard for choosing.</summary>
          For people who use only keyboard impossible to change choosing.
        </details>

        <details>
          <summary>Bad design for radio focus style.</summary>
          Focus style do not have space between border a radio, tiny border
          width.
        </details>

        <details>
          <summary>Low color contrast in button.</summary>
          For people with different vision disabilities can be difficult to
          understand text with low color contrast.
        </details>

        <details>
          <summary>Radios do not have label.</summary>
          For screen reader users necessary to have label for components without
          text.
        </details>

        <details>
          <summary>Radio group do not have role.</summary>
          Add role for radio group to announce as radiogroup for screen reader
          users.
        </details>

        <details>
          <summary>Radio group do not have label.</summary>
          For screen reader users necessary to have label for components without
          text.
        </details>

        <details>
          <summary>Tab works for each radio.</summary>
          Keyboard users use tab just for moving to radiogroup, after they use
          arrow for choosing.
        </details>

        <details>
          <summary>Radios have different names.</summary>
          Better way for correct working radio group use the same name for each
          radios in group.
        </details>

        <AccessibleRadioGroup />
      </Layout>
    </>
  );
}
