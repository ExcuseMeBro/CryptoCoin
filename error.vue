<template>
  <div>
    404
  </div>
</template>
<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    message: string
  }
}
defineProps<Props>()
</script>
