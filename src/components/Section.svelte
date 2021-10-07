<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';
	import type { ArticleCardType } from 'src/types';

	export let slug: string;
	export let imageSrc: string;
	export let articles: Array<ArticleCardType>;
</script>

<div class="section">
	<a href="/{slug}"
		><div class="hero" style="background-image: url({imageSrc});" /></a
	>

	<div class="articles">
		{#each articles as article}
			<ArticleCard props={article} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../styles/_variables.scss';


	.section {
		display: grid;
		padding: 0px 64px;
		row-gap: 32px;
		
		@media screen and (max-width: $desktop) {
			padding: 0px 32px;
		}

		@media screen and (max-width: $tablet) {
			row-gap: 24px;
		}

		@media screen and (max-width: $mobile) {
			padding: 0px;
		}
	}

	.hero {
		height: calc((100vw - 190px) / 3);
		background: lightgray no-repeat center;
		background-size: cover;

		@media (max-width: $mobile) {
			height: calc((100vw - 64px) * 2 / 3);
		}
	}

	.articles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 32px;

		@media screen and (max-width: $tablet) {
			column-gap: 24px;
		}

		@media (max-width: $mobile) {
			grid-template-columns: 1fr;
			row-gap: 24px;
		}
	}
</style>
