/*
 * Projects data — single source for every project card on the site.
 * research.html lists projects without a domain under "Other projects";
 * each research/<domain>.html page lists the projects tagged with it.
 *
 * Each entry:
 *   - url:        project page, relative to the site root
 *   - status:     "ongoing" | "completed"
 *   - years, title, description
 *   - tags:       keyword chips shown on the card
 *   - outputTag:  matches the project's tag in publications-data.js
 *                 (used for the output counts on the card)
 *   - domains:    research domain slugs this project belongs to:
 *                 "or4space" | "warehousing" | "collaboration" | "circular" | "routing"
 *                 — [] if it fits none
 * Order here is the display order.
 */
const PROJECTS = [
    {
        url: 'projects/2026_proactive-warehouses.html',
        status: 'ongoing',
        years: '2026 — 2030',
        title: 'Proactive decision making in warehouses',
        description: 'Developing mathematical models and optimisation algorithms for dynamic warehouse systems — proactive robot recharging and online SKU repositioning — to improve efficiency across picking, packing, and storage operations.',
        tags: ['Warehousing', 'Order Picking', 'Robotics', 'Demand Forecasting'],
        outputTag: 'proactive-warehouses',
        domains: ['warehousing']
    },
    {
        url: 'projects/2025_orbital.html',
        status: 'ongoing',
        years: '2025 — 2029',
        title: 'ORBITAL — OR-based in-orbit service centre deployment and logistics',
        description: 'Designing methods to locate, size, and stock an in-orbit service centre for satellite maintenance, and to schedule the dispatch of individual service missions.',
        tags: ['Space Logistics', 'Facility Location', 'On-Orbit Services'],
        outputTag: 'orbital',
        domains: ['or4space']
    },
    {
        url: 'projects/2024_circus.html',
        status: 'ongoing',
        years: '2024 — 2028',
        title: 'CIRCUS — Towards a generic optimisation model for circular supply chains',
        description: 'Developing generic circular supply chain optimisation models — simple, broadly applicable, and aligned with a multi-stakeholder reality — to make circular supply chains cost-effective and environmentally friendly.',
        tags: ['Circular Economy', 'Supply Chain Design'],
        outputTag: 'circus',
        domains: ['circular']
    },
    {
        url: 'projects/2023_in-orbit-facility-location.html',
        status: 'ongoing',
        years: '2023 — 2029',
        title: 'In-orbit facility location',
        description: 'Establishing a network of in-orbit facilities to service a growing population of satellites, adapting classical facility location and covering location models to space-based operations.',
        tags: ['Space Logistics', 'Facility Location'],
        outputTag: 'in-orbit-facility-location',
        domains: ['or4space']
    },
    {
        url: 'projects/2020_collaborative-location-inventory-models.html',
        status: 'completed',
        years: '2020 — 2021',
        title: 'Collaborative location-inventory models',
        description: 'Balancing partner preferences for logistics cost and carbon footprint in collaborative facility location and inventory decisions.',
        tags: ['Horizontal Cooperation', 'Facility Location', 'Inventory Management'],
        outputTag: 'collaborative-location-inventory',
        domains: ['collaboration']
    },
    {
        url: 'projects/2018_order-picking.html',
        status: 'completed',
        years: '2018 — 2024',
        title: 'Order picking',
        description: 'Optimising order picking operations through order batching, picker routing, SKU repositioning, and demand-driven forecasting, combining exact and heuristic algorithms for warehouse efficiency.',
        tags: ['Order Picking', 'Vehicle Routing', 'Metaheuristics'],
        outputTag: 'order-picking',
        domains: ['warehousing', 'routing']
    },
    {
        url: 'projects/2017_velocity-optimisation.html',
        status: 'completed',
        years: '2017 — 2021',
        title: 'Velocity optimisation on waterways',
        description: 'Joint speed optimisation and lock scheduling for inland waterway transport, reducing fuel consumption through skipper collaboration.',
        tags: ['Inland Waterways', 'Speed Optimisation', 'Scheduling'],
        outputTag: 'velocity-optimisation',
        domains: ['collaboration']
    },
    {
        url: 'projects/2017_meter-reading-problem.html',
        status: 'completed',
        years: '2017',
        title: 'The meter reading problem',
        description: 'Data-driven optimisation and statistical modelling to improve meter reading routes for utility companies, combining vehicle routing with simulation-based evaluation.',
        tags: ['Statistics', 'Vehicle Routing', 'Simulation'],
        outputTag: 'meter-reading-problem',
        domains: ['routing']
    },
    {
        url: 'projects/2012_horizontal-logistics-collaboration.html',
        status: 'completed',
        years: '2012 — 2017',
        title: 'Horizontal logistics collaboration',
        description: 'Optimisation models and gain sharing mechanisms for partners cooperating in logistics networks, integrating individual partner objectives into collaborative vehicle routing models.',
        tags: ['Horizontal Cooperation', 'Vehicle Routing', 'Gain Sharing'],
        outputTag: 'horizontal-logistics-collaboration',
        domains: ['collaboration', 'routing']
    }
];
