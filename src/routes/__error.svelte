<div>
    <img src="assets/404.png" alt="Page not found" />
</div>

<style lang="scss">
    @import '../styles/_variables.scss';

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 64px 0px;

        img {
		    width: 80%;

            @media screen and (min-width: $desktop) {
                width: 50%;
            }
        }
    }
</style>
