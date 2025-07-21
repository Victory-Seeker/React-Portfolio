import React from 'react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaCode, FaBook } from 'react-icons/fa';

const cards = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode className="text-orange-500 text-5xl mb-4" />,
    description: 'My solved problems and contest performance on LeetCode.',
    link: 'https://leetcode.com/u/koustav_kundu/',
  },
  {
    platform: 'Codeforces',
    icon: <FaCode className="text-blue-600 text-5xl mb-4" />,
    description: 'My contest ratings and submissions on Codeforces.',
    link: 'https://codeforces.com/profile/Koustav_Kundu',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef className="text-purple-600 text-5xl mb-4" />,
    description: 'Practice problems and rated contests on CodeChef.',
    link: 'https://www.codechef.com/users/koustav_2004',
  },
  {
    platform: 'GeeksforGeeks',
    icon: <FaBook className="text-green-600 text-5xl mb-4" />,
    description: 'Articles, practice problems and coding score on GFG.',
    link: 'https://www.geeksforgeeks.org/user/koustav_2004/',
  },
];

const CodingProfiles = () => {
  return (
    <section 
    id="profiles"
    className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">My Coding Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mb-2">{card.platform}</h3>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Visit Profile
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CodingProfiles;
