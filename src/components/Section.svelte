<script>
	import ArticleCard from './ArticleCard.svelte';
</script>

<div class="section">
	<a href="section"
		><div class="hero" style="background-image: url('assets/images/magazines.webp');" /></a
	>

	<div class="articles">
		<ArticleCard slug="article" url="assets/images/magazines.webp" />
		<ArticleCard slug="article" url="assets/images/magazines.webp" />
		<ArticleCard slug="article" url="assets/images/magazines.webp" />
	</div>
</div>

<style lang="scss">
	@import '../styles/_variables.scss';

	.section {
		margin: 32px 0px;
		padding: 0px 64px;

		@media screen and (max-width: $desktop) {
			padding: 0px 32px;
		}

		@media screen and (max-width: $mobile) {
			padding: 0px;
		}
	}

	.hero {
		height: calc((100vw - 190px) / 3);
		background-color: lightgray;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		@media (max-width: $mobile) {
			height: calc((100vw - 64px) * 2 / 3);
		}
	}

	.articles {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		@media (max-width: $mobile) {
			flex-direction: column;
		}
	}
</style>
