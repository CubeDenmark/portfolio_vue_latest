<template>
  <div>
    <Button label="Click Me" @click="handleClick" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';

const butt = handleClick(() => alert('Button clicked!'))

</script>

<style>
/* Optional: Customize button styles */
</style>
