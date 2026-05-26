import Image from 'next/image'
import React from 'react'
import { Blob } from '../components/atoms'
import { Blog24, Project24 } from '../components/icons'
import portrait from '../public/images/portrait.png'
import { GitHub24, MailAt24, GoogleScholar24 } from '../components/icons'
import PublicationList from '../components/publicationList';
import NewsSection from 'components/NewsSection'

const publicationsData = [
  {
    title: 'Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight',
    authors: ['Jingyu Tang', 'Chaoran Chen', 'Jiawen Li', 'Zhiping Zhang', 'Bingcan Guo', 'Ibrahim Khalilov', 'Simret Araya Gebreegziabher', 'Bingsheng Yao', 'Dakuo Wang', 'Yanfang Ye', 'Tianshi Li', 'Ziang Xiao', 'Yaxing Yao', 'Toby Jia-Jun Li'],
    venue: 'In the Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    image: 'dark_pattern.png',
    paperLink: 'https://arxiv.org/abs/2509.10723',
  },
  {
    title: 'Through the Lens of Human-Human Collaboration: A Configurable Research Platform for Exploring Human-Agent Collaboration',
    authors: ['Bingsheng Yao', 'Jiaju Chen', 'Chaoran Chen', 'April Wang', 'Toby Jia-jun Li', 'Dakuo Wang'],
    venue: 'In the Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    image: 'agent_collaboration.png',
    paperLink: 'https://arxiv.org/abs/2509.18008',
  },
  {
    title: 'My Favorite Streamer is an LLM: Discovering, Bonding, and Co-Creating in AI VTuber Fandom',
    authors: ['Jiayi Ye', 'Chaoran Chen', 'Yue Huang', 'Yanfang Ye', 'Yaxing Yao', 'Toby Jia-Jun Li'],
    venue: 'In the Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI 2026)',
    image: 'aivtuber.png',
    paperLink: 'https://arxiv.org/abs/2509.10427',
  },
  {
    title: 'The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes',
    authors: ['Simret Araya Gebreegziabher', 'Yukun Yang', 'Charles Chiang', 'Hojun Yoo', 'Chaoran Chen', 'Hyo Jin Do', 'Zahra Ashktorab', 'Werner Geyer', 'Diego Gómez-Zará', 'Toby Jia-Jun Li'],
    venue: 'In the Proceedings of the 31th ACM Conference on Intelligent User Interfaces (IUI 2026)',
    image: 'behavioral_fabric.png',
    paperLink: 'https://arxiv.org/abs/2601.16356',
  },
  {
    title: 'Why am I seeing this: Democratizing End User Auditing for Online Content Recommendations',
    authors: ['Chaoran Chen', 'Leyang Li', 'Luke Cao', 'Yanfang Ye', 'Tianshi Li', 'Yaxing Yao', 'Toby Jia-jun Li'],
    venue: 'In the Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST 2025)',
    image: 'adAudit.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3746059.3747798',
  },
  {
    title: 'Towards a Design Guideline for RPA Evaluation: A Survey of Large Language Model-Based Role-Playing Agents',
    authors: ['Chaoran Chen', 'Bingsheng Yao', 'Ruishi Zou', 'Wenyue Hua', 'Weimin Lyu', 'Toby Jia-Jun Li', 'Dakuo Wang'],
    venue: 'Findings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL Findings 2025)',
    image: 'acl.png',
    paperLink: 'https://aclanthology.org/2025.findings-acl.938/',
  },
  {
    title: 'CLEAR: Towards Contextual LLM-Empowered Privacy Policy Analysis and Risk Generation for Large Language Model Applications',
    authors: ['Chaoran Chen', 'Daodao Zhou', 'Yanfang Ye', 'Toby Jia-jun Li', 'Yaxing Yao'],
    venue: 'Proceedings of the 30th ACM Conference on Intelligent User Interfaces (IUI 2025)',
    image: 'clear.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3708359.3712156',
  },
  {
    title: 'Careful About What App Promotion Ads Recommend! Detecting and Explaining Malware Promotion via App Promotion Graph',
    authors: ['Shang Ma', 'Chaoran Chen', 'Shao Yang', 'Shifu Hou', 'Toby Jia-Jun Li', 'Xusheng Xiao', 'Tao Xie', 'Yanfang Ye'],
    venue: 'Network and Distributed System Security Symposium ((NDSS 2025)',
    image: 'ndss25.png',
    paperLink: 'https://www.ndss-symposium.org/ndss-paper/careful-about-what-app-promotion-ads-recommend-detecting-and-explaining-malware-promotion-via-app-promotion-graph/',
  },
  {
    title: 'An Empathy-Based Sandbox Approach to Bridge Attitudes, Goals, Knowledge, and Behaviors in the Privacy Paradox',
    authors: ['Chaoran Chen', 'Weijun Li', 'Wenxin Song', 'Yaxing Yao', 'Yanfang Ye', 'Toby Jia-jun Li'],
    venue: 'In the Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI 2024)',
    image: 'empathy_privacy.png',
    paperLink: 'https://dl.acm.org/doi/10.1145/3613904.3642363',
  }
];


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
                quality={100}
                priority={true}
                placeholder="blur"
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
                  title="Visit GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              {/* TODO: replace # with Freya's Google Scholar URL once profile is set up */}
              <span>
                <a
                  href="#"
                  aria-label="Visit Google Scholar profile"
                  title="Visit Google Scholar profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GoogleScholar24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
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
            <h4 className="font-medium text-fore-subtle">
              I'm an incoming CS PhD at <a href="https://cs.nyu.edu/" className="font-medium text-accent hover:text-accent-hover hover:underline">NYU</a>,
              where I'll join the <a href="https://vida.engineering.nyu.edu/" className="font-medium text-accent hover:text-accent-hover hover:underline">VIDA Center</a>,
              advised by <a href="https://ctsilva.github.io/" className="font-medium text-accent hover:text-accent-hover hover:underline">Claudio Silva</a> and
              co-advised by <a href="https://www.geosimulation.org/" className="font-medium text-accent hover:text-accent-hover hover:underline">Paul Torrens</a>.
              <br/><br/>
              I work on <strong>vision-language models and spatial machine learning</strong> to help machines understand cities and the people in them.
              <br/><br/>
              Previously, I completed a dual master's at MIT in EECS (<a href="https://www.csail.mit.edu/" className="font-medium text-accent hover:text-accent-hover hover:underline">CSAIL</a>,
              advised by Randall Davis) and Urban Planning (<a href="https://cityform.mit.edu/" className="font-medium text-accent hover:text-accent-hover hover:underline">City Form Lab</a>,
              advised by Andres Sevtsuk).
            </h4>
          </div>
        </div>
      </div>

      <NewsSection />

      <div className="flex items-center mt-16 mb-8 space-x-3">
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          PUBLICATION
        </span>
      </div>
      
      <PublicationList publications={publicationsData} />

      <br/><br/><br/><br/>
      
    </div>
  )
}
