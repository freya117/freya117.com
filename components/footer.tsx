import {
  GitHub24,
  MailAt24,
  GoogleScholar24,
  Twitter24,
  LinkedIn24,
} from './icons'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-fore-subtle/15">
      <div className="container max-w-screen-lg mx-auto px-5 sm:px-12 md:px-20 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <span
            className="text-xs text-fore-subtle tracking-wider"
            aria-label="Copyright"
          >
            © 2026 Freya Tan. All Rights Reserved. ·{' '}
            <a
              href="https://github.com/freya117/freya117.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              source on GitHub
            </a>
          </span>

          <div className="flex flex-row items-center space-x-5 text-fore-subtle">
            <a
              href="mailto:freya117@mit.edu"
              aria-label="Email freya117@mit.edu"
              title="Email"
              className="hover:text-accent transition-colors"
            >
              <MailAt24 className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/freya117"
              aria-label="Visit GitHub profile"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <GitHub24 className="w-5 h-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=yiXTUIwAAAAJ&hl=en"
              aria-label="Visit Google Scholar profile"
              title="Google Scholar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <GoogleScholar24 className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/FreyaTan117"
              aria-label="Visit X profile"
              title="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Twitter24 className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/freya-tan-888145258/"
              aria-label="Visit LinkedIn profile"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <LinkedIn24 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
