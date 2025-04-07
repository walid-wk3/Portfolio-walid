import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Stages() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-sky-400 mb-6">Stage de première année</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo_nativid.webp"
              alt="Logo entreprise"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-xl text-sky-400">Entreprise Nativid</p>
              <p className="text-gray-400">27 Mai - 5 juillet 2023</p>
              <a href="https://www.nativid.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sky-400 hover:text-sky-300 transition-colors mt-1">
                <ExternalLink size={16} />
                <span>Nativid.fr</span>
              </a>
            </div>
          </div>
          <div className="pl-10">
            <h3 className="text-lg font-semibold mb-2">Sujet du stage</h3>
            <p className="text-gray-300 mb-4">
            Lors de mon stage dans l'entreprise Nativid, spécialisée dans la production et la post-production audiovisuelle,
             j'ai travaillé en tant que développeur web en no-code sur Webflow.
              Mon rôle consistait à améliorer le design et les fonctionnalités du site existant.
               Une fois ces améliorations mises en place, j'ai optimisé le SEO du site afin d'en améliorer la visibilité sur les moteurs de recherche.
                J'ai ensuite testé cette optimisation avec PageSpeed Insights pour m'assurer de la performance du site,
             avant de publier la nouvelle version intégrant toutes les modifications.
            </p>
            <h3 className="text-lg font-semibold mb-2">Site réalisé</h3>
            <a href="https://www.nativid.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors">
              <ExternalLink size={18} />
              <span>Voir le projet</span>
            </a>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-sky-400 mb-6">Stage de deuxième année</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo-qalam.jpeg"
              alt="Logo entreprise"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-xl text-sky-400">Entreprise Qalam Software</p>
              <p className="text-gray-400">12 Novembre - 20 Décembre 2024</p>
              <a href="https://www.pagesjaunes.fr/pros/62037300" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sky-400 hover:text-sky-300 transition-colors mt-1">
                <ExternalLink size={16} />
                <span>Pages-jaunes.fr</span>
              </a>
            </div>
          </div>
          <div className="pl-10">
            <h3 className="text-lg font-semibold mb-2">Sujet du stage</h3>
            <p className="text-gray-300 mb-4">
            Lors de mon stage chez Qalam Software en tant que développeur full stack,
             j'ai eu pour mission de réaliser un complément Outlook destiné à la gestion des employés d'une société.
              Pour ce faire, j'ai utilisé JSON afin de structurer les données dans Microsoft Lists,
               ce qui permet de créer et de gérer efficacement des listes de données.
                J'ai également utilisé Graph API pour récupérer des informations sur les utilisateurs,
                 facilitant ainsi l'interaction avec les données Microsoft 365 et permettant d'optimiser la gestion des informations des employés.
            </p>
            <h3 className="text-lg font-semibold mb-2">Exemple d'une page réalisé</h3>
            <a href="/images/outlook.jpg" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors">
              <ExternalLink size={18} />
              <span>Voir le projet</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}