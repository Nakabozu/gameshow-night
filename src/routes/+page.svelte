<script>
	import { onMount } from 'svelte';
	// Components
    import JeopardyBoard from '../components/JeopardyBoard/JeopardyBoard.svelte';
    import ScoreBoard from '../components/ScoreBoard/ScoreBoard.svelte';
	// Questions
	import birthday2024Cards, { birthday2024Topics } from "$lib/questions/Birthday2024";
    import leagueTriviaRound1Cards, { leagueTriviaRound1Topics } from "$lib/questions/LeagueTriviaRound1";
    import christmas2024Cards, { christmas2024Topics } from "$lib/questions/Christmas2024";
    // Themes
    import winterTheme from '$lib/themes/winter/config';
	// State
	import { dailyDoubleIndex } from "$lib/store";

    //#region SETTINGS
    const currentTopic = christmas2024Topics;
    const currentCards = christmas2024Cards;
    const theme = winterTheme;
    //#endregion

	onMount(()=>{
		$dailyDoubleIndex = Math.floor(Math.random() * currentCards.length);
	})
</script>

<svelte:head>
	<title>Welcome to the Show!</title>
	<meta name="description" content="Game Show Night with Naka!" />
</svelte:head>

<section style="background: center / cover no-repeat url({theme?.background}), #1133EE">
	{$dailyDoubleIndex}
	<JeopardyBoard currentTopic={currentTopic} currentCards={currentCards} theme={theme}/>
	<ScoreBoard theme={theme}/>
</section>

<style>
	section {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		width: 100%;
		height: 100%;
		margin: 0;
		box-sizing: border-box;

		color: whitesmoke;
		font-weight: 700;
	}
</style>
