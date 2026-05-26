import React from 'react'
import Image from 'next/image'
import { Publication } from '../data/publications'

interface PublicationListProps {
  publications: Publication[]
}

function StatusBadge({ status }: { status: Publication['status'] }) {
  if (!status || status === 'published') return null

  const label =
    status === 'under-review'
      ? 'Under Review'
      : status === 'in-submission'
      ? 'In Submission'
      : 'Accepted'

  return (
    <span className="ml-2 text-[10px] uppercase tracking-wider text-fore-subtle border border-fore-subtle/30 px-1.5 py-0.5 rounded">
      {label}
    </span>
  )
}

function Link({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-hover hover:underline"
    >
      [{label}]
    </a>
  )
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  return (
    <div className="flex-col space-y-10">
      {publications.map((publication, index) => (
        <div key={index} className="flex w-full space-x-4">
          {publication.image && (
            <div className="w-1/4 mt-2 shrink-0">
              <Image
                src={publication.image}
                alt={`Teaser figure for ${publication.title}`}
                width={180}
                height={180}
                className="rounded"
              />
            </div>
          )}
          <div className={publication.image ? 'w-3/4' : 'w-full'}>
            <h3 className="font-semibold text-base text-accent">
              {publication.paperLink ? (
                <a
                  href={publication.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-hover hover:underline"
                >
                  {publication.title}
                </a>
              ) : (
                publication.title
              )}
              <StatusBadge status={publication.status} />
            </h3>
            <p className="text-fore-secondary text-sm mt-1">
              {publication.authors.map((author, authorIndex) => (
                <span
                  key={authorIndex}
                  className={author === 'Freya Tan' ? 'font-bold text-fore-primary' : ''}
                >
                  {author}
                  {authorIndex < publication.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
              <br />
              <em>{publication.venue}</em>
              {publication.year ? `, ${publication.year}` : ''}
            </p>
            <div className="mt-2 space-x-3 text-xs">
              {publication.paperLink && <Link href={publication.paperLink} label="Paper" />}
              {publication.arxivLink && <Link href={publication.arxivLink} label="arXiv" />}
              {publication.pdfLink && <Link href={publication.pdfLink} label="PDF" />}
              {publication.codeLink && <Link href={publication.codeLink} label="Code" />}
              {publication.projectLink && <Link href={publication.projectLink} label="Project" />}
              {publication.videoLink && <Link href={publication.videoLink} label="Video" />}
              {publication.demoLink && <Link href={publication.demoLink} label="Demo" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PublicationList
