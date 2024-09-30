<script setup>
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n()
const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
    <button @click="toggleLanguage">{{ locale === 'en' ? 'ESP' : 'ENG' }}</button>
</template>

<style scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 8px;
    height: fit-content;
    margin: 8px;
    border-radius: 10px;
    font-size: 1.2em;
}
</style>