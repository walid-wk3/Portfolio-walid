import React from 'react';
import { ImageCarousel } from '../components/ImageCarousel';
import { Footer } from '../components/Footer';

export function Veille() {
  const veilleImages = [
    {
      url: "/images/puce-neuromorphique.jpg",
      alt: "Puces Neuromorphiques"
    },
    {
      url: "/images/puce.webp",
      alt: "Puces Neuromorphiques"
    },
    {
      url: "/images/ia.jpeg",
      alt: "Technologie Cognitive"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-sky-400 mb-6">L'importance de la Veille Technologique</h2>
        <p className="text-gray-300 mb-6">
        La veille technologique est essentielle en informatique pour rester à jour sur les innovations, anticiper les évolutions du secteur et maintenir une expertise technique solide. Elle aide à prendre des décisions éclairées, à innover et à adopter les meilleures pratiques face à un environnement numérique en constante évolution.
        </p>
      </div>

      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-sky-400 mb-6">Les Puces Neuromorphiques et l'IA Cognitive</h2>
        <ImageCarousel images={veilleImages} />
        <div className="space-y-6 mt-6">
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">Pourquoi ce sujet ?</h3>
            <p className="text-gray-300">
            Cette technologie révolutionnaire a le potentiel de transformer l’IA et l’informatique en entreprise. En combinant innovation logicielle (IA cognitive) et matérielle (puces neuromorphiques), elle optimise les systèmes d'information tout en ouvrant la voie à des applications inédites. Son potentiel encore inexploité en fait un sujet d’avenir passionnant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Architecture Neuromorphique</h3>
              <p className="text-gray-300">
                Les puces neuromorphiques imitent l'architecture du cerveau humain,
                offrant une efficacité énergétique et une rapidité de traitement supérieures
                aux processeurs traditionnels.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">L'IA cognitive</h3>
              <p className="text-gray-300">
              L'IA cognitive vise à simuler les capacités humaines telles que la perception, l’apprentissage et la prise de décision. Contrairement à l'IA traditionnelle, elle s'adapte à son environnement et apprend de nouvelles situations, rendant les systèmes plus intelligents et autonomes.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Le lien entre les deux</h3>
              <p className="text-gray-300">
              Les puces neuromorphiques permettent à l’IA cognitive de traiter des informations rapidement et efficacement, en imitant le cerveau humain. Cette combinaison permet de créer des systèmes intelligents qui réagissent et s'adaptent aux nouvelles situations sans intervention humaine.

              </p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Applications</h3>
              <p className="text-gray-300">
                Utilisées en cybersécurité pour la détection d'anomalies en temps réel,
                en analyse de données massives et en IA embarquée pour les systèmes autonomes.
              </p>
            </div>
          </div>
     

      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-sky-400 mb-6">Outils de Veille</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 glass-effect rounded-xl">
            <img 
              src="/images/google-news.jpg"
              alt="google news"
              className="rounded-lg mb-4 object-cover w-full h-48"
            />
            <h4 className="font-semibold text-sky-400 mb-2">Google News</h4>
            <p className="text-sm text-gray-300 mb-4">
            Google News pour consulter les articles récents sur les puces neuromorphiques,
             notamment les innovations matérielles, 
             les avancées des laboratoires de recherche et les actualités d’entreprises spécialisées.
            </p>
            <a 
              href="https://www.techniques-ingenieur.fr/actualite/articles/des-puces-neuromorphiques-imitent-le-cerveau-pour-etre-plus-performantes-125565/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              Article sur les puces neuromorphiques
            </a>
          </div>
          <div className="p-6 glass-effect rounded-xl">
            <img 
              src="/images/google-alerte.jpg"
              alt="Google Alerts Interface"
              className="rounded-lg mb-4 object-cover w-full h-48"
            />
            <h4 className="font-semibold text-sky-400 mb-2">Google Alertes</h4>
            <p className="text-sm text-gray-300 mb-4">
            Google Alerts pour recevoir automatiquement par mail des articles liés à l’IA cognitive,
             grâce à des alertes personnalisées sur les mots-clés "IA cognitive" et "cognitive computing".
            </p>
            <a 
              href="https://cloud.google.com/discover/what-is-cognitive-computing?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              Article sur l'IA cognitive
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}