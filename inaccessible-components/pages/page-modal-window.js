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
          The dialog role is used to mark up an HTML based application dialog or
          window that separates content or UI from the rest of the web
          application or page.
        </details>

        <details>
          <summary>
            Non-usage <code>aria-labelledby</code> for modal.
          </summary>
          If a dialog already has a visible title bar, the text inside that bar
          can be used to label the dialog itself by using the aria-labelledby
          attribute.
        </details>

        <details>
          <summary>
            Non-usage <code>aria-describedby</code> for modal.
          </summary>
          if the dialog contains additional descriptive text besides the dialog
          title, this text can be associated with the dialog using the
          aria-describedby attribute.
        </details>

        <details>
          <summary>Small size of close button.</summary>
          When people interact with small buttons, it's very likely they might
          accidentally miss the button.
        </details>

        <details>
          <summary>Close button without padding.</summary>
          Adding padding can help to do bigger zone for clicking.
        </details>

        <details>
          <summary>Close button don't have focus style.</summary>
          The key purpose of focus is to give a user guidance.
        </details>

        <details>
          <summary>
            Non-usage <code>aria-label</code> for close button.
          </summary>
          The aria-label should be used to provide a text alternative to an
          element that has no visible text on the screen.
        </details>

        <details>
          <summary>
            Non-usage <code>aria-hidden</code> for close icon.
          </summary>
          The hidden attribute tells browsers not to display the element. The
          aria-hidden property tells screen-readers if they should ignore the
          element.
        </details>

        <details>
          <summary>Modal has fixed width in px.</summary>
          The most important reason for using responsive and unitless values in
          CSS is for supporting our users that rely on zooming.
        </details>

        <details>
          <summary>Focus don't work properly.</summary>
          To make the content easier to navigate when modal is open leave focus
          only for elements inside.
        </details>

        <details>
          <summary>Non-usage responsive design.</summary>
          To make the content easier to read when displayed on small screens,
          the dialog fills 100% of the screen.
        </details>

        <h2>Accessible version</h2>

        <AccessibleModal />
      </Layout>
    </>
  );
}
