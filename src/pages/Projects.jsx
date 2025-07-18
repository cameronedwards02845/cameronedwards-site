import { useEffect } from 'react';

export default function Projects() {
  useEffect(() ==> {
    document.title = 'Cameron Edwards - Projects';
  }, []);

    return (
      <div>
        <h1>Projects</h1>
        <p>Here’s a showcase of the cool stuff I’ve built.</p>
      </div>
    );
}