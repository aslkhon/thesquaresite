<script lang="ts">
    import Section from "../components/Section.svelte";

    const sections = [
		{
			title: 'Students',
			slug: 'students',
			categories: [
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				}
			]
		},

		{
			title: 'Workaholics',
			slug: 'workaholics',
			categories: [
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				}
			]
		},
		{
			title: 'Lifehackers',
			slug: 'lifehackers',
			categories: [
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				}
			]
		},
		{
			title: 'Stories',
			slug: 'stories',
			categories: [
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				}
			]
		},
		{
			title: 'Culturephiles',
			slug: 'culturephiles',
			categories: [
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				}
			]
		},
		{
			title: 'Kvadratjon',
			slug: 'kvadratjon',
			categories: [
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				},
				{
					title: 'Scholarships',
					slug: 'scholarships'
				}
			]
		}
	];
</script>

{#each sections as section}
    <Section></Section>
{/each}