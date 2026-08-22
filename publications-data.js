/*
 * Publications data — single source of truth for every paper, chapter,
 * thesis, presentation, and repository output across the site.
 *
 * Each entry:
 *   - type:      "Journal Article" | "Conference Paper" | "Conference Presentation"
 *                | "Book Chapter" | "PhD Dissertation" | "GitHub Repository"
 *   - title
 *   - authors:   omit for GitHub Repository entries (use `abstract` instead)
 *   - venue
 *   - abstract:  used instead of authors/venue for GitHub Repository entries
 *   - year:      used for sorting (newest first); ties keep array order
 *   - tags:      project slugs this output belongs to (matches a project
 *                page's OUTPUT_TAG) — [] if it isn't tied to a project page
 *   - featured:  set to false to keep an item off the research.html
 *                highlights list while still showing it on its project page
 *                (defaults to true when omitted)
 *   - links:     [{ label, url }, ...] — omit or leave empty for none
 */
const PUBLICATIONS = [
    {
        id: 'circus-2026-review',
        type: 'Journal Article',
        title: 'Circular supply chain design and optimisation through operations research: A systematic review with a process-based perspective and research priorities',
        authors: 'Alix Langenaeker, Philippe Nimmegeers, Christof Defryn',
        venue: 'Cleaner Logistics and Supply Chain, Vol. 19, 2026, p. 100334',
        year: 2026,
        tags: ['circus'],
        links: [
            { label: '📄 PDF', url: 'https://doi.org/10.1016/j.clscn.2026.100334' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.clscn.2026.100334' }
        ]
    },
    {
        id: 'order-picking-2024-cec-paper',
        type: 'Conference Paper',
        title: 'Synchronous Parallel Heuristics for Solving the Joint Order Batching and Picker Routing Problem',
        authors: 'Son Thai Tran, Rui Jorge Almeida, Christof Defryn, Inneke Van Nieuwenhuyse',
        venue: '2024 IEEE Congress on Evolutionary Computation (CEC), 2024, pp. 01–08',
        year: 2024,
        tags: ['order-picking'],
        links: [
            { label: '📄 PDF', url: 'https://documentserver.uhasselt.be//bitstream/1942/45632/2/Synchronous_Parallel_Heuristics_for_Solving_the_Joint_Order_Batching_and_Picker_Routing_Problem.pdf' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1109/CEC60901.2024.10612134' }
        ]
    },
    {
        id: 'collab-2024-product-characteristics',
        type: 'Journal Article',
        title: 'The impact of product characteristics and innovativeness on the benefits of collaboration',
        authors: 'Thomas Hacardiaux, Christof Defryn, Jean-Sébastien Tancrez, Lotte Verdonck',
        venue: 'International Transactions in Operational Research, Vol. 31, No. 1, 2024, pp. 370–395',
        year: 2024,
        tags: ['collaborative-location-inventory'],
        links: [
            { label: '📄 PDF', url: 'https://onlinelibrary.wiley.com/doi/pdfdirect/10.1111/itor.13158' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1111/itor.13158' }
        ]
    },
    {
        id: 'order-picking-2023-cec-paper',
        type: 'Conference Paper',
        title: 'Order Picking: Exploring the Properties of the Greedy Seed-Based Batching Algorithm',
        authors: 'Son Tran Thai, Rui Jorge Almeida, Christof Defryn',
        venue: '2023 IEEE Congress on Evolutionary Computation (CEC), 2023, pp. 1–8',
        year: 2023,
        tags: ['order-picking'],
        links: [
            { label: '🔗 DOI', url: 'https://doi.org/10.1109/CEC53210.2023.10254095' }
        ]
    },
    {
        id: 'biobased-2023-lifecycle',
        type: 'Journal Article',
        title: 'Life cycle optimization of the supply chain for biobased chemicals with local biomass resources',
        authors: 'Carlos García-Velásquez, Christof Defryn, Yvonne van der Meer',
        venue: 'Sustainable Production and Consumption, Vol. 36, 2023, pp. 540–551',
        year: 2023,
        tags: [],
        links: [
            { label: '📄 PDF', url: 'https://www.sciencedirect.com/science/article/pii/S2352550922002846/pdf' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.spc.2022.10.015' }
        ]
    },
    {
        id: 'meter-reading-2022',
        type: 'Journal Article',
        title: 'Data-Driven Optimization and Statistical Modeling to Improve Meter Reading for Utility Companies',
        authors: 'Debdatta Sinha Roy, Christof Defryn, Bruce Golden, Edward Wasil',
        venue: 'Computers &amp; Operations Research, 2022, p. 105844',
        year: 2022,
        tags: [],
        links: [
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.cor.2022.105844' }
        ]
    },
    {
        id: 'velocity-2022-omega',
        type: 'Journal Article',
        title: 'Optimizing Fuel Consumption on Inland Waterway Networks: Local Search Heuristic for Lock Scheduling',
        authors: 'Julian Golak, Christof Defryn, Alexander Grigoriev',
        venue: 'Omega, 2022, p. 102580',
        year: 2022,
        tags: ['velocity-optimisation'],
        links: [
            { label: '📄 PDF', url: 'https://www.sciencedirect.com/science/article/pii/S0305048321001894/pdf' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.omega.2021.102580' }
        ]
    },
    {
        id: 'collab-2022-carbon-footprint',
        type: 'Journal Article',
        title: 'Balancing partner preferences for logistics costs and carbon footprint in a horizontal cooperation',
        authors: 'Thomas Hacardiaux, Christof Defryn, Jean-Sébastien Tancrez, Lotte Verdonck',
        venue: 'OR Spectrum, Vol. 44, No. 1, 2022, pp. 121–153',
        year: 2022,
        tags: ['collaborative-location-inventory'],
        links: [
            { label: '📄 PDF', url: 'https://link.springer.com/content/pdf/10.1007/s00291-021-00651-y.pdf' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1007/s00291-021-00651-y' }
        ]
    },
    {
        id: 'velocity-2021-ejor',
        type: 'Journal Article',
        title: 'Inland waterway efficiency through skipper collaboration and joint speed optimization',
        authors: 'Julian Arthur Pawel Golak, Christof Defryn, Veerle Timmermans, Alexander Grigoriev',
        venue: 'European Journal of Operational Research, Vol. 292, No. 1, 2021, pp. 276–285',
        year: 2021,
        tags: ['velocity-optimisation'],
        links: [
            { label: '📄 PDF', url: 'https://www.sciencedirect.com/science/article/pii/S0377221720308936' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.ejor.2020.10.017' }
        ]
    },
    {
        id: 'velocity-2019-book-chapter',
        type: 'Book Chapter',
        title: 'Inland Waterway Efficiency Through Skipper Collaboration and Joint Speed Optimization',
        authors: 'Christof Defryn, Julian Golak, Alexander Grigoriev, Veerle Timmermans',
        venue: 'Mathematical Optimization Theory and Operations Research, Springer, 2019, pp. 202–217',
        year: 2019,
        tags: ['velocity-optimisation'],
        links: [
            { label: '📄 PDF', url: 'https://cris.maastrichtuniversity.nl/en/publications/f2e9ea94-745f-400f-93e3-9e161675fc78' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1007/978-3-030-22629-9_15' }
        ]
    },
    {
        id: 'horizontal-2019-omega',
        type: 'Journal Article',
        title: 'Integrating partner objectives in horizontal logistics optimisation models',
        authors: 'Christof Defryn, Kenneth Sörensen, Wout Dullaert',
        venue: 'Omega, Vol. 82, 2019, pp. 1–12',
        year: 2019,
        tags: ['horizontal-logistics-collaboration'],
        links: [
            { label: '📄 PDF', url: 'https://www.sciencedirect.com/science/article/pii/S0305048317301937' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.omega.2017.11.008' }
        ]
    },
    {
        id: 'horizontal-2018-ejor-tsp',
        type: 'Journal Article',
        title: 'Multi-objective optimisation models for the travelling salesman problem with horizontal cooperation',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'European Journal of Operational Research, Vol. 267, No. 3, 2018, pp. 891–903',
        year: 2018,
        tags: ['horizontal-logistics-collaboration'],
        links: [
            { label: '📄 PDF', url: 'https://www.sciencedirect.com/science/article/pii/S037722171731161X' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.ejor.2017.12.028' }
        ]
    },
    {
        id: 'horizontal-2017-cor-vns',
        type: 'Journal Article',
        title: 'A fast two-level variable neighborhood search heuristic for the clustered vehicle routing problem',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'Computers &amp; Operations Research, Vol. 83, 2017, pp. 78–94',
        year: 2017,
        tags: ['horizontal-logistics-collaboration'],
        links: [
            { label: '📄 PDF', url: 'https://cris.maastrichtuniversity.nl/ws/files/33890392/Defryn_2017_Fast_Two_level_Variable.pdf' },
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.cor.2017.02.007' }
        ]
    },
    {
        id: 'horizontal-2017-phd',
        type: 'PhD Dissertation',
        title: 'Models for operational optimisation in a horizontal logistic cooperation: gain sharing, incentives and multi-level objectives',
        authors: 'Christof Defryn',
        venue: 'PhD thesis, University of Antwerp, 2017',
        year: 2017,
        tags: ['horizontal-logistics-collaboration'],
        links: [
            { label: '📄 PDF', url: 'https://repository.uantwerpen.be/docman/irua/dcc6d2/142647.pdf' }
        ]
    },
    {
        id: 'horizontal-2016-ejor-selective',
        type: 'Journal Article',
        title: 'The selective vehicle routing problem in a collaborative environment',
        authors: 'Christof Defryn, Kenneth Sörensen, Trijntje Cornelissens',
        venue: 'European Journal of Operational Research, Vol. 250, No. 2, 2016, pp. 400–411',
        year: 2016,
        tags: ['horizontal-logistics-collaboration'],
        links: [
            { label: '🔗 DOI', url: 'https://doi.org/10.1016/j.ejor.2015.09.059' }
        ]
    },
    {
        id: 'horizontal-2016-book-chapter-gainsharing',
        type: 'Book Chapter',
        title: 'Gain Sharing in Horizontal Logistic Co-operation: A Case Study in the Fresh Fruit and Vegetables Sector',
        authors: 'Christof Defryn, Christine Vanovermeire, Kenneth Sörensen',
        venue: 'Sustainable Logistics and Supply Chains, Springer International Publishing, 2016, pp. 75–89',
        year: 2016,
        tags: ['horizontal-logistics-collaboration'],
        links: [
            { label: '🔗 DOI', url: 'https://doi.org/10.1007/978-3-319-17419-8_4' }
        ]
    },

    // --- ORBITAL ---
    {
        id: 'orbital-repo-oostoolkit',
        type: 'GitHub Repository',
        title: 'NbodyWalkerDelta — On-Orbit Servicing Toolkit',
        abstract: 'A comprehensive simulation toolkit for on-orbit servicing missions, integrating orbital mechanics, stochastic satellite health modelling, trajectory optimization, and scheduling.',
        year: 2026,
        tags: ['orbital'],
        featured: false,
        links: [
            { label: '🔗 View on GitHub', url: 'https://github.com/nsushant/OOSToolkit' }
        ]
    },
    {
        id: 'orbital-2026-ifors',
        type: 'Conference Presentation',
        title: 'Scheduling In-orbit services for mega-constellations',
        authors: 'Sushanta Nigudkar, Christof Defryn',
        venue: 'IFORS Conference, Vienna, Austria, 12–17 Jul 2026',
        year: 2026,
        tags: ['orbital'],
        featured: false
    },
    {
        id: 'orbital-2026-orbel',
        type: 'Conference Presentation',
        title: 'Scheduling in orbit servicing for mega-constellations',
        authors: 'Sushanta Nigudkar, Christof Defryn',
        venue: 'ORBEL Conference, KU Leuven, Leuven, Belgium, 5–6 Feb 2026',
        year: 2026,
        tags: ['orbital'],
        featured: false
    },

    // --- CIRCUS ---
    {
        id: 'circus-2026-orbel-presentation',
        type: 'Conference Presentation',
        title: 'From Waste to Worth: Extending The Multi-Echelon Network Design Problem Towards Circular Supply Chain Modelling',
        authors: 'Alix Langenaeker, Philippe Nimmegeers, Christof Defryn',
        venue: 'ORBEL Conference, KU Leuven, Leuven, Belgium, 5–6 Feb 2026',
        year: 2026,
        tags: ['circus'],
        featured: false
    },
    {
        id: 'circus-2025-orbel-ngb',
        type: 'Conference Presentation',
        title: 'Towards a generic circular supply chain optimisation model: a systematic review and methodological outlook',
        authors: 'Alix Langenaeker, Philippe Nimmegeers, Christof Defryn',
        venue: 'Joint ORBEL-NGB Conference, Maastricht University, Maastricht, The Netherlands, 29–31 Jan 2025',
        year: 2025,
        tags: ['circus'],
        featured: false
    },

    // --- Order picking ---
    {
        id: 'op-2024-lille',
        type: 'Conference Presentation',
        title: 'SKU repositioning in anticipatory order picking',
        authors: 'Christof Defryn, Son Tran Thai, Rui Jorge Almeida',
        venue: '1st Workshop on Warehouse Management and Logistics, Lille, France, 3–4 Oct 2024',
        year: 2024,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2024-nantes',
        type: 'Conference Presentation',
        title: 'SKU repositioning in anticipatory order picking',
        authors: 'Christof Defryn, Son Tran Thai, Rui Jorge Almeida',
        venue: 'TSL Workshop on "Optimizing Transportation and Logistics under Uncertainty", Nantes, France, 25–27 Sep 2024',
        year: 2024,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2024-yokohama',
        type: 'Conference Presentation',
        title: 'Synchronous parallel heuristics for solving the joint order batching and picker routing problem',
        authors: 'Son Tran Thai, Rui Jorge Almeida, Christof Defryn, Inneke Van Nieuwenhuyse',
        venue: '2024 IEEE World Congress on Computational Intelligence, Yokohama, Japan, 1–5 Jul 2024',
        year: 2024,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2023-paris',
        type: 'Conference Presentation',
        title: 'Using Metaheuristics to Improve Anticipatory Order Picking Efficiency',
        authors: 'Son Tran Thai, Christof Defryn, Rui Jorge Almeida',
        venue: 'POMS 2023: International Conference of the Production and Operations Management Society, Paris, France, 18–20 Jul 2023',
        year: 2023,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2023-chicago',
        type: 'Conference Presentation',
        title: 'Order picking: Exploring the properties of the greedy seed-based batching algorithm',
        authors: 'Rui Jorge Almeida, Son Tran Thai, Christof Defryn',
        venue: 'IEEE-CEC 2023: Congress on Evolutionary Computation, Chicago, USA, 1–5 Jul 2023',
        year: 2023,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2022-beta',
        type: 'Conference Presentation',
        title: 'Using cross-learning forecasting methods to improve anticipatory order picking efficiency',
        authors: 'Son Tran, Rui Jorge Almeida, Christof Defryn',
        venue: 'BETA Symposium, Soesterberg, The Netherlands, 17 Nov 2022',
        year: 2022,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2022-orbel36-gtsp',
        type: 'Conference Presentation',
        title: 'Order picking problem: Exact and heuristic algorithms for the Generalized Travelling Salesman Problem with geographical overlap between clusters',
        authors: 'Farzaneh Rajabighamchi, Stan van Hoesel, Christof Defryn',
        venue: 'ORBEL36: 36th Annual Conference of the Belgian Operations Research Society, KU Leuven\'s Technology Campus, Ghent, Belgium, 12–13 Sep 2022',
        year: 2022,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2022-orbel36-crosslearning',
        type: 'Conference Presentation',
        title: 'Using cross-learning forecasting methods to improve anticipatory order picking efficiency',
        authors: 'Son Tran, Rui Jorge Almeida, Christof Defryn',
        venue: 'ORBEL36: 36th Annual Conference of the Belgian Operations Research Society, KU Leuven\'s Technology Campus, Ghent, Belgium, 12–13 Sep 2022',
        year: 2022,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2022-euro-espoo',
        type: 'Conference Presentation',
        title: 'Order picking problem: Exact and heuristic algorithms for the Generalized Travelling Salesman Problem with geographical overlap between clusters',
        authors: 'Farzaneh Rajabighamchi, Stan Van Hoesel, Christof Defryn',
        venue: 'EURO 2022: 32nd European Conference on Operational Research, Espoo, Finland, 3–6 Jul 2022',
        year: 2022,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2021-tsl-virtual',
        type: 'Conference Presentation',
        title: 'Anticipatory order picking',
        authors: 'Son Tran, Rui Jorge de Almeida, Christof Defryn',
        venue: 'TSL Workshop on "E-Commerce in an Emerging World", Virtual conference, 13–15 Dec 2021',
        year: 2021,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2021-beta',
        type: 'Conference Presentation',
        title: 'Graph reduction for the TSP in planar graphs: An application in order picking',
        authors: 'Farzaneh Rajabighamchi, Stan Van Hoesel, Christof Defryn',
        venue: 'BETA 2021 Symposium, Soesterberg, The Netherlands, 25 Nov 2021',
        year: 2021,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2021-euro-exact-model',
        type: 'Conference Presentation',
        title: 'An Exact Model for the order picker routing problem in warehouses',
        authors: 'Farzaneh Rajabighamchi, Stan Van Hoesel, Christof Defryn',
        venue: 'EURO 2021: 31st European Conference on Operational Research, Athens, Greece (hybrid conference), 11–14 Jul 2021',
        year: 2021,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2021-euro-anticipatory',
        type: 'Conference Presentation',
        title: 'Anticipatory order picking',
        authors: 'Son Tran, Christof Defryn, Rui Jorge Almeida',
        venue: 'EURO 2021: 31st European Conference on Operational Research, Athens, Greece (hybrid conference), 11–14 Jul 2021',
        year: 2021,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2019-euro-dublin',
        type: 'Conference Presentation',
        title: 'Warehouse optimization through anticipatory order picking',
        authors: 'Christof Defryn, Son Tran, Rui Jorge Almeida',
        venue: 'EURO 2019: 30th European Conference on Operational Research, Dublin, Ireland, 23–26 Jun 2019',
        year: 2019,
        tags: ['order-picking'],
        featured: false
    },
    {
        id: 'op-2019-orbel33',
        type: 'Conference Presentation',
        title: 'A selective vehicle routing formulation for the order picking problem',
        authors: 'Christof Defryn',
        venue: 'ORBEL33: 33rd Annual Conference of the Belgian Operations Research Society, Hasselt, Belgium, 7–8 Feb 2019',
        year: 2019,
        tags: ['order-picking'],
        featured: false
    },

    // --- Velocity optimisation on waterways ---
    {
        id: 'velocity-2019-informs',
        type: 'Conference Presentation',
        title: 'Inland waterway efficiency through skipper collaboration and joint speed optimization',
        authors: 'Julian Golak, Veerle Timmermans, Alexander Grigoriev, Christof Defryn',
        venue: '7th INFORMS Transportation Science and Logistics Society Workshop, Vienna, Austria, 2019',
        year: 2019,
        tags: ['velocity-optimisation'],
        featured: false
    },
    {
        id: 'velocity-2019-motor',
        type: 'Conference Presentation',
        title: 'Inland waterway efficiency through skipper collaboration and joint speed optimization',
        authors: 'Alexander Grigoriev, Julian Golak, Veerle Timmermans, Christof Defryn',
        venue: 'MOTOR 2019: Mathematical Optimization Theory and Operations Research, Ekaterinburg, Russia, 2019',
        year: 2019,
        tags: ['velocity-optimisation'],
        featured: false
    },
    {
        id: 'velocity-2019-mapsp',
        type: 'Conference Presentation',
        title: 'Inland waterway efficiency through skipper collaboration and joint speed optimization',
        authors: 'Julian Golak, Veerle Timmermans, Alexander Grigoriev, Christof Defryn',
        venue: 'MAPSP 2019: 14th Workshop on Models and Algorithms for Planning and Scheduling Problems, Renesse, Netherlands, 2019',
        year: 2019,
        tags: ['velocity-optimisation'],
        featured: false
    },

    // --- In-orbit facility location ---
    {
        id: 'iofl-2026-ifors',
        type: 'Conference Presentation',
        title: 'Locating a facility in space: An operations research review',
        authors: 'Pieter Deleye and Christof Defryn',
        venue: 'IFORS Conference, Vienna, Austria, 12–17 Jul 2026',
        year: 2026,
        tags: ['in-orbit-facility-location'],
        featured: false
    },
    {
        id: 'iofl-2026-orbel',
        type: 'Conference Presentation',
        title: 'Locating a facility in space: A review of cover and facility location problems in space-based applications',
        authors: 'Pieter Deleye and Christof Defryn',
        venue: 'ORBEL Conference, KU Leuven, Leuven, Belgium, 5–6 Feb 2026',
        year: 2026,
        tags: ['in-orbit-facility-location'],
        featured: false
    },
    {
        id: 'iofl-2025-orbel-ngb',
        type: 'Conference Presentation',
        title: 'Multi-objective Traveling Salesman Problem for in-orbit spacecraft routing',
        authors: 'Pieter Deleye and Christof Defryn',
        venue: 'Joint ORBEL-NGB Conference, Maastricht University, Maastricht, The Netherlands, 29–31 Jan 2025',
        year: 2025,
        tags: ['in-orbit-facility-location'],
        featured: false
    },
    {
        id: 'iofl-2024-tsl-nantes',
        type: 'Conference Presentation',
        title: "Periodicity in satellite's trajectories as a tool for improved in-orbit servicing scheduling problems",
        authors: 'Pieter Deleye and Christof Defryn',
        venue: 'TSL Workshop on "Optimizing Transportation and Logistics under Uncertainty", Nantes, France, 25–27 Sep 2024',
        year: 2024,
        tags: ['in-orbit-facility-location'],
        featured: false
    },
    {
        id: 'iofl-2024-orbel38',
        type: 'Conference Presentation',
        title: 'Advancements in Space Logistics: The Moving Target TSP Paradigm',
        authors: 'Pieter Deleye and Christof Defryn',
        venue: 'ORBEL38: 38th Annual Conference of the Belgian Operations Research Society, University of Antwerp, Antwerp, Belgium, 8–9 Feb 2024',
        year: 2024,
        tags: ['in-orbit-facility-location'],
        featured: false
    },

    // --- Horizontal logistics collaboration ---
    {
        id: 'horizontal-2017-orbel31',
        type: 'Conference Presentation',
        title: 'Horizontal logistic cooperations. Integration of individual partner objectives in multi-partner logistic optimisation models',
        authors: 'Christof Defryn, Kenneth Sörensen, Wout Dullaert',
        venue: 'ORBEL31: 31st Annual Conference of the Belgian Operations Research Society, Brussels, Belgium, 2–3 Feb 2017',
        year: 2017,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2016-verolog',
        type: 'Conference Presentation',
        title: 'Horizontal co-operation in a clustered distribution environment. Exchanging zones for increased efficiency',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'VEROLOG2016: Annual workshop of the EURO working group on Vehicle Routing and Logistics optimization, Nantes, France, 6–8 Jun 2016',
        year: 2016,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2016-orbel30',
        type: 'Conference Presentation',
        title: 'Horizontal co-operation in a clustered distribution environment. Exchanging zones for increased efficiency',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'ORBEL30: 30th Annual Conference of the Belgian Operations Research Society, Louvain-La-Neuve, Belgium, 28–29 Jan 2016',
        year: 2016,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2015-euro-glasgow',
        type: 'Conference Presentation',
        title: 'A multi-objective collaborative approach for the Travelling Salesman Problem with Time Windows',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'EURO2015: European Conference on Operational Research, Glasgow, UK, 12–15 Jul 2015',
        year: 2015,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2015-verolog-vienna',
        type: 'Conference Presentation',
        title: 'A multi-objective collaborative approach for the Vehicle Routing Problem with Time Windows',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'VeRoLoG2015: EURO Working Group on Vehicle Routing and Logistics Optimization, Vienna, Austria, 8–10 Jun 2015',
        year: 2015,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2014-alio-euro',
        type: 'Conference Presentation',
        title: 'The Selective Vehicle Routing Problem in a collaborative environment',
        authors: 'Christof Defryn, Kenneth Sörensen, Trijntje Cornelissens',
        venue: 'ALIO-EURO conference, Montevideo, Uruguay, 8–10 Dec 2014',
        year: 2014,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2014-euro-ifors',
        type: 'Conference Presentation',
        title: 'The clustered vehicle routing problem: a two-level variable neighbourhood search',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'EURO/IFORS conference, Barcelona, Spain, 13–18 Jul 2014',
        year: 2014,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2014-eume',
        type: 'Conference Presentation',
        title: 'The clustered vehicle routing problem: a variable neighbourhood metaheuristic',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: '15th EU/ME workshop, Istanbul, Turkey, 24–25 Mar 2014',
        year: 2014,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2014-orbel28',
        type: 'Conference Presentation',
        title: 'The collaborative selective vehicle routing problem: vehicle routing in a collaborative environment',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'ORBEL28: 28th Annual Conference of the Belgian Operations Research Society, Mons, Belgium, 30–31 Jan 2014',
        year: 2014,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2013-vrp-angers',
        type: 'Conference Presentation',
        title: 'The collaborative team orienteering problem (poster)',
        authors: 'Christof Defryn and Kenneth Sörensen',
        venue: 'VRP2013: European spring school on vehicle routing, Angers, France, 20–24 May 2013',
        year: 2013,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    },
    {
        id: 'horizontal-2013-orbel27',
        type: 'Conference Presentation',
        title: 'The effect of customer characteristics on coalition gains in collaborative vehicle routing',
        authors: 'Christof Defryn, Christine Vanovermeire, Kenneth Sörensen',
        venue: 'ORBEL27: 27th Annual Conference of the Belgian Operations Research Society, Kortrijk, Belgium, 7–8 Feb 2013',
        year: 2013,
        tags: ['horizontal-logistics-collaboration'],
        featured: false
    }
];
