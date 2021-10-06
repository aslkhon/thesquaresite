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
