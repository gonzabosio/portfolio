<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
import { RouterLink, useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
const currentRoute = ref('aboutme');

watch(
    () => route.name,
    (newName) => {
        if (newName === 'aboutme') {
            currentRoute.value = 'aboutme';
        } else if (newName === 'projects') {
            currentRoute.value = 'projects';
        }
    }
);
import ToggleLang from '../components/ToggleLang.vue';
import ToggleTheme from '../components/ToggleTheme.vue';
import { ref } from 'vue';
</script>

<template>
    <div id="nav-bar">
        <nav id="nav-links">
            <RouterLink to="/" :class="[currentRoute === 'aboutme' ? 'nav-item-selected' : 'nav-item']">
                {{ t('me') }}
            </RouterLink>
            <RouterLink to="/projects" :class="[currentRoute === 'projects' ? 'nav-item-selected' : 'nav-item']">
                {{ t('projects') }}
            </RouterLink>
        </nav>
        <div id="top-end">
            <div id="config">
                <ToggleLang />
                <ToggleTheme />
            </div>
        </div>
    </div>
</template>

<style scoped>
#nav-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    position: relative;
}

#nav-links {
    display: flex;
    justify-content: center;
    width: 270px;
    border: 4px solid var(--card-color);
    border-radius: 60px;

    .nav-item {
        color: var(--text-color);
        margin: 6px;
        padding: 8px;
        width: 100px;
        font-size: large;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        border: 4px solid var(--card-color);
        border-radius: 60px;
        transition: 0.5s;

        &:hover {
            border-color: var(--text-color);
        }
    }

    .nav-item-selected {
        color: var(--text-color);
        background-color: var(--navbar-bg-color);
        margin: 6px;
        padding: 8px;
        width: 100px;
        font-size: large;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        border: 4px solid var(--card-color);
        border-radius: 60px;
        transition: 0.5s;
    }
}

#top-end {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
}

#config {
    display: flex;
    align-items: center;
    justify-content: end;
}

@media (max-width: 650px) {
    #nav-links {
        align-items: center;
        flex-direction: column;
        width: 140px;
        border-radius: 30px;
    }

    #top-end {
        position: static;
        /* Remove absolute positioning */
        display: flex;
        justify-content: center;
        width: 100%;
    }
}

@media (max-width: 520px) {
    #nav-bar {
        justify-content: space-between;
    }
}

@media (max-width: 445px) {
    #nav-bar {
        justify-content: space-between;
    }

    #config {
        display: block;
    }
}
</style>