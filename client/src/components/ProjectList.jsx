import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('stars');
  const [order, setOrder] = useState('desc');
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setPageNumber(1);
  };

  const handleSort = event => {
    setSort(event.target.value);
    setPageNumber(1);
  };

  const handleOrder = event => {
    setOrder(event.target.value);
    setPageNumber(1);
  };

  const handlePageSize = event => {
    setPageSize(parseInt(event.target.value));
    setPageNumber(1);
  };

  const handlePageNumber = event => {
    setPageNumber(parseInt(event.target.value));
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${pageSize}&page=${pageNumber}&label:"good+first+issue"`);
      setProjects(response.data.items);
    };

    fetchProjects();
  }, [searchTerm, sort, order, pageSize, pageNumber]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex space-x-4">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} className="rounded-lg border-gray-300 border p-2" />
        <select value={sort} onChange={handleSort} className="rounded-lg border-gray-300 border p-2">
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="updated">Updated</option>
        </select>
        <select value={order} onChange={handleOrder} className="rounded-lg border-gray-300 border p-2">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <select value={pageSize} onChange={handlePageSize} className="rounded-lg border-gray-300 border p-2">
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
          <option value="30">30 per page</option>
        </select>
        <input type="number" placeholder="Page number" value={pageNumber} onChange={handlePageNumber} className="rounded-lg border-gray-300 border p-2" />
      </div>

      <div className='text-white ml-[40rem] my-2'>
        <label>
          <input type="checkbox" className='w-4 h-4 rounded-sm m-1' />
          Good first issues only
        </label>
      </div>

      <table className="border-collapse border-gray-400 border mx-12 my-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Stars</th>
            <th className="p-2">Forks</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id} className="text-white hover:text-black hover:bg-gray-100">
              <td className="p-2">{project.name}</td>
              <td className="p-2">{project.description}</td>
              <td className="p-2">{project.stargazers_count}</td>
              <td className="p-2">{project.forks_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;