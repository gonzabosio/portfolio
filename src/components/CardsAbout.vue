<script setup>
import DevTools from './DevTools.vue';
import GitHub from './Contact/GitHub.vue';
import Gmail from './Contact/Gmail.vue';
import LinkedIn from './Contact/LinkedIn.vue';
import Resume from './Resume.vue';
import Education from './Education.vue';
import Personal from './Personal.vue';
</script>

<template>
    <div class="container">
        <div class="row-container">
            <div class="col row-1-col-1">
                <Personal />
            </div>
            <div class="col row-1-col-2">
                <a class="col-box" href="https://github.com/gonzabosio" target="_blank">
                    <GitHub />
                </a>
                <a class="col-box" href="https://www.linkedin.com/in/gonzaloabosio" target="_blank">
                    <LinkedIn />
                </a>
                <a class="col-box" href="mailto:gonzaabosio@gmail.com" target="_blank">
                    <Gmail />
                </a>
            </div>
        </div>
        <div class="row-container">
            <div class="col row-2-col-1">
                <div class="col-box">
                    <Education />
                </div>
                <a class="col-box" href="cv.pdf" download>
                    <Resume />
                </a>
            </div>
            <div class="col row-2-col-2">
                <DevTools />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 1100px;
    height: 650px;
    border-radius: 1em;
    padding: 2em;
    gap: 1em;
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
    padding: 0;
    border: 4px solid transparent;
    border-radius: 1em;
}

.row-1-col-1 {
    flex: 2.5;
}

.row-1-col-1,
.row-2-col-2 {
    background-color: var(--card-color);
    padding: 1em;
    transition: 0.3s;
    border: 4px solid transparent;

    &:hover {
        border: 4px solid #4f7780;
    }
}

.row-2-col-2 {
    flex: 2;
}

.row-1-col-2,
.row-2-col-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
}

.col-box {
    display: flex;
    align-items: center;
    border-radius: 1em;
    width: 100%;
    flex: 1;
    margin-bottom: 1em;
    background-color: var(--card-color);
    border: 4px solid transparent;
    transition: 0.3s;
    text-decoration: none;
    color: var(--text-color);

    &:hover {
        border: 4px solid #4f7780;
    }
}

.row-1-col-2 .col-box:last-child,
.row-2-col-1 .col-box:last-child {
    margin-bottom: 0;
}

.row-2-col-1 .col-box:first-child {
    align-items: normal;
    flex: 3;
}

@media (max-width: 768px) {
    .row-container {
        flex-direction: column;
    }

    .row-1-col-2 {
        flex-direction: row;
        align-items: stretch;
        gap: 1em;
        height: auto;
    }

    .col-box {
        flex: 1;
        margin: 0;
    }
}
</style>