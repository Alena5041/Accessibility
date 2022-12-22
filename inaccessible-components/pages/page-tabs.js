import Head from "next/head";
import Layout from "../core-components/Layout";
import Tabs from "../components/Tabs";
import AccessibleTabs from "../components/Tabs/Accessible";

export default function PageTabs() {
  return (
    <>
      <Head>
        <title>Tabs | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Tabs</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>

        <Tabs />

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Location of panels far from tabs.</summary>
          Place tabs and panels side by side for better understanding.
        </details>

        <details>
          <summary>Usage inaccessible style for selected tabs</summary>
          Use at least 3:1 contrast and non-color indicator.
        </details>

        <details>
          <summary>Links have low contrast.</summary>
          Use at least 3:1 contrast and non-color indicator.
        </details>

        <details>
          <summary>Links have low contrast.</summary>
          Use at least 3:1 contrast and non-color indicator.
        </details>

        <details>
          <summary>
            Non-usage <code>role="tablist"</code>.
          </summary>
          Tablist role identifies the element that serves as the container for a
          set of tabs.
        </details>

        <details>
          <summary>
            Non-usage <code>role="tab"</code> for tab controls.
          </summary>
          Tab role indicates element inside a tablist that, when activated,
          displays its associated tab panel.
        </details>

        <details>
          <summary>
            Non-usage <code>role="tabpanel"</code> for tab panels.
          </summary>
          Tabpanel role is a container for the resources of layered content
          associated with a tab.
        </details>

        <details>
          <summary>
            Non-usage <code>aria-selected</code> for tab controls.
          </summary>
          Aria-selected use for indicate the currently-displayed tab panel.
        </details>

        <details>
          <summary>
            Unselected tab controls don't have <code>tabindex="-1"</code>.
          </summary>
          If there are a lot of tab controls, it can be uncomfortable for users
          who need to view them all to access the content in the tab panel.
        </details>

        <details>
          <summary>
            Unselected tab controls don't have <code>tabindex="-1"</code>.
          </summary>
          If there are a lot of tab controls, it can be uncomfortable for users
          who need to view them all to access the content in the tab panel.
        </details>

        <details>
          <summary>Usage mouse enter event for tabs.</summary>
          Tab panels will change every time, when users moves the mouse over tab
          controls, even if they didn't want it.
        </details>

        <h2>Accessible version</h2>

        <AccessibleTabs />
      </Layout>
    </>
  );
}
