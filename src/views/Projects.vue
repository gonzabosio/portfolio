<script setup>
import { useI18n } from 'vue-i18n';
import CardsProjects from '../components/CardsProjects.vue';

const { t } = useI18n()
</script>

<template>
    <div class="container">
        <CardsProjects />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>