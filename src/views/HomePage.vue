<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    to: '/atlas',
    href: null,
    title: 'Hackerspace Atlas',
    description: 'An interactive map of hackerspaces around the world. Find active spaces, discover closed ones, and explore the global maker community.',
    type: 'Map',
    meta: 'Global directory',
    linkText: 'Explore'
  },
  {
    to: '/zine',
    href: null,
    title: 'The Hackerspace Game',
    description: 'A printable zine covering archetypes, trust dynamics, and the lifecycle of community spaces. Based on research from Noisebridge, Hackerspace Gent, and a decade of watching spaces rise and fall.',
    type: 'Zine',
    meta: '12 pages',
    linkText: 'Read'
  },
  {
    to: null,
    href: 'https://hackerspacegame.netlify.app/',
    title: 'Interactive Learner',
    description: "Nicky Case-style simulations for hackerspace dynamics. Tweak member ratios, watch trust networks form and collapse, run governance scenarios. Learn by breaking things.",
    type: 'Web app',
    meta: '8 chapters',
    linkText: 'Explore',
    external: true
  },
  {
    to: '/governance',
    href: null,
    title: 'Governance in a Box',
    description: "Templates and frameworks for running a hackerspace. Do-ocracy guidelines, conflict resolution protocols, burnout prevention, succession planning. Fork it, adapt it, make it yours.",
    type: 'Resource kit',
    meta: 'Docs + templates',
    linkText: 'Download'
  },
  {
    to: '/space-after-dark',
    href: null,
    title: 'The Space After Dark',
    description: "An isometric exploration game set in a hackerspace at night. Talk to the regulars—each one an archetype you'll recognize. The founder who can't let go. The newcomer afraid to touch anything. The one who's been here since Thursday. Your choices shape trust.",
    type: 'Game',
    meta: '6 characters',
    linkText: 'Play'
  },
  {
    to: '/proposal-duel',
    href: null,
    title: 'Proposal Duel',
    description: 'Fallout-style dialogue combat for hackerspace governance. You have a proposal. Someone opposes it. Build momentum, pick your arguments, survive the meeting.',
    type: 'Game',
    meta: '5 proposals · 5 opponents',
    linkText: 'Play'
  }
]
</script>

<template>
  <div class="container">
    <header>
      <p class="site-title">hackerspace.sh</p>
      <h1 class="intro">
        Tools for understanding how <em>hackerspaces</em> actually work—the dynamics, the drama, the governance patterns that make or break community workshops.
      </h1>
    </header>

    <main>
      <p class="section-label">Projects</p>

      <div class="projects">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>

      <div class="author-callout">
        <div class="author-info">
          <p class="author-name">Moheeb Zara</p>
          <p class="author-desc">Hardware hacker, new media artist, maker community advocate</p>
        </div>
        <a href="https://hack.build" class="author-link">
          hack.build
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 12L12 4M12 4H6M12 4v6"/>
          </svg>
        </a>
      </div>
    </main>

    <footer>
      <p class="footer-left">
        A project from <a href="https://heatsynclabs.org">HeatSync Labs</a>, Arizona's original hackerspace
      </p>
      <nav class="footer-links">
        <a href="https://github.com/virgilvox">GitHub</a>
        <a href="https://hackster.io/virgilvox">Hackster</a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px 120px;
}

/* Header */
header {
    margin-bottom: 80px;
}

.site-title {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin-bottom: 48px;
    color: var(--text-dim);
}

.intro {
    font-family: 'Newsreader', serif;
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.02em;
    max-width: 600px;
}

.intro em {
    font-style: italic;
    color: var(--highlight);
}

/* Section label */
.section-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 24px;
}

/* Projects */
.projects {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
}

/* Author callout */
.author-callout {
    margin-top: 80px;
    padding: 32px;
    border: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
}

.author-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.author-name {
    font-size: 1rem;
    font-weight: 600;
}

.author-desc {
    font-size: 0.875rem;
    color: var(--text-dim);
}

.author-link {
    font-size: 0.875rem;
    font-weight: 500;
    padding: 12px 24px;
    border: 1px solid var(--border);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.author-link:hover {
    background: var(--highlight);
    color: var(--bg);
    border-color: var(--highlight);
}

.author-link svg {
    width: 14px;
    height: 14px;
}

/* Footer */
footer {
    margin-top: 80px;
    padding-top: 40px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 24px;
}

.footer-left {
    font-size: 0.8125rem;
    color: var(--text-dim);
}

.footer-left a {
    color: var(--text);
    transition: color 0.2s;
}

.footer-left a:hover {
    color: var(--highlight);
}

.footer-links {
    display: flex;
    gap: 24px;
    font-size: 0.8125rem;
}

.footer-links a {
    color: var(--text-dim);
    transition: color 0.2s;
}

.footer-links a:hover {
    color: var(--text);
}

/* Mobile */
@media (max-width: 600px) {
    .container {
        padding: 48px 20px 80px;
    }

    header {
        margin-bottom: 60px;
    }

    .author-callout {
        flex-direction: column;
        align-items: flex-start;
    }

    footer {
        flex-direction: column;
        gap: 16px;
    }
}
</style>
