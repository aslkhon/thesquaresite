<script context="module">
	export const hydrate = false;

	export async function load({ page, fetch }) {
		return {
			props: {
				section: page.params.section,
				category: page.params.category
			}
		};
	}
</script>

<script lang="ts">
	import ArticleCard from '../../components/ArticleCard.svelte';
	import type { ArticleCardType } from 'src/types';

	let articles: Array<ArticleCardType> = [
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		},
        {
			slug: 'smth',
			imageSrc: '/assets/images/magazines.webp'
		}
    ];

	export let category: string;
	export let section: string;
</script>

<div class="content">
	<h1>{section}/{category.toUpperCase()}</h1>

	<div class="articles">
		{#each articles as article}
			<ArticleCard props={article} />
		{/each}
	</div>
</div>

<style lang="scss">
    @import '../../styles/_variables.scss';

    .articles {
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(3, 1fr);

        @media screen and (max-width: $mobile) {
            grid-template-columns: 1fr;
        }
    }

    h1 {
        color: $orange;
    }
</style>
