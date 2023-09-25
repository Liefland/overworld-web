<script setup>
defineProps(['url', 'name', 'attribution']);
</script>

<template>
  <p>
    <a :href="url" rel="noopener" target="_blank">{{ name }}</a> &mdash; {{ attribution }}
  </p>
</template>
