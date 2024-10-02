<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

import Website from './Links/Website.vue'
import GitHubRepo from './Links/GitHubRepo.vue';
</script>

<template>
    <div class="container">
        <div class="row-container">
            <div class="col row-1-col-1">
                <h2>ChatBox</h2>
                <p>{{ t('chatbox.a') }}
                </p>
                <p>{{ t('chatbox.b') }}</p>
                <p>{{ t('chatbox.c') }}</p>
                <div class="links">
                    <a href="https://chatbox-front.onrender.com" target="_blank">
                        <Website />
                    </a>
                    <a href="https://github.com/gonzabosio/chatbox" target="_blank">
                        <GitHubRepo />
                    </a>
                </div>
            </div>
            <div class="col row-1-col-2">
                <h2>Project 2</h2>
                <div class="links">
                    <a href="" target="_blank">
                        <GitHubRepo />
                    </a>
                </div>
            </div>
        </div>
        <div class="row-container">
            <div class="col row-2-col-1">
                <h2>Gobo-Patcher</h2>
                <p>{{ t('patcher.a') }}</p>
                <p>{{ t('patcher.b') }}</p>
                <div class="links">
                    <a href="https://github.com/gonzabosio/gobo-patcher" target="_blank">
                        <GitHubRepo />
                    </a>
                </div>
            </div>
            <div class="col row-2-col-2">
                <h2>Project 4</h2>
                <div class="links">
                    <a href="" target="_blank">
                        <GitHubRepo />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 90em;
    height: fit-content;
    padding: 2em;
    border-radius: 1em;
    gap: 1em;
    flex-direction: column;
}

.row-container {
    display: flex;
    flex: 1;
    width: 100%;
    border-radius: 1em;
    gap: 1em;
}

.col {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1em;
    height: 300px;
    border-radius: 1em;
    background-color: var(--card-color);
    transition: 0.3s;
    border: 4px solid transparent;

    &:hover {
        border: 4px solid #4f7780;
    }
}

h2 {
    margin: 0;
    font-size: 26px;
}

p {
    font-size: 14px;
    margin-top: 4px;
}

/* .highlight {
    font-size: 16px;
    font-weight: 600;
} */

.links {
    display: flex;
    justify-content: end;
    margin-top: auto;

    a {
        margin-left: 4px;
        transition: 0.3s;
        border-radius: 1em;

        &:hover {
            background-color: var(--tools-bg-color);
        }
    }

}

@media (max-width: 950px) {
    .row-container {
        flex-direction: column;
    }
}
</style>