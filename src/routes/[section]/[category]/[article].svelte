<script context="module">
	export const hydrate = false;

	export async function load({ page, fetch }) {
		return {
			props: {
				section: page.params.section,
				category: page.params.category,
				article: page.params.article
			}
		};
	}
</script>

<script lang="ts">
	import AuthorBlock from '/src/components/AuthorBlock.svelte';

	const imageSrc: string =
		'https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
	const title: string = 'On the <i>Highway</i>';
	const text: string =
		'Some <b>Text</b> lore Bibendum arcu vitae elementum curabitur vitae nunc sed. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Arcu ac tortor dignissim convallis aenean et tortor at. Vestibulum morbi blandit cursus risus at. Odio facilisis mauris sit amet massa vitae tortor condimentum. Fames ac turpis egestas maecenas pharetra. Vitae turpis massa sed elementum tempus egestas. Hac habitasse platea dictumst vestibulum rhoncus est. Neque gravida in fermentum et sollicitudin ac. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Eu facilisis sed odio morbi quis. Nec feugiat in fermentum posuere. Lacus sed turpis tincidunt id aliquet risus feugiat. Morbi leo urna molestie at elementum. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Risus nullam eget felis <a href="#">eget</a> nunc lobortis mattis. Malesuada proin libero nunc consequat interdum. Erat velit scelerisque in dictum. Fringilla urna porttitor rhoncus dolor purus non. Felis bibendum ut tristique et egestas. Ornare massa eget egestas purus viverra. Blandit aliquam etiam erat velit. Mi in nulla posuere sollicitudin. Tristique senectus et netus et malesuada fames ac turpis.<br/> <img href="https://pixhost.icu/avaxhome/7f/79/001a797f.jpeg"/ height="200px" width="300px"><br>  Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Sem integer vitae justo eget magna fermentum. Porttitor eget dolor morbi non. Platea dictumst quisque sagittis purus sit amet volutpat.';

	// export let section: string;
	export let category: string;
	// export let article: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="hero" style="background-image: url('{imageSrc}');">
	<div class="content">
		<h2>{category.toUpperCase()}</h2>
		<div>
			<h1>{@html title.toUpperCase()}</h1>
		</div>
	</div>
</div>

<div class="content">
	<p>
		{@html text}
	</p>

	<div class="divider" />

	<AuthorBlock authorData={{ imageSrc: 'https://i.ytimg.com/vi/8O482Hcvj4A/maxresdefault.jpg', name: 'Parker', email: 'aslkho.mail@gmail.com', bio: 'Some <b>long bio</b> bio' }} />
</div>

<style lang="scss">
	@import '../../../styles/_variables.scss';

	.hero {
		width: 100%;
		height: 33vw;
		background: lightgrey no-repeat center;
		background-size: cover;
		color: white;
		margin-top: 48px;
		margin-bottom: 32px;

		@media screen and (max-width: 768px) {
			height: 66vw;
		}

		.content {
			height: 100%;

			div {
				height: calc(100% - 81px);
				display: flex;
				align-items: center;
			}
		}

		h2 {
			padding-top: 32px;

			@media screen and (max-width: 768px) {
				font-size: 1.2em;
			}
		}

		h1 {
			font-size: 4em;

			@media screen and (max-width: 768px) {
				font-size: 3em;
			}
		}
	}

	p {
		font-size: 18px;
		line-height: 30px;
		letter-spacing: 0.5px;
		padding: 0vw 6vw;

		@media screen and (max-width: $mobile) {
			padding: 0px;
		}
	}

	.divider {
		height: 4px;
		width: 100%;
		margin-top: 48px;
		background-color: $orange;
	}
</style>
