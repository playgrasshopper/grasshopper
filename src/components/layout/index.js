import React from 'react'
import SEO from './seo'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import Header from './header'

export default ({ title, children }) => (
  <>
    <SkipNavLink />
    <SEO title={title} />
    <Header title={title} />
    <main>
      <SkipNavContent />
      {children}
    </main>
  </>
)
