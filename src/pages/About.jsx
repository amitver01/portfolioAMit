import React, { useState, useEffect } from 'react';
import Marque from '../components/marque';
import axios from 'axios';

const About = () => {
  const [githubData, setGithubData] = useState({
    profileName: '',
    totalCommits: 0,
  });
  const [leetcodeData, setLeetcodeData] = useState({
    rating: null,
    solved: 0,
  });
  const [displayedCommits, setDisplayedCommits] = useState(0);
  const [errorGitHub, setErrorGitHub] = useState(null);
  const [errorLeetCode, setErrorLeetCode] = useState(null);

  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN || '';
  const username = 'amitver01'; // GitHub username to track

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch GitHub profile name
        const profileResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: { Authorization: `token ${token}` },
        });
  
        const profileName = profileResponse.data.name || username;
  
        // Fetch GitHub repositories
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: { Authorization: `token ${token}` },
        });
  
        const repos = reposResponse.data;
  
        // Prepare promises for fetching commits for each repository
        const commitsPromises = repos.map((repo) =>
          axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=100`, {
            headers: { Authorization: `token ${token}` },
          })
        );
  
        // Resolve all promises
        const commitsResponses = await Promise.all(commitsPromises);
  
        // Calculate total commits
        const totalCommits = commitsResponses.reduce((sum, response) => sum + response.data.length, 0);
  
        // Update state
        setGithubData({ profileName, totalCommits });
  
        // Display commit count dynamically
        let count = 0;
        const interval = setInterval(() => {
          count += Math.floor(totalCommits / 50);
          if (count >= totalCommits) {
            setDisplayedCommits(totalCommits);
            clearInterval(interval);
          } else {
            setDisplayedCommits(count);
          }
        }, 50);
      } catch (err) {
        setErrorGitHub('Failed to fetch GitHub data');
        console.error(err);
      }
    };

    const fetchLeetCodeData = async () => {
      try {
        const userResponse = await axios.get('https://alfa-leetcode-api.onrender.com/userProfile/amitver6969');
        const contestResponse = await axios.get('https://alfa-leetcode-api.onrender.com/amitver6969/contest');

        setLeetcodeData({
          rating: contestResponse.data.contestRating || 'N/A',
          solved: userResponse.data.totalSolved || 0,
        });
      } catch (error) {
        setErrorLeetCode('Failed to fetch LeetCode data');
        console.error(error);
      }
    };

    fetchGitHubData();
    fetchLeetCodeData();
  }, [username, token]);

  return (
    <div id="about" className="w-full min-h-screen bg-zinc-900 pt-4 md:pt-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-white text-4xl md:text-5xl font-bold">About</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-2/3">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Hey<span className="text-blue-500">!</span></h2>
                <p className="text-base md:text-lg text-gray-300">
                  I'm Amit, a gym freak turned software engineer from Lucknow, Uttar Pradesh. I specialize in the backend, primarily Node, but love building with whatever tools are right for the job including frontend.
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  I’m eager to apply my skills and knowledge to a dynamic role in the tech industry, where I can contribute to innovative projects and continue to grow professionally.
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  I'm passively looking for positions where I can apply my love for code. If you think you've got an opening that I might like, let's connect <span role="img" aria-label="link">🔗</span>
                </p>
                <br></br>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">GitHub Data</h3>
              {errorGitHub ? (
                <p className="text-red-500">{errorGitHub}</p>
              ) : (
                <div className="space-y-4">
                  <p className="text-lg text-gray-300">
                    <span className="font-medium text-white">Profile Name:</span>{' '}
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {githubData.profileName}
                    </a>
                  </p>
                  <p className="text-lg text-gray-300">
                    <span className="font-medium text-white">Total Commits:</span>{' '}
                    <span className="text-green-400 font-bold text-2xl">{displayedCommits}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mt-8 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">LeetCode Stats</h3>
              {errorLeetCode ? (
                <p className="text-red-500">{errorLeetCode}</p>
              ) : (
                <div className="space-y-4">
                  <p className="text-lg text-gray-300">
                    <span className="font-medium text-white">Rating:</span>{' '}
                    <span className="text-yellow-400 font-bold text-2xl">{leetcodeData.rating}</span>
                  </p>
                  <p className="text-lg text-gray-300">
                    <span className="font-medium text-white">Solved Problems:</span>{' '}
                    <span className="text-blue-400 font-bold text-2xl">{leetcodeData.solved}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Marque />
    </div>
  );
};

export default About;
