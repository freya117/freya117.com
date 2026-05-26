import Image from 'next/image'
import React from 'react'
import { Blob } from '../components/atoms'
import portrait from '../public/images/portrait.png'
import {
  GitHub24,
  MailAt24,
  GoogleScholar24,
  Twitter24,
  LinkedIn24,
} from '../components/icons'
import PublicationList from '../components/publicationList'
import NewsSection from 'components/NewsSection'
import ResearchAreas from '../components/ResearchAreas'
import { selectedPublications } from '../data/selectedPublications'


export default async function Page() {
  return (
    <div className='pointer-events-auto'>
      <div className="flex flex-col items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6 pointer-events-auto">

       <div className="relative flex-row pointer-events-auto">
          <Blob />
          <div className="absolute top-10 flex items-center justify-center w-full">
            <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src={portrait}
                alt="Freya Tan"
                width={256}
                height={256}
                quality={85}
                priority={true}
                placeholder="blur"
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>
          </div>

          <br/>

          <div className="flex flex-row items-center justify-center space-x-6 pointer-events-auto">
              <span>
                <a
                  href="mailto:freya117@mit.edu"
                  aria-label="Email freya117@mit.edu"
                  title="Email"
                  className="focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/freya117"
                  aria-label="Visit GitHub profile"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://scholar.google.com/citations?user=yiXTUIwAAAAJ&hl=en"
                  aria-label="Visit Google Scholar profile"
                  title="Google Scholar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GoogleScholar24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://x.com/FreyaTan117"
                  aria-label="Visit X profile"
                  title="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <Twitter24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/freya-tan-888145258/"
                  aria-label="Visit LinkedIn profile"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <LinkedIn24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>

        </div>

        <div className="flex flex-col px-8 py-5 -my-5 transition-colors ease-in-out -mx-7 group sm:flex-row sm:justify-between sm:items-end focus:bg-back-secondary focus:text-accent">
          <div>
            <h1 className="text-4xl font-semibold">
              <br/>
              Hi, I'm Freya Tan
            </h1>
            <br/>
            <div className="font-medium text-fore-subtle">
              I'm an incoming CS PhD at <a href="https://cs.nyu.edu/" className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent">NYU</a>,
              where I'll join the <a href="https://vida.engineering.nyu.edu/" className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent">VIDA Center</a>,
              advised by <a href="https://ctsilva.github.io/" className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent">Claudio Silva</a> and
              co-advised by <a href="https://www.geosimulation.org/" className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent">Paul Torrens</a>.
              <br/><br/>
              I work on <strong>vision-language models and spatial machine learning</strong> to help machines understand cities and the people in them.
              <br/><br/>
              Previously, I completed a dual master's at MIT in EECS (<a href="https://www.csail.mit.edu/" className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent">CSAIL</a>,
              advised by Randall Davis) and Urban Planning (<a href="https://cityform.mit.edu/" className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover hover:decoration-accent">City Form Lab</a>,
              advised by Andres Sevtsuk).
            </div>
          </div>
        </div>
      </div>

      <ResearchAreas />

      <div className="flex items-center mt-16 mb-8 space-x-3">
        <h2 className="mt-3 mb-2 uppercase tracking-[.2em] text-accent text-sm font-semibold">
          SELECTED PUBLICATIONS
        </h2>
      </div>

      <PublicationList publications={selectedPublications} />

      <div className="mt-4 text-sm flex gap-4">
        <a
          href="/publications"
          className="text-accent hover:text-accent-hover hover:underline"
        >
          → All publications
        </a>
        <a
          href="/projects"
          className="text-accent hover:text-accent-hover hover:underline"
        >
          → All projects
        </a>
      </div>

      <NewsSection />

      <br/><br/><br/><br/>
      
    </div>
  )
}
