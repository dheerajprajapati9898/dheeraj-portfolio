import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

type CardProps = {
  title: string;
  description: string;
  techStack?: string[];
  githubUrl?: string;
  externalUrl?: string;
  firstimage?: string;
  secondimage?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  techStack = [],
  githubUrl,
  externalUrl,
  firstimage,
  secondimage,
}) => {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project bg-white rounded-2xl shadow-md p-6">
        <header className="flex justify-between items-start mb-4">
          <div className="project-links flex gap-3">
            {githubUrl && firstimage && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <img src={firstimage} alt="GitHub" className="w-5 h-5" />
              </a>
            )}
            {externalUrl && secondimage && (
              <a href={externalUrl} target="_blank" rel="noreferrer">
                <img src={secondimage} alt="External" className="w-5 h-5" />
              </a>
            )}
          </div>
        </header>
        <div className="body mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        {techStack.length > 0 && (
          <footer>
            <ul className="tech-list flex flex-wrap gap-2 text-sm text-gray-500">
              {techStack.map((tech, idx) => (
                <li key={idx} className="bg-gray-100 px-2 py-1 rounded-md">
                  {tech}
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>
    </ScrollAnimation>
  );
};

export default Card;
