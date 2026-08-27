/*
 * ============================================================================
 *  PAPER LIST  --  edit this file to update the papers shown on the website.
 * ============================================================================
 *
 *  Each paper is an object with these fields:
 *
 *    url            (required)  Link to the paper.
 *    title          (required)  Title. You can use LaTeX-style maths, e.g. $H$.
 *    date           (required)  Year (a number or a string).
 *    collaborators  (optional)  Array of co-author names, e.g.
 *                               ["A. Banerjee"] or ["L. Lichev", "A. Mond"].
 *                               Leave out (or use []) for solo papers.
 *    publication    (optional)  Journal / venue info.
 *                               - For a preprint, free text such as
 *                                 "Annals of Applied Probability, accepted".
 *                               - For a publication, just the venue name, e.g.
 *                                 "Electronic Journal of Combinatorics"
 *                                 (the year is added automatically from `date`).
 *    notes         (optional)  Array of links, each with a `name` and `url`.
 *
 *  There are two lists below: `preprints` and `publications`.
 *  To add a paper, copy an existing entry, edit the fields, and put it in the
 *  right list. Newest papers usually go at the top. Mind the commas.
 * ============================================================================
 */

const PAPERS = {

  preprints: [
    {
      url: "https://arxiv.org/abs/2607.02500",
      title: "The structure of FAC posets and the Aharoni--Korman conjecture",
      date: 2026,
	  notes: [
	  ]
    },
    {
      url: "https://arxiv.org/abs/2605.20184",
      title: "Hypercube geodesics with few colour changes",
      date: 2026,
	  notes: [
		{ name: "Lean verification", url: "https://github.com/LawrenceHollom/lean-norine/tree/main" },
		{ name: "Annotated paper", url: "pdfs/norine-annotated.pdf" },
	  ]
    },
    {
      url: "https://arxiv.org/abs/2601.18789",
      title: "Uniformly balanced $H$-factors in multicoloured complete graphs",
      date: 2026,
      collaborators: ["A. Banerjee"],
    },
    {
      url: "https://arxiv.org/abs/2510.05044",
      title: "Reverse Littlewood--Offord problems with parity conditions",
      date: 2025,
      collaborators: ["G. B. Sorkin"],
    },
    {
      url: "https://arxiv.org/abs/2508.15698",
      title: "Connecting hypercube 1-factors",
      date: 2025,
      collaborators: ["B. Randall Shaw"],
    },
    {
      url: "https://arxiv.org/abs/2506.23970",
      title: "Approximate Itai-Zehavi conjecture for random graphs",
      date: 2025,
      collaborators: ["L. Lichev", "A. Mond", "J. Portier", "Y. Wang"],
	  publication: "Random Structures & Algorithms, accepted"
    },
    {
      url: "https://arxiv.org/abs/2505.22875",
      title: "Monotonicity and decompositions of random regular graphs",
      date: 2025,
      collaborators: ["L. Lichev", "A. Mond", "J. Portier", "Y. Wang"],
      publication: "Annals of Applied Probability, accepted",
    },
    {
      url: "https://arxiv.org/abs/2411.16844",
      title: "The Aharoni--Korman conjecture is false",
      date: 2025,
      publication: "Israel Journal of Mathematics, accepted",
	  notes: [
		{ name: "Lean verification", url: "https://github.com/b-mehta/AharoniKorman" }
	  ]
    },
    {
      url: "https://arxiv.org/abs/2412.04170",
      title: "A note on high-dimensional discrepancy of subtrees",
      date: 2024,
      collaborators: ["L. Lichev", "A. Mond", "J. Portier"],
      publication: "Discrete & Computational Geometry, accepted",
    },
    {
      url: "https://arxiv.org/abs/2410.17034",
      title: "Discrepancies of spanning trees in dense graphs",
      date: 2024,
      collaborators: ["L. Lichev", "A. Mond", "J. Portier"],
    },
    {
      url: "https://arxiv.org/abs/2410.06148",
      title: "Almost colour-balanced spanning forests in complete graphs",
      date: 2024,
      collaborators: ["A. Mond", "J. Portier"],
    },
  ],

  publications: [
    {
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/view/v33i2p11",
      title: "Counterexamples to conjectures on strong maximality and minimality",
      date: 2026,
      collaborators: ["B. Randall Shaw"],
      publication: "Electronic Journal of Combinatorics",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2511.13709" },
	  ],
    },
    {
      url: "http://dx.doi.org/10.1002/rsa.70070",
      title: "Finding long cycles in a percolated expander graph",
      date: 2026,
      publication: "Random Structures & Algorithms",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2506.12162" },
	  ],
    },
    {
      url: "https://doi.org/10.1112/jlms.70539",
      title: "Double-jump phase transition for the reverse Littlewood--Offord problem",
      date: 2026,
      collaborators: ["J. Portier", "V. Souza"],
      publication: "Journal of the London Mathematical Society",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2503.24202" },
	  ],
    },
    {
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/view/v32i4p50",
      title: "A uniform bound on almost colour-balanced perfect matchings in colour-balanced complete graphs",
      date: 2025,
      publication: "Electronic Journal of Combinatorics",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2410.07993" },
	  ],
    },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0195669825000733",
      title: "The bunkbed conjecture is not robust to generalisation",
      date: 2025,
      publication: "European Journal of Combinatorics",
	  notes: [
		{ name: "Quanta", url: "https://www.quantamagazine.org/maths-bunkbed-conjecture-has-been-debunked-20241101/" },
		{ name: "arXiv", url: "https://arxiv.org/abs/2406.01790" },
	  ],
    },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0012365X24004023",
      title: "On graphs with maximum difference between game chromatic number and chromatic number",
      date: 2025,
      publication: "Discrete Mathematics",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2309.01583" },
	  ],
    },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0166218X24000209",
      title: "On monotonicity in Maker-Breaker graph colouring games",
      date: 2024,
      publication: "Discrete Applied Mathematics",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2308.03528" },
	  ],
    },
    {
      url: "https://onlinelibrary.wiley.com/doi/10.1002/rsa.70024",
      title: "Tight Anti-Concentration of Rademacher Sums",
      date: 2025,
      collaborators: ["J. Portier"],
      publication: "Random Structures & Algorithms",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2306.07811" },
	  ],
    },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0195669824000416",
      title: "A note on interval colourings of graphs",
      date: 2024,
      collaborators: ["M. Axenovich", "A. Girão", "J. Portier", "E. Powierski", "M. Savery", "Y. Tamitegama", "L. Versteegen"],
      publication: "European Journal of Combinatorics",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2303.04782" },
	  ],
    },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0012365X23003977",
      title: "A new proof of the bunkbed conjecture in the $p\\uparrow 1$ limit",
      date: 2024,
      publication: "Discrete Mathematics",
	  notes: [
		{ name: "arXiv", url: "https://arxiv.org/abs/2302.00031" },
	  ],
    },
  ],

};
