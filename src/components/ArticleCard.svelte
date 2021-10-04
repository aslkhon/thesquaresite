<script lang="ts">
    export let slug: string;
    export let url: string;
</script>

<a href={slug}>
    <div style="background-image: url({url})"></div>
</a>

<style lang="scss">
    @import '../styles/_variables.scss';

    $sizeLg: calc((100vw - 252px) / 3);
    $sizeMd: calc((100vw - 190px) / 3);
    $sizeSm: 100vw;

    div {
        height: $sizeLg;
        width: $sizeLg;
        background-color: lightgray;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 32px;

        @media (max-width: $desktop) {
            height: $sizeMd;
            width: $sizeMd;
        }

        @media (max-width: $mobile) {
            height: $sizeSm;
            width: $sizeSm;
        }
    }
</style>