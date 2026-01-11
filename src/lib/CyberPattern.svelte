<div class="cyber-pattern"></div>

<style>
  .cyber-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1; /* Derrière tout le reste */

    background-color: #050505; /* Fond presque noir */

    /* C'est ici que la magie opère. On empile plusieurs couches : */
    background-image: 
      /* 1. La Vignette (Ombre sur les bords pour l'effet cinéma) */
      radial-gradient(circle at center, transparent 30%, #000 90%),
      /* 2. GRILLE PRINCIPALE (Cyan - Grande) - Lignes Verticales & Horizontales */
        linear-gradient(rgba(3, 233, 244, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(3, 233, 244, 0.1) 1px, transparent 1px),
      /* 3. GRILLE SECONDAIRE (Magenta - Petite) - Lignes Verticales & Horizontales */
        linear-gradient(rgba(217, 3, 244, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 3, 244, 0.05) 1px, transparent 1px);

    /* On définit la taille des grilles */
    background-size:
      100% 100%,
      /* Vignette */ 60px 60px,
      /* Grande grille Cyan (60px) */ 60px 60px,
      20px 20px,
      /* Petite grille Magenta (20px) */ 20px 20px;

    /* On lance l'animation */
    animation: cyber-move 10s linear infinite;
  }

  /* L'animation qui fait bouger les grilles */
  @keyframes cyber-move {
    0% {
      background-position:
        0 0,
        /* Vignette (ne bouge pas) */ 0 0,
        0 0,
        /* Grille Cyan (Départ) */ 0 0,
        0 0; /* Grille Magenta (Départ) */
    }
    100% {
      background-position:
        0 0,
        /* Vignette */ 60px 60px,
        60px 60px,
        /* Grille Cyan bouge de 60px (1 carreau) */ 40px 40px,
        40px 40px; /* Grille Magenta bouge de 40px (plus vite/décalé) */
    }
  }
</style>
