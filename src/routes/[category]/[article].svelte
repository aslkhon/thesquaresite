<script context="module">
    export const hydrate = false;

    export async function load({page, fetch}) {
        return {
            props: {
                category: page.params.category,
                article: page.params.article
            }
        }
    }
</script>

<script>
    export let category;
    export let article;
</script>

<h1>{category}/{article}</h1>