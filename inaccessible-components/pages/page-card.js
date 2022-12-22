import Head from "next/head";
import Layout from "../core-components/Layout";
import Card from "../components/Card";
import AccessibleCard from "../components/Card/Accessible";

export default function PageTabs() {
  return (
    <>
      <Head>
        <title>Card | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Card</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>

        <Card />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Usage of image for text alternative.</summary>
          If the design allows, do not use pictures instead of text.
        </details>

        <details>
          <summary>Usage of png for text picture.</summary>
          If a person with low vision wants to zoom the picture, this will
          affect its quality and readability.
        </details>

        <details>
          <summary>
            Usage <code>h4</code> for description.
          </summary>
          Use logically appropriate html tags otherwise, it can confuse screen
          reader users.
        </details>

        <details>
          <summary>
            Usage links with understandable text, like "Read more" without
            aria-label.
          </summary>
          Change the links text or add informative <code>aria-label</code> for
          screen reader users.
        </details>

        <details>
          <summary>Usage inside image alt name the word "image".</summary>
          Don't use the same word like the role for alt and aria-label.
        </details>

        <details>
          <summary>Non-usage of a unique alternate name.</summary>
          Don't use the same alt for different images.
        </details>

        <details>
          <summary>
            Non-usage alternative text for links without text inside.
          </summary>
          It will be impossible for screen reader users to figure out what the
          link is.
        </details>

        <h2>Accessible version</h2>

        <AccessibleCard />
      </Layout>
    </>
  );
}
