<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
    <div>
        <h2>{{ t('education') }}</h2>
        <p>{{ t('degree') }}</p>
        <p>UTN(Universidad Tecnológica Nacional)</p>
        <p>{{ t('graduated') }} Dec 2024</p>
    </div>
</template>

<style scoped>
div {
    margin-left: 18px;
    margin-right: 18px;
}

h2 {
    font-size: 26px;
}

p {
    font-size: 16px;
}
</style>