import React from 'react';
import { Link } from 'gatsby';

const Privacy = () => (
  <div className="container">
    <div className="section-inner">
      <h2>Politique de confidentialité</h2>
      <p>Votre vie privée est importante pour nous.</p>
      <p>
        La politique de @Datagada est de respecter votre vie privée et c'est pourquoi nous ne collectons aucune information de votre profil Strava. Nous utilisons l'API de Strava pour récupérer vos données d'activité
        et le profil de l'athlète, mais nous ne stockons ni ne conservons aucune information que nous en obtenons.
      </p>
        <p>
        Comme de nombreux opérateurs de sites, nous collectons les informations que votre navigateur envoie chaque fois que vous visitez notre site (« Données de journal »). Ces données de journal peuvent inclure des informations telles que votre
        l'adresse de protocole Internet (« IP ») de l'ordinateur, le type de navigateur, la version du navigateur, les pages de notre site que vous visitez, l'heure et la date de votre visite, le temps passé sur celles-ci
        pages et autres statistiques. De plus, nous pouvons utiliser des services tiers tels que Google Analytics qui collectent, surveillent et analysent ces informations pour améliorer notre
        plate-forme.
      </p>
      <p>
      Notre site Web peut contenir des liens vers des sites externes qui ne sont pas exploités par nous. Veuillez noter que nous n'avons aucun contrôle sur le contenu et les pratiques de ces sites, et ne pouvons accepter
      responsabilité ou responsabilité pour leurs politiques de confidentialité respectives.
      </p>
      <p>
      Votre utilisation continue de notre site Web sera considérée comme une acceptation de nos pratiques en matière de confidentialité et d'informations personnelles. Si vous avez des questions sur la façon dont nous traitons
      données utilisateur et informations personnelles, n'hésitez pas à nous contacter.
      </p>
      <p>Cette politique entre en vigueur le 1er Janvier 2024.</p>
      <p style={{ textAlign: 'center' }}>
        <Link to="/">Retour à l'accueil</Link>
      </p>
    </div>
  </div>
);

export default Privacy;
