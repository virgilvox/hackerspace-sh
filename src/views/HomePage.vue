<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import AtlasLogo from '../components/AtlasLogo.vue'
import SpaceIcon from '../components/icons/SpaceIcon.vue'
import TraceIcon from '../components/icons/TraceIcon.vue'
import CubeIcon from '../components/icons/CubeIcon.vue'
import KeyIcon from '../components/icons/KeyIcon.vue'
import GridIcon from '../components/icons/GridIcon.vue'
import PromptIcon from '../components/icons/PromptIcon.vue'
import WordmarkLogo from '../components/icons/WordmarkLogo.vue'
</script>

<template>
  <header>
    <div class="container">
      <div class="header-inner">
        <router-link to="/" class="site-title">
          <WordmarkLogo />
        </router-link>
        <nav class="header-links">
          <a href="https://github.com/virgilvox">GitHub</a>
          <a href="https://hackster.io/virgilvox">Hackster</a>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">How <em>hackerspaces</em> actually work</h1>
          <PromptIcon class="hero-prompt" />
        </div>
        <p class="hero-sub">The dynamics, the drama, the governance patterns that make or break community workshops. Research turned into tools you can use.</p>
      </section>

      <section>
        <div class="section-header">
          <span class="section-label">Projects</span>
          <span class="section-count">06 tools</span>
        </div>

        <div class="projects">
          <ProjectCard
            to="/atlas"
            num="01"
            title="Hackerspace Atlas"
            description="An interactive map of hackerspaces around the world. Find active spaces, discover closed ones, and explore the global maker community network."
            type="Map · Global"
            :featured="true"
          >
            <template #visual>
              <AtlasLogo />
            </template>
          </ProjectCard>

          <ProjectCard
            to="/space-after-dark"
            num="02"
            title="The Space After Dark"
            description="An isometric exploration game set in a hackerspace at night. Talk to the regulars—each one an archetype you'll recognize."
            type="Game · 6 characters"
          >
            <template #visual>
              <CubeIcon />
            </template>
          </ProjectCard>

          <ProjectCard
            to="/proposal-duel"
            num="03"
            title="Proposal Duel"
            description="Fallout-style dialogue combat for hackerspace governance. You have a proposal. Someone opposes it. Survive the meeting."
            type="Game · 5 opponents"
          >
            <template #visual>
              <TraceIcon />
            </template>
          </ProjectCard>

          <ProjectCard
            to="/zine"
            num="04"
            title="The Hackerspace Game"
            description="A printable zine covering archetypes, trust dynamics, and the lifecycle of community spaces. Based on research from HeatSync Labs, Noisebridge, Hackerspace Gent, and years of watching spaces rise and fall."
            type="Zine · 12 pages"
          >
            <template #visual>
              <SpaceIcon />
            </template>
          </ProjectCard>

          <ProjectCard
            href="https://hackerspacegame.netlify.app/"
            num="05"
            title="Interactive Learner"
            description="Nicky Case-style simulations for hackerspace dynamics. Tweak member ratios, watch trust networks form and collapse, run governance scenarios."
            type="Web App · 8 chapters"
            :external="true"
          >
            <template #visual>
              <GridIcon />
            </template>
          </ProjectCard>

          <ProjectCard
            to="/governance"
            num="06"
            title="Governance in a Box"
            description="Templates and frameworks for running a hackerspace. Do-ocracy guidelines, conflict resolution, burnout prevention, succession planning. Fork it and make it yours."
            type="Resource Kit"
            :featured="true"
          >
            <template #visual>
              <KeyIcon />
            </template>
          </ProjectCard>
        </div>
      </section>

      <section class="author">
        <div class="author-content">
          <span class="author-label">Made by</span>
          <h2 class="author-name">Moheeb Zara</h2>
          <p class="author-bio">Hardware hacker, new media artist, maker community advocate</p>
        </div>
        <a href="https://hack.build" class="author-link">
          hack.build
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 12L12 4M12 4H6M12 4v6"/>
          </svg>
        </a>
      </section>
    </div>
  </main>

  <footer>
    <div class="container footer-inner">
      <p>A project from <a href="https://heatsynclabs.org">HeatSync Labs</a></p>
      <nav class="footer-links">
        <a href="https://github.com/virgilvox">Source</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 32px;
}

/* Header */
header {
    padding: 48px 0;
    border-bottom: 1px solid var(--border);
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site-title {
    display: flex;
    align-items: center;
}

.site-title :deep(svg) {
    height: 24px;
    width: auto;
}

.header-links {
    display: flex;
    gap: 32px;
    font-size: 0.8125rem;
    color: var(--text-dim);
}

.header-links a:hover {
    color: var(--text);
}

/* Hero */
.hero {
    padding: 32px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
}

.hero-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.hero-title {
    font-family: 'Libre Baskerville', serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
}

.hero-title em {
    font-style: italic;
    color: var(--accent);
}

.hero-prompt {
    width: 32px;
    height: 32px;
    color: var(--text);
}

.hero-sub {
    font-size: 0.9375rem;
    color: var(--text-dim);
    line-height: 1.7;
    max-width: 380px;
}

/* Section header */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 48px 0 40px;
    border-top: 1px solid var(--border);
}

.section-label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
}

.section-count {
    font-size: 0.75rem;
    color: var(--text-muted);
}

/* Projects grid */
.projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
}

/* Author section */
.author {
    padding: 80px 0;
    border-top: 1px solid var(--border);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: center;
}

.author-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.author-label {
    font-size: 0.6875rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.author-name {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.5rem;
    font-weight: 400;
}

.author-bio {
    font-size: 0.8125rem;
    color: var(--text-dim);
}

.author-link {
    font-size: 0.8125rem;
    padding: 14px 28px;
    border: 1px solid var(--border);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.author-link:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--bg);
}

.author-link svg {
    width: 12px;
    height: 12px;
}

/* Footer */
footer {
    padding: 40px 0;
    border-top: 1px solid var(--border);
    font-size: 0.75rem;
    color: var(--text-muted);
}

.footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer a {
    color: var(--text-dim);
    transition: color 0.2s;
}

footer a:hover {
    color: var(--text);
}

.footer-links {
    display: flex;
    gap: 24px;
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }

    .hero {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 24px 0;
    }

    .hero-sub {
        max-width: 100%;
    }

    .projects {
        grid-template-columns: 1fr;
    }

    .author {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .footer-inner {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
}
</style>
