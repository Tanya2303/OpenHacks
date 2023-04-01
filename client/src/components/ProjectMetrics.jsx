import React, { useState, useEffect } from 'react';

const ProjectMetrics = ({ owner, repo }) => {

  const [engagement, setEngagement] = useState(0);
  const [quality, setQuality] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchEngagement = async () => {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/stats/participation`);
      const data = await response.json();
      const totalCommits = data.owner.reduce((acc, curr) => acc + curr, 0);
      setEngagement(totalCommits);
    };

    const fetchQuality = async () => {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
      const data = await response.json();
      setQuality(data.encoding === 'base64');
    };

    const fetchIssues = async () => {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`);
      const data = await response.json();
      setIssues(data);
    };

    fetchEngagement();
    fetchQuality();
    fetchIssues();
  }, [owner, repo]);

  return (
    <div className='bg-white p-4 rounded-md border-b-4 border-tertiary w-96 text-xl m-4'>
      <h1 className='font-semibold text-2xl py-1'>{repo}</h1>
      <h2>Community engagement</h2>
      <p><span className='font-semibold'>{engagement}</span> commits in the last year</p>
      <h2 className='font-semibold'>Documentation quality: <span className='font-[400]'>{quality ? 'Good' : 'Poor'}</span></h2>
      <h2 className='font-semibold'>Issue resolution speed</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>{issue.title} - {issue.state}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMetrics;
