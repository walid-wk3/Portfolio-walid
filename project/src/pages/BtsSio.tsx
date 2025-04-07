import React from 'react';
import { Code2, Rocket } from 'lucide-react';
import { Footer } from '../components/Footer';

export function BtsSio() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-sky-400 mb-4">Formation BTS SIO</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Le BTS Services Informatiques aux Organisations est une formation sur deux ans qui prépare aux métiers de l'informatique.
          Cette formation permet d'acquérir des compétences techniques et professionnelles essentielles dans le domaine du numérique.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Code2 className="text-sky-400" size={24} />
            <h3 className="text-xl font-semibold">Option SLAM</h3>
          </div>
          <p className="text-gray-300 mb-4">Solutions Logicielles et Applications Métiers</p>
          <ul className="space-y-2 text-gray-300">
            <li>• Développement d'applications</li>
            <li>• Programmation orientée objet</li>
            <li>• Bases de données</li>
            <li>• Cybersécurité</li>
            <li>• Méthodologies agiles</li>
          </ul>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Rocket className="text-sky-400" size={24} />
            <h3 className="text-xl font-semibold">Option SISR</h3>
          </div>
          <p className="text-gray-300 mb-4">Solutions d'Infrastructure, Systèmes et Réseaux</p>
          <ul className="space-y-2 text-gray-300">
            <li>• Administration systèmes</li>
            <li>• Configuration réseaux</li>
            <li>• Virtualisation</li>
            <li>• Cloud computing</li>
            <li>• Sécurité infrastructure</li>
          </ul>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-sky-400 mb-6">Poursuites d'études</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 glass-effect rounded-xl">
            <h4 className="font-semibold text-sky-400 mb-2">Licence Pro</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Développement Web</li>
              <li>• Cybersécurité</li>
              <li>• Administration Systèmes</li>
            </ul>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h4 className="font-semibold text-sky-400 mb-2">Licence Générale</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Informatique</li>
              <li>• Miage</li>
              <li>• Réseaux et Télécommunications</li>
            </ul>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h4 className="font-semibold text-sky-400 mb-2">École d'Ingénieur</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• EPITA</li>
              <li>• EPITECH</li>
              <li>• EFREI</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-sky-400 mb-6">Débouchés professionnels</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 glass-effect rounded-xl">
            <h4 className="font-semibold text-sky-400 mb-2">Option SLAM</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Développeur d'applications</li>
              <li>• Développeur web</li>
              <li>• Analyste programmeur</li>
              <li>• Chef de projet junior</li>
            </ul>
          </div>
          <div className="p-4 glass-effect rounded-xl">
            <h4 className="font-semibold text-sky-400 mb-2">Option SISR</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Administrateur systèmes</li>
              <li>• Technicien réseau</li>
              <li>• Support technique</li>
              <li>• Responsable sécurité</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}