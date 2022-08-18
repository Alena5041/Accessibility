import Head from "next/head";
import Layout from "../core-components/Layout";
import Checkbox from "../components/Checkbox";
import AccessibleCheckbox from "../components/Checkbox/Accessible";

export default function PageCheckbox() {
  return (
    <>
      <Head>
        <title>Checkbox | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Checkbox</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>

        <Checkbox />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Checkbox is not accessible by keyboard.</summary>
          Keyboard users can't see focus because the checkbox has hard to see
          style for it.
        </details>

        <details>
          <summary>Focus is missing on label.</summary>
          It's clearer if checkbox and label together have focus.
        </details>

        <details>
          <summary>Checkbox has too thin check icon.</summary>
          User with low vision or color blind can have problem with icon, when
          use color contrast or color invert settings.
        </details>

        <details>
          <summary>Checkbox is small.</summary>
          Users with tremors or other kinds of motor disabilities can have
          problem with click on checkbox.
        </details>

        <details>
          <summary>
            Click space key don't work for changing checkbox value.
          </summary>
          Keyboard users can't change checkbox value by pressing the space key.
        </details>

        <details>
          <summary>
            Input's label text can be selected because of click on checkbox.
          </summary>
          It's just small visual bug, will be better to cancel it.
        </details>

        <details>
          <summary>Checkbox size is set in pixels.</summary>
          For users what use zoom it's better to use rem or em instead of fixed
          size.
        </details>

        <h2>Accessible version</h2>
        <AccessibleCheckbox />
      </Layout>
    </>
  );
}
