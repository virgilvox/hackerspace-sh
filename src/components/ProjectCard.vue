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
  meta: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  external: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <router-link v-if="to" :to="to" class="project">
    <div class="project-content">
      <h2 class="project-title">{{ title }}</h2>
      <p class="project-desc">{{ description }}</p>
      <div class="project-meta">
        <span>{{ type }}</span>
        <span>{{ meta }}</span>
      </div>
    </div>
    <span class="project-link">
      {{ linkText }}
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 8h10M9 4l4 4-4 4"/>
      </svg>
    </span>
  </router-link>
  <a v-else :href="href" class="project" target="_blank" rel="noopener">
    <div class="project-content">
      <h2 class="project-title">{{ title }}</h2>
      <p class="project-desc">{{ description }}</p>
      <div class="project-meta">
        <span>{{ type }}</span>
        <span>{{ meta }}</span>
      </div>
    </div>
    <span class="project-link">
      {{ linkText }}
      <svg v-if="external" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 12L12 4M12 4H6M12 4v6"/>
      </svg>
      <svg v-else viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 8h10M9 4l4 4-4 4"/>
      </svg>
    </span>
  </a>
</template>

<style scoped>
.project {
    background: var(--bg);
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    align-items: start;
    transition: background 0.2s ease;
}

.project:hover {
    background: var(--surface);
}

.project-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.project-title {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
}

.project-desc {
    font-size: 0.875rem;
    color: var(--text-dim);
    max-width: 480px;
}

.project-meta {
    font-size: 0.75rem;
    color: var(--text-dim);
    margin-top: 8px;
    display: flex;
    gap: 16px;
}

.project-meta span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.project-link {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-dim);
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s ease;
    white-space: nowrap;
}

.project:hover .project-link {
    color: var(--highlight);
}

.project-link svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
}

.project:hover .project-link svg {
    transform: translateX(4px);
}

/* Mobile */
@media (max-width: 600px) {
    .project {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 24px 20px;
    }

    .project-link {
        justify-content: flex-start;
    }
}
</style>
