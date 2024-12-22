import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import ButtonRounded from '../components/Button';
import Marque from "../components/marque";
import axios from 'axios';

const About = () => {
  const [githubData, setGithubData] = useState({
    profileName: '',
    totalCommits: 0,
  });
  const [displayedCommits, setDisplayedCommits] = useState(0);
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN; // GitHub personal access token
  const username = 'amitver01'; // GitHub username to track

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch GitHub profile name
        const profileResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        const profileName = profileResponse.data.name || username;

        // Fetch GitHub repositories
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        const repos = reposResponse.data;
        let totalCommits = 0;

        // Fetch commits for each repository
        for (const repo of repos) {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${username}/${repo.name}/commits`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );

          totalCommits += commitsResponse.data.length;
        }

        setGithubData({ profileName, totalCommits });

        // Animate the shuffling effect for total commits
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
        setError('Failed to fetch GitHub data');
        console.error(err);
      }
    };

    fetchGitHubData();
  }, []);

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
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">GitHub Data</h3>
              {error ? (
                <p className="text-red-500">{error}</p>
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
                        {username}
                      </a>
                    </p>
                  <p className="text-lg text-gray-300">
                    <span className="font-medium text-white">Total Commits:</span>{' '}
                    <span className="text-green-400 font-bold text-2xl">{displayedCommits}</span>
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
