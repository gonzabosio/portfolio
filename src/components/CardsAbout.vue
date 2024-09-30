<template>
    <div class="container">
        <div class="row-container">
            <div class="col row-1-col-1"></div>
            <div class="col row-1-col-2">
                <div class="col-box"></div>
                <div class="col-box"></div>
                <div class="col-box"></div>
            </div>
        </div>
        <div class="row-container">
            <div class="col row-2-col-1"></div>
            <div class="col row-2-col-2"></div>
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
    /* border: 2px solid green; */
    border-radius: 1em;
}

.row-1-col-1 {
    flex: 2.5;
}

.row-1-col-1,
.row-2-col-1,
.row-2-col-2 {
    background-color: var(--card-color)
}

.row-2-col-2 {
    flex: 2;

}

.row-1-col-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
}

.col-box {
    border-radius: 1em;
    width: 100%;
    flex: 1;
    margin-bottom: 1em;
    background-color: var(--card-color);
}

.row-1-col-2 .col-box:last-child {
    margin-bottom: 0;
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