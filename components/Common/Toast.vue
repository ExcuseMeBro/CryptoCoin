<template>
  <div class="relative flex-center-between bg-transparent">
    <div class="flex-y-center px-4">
      <img :src="images[type]" alt="icon" class="w-6 h-6" />
      <div class="ml-2">
        <h2 class="text-white font-medium text-xs !leading-130">
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
}
defineProps<Props>()
const images = computed(() => {
  return {
    success: '/svg/toast/success.svg',
    error: '/svg/toast/error.svg',
    warning: '/svg/toast/warning.svg',
  }
})
</script>
<style>
.toast {
  box-shadow: 0 8px 20px rgba(18, 28, 37, 0.16);
}
</style>
