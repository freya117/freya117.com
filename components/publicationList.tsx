import React from 'react';
import { ScriptProps } from 'next/script';
import Image from 'next/image';

interface Publication {
    title: string;
    authors: string[];
    venue: string;
    image: string;
    paperLink: string; // Link to the paper
    videoLink?: string;
    demoLink?: string; // Optional link to a demo
  }


interface PublicationListProps {
    publications: Publication[];
}


// Create the PublicationList component
const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  return (
    <div className="flex-col space-y-12">
      {publications.map((publication, index) => (
        <div key={index} className="flex w-full space-x-4">
          <div className="w-1/4 mt-2">
            <Image
              src={`/images/publication/${publication.image}`}
              alt={`Image for ${publication.title}`}
              width={180}
              height={180}
            />
          </div>
          <div className="w-3/4">
            <h2 className="font-semibold text-base text-teal-600 dark:text-teal-500">
              <a href={publication.paperLink} target="_blank" rel="noopener noreferrer">
                {publication.title}
              </a>
            </h2>
            <p className="text-gray-600 text-sm">
                {publication.authors.map((author, authorIndex) => (
                    <span
                    key={authorIndex}
                    className={author.includes('Chaoran Chen') ? 'font-bold' : ''} // Add font-bold class conditionally
                    >
                    {author}
                    {authorIndex < publication.authors.length - 1 ? ', ' : ''}
                    </span>
                ))}
              <br />
              {publication.venue}
              {publication.videoLink && (
                <span className="text-teal-600">
                    <a href={publication.videoLink} target="_blank" rel="noopener noreferrer">[video]</a>
                </span>
              )}
              {publication.demoLink && (
                <span className="text-teal-600">
                    <a href={publication.demoLink} target="_blank" rel="noopener noreferrer">[demo]</a>
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList as unknown as (props: PublicationListProps) => JSX.Element;