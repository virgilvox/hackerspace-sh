<script setup>
defineProps({
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  num: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  external: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <router-link v-if="to" :to="to" class="project" :class="{ featured, 'has-icon': $slots.visual && !featured }">
    <div v-if="$slots.visual && !featured" class="project-icon">
      <slot name="visual" />
    </div>
    <div class="project-content">
      <span class="project-num">{{ num }}</span>
      <h2 class="project-title">{{ title }}</h2>
      <p class="project-desc">{{ description }}</p>
      <div class="project-footer">
        <span class="project-type">{{ type }}</span>
        <span class="project-arrow">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </span>
      </div>
    </div>
    <div v-if="featured && $slots.visual" class="project-visual">
      <slot name="visual" />
    </div>
  </router-link>
  <a v-else :href="href" class="project" :class="{ featured, 'has-icon': $slots.visual && !featured }" target="_blank" rel="noopener">
    <div v-if="$slots.visual && !featured" class="project-icon">
      <slot name="visual" />
    </div>
    <div class="project-content">
      <span class="project-num">{{ num }}</span>
      <h2 class="project-title">{{ title }}</h2>
      <p class="project-desc">{{ description }}</p>
      <div class="project-footer">
        <span class="project-type">{{ type }}</span>
        <span class="project-arrow">
          <svg v-if="external" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 12L12 4M12 4H6M12 4v6"/>
          </svg>
          <svg v-else viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </span>
      </div>
    </div>
    <div v-if="featured && $slots.visual" class="project-visual">
      <slot name="visual" />
    </div>
  </a>
</template>

<style scoped>
.project {
    background: var(--bg);
    padding: 40px;
    display: flex;
    flex-direction: column;
    min-height: 280px;
    position: relative;
    transition: background 0.3s ease;
}

.project:hover {
    background: var(--surface);
}

.project-content {
    display: flex;
    flex-direction: column;
    flex: 1;
}

/* Icon for non-featured cards */
.project-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    color: var(--text);
    transition: all 0.3s ease;
}

.project-icon :deep(svg) {
    width: 100%;
    height: 100%;
}

.project.has-icon .project-num {
    padding-right: 60px;
}

.project-num {
    font-size: 0.6875rem;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    margin-bottom: 24px;
}

.project-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.625rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    margin-bottom: 12px;
    transition: color 0.3s ease;
}

.project:hover .project-title {
    color: var(--accent);
}

.project-desc {
    font-size: 0.8125rem;
    color: var(--text-dim);
    line-height: 1.65;
    flex-grow: 1;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
}

.project-type {
    font-size: 0.6875rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.project-arrow {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.project-arrow svg {
    width: 12px;
    height: 12px;
    color: var(--text-dim);
    transition: all 0.3s ease;
}

.project:hover .project-arrow {
    background: var(--accent);
    border-color: var(--accent);
}

.project:hover .project-arrow svg {
    color: var(--bg);
    transform: translateX(2px);
}

/* Featured project - full width */
.project.featured {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    min-height: auto;
    padding: 48px;
}

.project.featured .project-content {
    flex: 1;
}

.project.featured .project-visual {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--text);
}

.project.featured .project-visual :deep(svg) {
    width: 100%;
    height: 100%;
}

/* Mobile */
@media (max-width: 768px) {
    .project {
        padding: 32px 24px;
        min-height: auto;
    }

    .project.featured {
        flex-direction: column;
        gap: 32px;
    }

    .project.featured .project-visual {
        width: 140px;
        height: 140px;
        margin: 0 auto;
    }
}
</style>
