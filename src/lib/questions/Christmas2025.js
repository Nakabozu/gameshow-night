// Christmas Pet Questions
import ccBalooQ from "$lib/images/Christmas2025/Christmas_Cat_Baloo_Question.png";
import ccBaloo from "$lib/images/Christmas2025/Christmas_Cat_Baloo.jpg";
import ccCloverQ from "$lib/images/Christmas2025/Christmas_Cat_Clover_Question.png";
import ccClover from "$lib/images/Christmas2025/Christmas_Cat_Clover.jpg";
import ccFenQ from "$lib/images/Christmas2025/Christmas_Cat_Fen_Question.png";
import ccFen from "$lib/images/Christmas2025/Christmas_Cat_Fen.jpg";
import ccJerryQ from "$lib/images/Christmas2025/Christmas_Cat_Jerry_Question.png";
import ccJerry from "$lib/images/Christmas2025/Christmas_Cat_Jerry.jpg";
import ccMizukiQ from "$lib/images/Christmas2025/Christmas_Cat_Mizuki_Question.png";
import ccMizuki from "$lib/images/Christmas2025/Christmas_Cat_Mizuki.jpg";
// Last Christmas Questions
import lcApple from "$lib/images/Christmas2025/Last_Christmas_Ghost_Apple_Chain.png";
import lcPoo from "$lib/images/Christmas2025/Last_Christmas_Kuro_Poo.png";
import lcChihuahua from "$lib/images/Christmas2025/Last_Christmas_Melinda_Magical_Chihuahua.png";
import lcThong from "$lib/images/Christmas2025/Last_Christmas_Sef_Wrong_Thong.png";
import lcPP from "$lib/images/Christmas2025/Last_Christmas_Zuzu_Small_PP.png";
// Sketchy Christmas Questions
import scHtHAS from "$lib/images/Christmas2025/Sketchy_Christmas_HtHAS.png";
import scJBJBJBR from "$lib/images/Christmas2025/Sketchy_Christmas_JBJBJBR.png";
import scLC from "$lib/images/Christmas2025/Sketchy_Christmas_LC.png";
import scWaCCPaaBNaTEMOoC from "$lib/images/Christmas2025/Sketchy_Christmas_WaCCPaaBNaTEMOoC.png";
import scYBNPYBNCYBNSITYW from "$lib/images/Christmas2025/Sketchy_Christmas_YBNPYBNCYBNSITYW.png";
// Why Tanya Questions
import wtItalians from "$lib/images/Christmas2025/Tanya_Quote_Attack_On_Italians.png";
import wtItaliansA from "$lib/images/Christmas2025/Tanya_Quote_Attack_On_Italians_Answer.png";
import wtBanana from "$lib/images/Christmas2025/Tanya_Quote_Banana_Death.png";
import wtBananaA from "$lib/images/Christmas2025/Tanya_Quote_Banana_Death_Answer.png";
import wtChicken from "$lib/images/Christmas2025/Tanya_Quote_Chickens.png";
import wtChickenA from "$lib/images/Christmas2025/Tanya_Quote_Chickens_Answer.png";
import wtGrape from "$lib/images/Christmas2025/Tanya_Quote_Grapes.png";
import wtGrapeA from "$lib/images/Christmas2025/Tanya_Quote_Grapes_Answer.png";
import wtWisdom from "$lib/images/Christmas2025/Tanya_Quote_Wisdom.png";
import wtWisdomA from "$lib/images/Christmas2025/Tanya_Quote_Wisdom_Answer.png";
// Mini Merry Melodies
import mmmDDD from "$lib/audio/Christmas2025/Mini_Dreidel.mp3";
import mmmFN from "$lib/audio/Christmas2025/Mini_Feliz_Navidad.mp3";
import mmmYaMOMG from "$lib/audio/Christmas2025/Mini_Grinch.mp3";
import mmmLSN from "$lib/audio/Christmas2025/Mini_Little_Saint_Nick.mp3";
import mmmMWT from "$lib/audio/Christmas2025/Mini_Most_Wonderful_Time.mp3";
import mmmNQACT from "$lib/audio/Christmas2025/Mini_Not_Quite_Almost_Christmas_Time.mp3";
import "$lib/typeDefs";

/** @type {string[]} */
export const christmas2025Topics = [
    // "The cat's meow",     // BONUS: Which of our kitties makes this meow?
    "Festive Fuzzies", // Silhouettes of our cats in christmas attire
    "Last Christmas", // I give you a Christmas group chat quote.  You give who said it.
    "Sketchy Christmas Songs", // I draw Christmas song lyrics with my left hand.  You guess the lyrics!
    "Tanya, why?", // I give you a Tanya Christmas quote and you need give the general context for why she said it.
    "Stocking Stumpers", // Riddles that are Christmas themed
    "Mini Merry Melodies", // Name the song with only a short clip to go off of
];

