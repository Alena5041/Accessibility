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
        <Breadcrumb />
        
        <h2>Accessible version</h2>
        <AccessibleBreadcrumb />
      </Layout>
    </>
  )
}
