<script setup>
import { useRoute } from 'vue-router'

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
        hackerspace.sh
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
  height: 40px;
  min-height: 40px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 0.75rem;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-dim);
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--highlight);
}

.back-link svg {
  width: 14px;
  height: 14px;
}

.title {
  color: var(--text-dim);
}

.content-frame {
  flex: 1;
  width: 100%;
  border: none;
  background: #fff;
}
</style>
