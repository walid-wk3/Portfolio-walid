import React from 'react';
import { TechSkills } from '../components/TechSkills';
import { Footer } from '../components/Footer';

export function Home() {
  const techSkills = [
    { 
      name: 'HTML/CSS', 
      icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      ], 
      level: 100
    },
    { 
      name: 'JavaScript', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
      level: 85 
    },
    { 
      name: 'PHP', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'],
      level: 85
    },
    { 
      name: 'Python', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
      level: 75 
    },
    { 
      name: 'Java', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
      level: 70 
    },
    { 
      name: 'C#', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'],
      level: 85
    },
    { 
      name: 'MySQL', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
      level: 85 
    },
    { 
      name: 'Webflow', 
      icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg'],
      level: 80 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <img 
          src="/images/icon.jpg"
          alt="Photo de profil"
          className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-sky-400/20"
        />
        <h1 className="text-3xl font-bold text-sky-400 mt-4">Walid Kherchouch</h1>
        <p className="text-sky-400">Étudiant en BTS SIO - Option SLAM</p>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">À propos de moi</h2>
        <p className="text-gray-300 leading-relaxed">
        Passionné par l'informatique et le développement, je suis actuellement en formation BTS SIO.
         À travers ce portfolio, je souhaite partager mon parcours, mes compétences, ainsi que les projets sur lesquels j'ai travaillé.
        </p>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Soft Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 glass-effect rounded-xl">
            <h3 className="font-semibold text-sky-400 mb-2">Esprit d’analyse</h3>
            <p className="text-sm text-gray-300">Capacité à analyser une situation, un problème ou un besoin, pour proposer une solution adaptée</p>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h3 className="font-semibold text-sky-400 mb-2">Communication</h3>
            <p className="text-sm text-gray-300">Capacité à expliquer des concepts techniques simplement</p>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h3 className="font-semibold text-sky-400 mb-2">Organisation</h3>
            <p className="text-sm text-gray-300">Gestion efficace des priorités et des délais</p>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h3 className="font-semibold text-sky-400 mb-2">Adaptabilité</h3>
            <p className="text-sm text-gray-300">Capacité à s'adapter aux nouvelles technologies</p>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h3 className="font-semibold text-sky-400 mb-2">Autonomie</h3>
            <p className="text-sm text-gray-300">Capacité à travailler seul et à rechercher l'information par moi-même </p>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h3 className="font-semibold text-sky-400 mb-2">Travail d'équipe</h3>
            <p className="text-sm text-gray-300">Capacité à travailler efficacement en équipe</p>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Compétences Techniques (Hard Skills)</h2>
        <TechSkills skills={techSkills} />
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Poursuites d'études</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Licence Miage (Paris Cité)</li>
          <li>Master Miage (Paris Cité) </li>
        </ul>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Objectifs Professionnels</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Devenir développeur full-stack</li>
          <li>Ingénieur d'études et développement</li>
          <li>Chef de projet informatique</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}