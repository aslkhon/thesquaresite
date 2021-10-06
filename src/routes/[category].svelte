<script context="module">
    export async function load({page, fetch}) {
        return {
            props: {
                category: page.params.category,
            }
        }
    }
</script>

<script>
    const description = 'A description is going to be **added**';

    export let category;
</script>

<div class="content">
    <h1>{category}</h1>
    <p>{@html description}</p>
</div>

<style lang="scss"></style>