<script lang="ts">
	import Section from '../components/Section.svelte';

	type SectionType = {
		title: string,
		slug: string
	}

	const sections: Array<SectionType> = [
		{
			title: 'Students',
			slug: 'students',
		},
		{
			title: 'Workaholics',
			slug: 'workaholics',
		},
		{
			title: 'Lifehackers',
			slug: 'lifehackers',
		},
		{
			title: 'Stories',
			slug: 'stories',
		},
		{
			title: 'Culturephiles',
			slug: 'culturephiles',
		},
		{
			title: 'Kvadratjon',
			slug: 'kvadratjon',
		}
	];
</script>

<div class="sections">
	{#each sections as section}
	<Section slug={section.slug} imageSrc="assets/images/magazines.webp" articles={
		[
			{
				slug: 'smth',
				imageSrc: 'assets/images/magazines.webp'
			},
			{
				slug: 'smth',
				imageSrc: 'assets/images/magazines.webp'
			},
			{
				slug: 'smth',
				imageSrc: 'assets/images/magazines.webp'
			},
		]
	}/>
{/each}
</div>

<style lang="scss">
	@import '../styles/_variables.scss';

	.sections {
		display: grid;
		row-gap: 24px;
		padding-top: 32px;

		@media screen and (max-width: $mobile) {
			row-gap: 48px;
		}
	}
</style>