/**
 * @type {{questionProps: ScreenData, answerProps: ScreenData}[]}
 */
export const christmas2025Cards = [
    // ////////////////////////////
    // // #region The cat's meow //
    // ////////////////////////////
    // {
    //     questionProps: { headerText: "Match the Meow!", audioSrc: fenMeows },
    //     answerProps: {
    //         headerText: "It's Fen!",
    //         videoSrc:
    //             "https://www.youtube.com/embed/cms3dULuKL4?si=VteIOGjkgtmlc017&amp;clip=UgkxmEgqBzMKoBeIqcxCUcMGXXL2xfg7aYEF&amp;clipt=ELj9GBi2uxk",
    //     },
    // },
    // {
    //     questionProps: { headerText: "Match the Meow!", audioSrc: cloverMeows },
    //     answerProps: {
    //         headerText: "It's Clover!",
    //         videoSrc:
    //             "https://www.youtube.com/embed/cms3dULuKL4?si=I8L1mILSaYpyIa4Q&amp;clip=UgkxJUK89FfP8w780fhe4VMd1MQfF8ZznxpH&amp;clipt=EMHAJhjAqyc",
    //     },
    // },
    // {
    //     questionProps: { headerText: "Match the Meow!", audioSrc: mizuMeows },
    //     answerProps: {
    //         headerText: "It's Mizuki!",
    //         videoSrc:
    //             "https://www.youtube.com/embed/cms3dULuKL4?si=RGO-Emy87IpvL50S&amp;clip=UgkxxjG7_J1S2l3JJ4B3au1eHq5Jg8EN5kVq&amp;clipt=ENimLxj08C8",
    //     },
    // },
    // {
    //     questionProps: { headerText: "Match the Meow!", audioSrc: moonMeows },
    //     answerProps: {
    //         headerText: "It's Moon!",
    //         videoSrc:
    //             "https://www.youtube.com/embed/cms3dULuKL4?si=xWqEerMk0FhkHbhx&amp;clip=UgkxxiBz3BAX4EKcQqsbBQgrawf-oML79OK4&amp;clipt=EKi8LRj72y4",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Match the Noise!",
    //         audioSrc: balooCheesePuff,
    //     },
    //     answerProps: {
    //         headerText: "Baloo and Cheese Puff",
    //         videoSrc:
    //             "https://www.youtube.com/embed/cms3dULuKL4?si=DH1iacgOllJdCBDz&amp;clip=UgkxL4R3hCl_VjUt0W4YCqq3gc7fBpvqNbzm&amp;clipt=EOC-NBj8iDU",
    //     },
    // },
    /////////////////////////////
    // #endregion              //
    // #region Festive Fuzzies //
    /////////////////////////////
    {
        questionProps: {
            headerText: "Which pets are these?",
            imageSrc: ccJerryQ,
        },
        answerProps: {
            headerText: "It's Jerry and Daisy!",
            imageSrc: ccJerry,
        },
    },
    {
        questionProps: {
            headerText: "Which pet is this?",
            imageSrc: ccMizukiQ,
        },
        answerProps: {
            headerText: "It's Mizuki!",
            imageSrc: ccMizuki,
        },
    },
    {
        questionProps: {
            headerText: "Which pet is this?",
            imageSrc: ccFenQ,
        },
        answerProps: {
            headerText: "It's Fennel!",
            imageSrc: ccFen,
        },
    },
    {
        questionProps: {
            headerText: "Which pet is this?",
            imageSrc: ccBalooQ,
        },
        answerProps: {
            headerText: "It's Baloo!",
            imageSrc: ccBaloo,
        },
    },
    {
        questionProps: {
            headerText: "Which pet is this?",
            imageSrc: ccCloverQ,
        },
        answerProps: {
            headerText: "It's Clover!",
            imageSrc: ccClover,
        },
    },
    ////////////////////////////
    // #endregion             //
    // #region Last Christmas //
    ////////////////////////////
    {
        questionProps: {
            headerText: "Last Christmas, who said this quote?",
            bodyText: "Small penis manly",
        },
        answerProps: {
            headerText: "Zuzu",
            bodyText:
                "In response to an article Tanya linked about why penises in older paintings are so small",
            imageSrc: lcPP,
        },
    },
    {
        questionProps: {
            headerText: "Last Christmas, who said this quote?",
            bodyText: "$820 Apple chain. A chain to hold your apple.",
        },
        answerProps: {
            headerText: "Ghost",
            bodyText:
                "After posting a link to a $820 chain to hold your apple.",
            imageSrc: lcApple,
        },
    },
    {
        questionProps: {
            headerText: "Last Christmas, who said this quote?",
            bodyText: "magical chihuahua",
        },
        answerProps: {
            headerText: "Melinda",
            bodyText:
                "In a conversation about the kinds of pets brought to Hogwarts",
            imageSrc: lcChihuahua,
        },
    },
    {
        questionProps: {
            headerText: "Last Christmas, who said this quote?",
            bodyText: "why are santa and mrs. claus different poop types",
        },
        answerProps: {
            headerText: "Kuro",
            bodyText: "In response to Zuzu posting a very weird picture.",
            imageSrc: lcPoo,
        },
    },
    {
        questionProps: {
            headerText: "Last Christmas, who said this quote?",
            bodyText: "Wrong Thong is my new drag name",
        },
        answerProps: {
            headerText: "Sef",
            bodyText: "In response to a review about a St. Clair Bingo",
            imageSrc: lcThong,
        },
    },
    /////////////////////////////////////
    // #endregion                      //
    // #region Sketchy Christmas Songs //
    /////////////////////////////////////
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: scJBJBJBR },
        answerProps: {
            headerText: "Jingle Bell Rock",
            bodyText: "Jingle Bell Jingle Bell Rock",
            imageSrc: scJBJBJBR,
        },
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: scHtHAS },
        answerProps: {
            headerText: "Hark the Harold Angels Sing",
            bodyText:
                "The guy on the right is Harold.  I gave him a name tag but it's hard to write with your left hand.",
            imageSrc: scHtHAS,
        },
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: scLC },
        answerProps: {
            headerText: "Last Christmas",
            bodyText:
                "Last Christmas I gave you my heart; but the very next day you gave it away.",
            imageSrc: scLC,
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: scWaCCPaaBNaTEMOoC,
        },
        answerProps: {
            headerText: "Frosty the Snowman",
            bodyText:
                "With a corncob pipe and button nose and two eyes made out of coal.",
            imageSrc: scWaCCPaaBNaTEMOoC,
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: scYBNPYBNCYBNSITYW,
        },
        answerProps: {
            headerText: "Santa Clause is Coming to Town",
            bodyText:
                "You better not pout. You better not cry.  You better not shout.  I'm telling you why.",
            imageSrc: scYBNPYBNCYBNSITYW,
        },
    },
    /////////////////////////
    // #endregion          //
    // #region Tanya, why? //
    /////////////////////////
    {
        questionProps: {
            headerText: "Tanya, why did you say?",
            imageSrc: wtChicken,
        },
        answerProps: {
            headerText: "Sef mentioned the rising cost of eggs.",
            imageSrc: wtChickenA,
        },
    },
    {
        questionProps: {
            headerText: "Tanya, why did you say?",
            imageSrc: wtWisdom,
        },
        answerProps: {
            headerText:
                "Kuro asked Tanya if her wisdom tooth extraction was routine.",
            bodyText:
                "The conversation topic started with some doctors being bad doctors, especially when prescribing pain medication.",
            imageSrc: wtWisdomA,
        },
    },
    {
        questionProps: {
            headerText: "Tanya, why did you say?",
            imageSrc: wtGrape,
        },
        answerProps: {
            headerText:
                "Jade mentioned that she had Alex participate in the tradition of eating 12 grapes under a table in one minute at midnight for good luck.",
            bodyText: "The conversation topic was New Years traditions",
            imageSrc: wtGrapeA,
        },
    },
    {
        questionProps: {
            headerText: "Tanya, why did you say?",
            imageSrc: wtItalians,
        },
        answerProps: {
            headerText:
                "Zuzu said that having a glass of wine with dinner was casual alcoholism",
            bodyText:
                'The conversation topic was about what being "Sober Curious" is.',
            imageSrc: wtItaliansA,
        },
    },
    {
        questionProps: {
            headerText: "Tanya, why did you say?",
            imageSrc: wtBanana,
        },
        answerProps: {
            headerText:
                'Ryan said: "You would need to consume 20 millions bananas to die from radiation"',
            bodyText:
                "The conversation topic was radiation poisoning from various sources.",
            imageSrc: wtBananaA,
        },
    },
    ///////////////////////////////
    // #endregion                //
    // #region Stocking Stumpers //
    ///////////////////////////////
    {
        questionProps: {
            headerText: "Solve the Riddle",
            bodyText:
                "In collars, ribbons, and skirts I dress. While standing still, I make a mess. I've a hat akin to specks in the sky. I'll add a twinkle to your eye.",
        }, //I feed myself 'till the holiday season. Then I'm headed inside for a festive reason.
        answerProps: {
            headerText: "A Christmas Fir",
            imageSrc:
                "https://assets.wfcdn.com/im/43772517/resize-h755-w755%5Ecompr-r85/2589/258926631/Artificial+Christmas+Tree+with+LED+Lights%2C+Ornament+Balls%2C+Tree+Top+Star%2C+Tree+Skirt+Set.jpg",
        },
    },
    {
        questionProps: {
            headerText: "Solve the Riddle",
            bodyText:
                "Move me and I become the devil. I operate on a world wide level. My mantra, I recite in threes. Beware I have my eye on thee.",
        },
        answerProps: {
            headerText: "Santa",
            bodyText:
                "Contrary to popular belief, 1930s Coca-Cola advertisements weren't the progenitor of a plump and jolly Santa dressed in red.  Instead, it was the cartoons and advertisements of Thomas Nast who spread this depiction of Father Christmas for decades starting in 1863.",
            imageSrc:
                "https://the-public-domain-review.imgix.net/collections/a-pictorial-history-of-santa-claus/800px-Santa_Claus_Sugar_Plums2C_1868.png?fit=max&w=1200&h=850",
        },
    },
    {
        questionProps: {
            headerText: "Solve the Riddle",
            bodyText:
                "Rarely by skill this thing is wrought, as, most often, it is bought. Sometimes a cube. Sometimes with a knot. Forever a secret this is not.",
        }, //Rarely by skill this thing is wrought, as, most often, it is bought.
        answerProps: {
            headerText: "A present",
            imageSrc:
                "https://media.istockphoto.com/id/1356160396/photo/group-of-different-christmas-gift-boxes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=B6_-qOiVisWF0akpfi0CuSjHkXNKaJlxd3KIhKCwzeU=",
        },
    },
    {
        questionProps: {
            headerText: "Solve the Riddle",
            bodyText:
                "“There is no armor I can't crack!” is this warrior's dictum. You prep a target from the sack, gifting it's next victim. The more its fed, the more you feast: Kernels, not of wisdom",
        },
        answerProps: {
            headerText: "A Nutcracker",
            imageSrc:
                "https://media0.giphy.com/media/M6IEvYZGDQs1sPEBnV/200w.gif?cid=6c09b952c4eouqxh3x93opac9hl1d9v2zn0czb8afjqo9o78&ep=v1_gifs_search&rid=200w.gif&ct=g",
        },
    },
    {
        questionProps: {
            headerText: "Solve the Riddle",
            bodyText:
                "Often used for art and eating; but on its own it's something fleeting. It falls for miles without breaks. When held tightly, a weapon it makes. If its quick march continues steadily, then take heed, for it is deadly.",
        },
        answerProps: {
            headerText: "Snow",
            imageSrc:
                "https://www.sltrib.com/resizer/COf2BSjajW8LKnB8wkyb7qnzWFA=/arc-anglerfish-arc2-prod-sltrib/public/W4MIEOALEZFIFMY6Y5K2CLSEUA.JPG",
        },
    },
    /////////////////////////////////
    // #endregion                  //
    // #region Mini Merry Melodies //
    /////////////////////////////////
    {
        questionProps: {
            headerText: "Name that tune!",
            audioSrc: mmmDDD,
        },
        answerProps: {
            headerText: "Dreidel, Dreidel, Dreidel",
            bodyText: "Mikhl Gelbart",
            videoSrc:
                "https://www.youtube.com/embed/26GnFJm04AE?si=MObc_S_BYnFtIKA_",
            startTime: 5,
        },
    },
    {
        questionProps: {
            headerText: "Name that tune!",
            audioSrc: mmmMWT,
        },
        answerProps: {
            headerText: "It's the Most Wonderful Time of the Year",
            bodyText: "Andy Williams",
            videoSrc:
                "https://www.youtube.com/embed/AN_R4pR1hck?si=PWAMBGJg3BR1PUwb",
            startTime: 88,
        },
    },
    {
        questionProps: {
            headerText: "Name that tune!",
            audioSrc: mmmFN,
        },
        answerProps: {
            headerText: "Feliz Navidad",
            bodyText: "José Feliciano",
            videoSrc:
                "https://www.youtube.com/embed/N8NcQzMQN_U?si=CUDMhTblfs-TbwHF",
            startTime: 13,
        },
    },
    {
        questionProps: {
            headerText: "Name that tune!",
            audioSrc: mmmLSN,
        },
        answerProps: {
            headerText: "Little Saint Nick",
            bodyText: "The Beach Boys",
            videoSrc:
                "https://www.youtube.com/embed/xp9rK8FmYog?si=eOkAzae3BHVzFfM_",
            startTime: 59,
        },
    },
    {
        questionProps: {
            headerText: "Name that tune!",
            audioSrc: mmmNQACT,
        },
        answerProps: {
            headerText: "Not Quite Almost Christmas Time",
            bodyText: "Tom Cardy",
            videoSrc:
                "https://www.youtube.com/embed/Ap9GqyLoWyY?si=zOeoPK4M6ptgbh0y",
            startTime: 41,
        },
    },
];

export default christmas2025Cards;
