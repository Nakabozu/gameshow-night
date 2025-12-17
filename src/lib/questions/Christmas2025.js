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
    // FRIENDS ONLY
    // "Last Christmas", // I give you a Christmas group chat quote.  You give who said it.
    // "Festive Fuzzballs", // Silhouettes of our cats in christmas attire
    // "Tanya, why?", // I give you a Tanya Christmas quote and you need give the general context for why she said it.
    // EVERYONE ELSE!
    "Who Roasts the Beast", // I give you a Holiday food, you give me its country of origin. The title is a great pun because THE WHOs roast the beast.
    "Holiday Cameo", // Movies that have a Christmas scene but aren't Christmas movies
    "Christmas in Review", // I give you a review of a Christmas movie or episode, you guess the movie.
    "Sketchy Christmas Songs", // I draw Christmas song lyrics with my left hand.  You guess the lyrics!
    "Match That Fit", // I give you a christmas character costume and you tell me the character
    "Mini Merry Melodies", // Name the song with only a short clip to go off of
];

/**
 * @type {{questionProps: ScreenData, answerProps: ScreenData}[]}
 */
export const christmas2025Cards = [
    // ////////////////////////////
    // // #endregion             //
    // // #region Last Christmas //
    // ////////////////////////////
    // {
    //     questionProps: {
    //         headerText: "Last Christmas, who said this quote?",
    //         bodyText: "Small penis manly",
    //     },
    //     answerProps: {
    //         headerText: "Zuzu",
    //         bodyText:
    //             "In response to an article Tanya linked about why penises in older paintings are so small",
    //         imageSrc: "https://i.imgur.com/4Hq7Kdg.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Last Christmas, who said this quote?",
    //         bodyText: "$820 Apple chain. A chain to hold your apple.",
    //     },
    //     answerProps: {
    //         headerText: "Ghost",
    //         bodyText:
    //             "After posting a link to a $820 chain to hold your apple.",
    //         imageSrc: "https://i.imgur.com/XebLdwU.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Last Christmas, who said this quote?",
    //         bodyText: "magical chihuahua",
    //     },
    //     answerProps: {
    //         headerText: "Melinda",
    //         bodyText:
    //             "In a conversation about the kinds of pets brought to Hogwarts",
    //         imageSrc: "https://i.imgur.com/Q6odalZ.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Last Christmas, who said this quote?",
    //         bodyText: "why are santa and mrs. claus different poop types",
    //     },
    //     answerProps: {
    //         headerText: "Kuro",
    //         bodyText: "In response to Zuzu posting a very weird picture.",
    //         imageSrc: "https://i.imgur.com/kKtuEfk.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Last Christmas, who said this quote?",
    //         bodyText: "Wrong Thong is my new drag name",
    //     },
    //     answerProps: {
    //         headerText: "Sef",
    //         bodyText: "In response to a review about a St. Clair Bingo",
    //         imageSrc: "https://i.imgur.com/79pk9Ez.png",
    //     },
    // },
    // ///////////////////////////////
    // // #endregion                //
    // // #region Festive Fuzzballs //
    // ///////////////////////////////
    // {
    //     questionProps: {
    //         headerText: "Which pets are these?",
    //         imageSrc: "https://i.imgur.com/TaoUylP.png",
    //     },
    //     answerProps: {
    //         headerText: "It's Jerry and Daisy!",
    //         imageSrc: "https://i.imgur.com/6JD2Tbj.jpeg",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Which pet is this?",
    //         imageSrc: "https://i.imgur.com/M9SAmKV.png",
    //     },
    //     answerProps: {
    //         headerText: "It's Mizuki!",
    //         imageSrc: "https://i.imgur.com/EbbBU4K.jpeg",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Which pet is this?",
    //         imageSrc: "https://i.imgur.com/QbsP7FC.png",
    //     },
    //     answerProps: {
    //         headerText: "It's Fennel!",
    //         imageSrc: "https://i.imgur.com/CKLS2y6.jpeg",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Which pet is this?",
    //         imageSrc: "https://i.imgur.com/uVTvVf8.png",
    //     },
    //     answerProps: {
    //         headerText: "It's Baloo!",
    //         imageSrc: "https://i.imgur.com/28axmmx.jpeg",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Which pet is this?",
    //         imageSrc: "https://i.imgur.com/rbb5Tsi.jpeg",
    //     },
    //     answerProps: {
    //         headerText: "It's Clover!",
    //         imageSrc: "https://i.imgur.com/ryhfSvi.jpeg",
    //     },
    // },
    // /////////////////////////
    // // #endregion          //
    // // #region Tanya, why? //
    // /////////////////////////
    // {
    //     questionProps: {
    //         headerText: "Tanya, why did you say?",
    //         imageSrc: "https://i.imgur.com/iQnIO5y.png",
    //     },
    //     answerProps: {
    //         headerText: "Sef mentioned the rising cost of eggs.",
    //         imageSrc: "https://i.imgur.com/cfQjvsg.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Tanya, why did you say?",
    //         imageSrc: "https://i.imgur.com/Rw1aOHy.png",
    //     },
    //     answerProps: {
    //         headerText:
    //             "Kuro asked Tanya if her wisdom tooth extraction was routine.",
    //         bodyText:
    //             "The conversation topic started with some doctors being bad doctors, especially when prescribing pain medication.",
    //         imageSrc: "https://i.imgur.com/XihyQqF.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Tanya, why did you say?",
    //         imageSrc: "https://i.imgur.com/XZ8F9Mv.png",
    //     },
    //     answerProps: {
    //         headerText:
    //             "Jade mentioned that she had Alex participate in the tradition of eating 12 grapes under a table in one minute at midnight for good luck.",
    //         bodyText: "The conversation topic was New Years traditions",
    //         imageSrc: "https://i.imgur.com/M5JDuAL.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Tanya, why did you say?",
    //         imageSrc: "https://i.imgur.com/DBM3trV.png",
    //     },
    //     answerProps: {
    //         headerText:
    //             "Zuzu said that having a glass of wine with dinner was casual alcoholism",
    //         bodyText:
    //             'The conversation topic was about what being "Sober Curious" is.',
    //         imageSrc: "https://i.imgur.com/iKehFic.png",
    //     },
    // },
    // {
    //     questionProps: {
    //         headerText: "Tanya, why did you say?",
    //         imageSrc: "https://i.imgur.com/oOCIshI.png",
    //     },
    //     answerProps: {
    //         headerText:
    //             'Ryan said: "You would need to consume 20 millions bananas to die from radiation"',
    //         bodyText:
    //             "The conversation topic was radiation poisoning from various sources.",
    //         imageSrc: "https://i.imgur.com/GIiXWmD.png",
    //     },
    // },
    /////////////////////////
    // #endregion          //
    // #region Roast Beast //
    /////////////////////////
    {
        questionProps: {
            headerText: "Where is Feuerzangenbowle from?",
            bodyText:
                "Feuerzangenbowle is a traditional holiday drink, a flaming punch made from" +
                " mulled wine with a rum-soaked sugarloaf set on fire and dripping caramelized" +
                " sugar into the spiced red wine below. ",
            imageSrc:
                "https://www.thefooddictator.com/wp-content/uploads/2019/12/Feuerzangenbowle.jpg",
        },
        answerProps: {
            headerText: "Germany",
            bodyText:
                'The name translates to "fire-tongs punch,"' +
                " referring to the tongs used to hold the sugarloaf over the bowl.",
            videoSrc:
                "https://www.youtube.com/embed/32vXvV6t4w8?si=HD7thxjLhnOmyILq",
        },
    },
    {
        questionProps: {
            headerText: "Where is eating KFC on Christmas a tradition?",
            bodyText:
                ' In 1974, "Kentucky for Christmas" filled a void for a festive, convenient' +
                " holiday meal in this country; especially since turkey wasn't traditional" +
                " and ovens were rare, making fried chicken a perfect substitute.",
            imageSrc:
                "https://i0.wp.com/www.resilientworker.net/wp-content/uploads/2020/08/SantaColonel-2.jpg?fit=1074%2C1733&ssl=1",
        },
        answerProps: {
            headerText: "Japan",
            bodyText:
                "Its rapid adoption led to the nationwide tradition of" +
                " pre-ordering special Christmas buckets, complete with cake and" +
                " shrimp, over a month in advance each holiday season.",
            videoSrc:
                "https://www.youtube.com/embed/KyYkQDO7v3A?si=mOoOdVdRxn6X0SCd",
        },
    },
    {
        questionProps: {
            headerText: "Where is Pozole from?",
            bodyText:
                "Pozole is a traditional, hearty soup or stew made with hominy and meat (typically pork or chicken).",
            imageSrc:
                "https://hips.hearstapps.com/hmg-prod/images/pozole-index-655b86b9eeb3f.jpg?crop=0.889xw:1.00xh;0.0561xw,0",
        },
        answerProps: {
            headerText: "Mexico",
            imageSrc:
                "https://static.vecteezy.com/system/resources/previews/016/453/283/non_2x/mexican-traditional-food-pozole-illustration-in-hand-drawn-style-vector.jpg",
        },
    },
    {
        questionProps: {
            headerText: "Where is Sufganiyah from?",
            bodyText:
                "Sufganiyah is a round, deep-fried, jelly-filled doughnut." +
                " These pillowy desserts are made from a yeasted dough, fried in oil, injected with jam" +
                " (traditionally raspberry) and dusted with powdered sugar. ",
            imageSrc:
                "https://www.onceuponachef.com/images/2018/11/Sufganiyot.jpg",
        },
        answerProps: {
            headerText: "Israel",
            bodyText:
                "The oil used to fry the dough symbolizes the miracle of the oil",
            imageSrc:
                "https://www.shutterstock.com/shutterstock/photos/2381806665/display_1500/stock-photo-experience-hanukkah-s-beauty-with-top-view-vertical-image-of-sufganiyot-utensils-star-of-david-2381806665.jpg",
        },
    },
    {
        questionProps: {
            headerText: "Where are Kulkuls from?",
            bodyText:
                "Kulkuls (also known as kalkals, kidyo, or kormolas) are a traditional," +
                " deep-fried Christmas-time sweet. These are small, bite-sized pieces of" +
                " sweetened dough, shaped into curls or shells and often coated in a sugar glaze.",
            imageSrc:
                "https://food-dee-dum.com/wp-content/uploads/2014/12/Food-Dee-Dum-Kulkuls-Recipe-26.jpg",
        },
        answerProps: {
            headerText: "India",
            videoSrc:
                "https://www.youtube.com/embed/Zdu0eOhV09Y?si=X6JHcZcqgu9Nfv-R",
            isMuted: true,
        },
    },
    ///////////////////////////
    // #endregion            //
    // #region Holiday Cameo //
    ///////////////////////////
    {
        questionProps: {
            headerText: "Name the movie",
            zoomOutImageData: {
                imageSrc:
                    "https://www.milwaukeeindependent.com/wp-content/uploads/2021/12/122221_DieHardXMas_01.jpg",
                startingX: 1450,
                startingY: 300,
                startingZoom: 515,
            },
        },
        answerProps: {
            headerText: "Die Hard",
            bodyText: "Yippee-ki-yay",
            videoSrc:
                "https://www.youtube.com/embed/gYWvwkXreaI?si=8l5SuEAruumA3w0H",
        },
    },
    {
        questionProps: {
            headerText: "Name the movie",
            zoomOutImageData: {
                imageSrc: "https://i.imgur.com/qwtCcPp.png",
                startingX: 710,
                startingY: 1625,
                startingZoom: 450,
            },
        },
        answerProps: {
            headerText: "Toy Story",
            videoSrc:
                "https://www.youtube.com/embed/DUDqONSkp2I?si=OnIPRql0P6zI-Nj5",
            startTime: 6,
        },
    },
    {
        questionProps: {
            headerText: "Name the movie",
            zoomOutImageData: {
                imageSrc:
                    "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/11/Shane-Black-Christmas-Iron-Man-3.jpg",
                startingX: 1200,
                startingY: 480,
                startingZoom: 290,
            },
        },
        answerProps: {
            headerText: "Iron Man 3",
            videoSrc:
                "https://www.youtube.com/embed/PXiUJEiLmJQ?si=mr7yg656qneEZ8_Z",
            startTime: 178,
        },
    },
    {
        questionProps: {
            headerText: "Name the movie",
            zoomOutImageData: {
                imageSrc:
                    "https://qudahalloween.com/cdn/shop/articles/Mean-Girls-Christmas-costume-featured_600x.jpg?v=1719395859",
                startingY: 240,
                startingX: 85,
                startingZoom: 325,
            },
        },
        answerProps: {
            headerText: "Mean Girls",
            videoSrc:
                "https://www.youtube.com/embed/oDU84nmSDZY?si=J-2ZzJFZ_rq1-NQ7",
            startTime: 61,
        },
    },
    {
        questionProps: {
            headerText: "Name the movie",
            zoomOutImageData: {
                imageSrc:
                    "https://s26162.pcdn.co/wp-content/uploads/sites/3/2019/12/Godfather-xmas-present-shopping.jpg",
                startingY: 830,
                startingX: 1600,
                startingZoom: 320,
            },
        },
        answerProps: {
            headerText: "The Godfather",
            videoSrc:
                "https://www.youtube.com/embed/5jHmqhoBAu8?si=C_vJ5n5dbaOlj_dS",
            startTime: 11,
        },
    },
    /////////////////////////////////
    // #endregion                  //
    // #region Christmas in Review //
    /////////////////////////////////
    {
        questionProps: {
            headerText: "What movie are they reviewing?",
            imageSrc: "https://i.imgur.com/1W6LHbi.png",
        },
        answerProps: {
            headerText: "A Christmas Story",
            imageSrc: "https://i.imgur.com/dN3SSXT.png",
        },
    },
    {
        questionProps: {
            headerText: "What movie are they reviewing?",
            imageSrc: "https://i.imgur.com/iuLNwFU.png",
        },
        answerProps: {
            headerText: "Home Alone",
            imageSrc: "https://i.imgur.com/ZRUn00M.png",
        },
    },
    {
        questionProps: {
            headerText: "What movie are they reviewing?",
            imageSrc: "https://i.imgur.com/aVyD2Ob.png",
        },
        answerProps: {
            headerText: "The Polar Express",
            imageSrc: "https://i.imgur.com/poD5Tfk.png",
        },
    },
    {
        questionProps: {
            headerText: "What movie are they reviewing?",
            imageSrc: "https://i.imgur.com/zGV3hqH.png",
        },
        answerProps: {
            headerText: "The Muppet Christmas Carol",
            imageSrc: "https://i.imgur.com/YfMRjQi.png",
        },
    },
    {
        questionProps: {
            headerText: "What movie are they reviewing?",
            imageSrc: "https://i.imgur.com/clZbNbL.png",
        },
        answerProps: {
            headerText: "A Christmas Prince",
            videoSrc:
                "https://www.youtube.com/embed/BsHT1fYouYU?si=wrU6SCbZ8Bzevlvw",
            startTime: 43,
        },
    },
    /////////////////////////////////////
    // #endregion                      //
    // #region Sketchy Christmas Songs //
    /////////////////////////////////////
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: "https://i.imgur.com/pvctwV3.png",
        },
        answerProps: {
            headerText: "Jingle Bell Rock",
            bodyText: "Jingle Bell Jingle Bell Jingle Bell Rock",
            imageSrc: "https://i.imgur.com/pvctwV3.png",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            //imageSrc: "https://i.imgur.com/7MXuz5N.png",
            imageSrc: "https://i.imgur.com/xrTYH0Q.png",
        },
        answerProps: {
            headerText: "Hark! The Herald Angels Sing",
            bodyText: "Hark! The Harold Angels Sing",
            //imageSrc: "https://i.imgur.com/7MXuz5N.png",
            imageSrc: "https://i.imgur.com/xrTYH0Q.png",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: "https://i.imgur.com/5gLutoC.png",
        },
        answerProps: {
            headerText: "Last Christmas",
            bodyText:
                "Last Christmas I gave you my heart; but the very next day you gave it away.",
            imageSrc: "https://i.imgur.com/5gLutoC.png",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: "https://i.imgur.com/JLRmKlo.png",
        },
        answerProps: {
            headerText: "Frosty the Snowman",
            bodyText:
                "With a corncob pipe and button nose and two eyes made out of coal.",
            imageSrc: "https://i.imgur.com/JLRmKlo.png",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: "https://i.imgur.com/yfAQu1E.png",
        },
        answerProps: {
            headerText: "Santa Claus is Coming to Town",
            bodyText:
                "You better watch out. You better not cry. You better not pout. I'm telling you why.",
            imageSrc: "https://i.imgur.com/yfAQu1E.png",
        },
    },
    ////////////////////////////
    // #endregion             //
    // #region Match That Fit //
    ////////////////////////////
    {
        questionProps: {
            headerText: "Match That Fit: $2475",
            bodyText:
                "Ralph Lauren Men's Cable-Knit Cashmere Sweater $1000, KHAITE Manhattan Leather Belt with Gold Buckle $580, David Koma Faux Fur Neck Scarf $453, Inspire Chic Single Breasted Mid Length Coat $220, WarriorStockade Leather Poulaines Shoes $135, Fiercepulse Men's Sunshine Yellow Leggings $90",
            imageSrc: "https://i.imgur.com/7E3tMEj.png",
        },
        answerProps: {
            headerText: "Buddy the Elf",
            imageSrc:
                "https://www.newsnationnow.com/wp-content/uploads/sites/108/2021/12/AP0310310354.jpg?w=876&h=493&crop=1",
        },
    },
    {
        questionProps: {
            headerText: "Match That Fit: $1920",
            bodyText:
                "Baturina Homewear Quilted Velvet Dressing Gown $860, Prada Silk and Cashmere Scarf $750, Hand crafted ceramic candle holder $160, Falke No. 4 Pure Silk Men Socks $100, Victorian Tassel Night Cap $50",
            imageSrc: "https://i.imgur.com/eShN3Pw.png",
        },
        answerProps: {
            headerText: "Ebeneezer Scrooge",
            imageSrc:
                "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-a7h68z_6e1ef720.jpeg",
        },
    },
    {
        questionProps: {
            headerText: "Match That Fit: $2325",
            bodyText:
                "Brioni Men's Journey Flat-Front Pleated Trousers $1370, Supreme Chalk Logo Sweatshirt $320, Handsome Stockholm Statement Perforated Blue Gloves $250, Portolando Ministripe Rib Scarf $140, Julys Felt Elf Shoes $105, GO-A-HAT Wide Brim Boater Hat $40",
            imageSrc: "https://i.imgur.com/z2abLYu.png",
        },
        answerProps: {
            headerText: "Mr. Snow Miser",
            imageSrc:
                "https://images.genius.com/2cb09faa19759b87f1425390ca31ce7d.480x352x68.gif",
        },
    },
    {
        questionProps: {
            headerText: "Match That Fit: $5405",
            bodyText:
                "Lord and Taylor Cotton Bomber Jacket $2875, Brunello Cucinelli Corduroy trousers $1300, Marsèll Mando Walnut Leather Derby Shoes $1100, Sigmund Genuine Leather Fatigue Cap $130",
            imageSrc: "https://i.imgur.com/2r8NIpn.png",
        },
        answerProps: {
            headerText: "Charlie Brown",
            imageSrc:
                "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3092x2067+0+0/resize/800/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F81%2F67%2Fd369e89a469e89328d1737edfb24%2F092524-apple-peanuts-special-holiday-season-big-image-03.jpg",
        },
    },
    {
        questionProps: {
            headerText: "Match That Fit: $4235",
            bodyText:
                "Leather Kloset Fox Fur Bomber Jacket $3600, BBeards Men's Gothic Vampire Wig $545, Dental Distortions Pennywise FX Fangs $50, Endura Blue Body Paint $45",
            imageSrc: "https://i.imgur.com/kvVHoZl.png",
        },
        answerProps: {
            headerText: "The Yeti",
            imageSrc:
                "https://i.pinimg.com/736x/25/2d/f2/252df2f12502b00aecc9a5b2cb56de50.jpg",
        },
    },
    /////////////////////////////////
    // #endregion                  //
    // #region Mini Merry Melodies //
    /////////////////////////////////
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
            audioSrc: mmmYaMOMG,
        },
        answerProps: {
            headerText: "You're a Mean One, Mr. Grinch",
            bodyText: "Albert Hague",
            videoSrc:
                "https://www.youtube.com/embed/3Hj3U18FHgQ?si=_12XmPUXQHveHeqZ",
            startTime: 27,
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
    // {
    //     questionProps: {
    //         headerText: "Name that tune!",
    //         audioSrc: mmmNQACT,
    //     },
    //     answerProps: {
    //         headerText: "Not Quite Almost Christmas Time",
    //         bodyText: "Tom Cardy",
    //         videoSrc:
    //             "https://www.youtube.com/embed/Ap9GqyLoWyY?si=zOeoPK4M6ptgbh0y",
    //         startTime: 41,
    //     },
    // },
    ////////////////
    // #endregion //
    ////////////////
];

export default christmas2025Cards;
