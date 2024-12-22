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
  const [error, setError] = useState(null);

  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;; // Replace with your GitHub personal access token
  const username = 'amitver01'; // Replace with the GitHub username you want to track

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
          console.log(totalCommits);
        }

        setGithubData({ profileName, totalCommits });
      } catch (err) {
        setError('Failed to fetch GitHub data');
        console.error(err);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div id="about" className="w-full h-screen bg-zinc-900 pt-4 md:pt-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-white text-4xl md:text-5xl font-bold">About</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-2/3">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Hey<span className="text-blue-500">!</span></h2>
                <p className="text-base md:text-lg">
                  I'm Amit, a gym freak turned software engineer from Lucknow, Uttar Pradesh. I specialize in the backend, primarily Node but love building with whatever tools are right for the job including frontend.
                </p>
                <p className="text-base md:text-lg">
                  I’m eager to apply my skills and knowledge to a dynamic role in the tech industry, where I can contribute to innovative projects and continue to grow professionally.
                </p>
                <p className="text-base md:text-lg">
                  I'm passively looking for positions where I can apply my love for code. If you think you've got an opening that I might like, let's connect <span role="img" aria-label="link">🔗</span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">GitHub Data</h3>
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <div>
                  <p className="text-white text-lg">Profile Name: {githubData.profileName}</p>
                  <p className="text-white text-lg">Total Commits: {githubData.totalCommits}</p>
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
