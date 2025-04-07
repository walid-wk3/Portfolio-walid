import React from 'react';
import { ImageCarousel } from '../components/ImageCarousel';
import { Footer } from '../components/Footer';

export function Projects() {
  const projectVVA = [
    {
      url: "vva-acceuil.jpg",
      alt: "acceuil"
    },
    {
      url: "vva-connexion.jpg",
      alt: "connexion"
    },
     
  ];


  const projectAPI = [
    {
      url: "connexion-api.jpg",
      alt: "connexion"
    },
    {
      url: "inscription-api.jpg",
      alt: "inscription"
    },
    {
      url: "acceuil-api.jpg",
      alt: "acceuil"
    },

    {
      url: "interface-api.jpg",
      alt: "interface"
    },
    {
      url: "recherche-api.jpg",
      alt: "recherche"
    },
    {
      url: "gestion-favoris-api.jpg",
      alt: "gestion favoris"
    }
  ];



  const projectCinéma = [
    {
      url: "acceuill-cinema.jpg",
      alt: "acceuil"
    },
    {
      url: "connexion-cinema.jpg",
      alt: "connexion"
    },
    {
      url: "inscription-cinema.jpg",
      alt: "inscription"
    },

    {
      url: "films-cinema.jpg",
      alt: "films"
    },
    {
      url: "compte-cinema.jpg",
      alt: "compte"
    },
    {
      url: "utilisateur-cinema.jpg",
      alt: "utilisateur"
    },

    {
      url: "film-cinema.jpg",
      alt: "film"
    },
    {
      url: "reservation-cinema.jpg",
      alt: "reservation"
    },
    {
      url: "admin-cinema.jpg",
      alt: "admin"
    },

    {
      url: "programmation-projection.jpg",
      alt: "projection"
    },
    {
      url: "gestion-membres.jpg",
      alt: "gestion membres"
    }


  ];


  const projectBibliothèque = [
    {
      url: "acceuil-bibliotheque.jpg",
      alt: "acceuil"
    },
    {
      url: "consulte-utilisateurs.jpg",
      alt: "consulte"
    },
    {
      url: "connexion-bibliothéque.jpg",
      alt: "connexion"
    },

    {
      url: "inscription-bibliotheque.jpg",
      alt: "inscription"
    },

    {
      url: "espace-membre.jpg",
      alt: "membre"
    },

    {
      url: "consulte-membres.jpg",
      alt: "consulte-membre"
    },

    { 
      url: "admin-bibliotheque.jpg",
      alt: "admin"
    },
    {
      url: "ajout-admin.jpg",
      alt: "connexion"
    },

    {
      url: "update-livre.jpg",
      alt: "update"
    },


    {
      url: "delete-livres.jpg",
      alt: "delete"
    },

    {
      url: "gestion-emprunt.jpg",
      alt: "connexion"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-sky-400 mb-6">Projets Encadrés</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-effect rounded-2xl p-6">
            <ImageCarousel images={projectVVA} />
            <h3 className="text-xl font-semibold text-sky-400 mt-4 mb-4">Projet VVA</h3>
            <p className="text-gray-300 mb-4">
            Le projet VVA consiste à créer un site web pour la gestion des activités et animations d’un village vacances.
             Les vacanciers connectés peuvent s’inscrire aux activités des annimations, consulter leur programme et gérer leurs inscriptions.
              L’administrateur connecté peut gérer les activités, les animations et les inscriptions des vacanciers.
               Les utilisateurs non connectés peuvent uniquement consulter les activités et animations disponibles. 
               L’objectif était de fournir une solution fonctionnelle et conforme aux exigences du cahier des charges.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">HTML/CSS</span>
              <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">PHP</span>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">MySQL</span>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <ImageCarousel images={projectAPI} />
            <h3 className="text-xl font-semibold text-sky-400 mt-4 mb-4">Projet API</h3>
            <p className="text-gray-300 mb-4">
            Le projet API vise à créer une application permettant aux utilisateurs de s'inscrire, de se connecter, de rechercher des articles par mots-clés et par catégorie, et d'ajouter des articles à leurs favoris. 
            Il offre également la possibilité de consulter et de supprimer des favoris.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm">MySQL</span>
              <span className="px-3 py-1 bg-pink-400/20 text-pink-400 rounded-full text-sm">News API</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sky-400 mb-6">Projets Libre</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-effect rounded-2xl p-6">
            <ImageCarousel images={projectCinéma} />
            <h3 className="text-xl font-semibold text-sky-400 mt-4 mb-4">Projet Cinéma</h3>
            <p className="text-gray-300 mb-4">
            Le projet cinéma visait à créer un site web avec trois profils : administrateur, client et utilisateur. L’administrateur, après s’être connecté, pouvait programmer les projections, gérer les membres et modérer les critiques. Le client, également connecté, avait accès aux films et horaires, pouvait réserver une place et laisser une critique après visionnage. 
            L’utilisateur sans compte pouvait uniquement consulter les films et leurs horaires.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">HTML/CSS</span>
              <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">PHP</span>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">MySQL</span>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <ImageCarousel images={projectBibliothèque} />
            <h3 className="text-xl font-semibold text-sky-400 mt-4 mb-4">Projet Bibliothèque</h3>
            <p className="text-gray-300 mb-4">
            Le projet avait pour but de concevoir une application permettant à l'administrateur (bibliothécaire) de gérer les livres de la bibliothèque, les emprunts des membres et le suivi des retours.
             Elle permet également aux membres de consulter les livres disponibles, de les emprunter et de les retourner.
             En revanche, les utilisateurs non inscrits peuvent uniquement consulter la liste des livres.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm">MySQL</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}