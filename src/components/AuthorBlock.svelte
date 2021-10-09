<script lang="ts">
	import type { AuthorBlockType } from '../types';
	export let authorData: AuthorBlockType;
</script>

<div class="block">
	<div class="author">
		<div class="img" style="background-image: url({authorData.imageSrc})" />
		<div>
			<p>{authorData.name}</p>
			<a href="mailto:{authorData.email}">{authorData.email}</a>
		</div>
	</div>
	<p>{@html authorData.bio}</p>
</div>

<style lang="scss">
	@import '../styles/_variables.scss';

	.block {
		margin-top: 24px;
		display: grid;
		column-gap: 32px;
		grid-template-columns: 2fr 3fr;

		@media screen and (max-width: $mobile) {
			grid-template-columns: 1fr;
		}
	}

	.author {
		display: grid;
		column-gap: 16px;
		grid-template-columns: auto 1fr;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;

			p {
				font-size: 1.5em;
				padding: 0.5em 0px;
				margin: 0px;
			}
		}

		.img {
			width: 120px;
			height: 120px;
			background: lightgrey no-repeat center;
			background-size: cover;
		}
	}
</style>
