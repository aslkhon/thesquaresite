<script lang="ts">
	import type { ArticleCardType } from 'src/types';

	export let props: ArticleCardType;
</script>

<a href={props.slug}>
	<div style="background-image: url({props.imageSrc})" />
</a>

<style lang="scss">
	@import '../styles/_variables.scss';

	a::before {
		content: '';
		float: left;
		padding-top: 100%;
	}

	div {
		width: 100%;
		height: 100%;
		background: lightgray no-repeat center;
		background-size: cover;
	}
</style>
