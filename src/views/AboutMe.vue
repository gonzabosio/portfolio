<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
    <div id="container">
        <div class="card">
            <h1>{{ t('title') }}</h1>
            <button>{{ t('button') }}</button>
        </div>
    </div>
</template>

<style scoped>
#container {
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding: 16px;
    width: 180px;
    border-radius: 10px;
}

@media (max-width: 275px) {
    .card {
        width: 200px;
    }

    button {
        width: 120px;
    }
}
</style>