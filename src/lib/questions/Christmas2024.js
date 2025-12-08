// Who's That Pokemon images
import jackFrostNipping from "$lib/images/Christmas2024/JackFrostNippingAtYourNose.webp";
import convertibleToo from "$lib/images/Christmas2024/A54ConvertibleTooLightBlue.webp";
import twelveDays from "$lib/images/Christmas2024/TwelveDays.webp";
import termiteSmile from "$lib/images/Christmas2024/YouHaveTermitesInYourSmile.webp";
import rudolphNose from "$lib/images/Christmas2024/RudolfHadAVeryShinyNose.webp";
import cloverMeows from "$lib/audio/ManyCloverMeows.mp3";
import fenMeows from "$lib/audio/ManyFenMeows.mp3";
import mizuMeows from "$lib/audio/ManyMizukiMeows.mp3";
import moonMeows from "$lib/audio/ManyMoonMeows.mp3";
import balooCheesePuff from "$lib/audio/BalooAndCheesePuff.mp3";

import "$lib/typeDefs";

/** @type {string[]} */
export const christmas2024Topics = [
    // "The cat's meow",        // BONUS: Which of our kitties makes this meow?
    "Cat-astrophic Christmas ", // Cats in Christmas movies (usually getting hurt???)
    "Fright Before Christmas", // The Monsters of the Christmas Season
    "Yule Be Spending", // Questions about The Economics of Christmas
    "Sketchy Christmas Songs", // Pictionary with Christmas song lyrics
    "Stocking Stumpers", // Riddles that are Christmas themed
    "Holiday Potpourri", // Random Christmas Questions
];

/**
 * @type {{questionProps: ScreenData, answerProps: ScreenData}[]}
 */
