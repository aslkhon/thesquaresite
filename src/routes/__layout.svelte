<script lang="ts">
	import '../styles/style.scss';
	import { ChevronDownIcon, MenuIcon, SearchIcon, XIcon } from 'svelte-feather-icons';

	let navbarOpen: Boolean = false;
	let footerOpen: Array<Boolean> = [];

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

<main>
	<nav>
		<div class="upper">
			<div>
				<a href="/">
					<img src="assets/logo.svg" alt="TheSquare" />
				</a>
			</div>

			<span class="menu-button" on:click={() => (navbarOpen = true)}>
				<MenuIcon class="icon" size="36" />
			</span>

			<div class="search-button">
				<SearchIcon class="icon" size="36" />
			</div>
		</div>
		<div class="navbar-sections">
			<a href="who-we-are">Who we are</a>

			{#each sections as section}
				<a href={section.slug}>{section.title}</a>
			{/each}
		</div>

		<div
			class="drawer"
			style="transform: translateY({navbarOpen ? '0vh' : '-85vh'});
            box-shadow: 0px 0px 0px 100vh rgba(0, 0, 0, {navbarOpen ? '0.5' : '0'});"
		>
			<span class="close-button" on:click={() => (navbarOpen = false)}>
				<XIcon class="icon" size="36" />
			</span>

			<div>
                <a href="who-we-are">Who we are?</a>
				{#each sections as section}
					<a href={section.slug}>{section.title}</a>
				{/each}
			</div>
		</div>
	</nav>

	<!-- Slot for page content -->
	<slot />
</main>

<footer>
	<div class="outer">
		<div class="footer-sections">
			{#each sections as section, i}
				<div>
					<div class="footer-expandable">
						<a href={section.slug} class="footer-heading">{section.title}</a>
						<span
							on:click={() => (footerOpen[i] = !footerOpen[i])}
							style="transform: rotateZ({footerOpen[i] ? '180deg' : '0deg'})"
						>
							<ChevronDownIcon size="24" />
						</span>
					</div>

					<div class="footer-content {footerOpen[i] ? '' : 'closed'}">
						{#each section.categories as category}
							<a href={category.slug}>{category.title}</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div>
			<a href="who-are-we" class="footer-heading">Who are we?</a>
		</div>
	</div>

	<p class="copyright">Made with 🧡 by theSquare</p>
</footer>

<style lang="scss">
	@import '../styles/_variables.scss';

	main {
		background-color: white;
		margin: 30px;

		@media screen and (max-width: $mobile) {
			margin: 30px 0px;
		}
	}

    /* Common */

    @mixin heading {
        font-size: 24px;
		font-family: 'Bebas Neue', 'Impact', sans-serif;
		font-weight: normal;
    }

	/* Navbar */

	nav {
		display: grid;
		grid-template-rows: 1fr 64px;
		height: 184px;
		border-bottom: 1px solid lightgray;

		@media screen and (max-width: $mobile) {
			height: 96px;
		}

		img {
			max-width: 267px;

			@media screen and (max-width: $mobile) {
				max-width: 196px;
			}
		}
	}

	.upper {
		display: grid;
		grid-template-columns: 1fr 48px;
		align-items: center;
		padding: 0px 64px;

		@media screen and (max-width: $desktop) {
			padding: 0px 32px;
		}

		@media screen and (max-width: $mobile) {
			padding: 24px;
		}
	}

	.navbar-sections {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid lightgray;

		@media (max-width: $mobile) {
			display: none;
		}

		a {
			padding: 16px;
			font-size: 24px;
			font-family: 'Bebas Neue', sans-serif;

			&:hover {
				background-color: rgba($color: $orange, $alpha: 0.2);
			}

			@media (max-width: $tablet - 1px) {
				font-size: 18.2px;
			}
		}
	}

	@mixin button {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 48px;
        max-width: 48px;
		color: $orange;
		transition: $fast-transition;

		&:hover {
			background-color: rgba($color: lightgray, $alpha: 0.5);
		}
	}

	.menu-button {
		@include button;

		@media screen and (min-width: $mobile + 1px) {
			display: none;
		}
	}

	.close-button {
		@include button;
		margin: 48px 0px 0px calc(100vw - 72px);
		float: right;

		@media screen and (min-width: $mobile + 1px) {
			display: none;
		}
	}

	.search-button {
		@include button;

		@media screen and (max-width: $mobile) {
			display: none;
		}
	}

	.drawer {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		width: 100vw;
		height: 85vh;
		background-color: white;
		transition: $normal-transition;

		@media (min-width: $mobile + 1px) {
			display: none;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
            
            a {
                @include heading;

                padding: 4px 16px;
                margin: 2px 0px;

                &:hover {
				    background-color: rgba($color: orange, $alpha: 0.2);
			    }
            }
		}
	}

	/* Footer */

	@mixin layout {
		display: grid;
		gap: 32px;

		@media screen and (max-width: $mobile) {
			grid-template-columns: 1fr;
		}
	}

	.outer {
		@include layout;
		grid-template-columns: 3fr 1fr;
		margin: 30px;

		@media screen and (max-width: $mobile) {
			margin: 30px 24px;
		}

		a {
			color: white;
		}
	}

	.footer-sections {
		@include layout;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.footer-heading {
        @include heading;

		@media screen and (min-width: $mobile + 1px) {
			font-size: 28px;
		}

        &:hover {
			background-color: rgba($color: white, $alpha: 0.2);
		}
	}

	.footer-expandable {
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			display: none;
			color: white;
			transition: $normal-transition;

			@media screen and (max-width: $mobile) {
				display: block;
			}
		}
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: hidden;
		max-height: 162px;
		transition: $normal-transition;

		a {
			font-size: 18px;
			padding: 4px 0px;
			margin: 2px 0px;

			@media (max-width: $mobile) {
				padding: 12px;
				margin: 4px;
			}

			&:hover {
				background-color: rgba($color: white, $alpha: 0.2);
			}
		}
	}

	.closed {
		@media screen and (max-width: $mobile) {
			max-height: 0px;
		}
	}

	.copyright {
		text-align: center;
		color: white;
		font-size: 18px;
		font-weight: 500;
	}
</style>
