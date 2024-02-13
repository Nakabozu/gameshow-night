<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		/* background-color: #000A74; */
		background-image: url("https://deseret.brightspotcdn.com/dims4/default/02edd67/2147483647/strip/true/crop/1621x1080+149+0/resize/1300x866!/format/webp/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FtxSfJuf3vgrhp9sJlOSStwdQ7ds%3D%2F0x0%3A1920x1080%2F1920x1080%2Ffilters%3Afocal%28984x450%3A985x451%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22220733%2FJIM_GILLIGAN_2_1_8_2021_SN8310.png");
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0;
		box-sizing: border-box;

		color: whitesmoke;
		font-weight: 700;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
