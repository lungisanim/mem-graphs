import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MermaidTimeline: React.FC = () => {
  useEffect(() => {
    // Initialize Mermaid with any desired configuration options
    mermaid.initialize({ startOnLoad: true });
    
    // In case diagrams are added dynamically, call contentLoaded to render them
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="mermaid">
      graph timeline
      title History of Social Media Platform
      2002 : LinkedIn
      2004 : Facebook : Google
      2005 : YouTube
      2006 : Twitter
    </div>
  );
};

export default MermaidTimeline;
