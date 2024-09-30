<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
    <div id="container">
        <h1>{{ t('projects') }}</h1>
    </div>
</template>

<style scoped>
#container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>