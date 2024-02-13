<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
    import JeopardyBoard from '../components/JeopardyBoard/JeopardyBoard.svelte';
    import ScoreBoard from '../components/ScoreBoard/ScoreBoard.svelte';
</script>

<svelte:head>
	<title>Welcome to the Show!</title>
	<meta name="description" content="Naka's Birthday Game Night" />
</svelte:head>

<section>
	<JeopardyBoard/>
	<ScoreBoard/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		height: 100%;
	}
</style>
