import Head from 'next/head'
import Layout from '../core-components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import AccessibleBreadcrumb from '../components/Breadcrumb/Accessible'

export default function PageBreadcrumb() {
  return (
    <>
      <Head>
        <title>Breadcrumb | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Breadcrumb</h1>

        <p>This page contains the inaccessible version of the component.</p>

        <h2>Inaccessible version</h2>
        {/* <Breadcrumb /> */}
        
        <a href="#a-breadcrumb" aria-label='Skip to main breadcrumb'>Skip to breadcrumb</a>

        <h3>Issues</h3>
        <p>Expand each issue to see the user impact.</p>

        <details>
          <summary>Non-usage <code>nav</code> tag for breadcrumbs.</summary>
          To make the breadcrumbs appear to users navigating the page using landmarks, make use of the nav element to wrap your markup.
        </details>

        <details>
          <summary>Usage of <code>ul</code> tag for list.</summary>
          In order to make the set of links structured as a hierarchy, use an ordered list <code>ol</code> tag.
        </details>

        <details>
          <summary>The breadcrumbs has missing aria attributes.</summary>
          Although this does not work for all screen readers.
        </details>
 
        <details>
          <summary>Usage of breadcrumb&apos;s separator without <code>aria-hidden</code> attribute.</summary>
          When using markup for the breadcrumb&apos;s separator, it&apos;s important to make it a decorative element, so that screen reader users don&apos;t announce it as text.
        </details>

        <details>
          <summary>Usage contrast less then 4,5:1.</summary>
          For normal sized text or images of text, the minimum contrast ratio is 4,5:1 (AA), and 7:1 (AAA).
          <br />
          <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank" rel="noreferrer noopener">Read more about contrast</a>.
        </details>

        <details>
          <summary>Non-usage focus style.</summary>
          For anyone using the keyboard to navigate a page, focus styles are critical for visually displaying which focusable element is currently selected.
        </details>

        <details>
          <summary>Usage non-responsive web design.</summary>
          It&apos;s necessary to control how pages look with zoom for example situation when people have some vision disability. Don&apos;t forget people have difirent vision disability, some people need reduced text.
        </details>

        <h2>Accessible version</h2>
        <AccessibleBreadcrumb />
      </Layout>
    </>
  )
}
