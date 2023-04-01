import React, { useState, useEffect } from 'react';

const ProjectSearch = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/repositories`);
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      && (languageFilter === '' || repo.language === languageFilter);
  });

  return (
    <div>
      <h2>Project search</h2>
      <input
        type="text"
        placeholder="Search by repository name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={languageFilter}
        onChange={(e) => setLanguageFilter(e.target.value)}
      >
        <option value="">Filter by language</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        {/* Add more options for other programming languages */}
      </select>
      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Language: {repo.language}</p>
            <p>Owner: {repo.owner.login}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Forks: {repo.forks_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSearch;
