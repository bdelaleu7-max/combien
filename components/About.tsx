export function About() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-24 pt-4">
      <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl font-semibold">Le concept</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink2">
            Combien. répond à une question toute simple qu&apos;on se pose tous : ça coûte
            combien, au juste ? D&apos;une baguette de pain à une île privée, on a réuni au même
            endroit le prix des choses les plus banales comme des plus démesurées. Ajoute ce qui
            te fait envie à ta liste, et regarde le total grimper. C&apos;est un moyen ludique de
            prendre la mesure de la valeur des objets qui nous entourent — et de rêver un peu.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Comment ça marche</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink2">
            Cherche un objet dans la barre de recherche, ou explore par catégorie, de la
            gastronomie à l&apos;immobilier. Chaque fiche affiche un prix indicatif du marché
            français. Le bouton « Ajouter » place l&apos;objet dans ta liste et met à jour le
            coût total en temps réel. Le bouton en forme de flèche t&apos;emmène vers le site du
            marchand si tu veux en savoir plus sur le produit réel.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">D&apos;où viennent les prix</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink2">
            Les prix affichés sont des ordres de grandeur, choisis pour refléter le marché
            français à un instant donné. Pour les objets courants, ils correspondent au tarif
            public habituel ; pour les pièces d&apos;exception (yacht, œuvre d&apos;art, jet), ce
            sont des estimations représentatives. Un prix réel peut varier selon le modèle, le
            vendeur et le moment — considère chaque montant comme une base de comparaison, pas
            comme un devis.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-line bg-surface p-6 text-xs leading-relaxed text-ink3">
        <p className="mb-3">
          <span className="font-semibold text-ink2">Affiliation.</span> Certains liens de ce site
          sont des liens partenaires : si tu passes par eux pour acheter, Combien. peut percevoir
          une petite commission, sans surcoût pour toi. Cela nous aide à faire vivre le site.
        </p>
        <p>
          <span className="font-semibold text-ink2">Mentions légales.</span> Éditeur du site :
          [Brandon] — contact : [bdelaleu7@gmail.com]. Directeur de la publication :
          [Brandon]. Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
          États-Unis. Les marques et noms de produits cités appartiennent à leurs propriétaires
          respectifs et ne sont mentionnés qu&apos;à titre indicatif, sans lien d&apos;affiliation
          officiel autre que ceux explicitement déclarés.
        </p>
      </div>
    </section>
  );
}
