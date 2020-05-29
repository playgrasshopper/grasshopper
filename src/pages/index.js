import React from 'react'
import SEO from '../components/layout/seo'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import Header from '../components/layout/header'
import Video from '../components/pages/homepage/video'
import Hero from '../components/pages/homepage/hero'
import '../style/global.css'

export default ({ title, children }) => (
  <>
    <SkipNavLink />
    <SEO title={title} />
    <Video />
    <Header title={title} absolute />
    <Hero>The Americas' most magical game!</Hero>
    <main>
      <SkipNavContent />
      {children}
    </main>
  </>
)
