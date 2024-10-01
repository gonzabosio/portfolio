<template>
    <div class="container">
        <div class="row-container">
            <div class="col row-1-col-1">Project 1</div>
            <div class="col row-1-col-2">Project 2</div>
        </div>
        <div class="row-container">
            <div class="col row-2-col-1">Project 3</div>
            <div class="col row-2-col-2">Project 4</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 1100px;
    height: 500px;
    border-radius: 1em;
    padding: 2em;
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
    padding: 1em;
    border-radius: 1em;
    background-color: var(--card-color);
    transition: 0.3s;
    border: 4px solid transparent;

    &:hover {
        border: 4px solid #4f7780;
    }
}

@media (max-width: 768px) {
    .row-container {
        flex-direction: column;
    }
}
</style>