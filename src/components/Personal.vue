<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
    <div>
        <h1>Gonzalo Bosio</h1>
        <h2>{{ '</> ' + t('backend') }}</h2>
        <p>{{ t('interests') }}</p>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 18px;
    margin-left: 18px;
    margin-right: 18px;
}

h1 {
    font-size: 48px;
    margin: 0;
}

h2 {
    font-size: 30px;
}

p {
    font-size: 16px;
    margin: 0;
}
</style>