import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDownView = ({ markdownText }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default MarkDownView;
