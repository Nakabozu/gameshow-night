<script>
    import { onMount } from "svelte";
    // Components
    import JeopardyBoard from "../components/JeopardyBoard/JeopardyBoard.svelte";
    import ScoreBoard from "../components/ScoreBoard/ScoreBoard.svelte";
    // Questions
    import birthday2024Cards, {
        birthday2024Topics,
    } from "$lib/questions/Birthday2024";
    import leagueTriviaRound1Cards, {
        leagueTriviaRound1Topics,
    } from "$lib/questions/LeagueTriviaRound1";
    import christmas2024Cards, {
        christmas2024Topics,
    } from "$lib/questions/Christmas2024";
    import {
        christmas2025Cards,
        christmas2025Topics,
    } from "$lib/questions/Christmas2025";
    // Themes
    import winterTheme from "$lib/themes/winter/config";
    // State
    import { ansiR, dailyDoubleIndex, mT } from "$lib/store";

    //#region SETTINGS
    const currentTopic = christmas2025Topics;
    const currentCards = christmas2025Cards;
    const theme = winterTheme;
    //#endregion

    /**
     * Checks to see if the string starts with http or ends in one of the file extensions I use in the /lib/images folder
     * @param {string} stringToCheck
     */
    const isImage = (stringToCheck) => {
        if (!stringToCheck || typeof stringToCheck !== "string") {
            return false;
        }
        const splicedStringArr = stringToCheck.split(".");
        const extension =
            splicedStringArr.length > 0
                ? splicedStringArr[
                      splicedStringArr.length - 1
                  ].toLocaleLowerCase()
                : "";
        return (
            stringToCheck.startsWith("http") ||
            extension === "png" ||
            extension === "jpg" ||
            extension === "webp" ||
            extension === "svg"
        );
    };

    $: imagesToPreload = () => {
        let finalArr = [];
        if (isImage(theme?.background)) {
            finalArr.push(theme?.background);
        }
        if (isImage(theme?.podium?.src)) {
            finalArr.push(theme?.podium?.src);
        }
        if (isImage(theme?.belowBorderImage)) {
            finalArr.push(theme?.belowBorderImage);
        }
        currentCards.forEach((card) => {
            if (card?.answerProps?.imageSrc)
                finalArr.push(card?.answerProps?.imageSrc);
            if (card?.questionProps?.imageSrc)
                finalArr.push(card?.questionProps?.imageSrc);
        });
        console.log(`${mT}Preloaded Image List:${ansiR}`, finalArr);
        return finalArr;
    };

    onMount(() => {
        $dailyDoubleIndex = Math.floor(Math.random() * currentCards.length);
    });
</script>

<svelte:head>
    <title>Welcome to the Show!</title>
    <meta name="description" content="Game Show Night with Naka!" />
    {#each imagesToPreload() as image}
        <link rel="preload" as="image" href={image} />
    {/each}
</svelte:head>

<section
    style="background: center / cover no-repeat url({theme?.background}), #1133EE"
>
    <JeopardyBoard {currentTopic} {currentCards} {theme} />
    <ScoreBoard {theme} />
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
