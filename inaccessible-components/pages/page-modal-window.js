import Head from "next/head";
import Layout from "../core-components/Layout";
import Modal from "../components/Modal";
import AccessibleModal from "../components/Modal/Accessible";

export default function PageModal() {
  return (
    <>
      <Head>
        <title>Modal window | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Modal window</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>

        <Modal />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>
            Non-usage <code>role="dialog"</code> for modal.
          </summary>
        </details>

        <details>
          <summary>
            Non-usage <code>aria-labelledby</code> for modal.
          </summary>
        </details>

        <details>
          <summary>
            Non-usage <code>aria-describedby</code> for modal.
          </summary>
        </details>

        <details>
          <summary>Small size of close button.</summary>
        </details>

        <details>
          <summary>Close button without padding.</summary>
        </details>

        <details>
          <summary>Close button don't have focus style.</summary>
        </details>

        <details>
          <summary>
            Non-usage <code>aria-label</code> for close button.
          </summary>
        </details>

        <details>
          <summary>
            Non-usage <code>aria-hidden</code> for close icon.
          </summary>
        </details>

        <details>
          <summary>Modal has fixed width in px</summary>
        </details>

        <h2>Accessible version</h2>

        <AccessibleModal />
      </Layout>
    </>
  );
}
