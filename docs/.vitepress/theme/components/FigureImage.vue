<script setup lang="ts">
import { ref, computed } from "vue";
import { withBase } from "vitepress";

const props = defineProps<{
  src: string;
  captionZh?: string;
  captionEn?: string;
  alt?: string;
}>();

const resolvedSrc = computed(() => {
  const p = props.src.startsWith("/") ? props.src : "/" + props.src;
  return withBase(p);
});

const fileName = computed(() => props.src.split("/").pop() ?? props.src);

const loaded = ref(false);
const failed = ref(false);
const zoomed = ref(false);

function onLoad() {
  loaded.value = true;
}
function onError() {
  failed.value = true;
}
function openZoom() {
  if (loaded.value && !failed.value) zoomed.value = true;
}
function closeZoom() {
  zoomed.value = false;
}
</script>

<template>
  <figure class="fig-img">
    <!-- Real image (hidden until loaded; swapped for placeholder on error) -->
    <div v-if="!failed" class="fig-frame" :class="{ clickable: loaded }" @click="openZoom">
      <img
        :src="resolvedSrc"
        :alt="alt || captionEn || captionZh || fileName"
        :class="{ invisible: !loaded }"
        loading="lazy"
        @load="onLoad"
        @error="onError"
      />
      <span v-if="loaded" class="fig-zoom-hint">🔍 點擊放大 / Click to enlarge</span>
    </div>

    <!-- Missing-image placeholder -->
    <div v-else class="fig-placeholder">
      <span class="fig-placeholder-icon">🖼️</span>
      <span class="fig-placeholder-title">圖片待上傳 / Image placeholder</span>
      <span class="fig-placeholder-hint">
        把圖片命名為 <code>{{ fileName }}</code> 放到 <code>docs/public/images/guide/</code> 即可顯示<br />
        Save an image as <code>{{ fileName }}</code> in <code>docs/public/images/guide/</code> to display it here
      </span>
    </div>

    <figcaption v-if="captionZh || captionEn" class="fig-caption">
      <span v-if="captionZh" class="fig-caption-zh">{{ captionZh }}</span>
      <span v-if="captionEn" class="fig-caption-en">{{ captionEn }}</span>
    </figcaption>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="zoomed" class="fig-lightbox" @click="closeZoom">
        <img :src="resolvedSrc" :alt="alt || captionEn || captionZh || fileName" />
        <span class="fig-lightbox-close">✕ 關閉 / Close</span>
      </div>
    </Teleport>
  </figure>
</template>

<style scoped>
.fig-img {
  margin: 1.5rem auto;
  max-width: 640px;
  text-align: center;
}
.fig-frame {
  position: relative;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
}
.fig-frame.clickable {
  cursor: zoom-in;
}
.fig-frame.clickable:hover {
  box-shadow: 0 4px 20px rgba(35, 157, 173, 0.25);
  transform: translateY(-1px);
}
.fig-frame img {
  display: block;
  width: 100%;
  height: auto;
  min-height: 80px;
}
.fig-frame img.invisible {
  visibility: hidden;
}
.fig-zoom-hint {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
.fig-frame:hover .fig-zoom-hint {
  opacity: 1;
}
.fig-placeholder {
  border: 2px dashed var(--vp-c-brand-1);
  border-radius: 10px;
  background: var(--vp-c-brand-soft);
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.fig-placeholder-icon {
  font-size: 1.8rem;
}
.fig-placeholder-title {
  font-weight: 700;
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
}
.fig-placeholder-hint {
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.fig-placeholder-hint code {
  font-size: 0.75rem;
}
.fig-caption {
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.fig-caption-zh {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.fig-caption-en {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.fig-lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  cursor: zoom-out;
  padding: 2rem;
}
.fig-lightbox img {
  max-width: 92vw;
  max-height: 84vh;
  border-radius: 8px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
}
.fig-lightbox-close {
  color: #fff;
  font-size: 0.85rem;
  opacity: 0.8;
}
</style>