export const christmas2024Cards = [
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
    /////////////////////////////////////
    // #endregion                      //
    // #region Cat-astrophic Christmas //
    /////////////////////////////////////
    {
        questionProps: {
            headerText: "What Christmas movie is this cat from?",
            zoomOutImageData: {
                imageSrc:
                    "http://www.cinemacats.com/wp-content/uploads/movies/nightmarebeforechristmas08.jpg",
                startingX: 1925,
                startingY: 1300,
                startingZoom: 500,
            },
        },
        answerProps: {
            headerText: "The Nightmare Before Christmas (1993)",
            bodyText:
                'In 2001, Walt Disney Pictures wanted to produce a sequel using computer animation, but Tim Burton convinced them to drop the idea as it would compromise the "purity" of the film.',
            videoSrc:
                "https://www.youtube.com/embed/ZVuToMilP0A?si=whz2XlePvblIQFJa&amp;clip=UgkxPH4X4cUg5e93if6ddrCb3k4pM7ondTNM&amp;clipt=ENS8BBjg6gQ",
        },
    },
    {
        questionProps: {
            headerText: "What Christmas movie is this cat from?",
            zoomOutImageData: {
                imageSrc:
                    "http://www.cinemacats.com/wp-content/uploads/movies/howthegrinch02.jpg",
                startingX: 3125,
                startingY: 750,
                startingZoom: 575,
            },
        },
        answerProps: {
            headerText: "How the Grinch Stole Christmas (2000)",
            bodyText:
                "The prosthetic make-up Jim Carrey wore took about two hours to apply and one hour to remove. Jim Carrey revealed that he felt so confined and uncomfortable in the latex skin and yak hair costume that he sought counselling from a CIA agent who taught him torture-resistance techniques.",
            videoSrc:
                "https://www.youtube.com/embed/cFlzJIU1awE?si=N6FJjaDZpLmOhoXX",
            startTime: 26,
        },
    },
    {
        questionProps: {
            headerText: "What Christmas movie is this cat from?",
            zoomOutImageData: {
                imageSrc:
                    "http://www.cinemacats.com/wp-content/uploads/movies/natlamchristmasvacation01.jpg",
                startingX: 1550,
                startingY: 500,
                startingZoom: 445,
            },
        },
        answerProps: {
            headerText: "National Lampoon's Christmas Vacation (1989)",
            bodyText:
                "After failing to get the Christmas lights to work one last time, Clark Griswold takes his frustration out on the plastic decorations in the front yard. Chevy Chase actually broke his pinky finger while punching Santa Claus. The film kept rolling, and the take was used.",
            videoSrc:
                "https://www.youtube.com/embed/PJW3Jpqjx5s?si=GU1jtXhyvN9nCFJ5&start=0&end=15",
        },
    },
    {
        questionProps: {
            headerText: "What Christmas movie is this cat from?",
            bodyText: "Double points if you know the cat's name",
            zoomOutImageData: {
                imageSrc:
                    "http://www.cinemacats.com/wp-content/uploads/movies/christmaswithkranks07.jpg",
                startingX: 1550,
                startingY: 500,
                startingZoom: 445,
            },
        },
        answerProps: {
            headerText: "Muffles from Christmas with the Kranks (2004)",
            bodyText:
                'The film is based on John Grisham\'s book "Skipping Christmas." The original title is seen in the newspaper article after the tanning salon incident. The title was changed to avoid confusion with "Surviving Christmas", another holiday comedy released in the same year.',
            videoSrc:
                "https://www.youtube.com/embed/jGfeNBDyRXU?si=LF52jcDIPh88AQmx&amp;clip=UgkxRQKnYZkQF64D1ncVxo156s6Go1ANIFrj&amp;clipt=EPbNBxj_4Qk",
        },
    },
    {
        questionProps: {
            headerText: "What Christmas movie is this cat from?",
            zoomOutImageData: {
                imageSrc:
                    "http://www.cinemacats.com/wp-content/uploads/movies/scrooged02.jpg",
                startingX: 1750,
                startingY: 430,
                startingZoom: 300,
            },
        },
        answerProps: {
            headerText: "Scrooged (1988)",
            imageSrc:
                "https://resizing.flixster.com/3wiyTtNcbh9TOOSNOw5Cp0MuIto=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11289_v_h9_ad.jpg",
        },
    },
    /////////////////////////////////////
    // #endregion                      //
    // #region Fright Before Christmas //
    // I give you the name of a Christmas monster and you guess its country of origin //
    /////////////////////////////////////
    {
        questionProps: {
            headerText: "From what country does The Grinch originate?",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/en/7/73/The_Grinch.png?20160112234734",
        },
        answerProps: {
            headerText: "The US",
            bodyText: "He's a mean one.",
            videoSrc:
                "https://www.youtube.com/embed/5kTeJ_AuC28?si=KMGKdnjBZgJ72O7O",
        },
    },
    {
        questionProps: {
            headerText: "From what country does Krampus originate?",
            imageSrc:
                "https://cdn.britannica.com/94/212894-050-6FF90A24/Krampus-Austrian-postcard-1910.jpg?w=300",
        },
        answerProps: {
            headerText: "Germany",
            bodyText:
                "This half-demon, half-goat is bound in chains and loves to swat bad children with birch branches before stuffing them in his bag to drown them, eat them, or cart them off to Hell.",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gruss_vom_Krampus.jpg/377px-Gruss_vom_Krampus.jpg",
        },
    },
    {
        questionProps: {
            headerText: "From what country does The Nisse originate?",
            bodyText: "Also called the Tomte, Tomtenisse, or Tonttu",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Julemotiv_tegnet_av_Jenny_Nystr%C3%B8m_%2824207693358%29.jpg/410px-Julemotiv_tegnet_av_Jenny_Nystr%C3%B8m_%2824207693358%29.jpg",
        },
        answerProps: {
            headerText: "Any Nordic/Scandinavian Country",
            bodyText:
                "This creature from Nordic folklore stands at 2 feet tall, is often accompanied by the mythical Yule Goat, and loves offerings of coarse wool, tobacco, and dirt.",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/0/0c/Olaus%281555%29-Hist_septentrionalibus-p127-stable-tomte%28detail_center%29.jpg",
        },
    },
    {
        questionProps: {
            headerText: "From what country does The Gryla originate?",
            imageSrc:
                "https://www.exploringiceland.is/uploads/2/4/3/9/24398351/gryla-350-0_orig.jpg",
        },
        answerProps: {
            headerText: "Iceland",
            bodyText:
                "This Ogress is the mother of The Yule Lads and accepts charitable donations of naughty children",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gr%C3%BDlukv%C3%A6%C3%B0i-Gr%C3%BDla2022.png/800px-Gr%C3%BDlukv%C3%A6%C3%B0i-Gr%C3%BDla2022.png",
        },
    },
    {
        questionProps: {
            headerText: "From what country does Frau Perchta originate?",
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/0/03/Masopust_dr%C5%BE%C3%ADme_10.jpg",
        },
        answerProps: {
            headerText: "Austria or Bavaria",
            bodyText:
                "If children were good, ate only fish and gruel on The Feast of Epiphany (Perchta's feast day), and little girls spun all of their flax and wool, she would leave a silver coin in a boot or pail for them.  If they were bad, she would slit their stomachs open, take out their innards, and stuff them full of straw and pebbles.",
            imageSrc:
                "https://lirp.cdn-website.com/dd40e958/dms3rep/multi/opt/th-510850077-1920w.jpeg",
        },
    },
    //////////////////////////////
    // #endregion               //
    // #region Yule Be Spending //
    //////////////////////////////
    {
        questionProps: {
            headerText:
                "This department store chain published a Christmas-themed catalog that nearly 1/6 of the US population used for Christmas shopping at its peak.",
            imageSrc:
                "https://blog.flipsnack.com/wp-content/uploads/2019/10/Cover-top-brands.jpg",
        },
        answerProps: {
            headerText: "Sears",
            bodyText:
                "The first Sears Christmas Wish Book was published in 1933, the middle of The Great Depression.",
            videoSrc:
                "https://media.hearstapps.com/loop/video/sears-wishbook-christmas-feature-4-1576711915.mp4",
            isYoutube: false,
            isMuted: true,
        },
    },
    {
        questionProps: {
            headerText:
                "Released in November 2006, this Christmas gift outpaced its two competitors and sold out across the world each holiday season for three consecutive years.",
            bodyText: 'One of its slogans was "Experience a new way to play"',
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzxV4X0PNi2GNNgR45IRGTdj0LfrWuoFgcg&s",
        },
        answerProps: {
            headerText: "The Nintendo Wii",
            bodyText:
                '"Wii would like to play" was their other, more popular slogan',
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Wii-Console.png/1024px-Wii-Console.png",
        },
    },
    {
        questionProps: {
            headerText:
                "People spend more on Christmas than any other holiday.  According to a survey of 7500+ US citizens, what holiday is the runner up in terms of spending?",
            imageSrc:
                "https://worldofprintables.com/wp-content/uploads/2023/08/Printable-2024-calendar-with-holidays-1024x791.jpg",
        },
        answerProps: {
            headerText: "Mother's Day",
            imageSrc:
                "https://cdn.statcdn.com/Infographic/images/normal/33368.jpeg",
        },
    },
    {
        questionProps: {
            headerText:
                "Which of the following is the closest to the amount of wrapping paper purchased in America each year",
            bodyText:
                "a. Enough to cover 1/4 of the US, b. Enough to cover every NFL football field, c. Enough to cover the land area of Manhattan, d. Enough to cover The Forbidden Isle of Hawaii, Ni'ihau.",
            imageSrc: "https://i.redd.it/msr7e3vsso521.jpg",
        },
        answerProps: {
            headerText:
                "~68 mi² of wrapping paper purchased each year and Ni'ihau is 69.5 mi²",
            bodyText:
                "Every NFL football field = ~0.06 mi², Land mass of Manhattan = ~23 mi², 1/4 of the US = ~1,000,000 mi².  If my math was right, you could wrap the Great Pyramid of Giza 1360 times with that much wrapping paper.",
            imageSrc:
                "https://www.tripsavvy.com/thmb/fPlj26BWn5Rhay0VdEysVIYCTuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-523662554-c7ca5b428be149c6b614fa551a27084b.jpg",
        },
    },
    {
        questionProps: {
            headerText:
                'How much does Mariah Carey make in royalties for "All I Want for Christmas Is You" per year?',
            bodyText:
                "No point penalty for wrong answers. Round your guess to one significant figure. For each guess, I'll let everyone know higher or lower.",
            imageSrc:
                "https://media2.giphy.com/media/f5AISF6hqbn0tFCSEk/giphy.gif?cid=6c09b952a1wkqvw9oy723z7n7oxc4xigoz60fhctn0otcqz9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        },
        answerProps: {
            headerText: "~$3,000,000",
            bodyText:
                "Royalties average out to roughly half a cent per play in today's economy, so that's ~600 million plays worldwide.  The next runner up, \"Last Christmas (1984)\" by Wham! isn't even close, netting just over $500,000 per year.",
            videoSrc:
                "https://www.youtube.com/embed/1giQVuoTAFM?si=yuRzUGWnm0I3OnJu",
        },
    },
    ////////////////////////////
    // #endregion             //
    // #region Sketchy Christmas Songs //
    ////////////////////////////
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: rudolphNose },
        answerProps: {
            headerText: "Rudolph the red nosed reindeer had a very shiny nose",
            bodyText:
                "Christmas Fun Fact: This song was the first to hit #1 on the Billboard Top 100 for the year 1950.  It wouldn't see the Billboard again until 68 years later in December 2018 where it would peak at #16 on the charts.",
            videoSrc:
                "https://www.youtube.com/embed/44bL90HP0Ys?si=x06mDlVRmnUqTRB8&amp;clip=UgkxOsSlZ9_v2ZOkxD8s3RQl1WW_3Xuwv-G7&amp;clipt=ENizARiw6gE",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: jackFrostNipping,
        },
        answerProps: {
            headerText: "Jack Frost nipping at your nose",
            bodyText:
                "Christmas Fun Fact: The version of this song commonly used today is the 4th professional recording of this song, recorded in 1961. That's 15 years after the original recording from 1946!",
            videoSrc:
                "https://www.youtube.com/embed/F1itSKJLWQY?si=piBnAXPu0XSzK2Gc&amp;clip=Ugkx8VF1sVayeX5NKyZwvgx4IRpu-CLiS6Mi&amp;clipt=EJS5ARji5wE",
        },
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: twelveDays },
        answerProps: {
            headerText: `Twelve drummers drumming, eleven pipers piping, ten lords a-leaping, nine ladies dancing, eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three French hens, two turtle doves, and a partridge in a pear tree.`,
            bodyText:
                "Christmas Fun Fact: PNC Bank has published the total cost of these items every year since 1984. They call it the Christmas Price Index.",
            videoSrc:
                "https://www.youtube.com/embed/9QPQI5QUs74?si=sNjGM28rNwA1N2w5&amp;clip=Ugkx67OTtb9q1krlmF3zJpGJs4aqTo0laPRN&amp;clipt=EJSFChjRoAw",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: convertibleToo,
        },
        answerProps: {
            headerText: "Santa baby, a '54 convertible too, light blue",
            bodyText:
                'Christmas Fun Fact: Eartha Kitt recorded a sequel to "Santa Baby [1953]" called "(This Year\'s) Santa Baby [1954]" where she talks about how the gifts from the original song are in disrepair and she needs more extravagant presents to replace them.',
            videoSrc:
                "https://www.youtube.com/embed/Mk_GmhD053E?si=xw8tf0z3hqmOCGHl&amp;clip=Ugkx0igyUCH0IQ8ELELgTvHpCoNzsvYwLemD&amp;clipt=EMeJAhjT2wI",
        },
    },
    {
        questionProps: {
            headerText: "Name The Lyrics",
            imageSrc: termiteSmile,
        },
        answerProps: {
            headerText: "You have termites in your smile",
            bodyText:
                "Christmas Fun Fact: The singer of this song was also the voice of Tony the Tiger",
            videoSrc:
                "https://www.youtube.com/embed/3Hj3U18FHgQ?si=gFrobeNFI6B2xLrP",
            startTime: "62",
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
    ///////////////////////////////
    // #endregion                //
    // #region Holiday Potpourri //
    ///////////////////////////////
    {
        questionProps: {
            headerText:
                "After a campaign in the 1970s, this became a popular Christmas Eve dinner in Japan",
            imageSrc:
                "https://resources.matcha-jp.com/resize/720x2000/2023/10/11-148280.webp",
        },
        answerProps: {
            headerText: "KFC",
            bodyText:
                'After the "Kentucky For Christmas" campaign, KFC got so popular on Christmas Eve that you have to place your order 6 weeks in advance.',
            imageSrc:
                "https://media.cnn.com/api/v1/images/stellar/prod/201224142254-03-getty-kfc-japan.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
        },
    },
    {
        questionProps: {
            headerText:
                "What was the most streamed Christmas movie from Nov 10th to Dec 10th 2023?",
            imageSrc: "https://i.imgur.com/hkZPVYS.jpg",
        },
        answerProps: {
            headerText: "Elf with 9 million views",
            bodyText:
                "National Lampoon's Christmas Vacation: 7.9M, Home Alone: 7.1M, The Santa Clause: 4.3M, Four Christmases: 3.5M (due almost entirely to East South Central US???)",
            imageSrc:
                "https://huntleyvoice.com/wp-content/uploads/2014/12/ELf.jpg",
        },
    },
    {
        questionProps: {
            headerText:
                "What is the only day of the week that Hanukkah cannot begin on?",
            imageSrc:
                "https://i.etsystatic.com/9684337/r/il/fff768/1355220504/il_1080xN.1355220504_898c.jpg",
        },
        answerProps: {
            headerText: "Tuesday",
            bodyText:
                "Hanukkah starts on the 25th day of Kislev in the Hebrew calendar.  Hanukkah can't fall on a Tuesday due to the way the Hebrew calendar's months adjust each year to the solar and lunar cycles the calendar is based on.",
            imageSrc:
                "https://www.101planners.com/wp-content/uploads/2021/08/Jewish-Months-color.webp",
        },
    },
    {
        questionProps: {
            headerText: "What decade was Kwanzaa created?",
            bodyText: "Double points if you can name the exact year.",
            imageSrc:
                "https://media.istockphoto.com/id/1198444346/vector/happy-kwanzaa-card-template-with-seven-candles.jpg?s=612x612&w=0&k=20&c=cZ0VPup7DQN4KusZwogaH9OAE4ZSdYyQx7gXKUqN1Y4=",
        },
        answerProps: {
            headerText: "1966",
            bodyText:
                "In 2019, the National Retail Federation found that 2.4% of those polled planned to celebrate Kwanza.",
            imageSrc: "https://ichef.bbci.co.uk/images/ic/640x360/p05rqzrf.jpg",
        },
    },
    {
        questionProps: {
            headerText:
                "What was the first song played on a musical instrument in space?",
            imageSrc:
                "https://as2.ftcdn.net/v2/jpg/01/25/88/43/1000_F_125884303_xhTn2B0aL7hRm0m0c78WcYppod52ptSd.jpg",
        },
        answerProps: {
            headerText: "Jingle Bells",
            bodyText:
                'In December 1965, two astronauts aboard Gemini 6A jokingly claimed to have seen an unidentified flying object piloted by Santa Claus.  They then played a rendition of "Jingle Bells" over the radio using an 8-note harmonica and a handful of small bells.',
            imageSrc:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ISS27_Catherine_Coleman_plays_a_flute.jpg/800px-ISS27_Catherine_Coleman_plays_a_flute.jpg",
        },
    },
];

export default christmas2024Cards;
