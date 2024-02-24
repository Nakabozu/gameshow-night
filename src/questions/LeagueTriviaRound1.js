// Who's That Pokemon images
import aiAhri from '$lib/images/LeagueTriviaRound1/AiAhri.webp';
import aiRenekton from '$lib/images/LeagueTriviaRound1/AiRenekton.webp';
import aiShaco from '$lib/images/LeagueTriviaRound1/AiShaco.jpg';
import aiSinged from '$lib/images/LeagueTriviaRound1/AiSinged.jpg';
import aiVelkoz from '$lib/images/LeagueTriviaRound1/AIVelkoz.jpg';

/** @type {string[]} */
export const leagueTriviaRound1Topics = [
    "Like Clockwork", // Old and new catchphrases that come up or used to come up every game.
    "Give it an AI try", // Characters that share lore with other characters
    "Spotlight Lies", // 50/50 - Is the skin fan made, or real (King Rammus, Spiderman Amumu, etc.)  The last one is photoshopped by me so it's neither.
    "Parlez-vous français?", // Guess the champion based on their voice lines
    "Prosopagnosia", // Same face syndrome skins (guess the champ)
    "Who is that?" // Our most played champs
];
/**
 * @type {CardScreens[]}
 */
export const cards = [
    //////////////////////////////
    // Like Clockwork Questions //
    //////////////////////////////
    {
        questionProps: { headerText: "Naka notices we're losing before the 10 minute mark but wants to keep playing." },
        answerProps: { headerText: "We just need to make it to late game" }
    },
    {
        questionProps: { headerText: "Kuro has been left to fend for herself in a teamfight" },
        answerProps: { headerText: "How could you abandon me!" }
    },
    {
        questionProps: { headerText: "Zuzu is nearly dead and is being attacked" },
        answerProps: { headerText: "Zuzu screams at a pitch so loud her microphone cannot register it." }
    },
    {
        questionProps: { headerText: "Ryan has been damaged by the tip of a skillshot (pre-2019)" },
        answerProps: { headerText: "That didn't hit me", bodyText: "They're a small indie company.", videoOn: true, videoSrc: "https://www.youtube.com/embed/8s5EDXHDMOk?si=MrYj8JX3dFCAFKRc", startTime: "10" }
    },
    {
        questionProps: { headerText: "The enemy team has just walked into Ghost's Ivern bush." },
        answerProps: { headerText: "They invade my private bush!"}
    },
    /////////////////////////////////
    // Give it an AI try Questions //
    /////////////////////////////////
    {
        questionProps: { headerText: "Which champion is this?", imageOn: true, imageSrc: aiVelkoz},
        answerProps: { headerText: "Vel'Koz", bodyText: "Eyeball with armor and tentacles in space", imageOn: true, imageSrc: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg" }
    },
    {
        questionProps: { headerText: "Which champion is this?", imageOn: true, imageSrc: aiShaco},
        answerProps: { headerText: "Shaco", bodyText: "Creepy jester doll in red clothes", imageOn: true, imageSrc: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg" }
    },
    {
        questionProps: { headerText: "Which champion is this?", imageOn: true, imageSrc: aiRenekton},
        answerProps: { headerText: "Renekton", bodyText: "Crocodile man in armor with big teeth and a big crescent blade weapon", imageOn: true, imageSrc: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg" }
    },
    {
        questionProps: { headerText: "Which champion is this?", imageOn: true, imageSrc: aiAhri},
        answerProps: { headerText: "Ahri", bodyText: "Woman with nine white tails, black hair, and fox ears, in a red kimono", imageOn: true, imageSrc: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" }
    },
    {
        questionProps: { headerText: "Which champion is this?", imageOn: true, imageSrc: aiSinged},
        answerProps: { headerText: "Singed", bodyText: "Lanky man in crude armor with a big spiky shield and a giant potion on his back", imageOn: true, imageSrc: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg" }
    },
    //////////////////////////
    // Fake Skins Questions //
    //////////////////////////
    {
        questionProps: { headerText: "Is this a skin in League of Legends or a fan skin?", videoOn: true, videoSrc: "https://www.youtube.com/embed/BGVK4ZwGa6c?si=7JSWxP3vUmfMMr_t", startTime: "169", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;", isMuted: true},
        answerProps: { headerText: "Fan Skin" }
    },
    {
        questionProps: { headerText: "Is this a skin in League of Legends or a fan skin?", videoOn: true, videoSrc: "https://www.youtube.com/embed/O3HEa5tb2MM?si=-kAcCEV1HsnvSzXh", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"},
        answerProps: { headerText: "It's in League", bodyText: "2010 was a wild year" }
    },
    {
        questionProps: { headerText: "Is this a skin in League of Legends or a fan skin?", videoOn: true, videoSrc: "https://www.youtube.com/embed/9jLVgwSxlgY?si=WJ2a6zSAe3N0JxIG", startTime: "16", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;", isMuted: true},
        answerProps: { headerText: "Fan Skin"}
    },
    {
        questionProps: { headerText: "Is this a skin in League of Legends or a fan skin?", videoOn: true, videoSrc: "https://www.youtube.com/embed/Jwh2o6MwWPc?si=Rx6EJHDvWZEROjpV", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;", isMuted: true},
        answerProps: { headerText: "It's in League", bodyText: "No copyright infringement's ever seen." }
    },
    {
        questionProps: { headerText: "Are these skins in League of Legends or a fan skin?", imageOn: true, imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34547bf5-2e28-49c0-89ce-83eb7756025f/dd90hmu-f9b3e34a-53a3-48ef-9500-740956976349.png/v1/fill/w_1192,h_670/sewn_chaos_amumu_and_blitzcrank___render_by_lol_overlay_dd90hmu-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM0NTQ3YmY1LTJlMjgtNDljMC04OWNlLTgzZWI3NzU2MDI1ZlwvZGQ5MGhtdS1mOWIzZTM0YS01M2EzLTQ4ZWYtOTUwMC03NDA5NTY5NzYzNDkucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2j8tU7RCDcpKij_XKzJVWwjjTCforPOLmBaqYLM3Sm4" },
        answerProps: { headerText: "Neither", bodyText: "This skinline was deemed \"too low quality\" for league and was never added to league, even though the models were created." }
    },
    /////////////////////////////////////
    // Parlez-vous français? Questions //
    /////////////////////////////////////
    {
        questionProps: { headerText: "This is the Japanese voice of what character?", videoOn: true, videoSrc: "https://www.youtube.com/embed/EU7TQm8pkZM?si=-hYkvxKKCEcv0Szg", startTime: "37", videoHeight: "20", videoWidth: "20", isShowingControls: false },
        answerProps: { headerText:"", bodyText: "WHA HE WALLA WALLA WAAAAAA!  HEY HA WOLLO WOLLO WAAAAAY!", videoOn: true, videoSrc: "https://www.youtube.com/embed/EU7TQm8pkZM?si=-hYkvxKKCEcv0Szg", startTime: "37" }
    },
    {
        questionProps: { headerText: "This is the Japanese voice of what character?", videoOn: true, videoSrc: "https://www.youtube.com/embed/RBy0i1YOQWc?si=u4fJINhB5fur3y1_", startTime: "122", videoHeight: "20", videoWidth: "20", isShowingControls: false},
        answerProps: { headerText: "Fiddlesticks", videoOn: true, videoSrc: "https://www.youtube.com/embed/RBy0i1YOQWc?si=u4fJINhB5fur3y1_", startTime: "122" },
    },
    {
        questionProps: { headerText: "This is the French voice of what character?", videoOn: true, videoSrc: "https://www.youtube.com/embed/zrn2K4eFl5g?si=aw2D9yHvCvCU643H", videoHeight: "20", videoWidth: "20", isShowingControls: false},
        answerProps: { headerText: "Rammus", videoOn: true, videoSrc: "https://www.youtube.com/embed/zrn2K4eFl5g?si=aw2D9yHvCvCU643H", },
    },
    {
        questionProps: { headerText: "This is the German voice of what character?", videoOn: true, videoSrc: "https://www.youtube.com/embed/WCg5T82o5no?si=LNr1Qygh23Xri5aQ", startTime: "115", videoHeight: "20", videoWidth: "20", isShowingControls: false },
        answerProps: { headerText: "Ziggs", videoOn: true, videoSrc: "https://www.youtube.com/embed/WCg5T82o5no?si=LNr1Qygh23Xri5aQ", startTime: "115", }
    },
    {
        questionProps: { headerText: "This is the Italian voice of what character?", videoOn: true, videoSrc: "https://www.youtube.com/embed/pjRpnB-vpo4?si=wsP-MLmv5bEAZYDL", startTime: "280", videoHeight: "20", videoWidth: "20", isShowingControls: false},
        answerProps: { headerText: "Camille", videoOn: true, videoSrc: "https://www.youtube.com/embed/pjRpnB-vpo4?si=wsP-MLmv5bEAZYDL", startTime: "280" }
    },
    /////////////////////////////
    // Prosopagnosia Questions //
    /////////////////////////////
    {
        questionProps: { headerText: "Which champion has this skin?", imageOn: true, imageSrc: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.3.1/CHAMPION_SKIN/68023/ICON" },
        answerProps: { headerText: "(Cafe Cuties) Rumble", imageOn: true, imageSrc: "https://preview.redd.it/cafe-cuties-rumble-splash-art-v0-i1l6s1jwbftb1.jpg?auto=webp&s=1795793aa63fd4132c646238d8ab637ab390ca8e" }
    },
    {
        questionProps: { headerText: "Which champion has this skin?", imageOn: true, imageSrc: "https://cdna.artstation.com/p/assets/images/images/072/433/278/large/alsie-lau-porcelain-irelia-final2.jpg?1707340162" },
        answerProps: { headerText: "(Porcelain) Irellia", imageOn: true, imageSrc: "https://preview.redd.it/porcelain-irelia-splash-art-v0-priz8w2uyzgc1.jpeg?width=1080&crop=smart&auto=webp&s=2e0fc11cfe41fe1ed9bb57c85ab8c4c8a3f6f951" }
    },
    {
        questionProps: { headerText: "Which champion has this skin?", imageOn: true, imageSrc: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3a/Skin_Loading_Screen_Heartbreaker_Vi.jpg" },
        answerProps: { headerText: "(Heartbreaker) Vi", imageOn: true, imageSrc: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.3.1/CHAMPION_SKIN/254012/SPLASH?width=1920&height=1080&format=auto&auto=webp" }
    },
    {
        questionProps: { headerText: "Which champion has this skin?", imageOn: true, imageSrc: "https://prod.api.assets.riotgames.com/public/v1/asset/lol/14.3.1/CHAMPION_SKIN/91012/ICON" },
        answerProps: { headerText: "(Enduring Sword) Talon", imageOn: true, imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/332c0133-3790-4bd3-a48c-68289d04c27f/dcjsqxn-4b99eadb-da47-4e3d-8e52-4fde576c40e8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzMmMwMTMzLTM3OTAtNGJkMy1hNDhjLTY4Mjg5ZDA0YzI3ZlwvZGNqc3F4bi00Yjk5ZWFkYi1kYTQ3LTRlM2QtOGU1Mi00ZmRlNTc2YzQwZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ow0tjk_YaUl9C7bjmnWxQPuOcwcONxBt7sI3JLC0Gzw" }
    },
    {
        questionProps: { headerText: "Which champion has this icon?", imageOn: true, imageSrc: "https://pbs.twimg.com/media/F3NTuo4X0AAiSFC.png" },
        answerProps: { headerText: "Kayle", bodyText: "I will award DOUBLE POINTS if you can tell me what skinline this is from.", imageOn: true, imageSrc: "https://preview.redd.it/immortal-journey-kayle-splash-art-v0-fz5hinqzxjfb1.jpg?auto=webp&s=675ea3bdb3f103d9e637027bc899ade0748e2966" }
    },

    ////////////////////////
    // Nickname Questions //
    ////////////////////////
    {
        questionProps: { headerText: "Pykle Jordan" },
        answerProps: { headerText: "Pyke", bodyText: "He'll dunk on you", imageOn: true, imageSrc: "https://i.redd.it/7fw3awe44xg91.jpg" }
    },
    {
        questionProps: { headerText: "Wayne" },
        answerProps: { headerText: "Swain!", videoOn: true, videoSrc: "https://www.youtube.com/embed/BI-aDjb2sAA?si=GB6tFfGQLPnGr4hD", startTime: "14"}
    },
    {
        questionProps: { headerText: "Steek" },
        answerProps: { headerText: "Ghost's Pupper", bodyText: "We also would have accepted Fiddlesteeks.", imageOn: true, imageSrc: "https://media.discordapp.net/attachments/944096208991948840/1211025772957929552/image.png?ex=65ecb2a4&is=65da3da4&hm=116314b4a937a25752e8487c2350f849a75ffdf9b9710db454f95a3f85a8c6ff&=&format=webp&quality=lossless&width=502&height=670" }
    },
    {
        questionProps: { headerText: "Naka (according to Kuro)" },
        answerProps: { headerText: "Ivern", imageOn: true, imageSrc: "https://media3.giphy.com/media/3oz8xCXbQDReF34WWs/200w.gif?cid=6c09b952lujugtjjjwlq0xfzmyveutwa52x6qjhatxf3uwv4&ep=v1_gifs_search&rid=200w.gif&ct=g" }
    },
    {
        questionProps: { headerText: "What's his name?", imageOn: true, imageSrc: "https://i.redd.it/trm0b5vfex2a1.png"},
        answerProps: { headerText:"", bodyText: "I did not make this up.  Riot named this.", imageOn: true, imageSrc: "https://preview.redd.it/ball-cocks-v0-52n1y1hdix2a1.jpg?auto=webp&s=bac9c9ac0b90c23e039c28e85a0e282672371969" }
    },
]

export default cards;

/** 
 * Objects containing the props passed to the Question Screen and Answer Screen.
 * @typedef {Object} CardScreens
 * @property {ScreenData} questionProps - The `ScreenData` for the question
 * @property {ScreenData} answerProps - The `ScreenData` for the answer
 * */

//NOTE: Square brackets means it's an optional property
/** 
 * Props passed to the Open Screen component
 * @typedef {Object} ScreenData
 * @property {string} headerText - Large text at the top of the screen
 * @property {string} [bodyText] - Small text at the bottom of the screen below image and video.
 * @property {boolean} [imageOn] - If true, shows image at `imageSrc` between header and body text
 * @property {string} [imageSrc] - The link to the image, if `imageOn` is true
 * @property {boolean} [videoOn] - If true, shows embedded youtube video at `videoSrc` between header and body text
 * @property {string} [videoSrc] - The link to the video, if `videoOn` is true. NOTE: THIS NEEDS TO BE COPIED FROM THE EMBEDDED SHARE LINK ON YOUTUBE.
 * @property {number | string} [startTime] - Start time of the video in seconds.  No clue why, but this doesn't work with longer videos???
 * @property {string} [allow] - The "allow" value of the video.  Useful for enabling or disabling things like fullscreen and autoplay.
 * @property {boolean} [isMuted] - If true, the video will be muted when the card opens.
 * @property {boolean} [isShowingControls] - If false, the video will not have any of the control buttons (play/pause, mute/volume, settings, fullscreen, etc.) displayed
 * @property {number | string} [videoWidth] - Width of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * @property {number | string} [videoHeight] - Height of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * @property {number | string} [videoWidth] - Width of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * */