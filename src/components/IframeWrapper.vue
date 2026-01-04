<script setup>
import { useRoute } from 'vue-router'
import WordmarkLogo from './icons/WordmarkLogo.vue'

const route = useRoute()
const url = route.meta.url
const title = route.meta.title
</script>

<template>
  <div class="wrapper">
    <div class="top-bar">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M10 4L6 8l4 4"/>
        </svg>
        <WordmarkLogo />
      </router-link>
      <span class="title">{{ title }}</span>
    </div>
    <iframe :src="url" class="content-frame"></iframe>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.top-bar {
  height: 48px;
  min-height: 48px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  font-size: 0.8125rem;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-dim);
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--text);
}

.back-link svg:first-child {
  width: 14px;
  height: 14px;
}

.back-link :deep(.wordmark) {
  height: 18px;
  width: auto;
}

.title {
  color: var(--text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.content-frame {
  flex: 1;
  width: 100%;
  border: none;
  background: #fff;
}
</style>
