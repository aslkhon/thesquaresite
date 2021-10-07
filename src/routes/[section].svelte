<script context="module">
	export async function load({ page, fetch }) {
		return {
			props: {
				section: page.params.section
			}
		};
	}
</script>

<script lang="ts">
	type CategoryType = {
		name: string;
		description: string;
		slug: string;
		imageSrc: string;
	};

	const description: string = 'A description is going to be <b>added</b>';
	const categories: Array<CategoryType> = [
		{
			name: 'Category',
			description: '<b>Description</b> that definately should be longer. However, it is what we have now, and we must treat it as the most valueable text in the world, at least for now',
			slug: 'category',
			imageSrc: '/assets/images/magazines.webp'
		},
		{
			name: 'Category',
			description: '<b>Description</b> that definately should be longer. However, it is what we have now, and we must treat it as the most valueable text in the world, at least for now',
			slug: 'category',
			imageSrc: '/assets/images/magazines.webp'
		},
		{
			name: 'Category',
			description: '<b>Description</b> that definately should be longer. However, it is what we have now, and we must treat it as the most valueable text in the world, at least for now',
			slug: 'category',
			imageSrc: '/assets/images/magazines.webp'
		}
	];

	export let section: string;
</script>

<div class="content">
	<h1>{section.toUpperCase()}</h1>
	<p>{@html description}</p>

	<div class="categories">
		{#each categories as category}
			<div class="category">
				<div class="img" style="background-image: url({category.imageSrc});" />
				<div class="description">
					<h1>{category.name}</h1>
					<p>{@html category.description}</p>
					<a href="/{section}/{category.slug}">read all</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../styles/_variables.scss';

	.categories {
		display: grid;
		row-gap: 32px;

		margin-top: 32px;
	}

	.category {
		display: grid;
		column-gap: 32px;
		grid-template-columns: repeat(2, 1fr);

		&:nth-child(odd) {
			grid-template-areas: 'img desc';
		}

		&:nth-child(even) {
			grid-template-areas: 'desc img';
		}

		.description {
			grid-area: desc;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
		}

		.img {
			grid-area: img;
			background-position: center;
			background-size: cover;

			&::before {
				content: '';
				float: left;
				padding-top: 100%;
			}
		}

		h1 {
			margin: 0.3em 0px;
		}

		@media screen and (max-width: $mobile) {
			display: flex;
			flex-direction: column;
		}
	}

	h1 {
		color: $orange;
	}

	a {
		background-color: $orange;
		color: white;
		padding: 8px 16px;
		font-weight: 600;

		&:hover {
			background-color: darken($color: $orange, $amount: 5);
		}
	}
</style>
