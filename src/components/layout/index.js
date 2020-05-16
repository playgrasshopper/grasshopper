import React from 'react'
import SEO from './seo'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

export default ({ title, children }) => (
  <>
    <SkipNavLink />
    <SEO title={title} />
    <main>
      <SkipNavContent />
      {children}
    </main>
  </>
)
