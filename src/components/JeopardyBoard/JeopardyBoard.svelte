<script>
    import JeopardyCard from "./JeopardyCard.svelte";

    // Who's That Pokemon images
    import ghostStarcruiser from '$lib/images/GhostStarcruiser.png';
    import ghostStarcruiserBlack from '$lib/images/GhostStarcruiserBlack.png';
    import kuroCrowbar from '$lib/images/KuroCrowbar.png';
    import kuroCrowbarBlack from '$lib/images/KuroCrowbarBlack.png';
    import zuzuShark from '$lib/images/ZuzuShark.png';
    import zuzuSharkBlack from '$lib/images/ZuzuSharkBlack.png';
    import tanyaGlass from '$lib/images/TanyaGlass.png';
    import tanyaGlassBlack from '$lib/images/TanyaGlassBlack.png';
    import jadeDinner from '$lib/images/JadeDinner.png';
    import jadeDinnerBlack from '$lib/images/JadeDinnerBlack.png';


    /** @type {string[]} */
    const topics = [
        "sNak Time",
        "You know, like, Nyaa?",
        "LIES!",
        "BKFT Songs",
        "Who's that Pokémon?",
        "❤️"
    ];

    const cards = [
        /////////////////////////
        // sNak Time Questions //
        /////////////////////////
        {
            questionProps: {headerText: "How many Banana can Naka have a day?"}, 
            answerProps: {headerText: "1", bodyText: "Oh! Banana!", videoOn: true, videoSrc: "https://www.youtube.com/embed/z8WvSGNEV24?si=Z6cBn4DzseOGhV6W"}
        },
        {
            questionProps: {headerText: "How many Egg can Naka have a day?"}, 
            answerProps: {headerText: "2", bodyText: "EGG!", videoOn: true, videoSrc: "https://www.youtube.com/embed/acEEBZX35ks?si=7dGHrVdZiYf7mRkV"}
        },
        {
            questionProps: {headerText: "Name the 5 S's of Naka's Diet"}, 
            answerProps: {headerText: "Sushi, Sandwiches, Soup, Cereal, Salad,"}
        },
        {
            questionProps: {headerText: "What had Naka been consuming for six months before realizing it was what him to the hospital?"}, 
            answerProps: {headerText: "Soylent"}
        },
        {
            questionProps: {headerText: "IRS: just guess ;p"}, 
            answerProps: {headerText: "jail :("}
        },
        ////////////////////
        // Meow Questions //
        ////////////////////
        {
            questionProps: {headerText: "Animal Crossing for Switch 2020 looks great"}, 
            answerProps: {headerText: "AFBLAHABHALAHAHBLABHABHAKLHBzuzu", bodyText: "A cat speaks Animalese", videoOn: true, videoSrc: "https://www.youtube.com/embed/daF24OPfUVA?si=grq-1PHtXgu0FfNG"}
        },
        {
            questionProps: {headerText: "I hear a hunter"}, 
            answerProps: {headerText: "*Left for Dead 2 Jingle*", bodyText: "A cat attacks another cat from off screen.", videoOn: true, videoSrc: "https://www.youtube.com/embed/92T8qdcSPj4?si=r9uVa28MEP92di_-"}
        },
        {
            questionProps: {headerText: "Felis Yoshis"}, 
            answerProps: {headerText: "Mlem mlem mlem mlem mlem", bodyText: "Chiller cat drinking water", videoOn: true, videoSrc: "https://www.youtube.com/embed/4WK2yGNUsyA?si=iFp3nMUfOJlC5oVb"}
        },
        {
            questionProps: {headerText: "he part 2"}, 
            answerProps: {headerText: "My hopes are not high for he part 3", bodyText: "A cat goes on an adventure.", videoOn: true, videoSrc: "https://www.youtube.com/embed/qodjc480DiY?si=yyqv77Ip-wfto5E2"}
        },
        {
            questionProps: {headerText: "woem"}, 
            answerProps: {headerText: "woem-meow", bodyText: "A cat meows into a doorbell camera backwards.", videoOn: true, videoSrc: "https://www.youtube.com/embed/hBEKgHDzm_s?si=KNfHLHeH7YwiUTZk"}
        },
        /////////////////////
        // LIES! Questions //
        /////////////////////
        {
            questionProps: {headerText: "In French, what do they sing on your birthday."}, 
            answerProps: {headerText: "\"How old are you, turtle?\"", bodyText: "This lesson brought to you by \"Tanya teaches French\""}
        },
        {
            questionProps: {headerText: "These deep fried treats are known as Timbits in Canada"}, 
            answerProps: {headerText: "Donut Puppies", bodyText: "A cat meows into a doorbell camera backwards."}
        },
        {
            questionProps: {headerText: "This certificate of shame was nearly awarded to every trash gang member in the year 2023"}, 
            answerProps: {headerText: "The Pee-Pantser Award 2023"}
        },
        {
            questionProps: {headerText: "In D&D, doing this counts as an action"}, 
            answerProps: {headerText: "Picking something up off the ground"}
        },
        {
            questionProps: {headerText: "This sexy and smooth femme fatale is known for what catchphrase?"}, 
            answerProps: {headerText: "Maroo", videoOn: true, videoSrc: "https://www.youtube.com/embed/bmHRBNpsxjY?si=TxNJ8c-9i28nADT9", startTime:"150"}
        },
        //////////////////////////
        // BKFT Songs Questions //
        //////////////////////////`
        {
        questionProps: {headerText: "", imageOn: true, imageSrc: "https://media.tenor.com/BXQgJskV7LgAAAAj/9999.gif"}, 
        answerProps: {headerText: "IT'S BABY KITTY FOODY TIME!", bodyText: "BABY KITTY FOODIE TIME!"}
        },
        {
        questionProps: {headerText: "Cat. Cat. Little Potat.", bodyText: "What are the next lyrics?", videoOn: true, videoSrc: "https://www.youtube.com/embed/Ye7FKc1JQe4?si=uvsDIbuFxMfcq0Ec", startTime: "10"}, 
        answerProps: {headerText: "He wants to know where the food is at.", bodyText: "Come on!  He's meowing at you!  Come on!"}
        },
        {
        questionProps: {headerText: "What are the BKFT lyrics?", videoOn: true, videoSrc: "https://www.youtube.com/embed/Hphwfq1wLJs?si=139m5P90DLXclxgQ", startTime: "53"}, 
        answerProps: {headerText: "If you are a kitty, and you want some foodie:", bodyText: "Baby Kitty Foodie Time"}
        },
        {
        questionProps: {headerText: "What are the BKFT lyrics?", videoOn: true, videoSrc: "https://www.youtube.com/embed/V7NaFOMjFYY?si=AWtHCGa5tCCT3QVF", startTime: "3"}, 
        answerProps: {headerText: "OPEN ENDED!  Best answer wins!"}
        },
        {
        questionProps: {headerText: "What song does every baby kitty foodie time end with?"}, 
        answerProps: {headerText: "Here's your kitty foodie", bodyText: "Baby kitty foodie", videoOn: true, videoSrc: "https://www.youtube.com/embed/KraebqYHLBg?si=duf9c8yTUk0mrzDp"}
        },
        //////////////////////////////////
        // Who's that Pokémon Questions //
        //////////////////////////////////
        {
        questionProps: {headerText: "", imageOn: true, imageSrc: kuroCrowbarBlack}, 
        answerProps: {headerText: "It's Kuro!", imageOn: true, imageSrc: kuroCrowbar}
        },
        {
        questionProps: {headerText: "", imageOn: true, imageSrc: ghostStarcruiserBlack}, 
        answerProps: {headerText: "It's Ghost!", imageOn: true, imageSrc: ghostStarcruiser}
        },
        {
        questionProps: {headerText: "", imageOn: true, imageSrc: zuzuSharkBlack}, 
        answerProps: {headerText: "It's Zuzu!", imageOn: true, imageSrc: zuzuShark}
        },
        {
        questionProps: {headerText: "", imageOn: true, imageSrc: tanyaGlassBlack}, 
        answerProps: {headerText: "It's Tanya!", imageOn: true, imageSrc: tanyaGlass}
        },
        {
        questionProps: {headerText: "", imageOn: true, imageSrc: jadeDinnerBlack}, 
        answerProps: {headerText: "It's Jade!", imageOn: true, imageSrc: jadeDinner}
        },

        //////////////////////
        // Waifus Questions //
        //////////////////////
        {
        questionProps: {headerText: "This charming serial killer sports a smile and a transatlantic accent"}, 
        answerProps: {headerText: "Alastor Altruist", bodyText: "That's his last name.  Just look at the captions, guys.", imageOn: true, imageSrc: "https://static.wikia.nocookie.net/hazbinhotel/images/0/0a/Alastor_main_series_new_render.png"}
        },
        {
        questionProps: {headerText: "This snake has a taste for duckies and pancakes."}, 
        answerProps: {headerText: "Lucifer Morningstar", bodyText: "Taking \"down to clown\" back from the juggalos", imageOn: true, imageSrc: "https://static.wikia.nocookie.net/hazbinhotel/images/f/f1/Lucifer.png"}
        },
        {
        questionProps: {headerText: "This Shadowsinger Illyrian smells of night-chilled mist and cedar."}, 
        answerProps: {headerText: "Azriel", bodyText: "\"My wings are bigger.\"", imageOn: true, imageSrc: "https://static.wikia.nocookie.net/acourtofthornsandroses/images/0/06/Azriel_by_Charlie_Bowater_01.jpg"}
        },
        {
        questionProps: {headerText: "This cool, white-haired boy is the youngest captain in the Gotei 13"}, 
        answerProps: {headerText: "Tōshirō Hitsugaya", bodyText: "", imageOn: true, imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/ddycfkp-045b6786-ae43-4c07-b695-60b46165cb67.png/v1/fill/w_1198,h_620/toshiro_hitsugaya_10th_division_captain_by_bodskih_ddycfkp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kZHljZmtwLTA0NWI2Nzg2LWFlNDMtNGMwNy1iNjk1LTYwYjQ2MTY1Y2I2Ny5wbmciLCJ3aWR0aCI6Ijw9MTE5OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.A-iksphRFTONvp7IpE02HaABOU1ec3Cr0xG_tloOXSI"}
        },
        {
        questionProps: {headerText: "Most famous for a trick with a pineapple and a yo-yo, this character would rather be famous for anything else."}, 
        answerProps: {headerText: "Katia Managan", bodyText: "From Prequel", imageOn: true, imageSrc: "https://media1.tenor.com/m/gjnwZWZ3cd8AAAAC/katia-managan-prequel.gif"}
        },
        ]
</script>

<article class="jeopardy-board">
    <section class="jeopardy-topics">
        {#each topics as topic}
            <div class="topic">
                {topic}
            </div>
        {/each}
    </section>
    <section class="jeopardy-cards">
        {#each cards as {questionProps, answerProps}, index}
        <div class="card">
            <JeopardyCard value={((index%5)+1)*200} questionProps={questionProps} answerProps={answerProps}>
                (Slotted content)
            </JeopardyCard>
        </div>
    {/each}
    </section>
</article>

<style>
    .jeopardy-board{
        background-color: #000A74;
        width: 100%;
        height: 100%;

        border-radius: 6px;
        border: 10px solid grey;
    }

    .jeopardy-topics{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    .jeopardy-cards{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-auto-flow: column;
    }
    
    .topic, .card{
        display: flex;
        height: 75px;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
    }

    .topic{
        border: 2px solid black;
        border-bottom: 5px solid black;
    }

    .card{
        border: 2px solid black;
    }
</style>