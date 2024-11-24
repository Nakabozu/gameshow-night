// Who's That Pokemon images
import jackFrostNipping from '$lib/images/Christmas2024/JackFrostNippingAtYourNose.webp';


/** @type {string[]} */
export const christmas2024Topics = [
    "The cat's meow",           // BONUS: Which of our kitties makes this meow?
    "Fright Before Christmas",  // The Monsters of the Christmas Season
    "Yule Be Spending",         // Questions about The Economics of Christmas
    "Sketchy Christmas Songs",  // Pictionary with Christmas song lyrics
    "Eat, Drink, and Be Merry", // Christmastime meal traditions
    "Holiday Potpourri"         // Random Christmas Questions
];

/**
 * @type {{questionProps: ScreenData, answerProps: ScreenData}[]}
 */
export const christmas2024Cards = [
    ////////////////////////////
    // #region The cat's meow //
    ////////////////////////////
    {
        questionProps: { headerText: "Whose meows are these?", audioSrc: "" },
        answerProps: { headerText: "Fen and Clovers!", videoSrc: "https://www.youtube.com/embed/z8WvSGNEV24?si=Z6cBn4DzseOGhV6W" }
    },
    {
        questionProps: { headerText: "Whose meow is this?", audioSrc: "" },
        answerProps: { headerText: "It's Mizuki!", videoSrc: "https://www.youtube.com/embed/acEEBZX35ks?si=7dGHrVdZiYf7mRkV" }
    },
    {
        questionProps: { headerText: "Whose meow is this?", audioSrc: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "Whose meow is this?", audioSrc: "" },
        answerProps: { headerText: "It's Moon!" }
    },
    {
        questionProps: { headerText: "What is this noise?", audioSrc: "" },
        answerProps: { headerText: "Baloo and Cheese Puff" }
    },
    /////////////////////////////////////
    // #endregion                      //
    // #region Fright Before Christmas //
    // I give you the name of a Christmas monster and you guess its country of origin //
    /////////////////////////////////////
    {
        questionProps: { headerText: "The Grinch", imageSrc: "https://upload.wikimedia.org/wikipedia/en/7/73/The_Grinch.png?20160112234734" },
        answerProps: { headerText: "The US", bodyText: "He's a mean one.", videoSrc: "https://www.youtube.com/embed/5kTeJ_AuC28?si=KMGKdnjBZgJ72O7O"}
    },
    {
        questionProps: { headerText: "Krampus", imageSrc: "https://cdn.britannica.com/94/212894-050-6FF90A24/Krampus-Austrian-postcard-1910.jpg?w=300" },
        answerProps: { headerText: "Germany", bodyText: "This half-demon, half-goat is bound in chains and loves to swat bad children with birch branches before stuffing them in his bag to drown them, eat them, or cart them off to Hell.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gruss_vom_Krampus.jpg/377px-Gruss_vom_Krampus.jpg" }
    },
    {
        questionProps: { headerText: "The Nisse", bodyText: "Also called the Tomte, Tomtenisse, or Tonttu", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Julemotiv_tegnet_av_Jenny_Nystr%C3%B8m_%2824207693358%29.jpg/410px-Julemotiv_tegnet_av_Jenny_Nystr%C3%B8m_%2824207693358%29.jpg" },
        answerProps: { headerText: "Any Nordic/Scandinavian Country", bodyText: "This creature from Nordic folklore stands at 2 feet tall, is often accompanied by the mythical Yule Goat, and loves offerings of coarse wool, tobacco, and dirt.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Julemotiv_tegnet_av_Jenny_Nystr%C3%B8m_%2824207693358%29.jpg/410px-Julemotiv_tegnet_av_Jenny_Nystr%C3%B8m_%2824207693358%29.jpg" }
    },
    {
        questionProps: { headerText: "The Gryla", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gr%C3%BDlukv%C3%A6%C3%B0i-Gr%C3%BDla2022.png/800px-Gr%C3%BDlukv%C3%A6%C3%B0i-Gr%C3%BDla2022.png" },
        answerProps: { headerText: "Iceland", bodyText: "This Ogress is the mother of The Yule Lads and accepts charitable donations of naughty children", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gr%C3%BDlukv%C3%A6%C3%B0i-Gr%C3%BDla2022.png/800px-Gr%C3%BDlukv%C3%A6%C3%B0i-Gr%C3%BDla2022.png" }
    },
    {
        questionProps: { headerText: "Frau Perchta", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/03/Masopust_dr%C5%BE%C3%ADme_10.jpg" },
        answerProps: { headerText: "Austria or Bavaria", bodyText: "If children were good, ate only fish and gruel on The Feast of Epiphany (Perchta's feast day), and little girls spun all of their flax and wool, she would leave a silver coin in a boot or pail for them.  If not, she would slit their stomachs open, take out their innards, and stuff them full of straw and pebbles.", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/03/Masopust_dr%C5%BE%C3%ADme_10.jpg" }
    },
    //////////////////////////////
    // #endregion               //
    // #region Yule Be Spending //
    //////////////////////////////
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "People spend more on Christmas than any other holiday.  According to a survey of 7500+ US citizens, what holiday is the runner up in terms of spending?" },
        answerProps: { headerText: "Mother's Day", bodyText: "", imageSrc: "https://cdn.statcdn.com/Infographic/images/normal/33368.jpeg" }
    },
    {
        questionProps: { headerText: "Approximately how much wrapping paper is used in the US annually?", bodyText: "a. ~58 million ft², b. ~4.6 million ft², c. ~3.7 billion ft², d. 174K ft²" },
        answerProps: { headerText: "58 million ft²", bodyText: "That's just barely enough to wrap the entirety of downtown Toronto in wrapping paper, including infrastructure and buildings." }
    },
    {
        questionProps: { headerText: "How many times does Mariah Carey's \"All I Want for Christmas Is You\" LEGALLY get played in COMMERCIAL SETTINGS (stores, ads, etc.) per year?", bodyText: "You can be off by a factor of 5" },
        answerProps: { headerText: "6 billion times worldwide" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    ////////////////////////////
    // #endregion             //
    // #region Sketchy Christmas Songs //
    ////////////////////////////
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: "" },
        answerProps: { headerText: "Rudolph the red nosed reindeer had a very shiny nose", videoSrc: "https://www.youtube.com/embed/44bL90HP0Ys?si=x06mDlVRmnUqTRB8&amp;clip=UgkxOsSlZ9_v2ZOkxD8s3RQl1WW_3Xuwv-G7&amp;clipt=ENizARiw6gE" }
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: "" },
        answerProps: { headerText: "You have termites in your smile", bodyText: "Christmas Fun Fact: The singer of this song was also the voice of Tony the Tiger!", videoSrc: "https://www.youtube.com/embed/3Hj3U18FHgQ?si=gFrobeNFI6B2xLrP", startTime: "62" }
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: jackFrostNipping },
        answerProps: { headerText: "Jack Frost nipping at your nose", videoSrc: "https://www.youtube.com/embed/F1itSKJLWQY?si=piBnAXPu0XSzK2Gc&amp;clip=Ugkx8VF1sVayeX5NKyZwvgx4IRpu-CLiS6Mi&amp;clipt=EJS5ARji5wE"}
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: "" },
        answerProps: { headerText: "Santa baby, a '54 convertible too, light blue", videoSrc: "https://www.youtube.com/embed/Mk_GmhD053E?si=xw8tf0z3hqmOCGHl&amp;clip=Ugkx0igyUCH0IQ8ELELgTvHpCoNzsvYwLemD&amp;clipt=EMeJAhjT2wI" }
    },
    {
        questionProps: { headerText: "Name The Lyrics", imageSrc: "" },
        answerProps: { headerText: `Twelve drummers drumming, eleven pipers piping, ten lords a-leaping, nine ladies dancing, eight maids a-milking, seven swans a-swimming, six geese a-laying, five gold rings, four calling birds, three French hens, two turtle doves, and a partridge in a pear tree.`, bodyText: "Christmas Fun Fact: PNC Bank has published the total cost of these items every year since 1984. They call it the Christmas Price Index.", videoSrc: "https://www.youtube.com/embed/9QPQI5QUs74?si=sNjGM28rNwA1N2w5&amp;clip=Ugkx67OTtb9q1krlmF3zJpGJs4aqTo0laPRN&amp;clipt=EJSFChjRoAw" }
    },
    //////////////////////////////////////
    // #endregion                       //
    // #region Eat, Drink, and Be Merry //
    ///////////////////////////////////////
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    ///////////////////////////////
    // #endregion                //
    // #region Holiday Potpourri //
    ///////////////////////////////
    {
        questionProps: { headerText: "After a campaign in the 1970s, this became a popular Christmas Eve dinner in Japan" },
        answerProps: { headerText: "KFC", bodyText: "After the \"Kentucky for Christmas\" campaign, KFC got so popular on Christmas Eve, that you have to place your order 6 weeks in advance.", imageSrc: "https://media.cnn.com/api/v1/images/stellar/prod/201224142254-03-getty-kfc-japan.jpg?q=w_1600,h_900,x_0,y_0,c_fill" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
    {
        questionProps: { headerText: "" },
        answerProps: { headerText: "" }
    },
]

export default christmas2024Cards;

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
 * @property {string} [imageSrc] - The link to the image.
 * @property {string} [videoSrc] - The link to the video. NOTE: THIS NEEDS TO BE COPIED FROM THE EMBEDDED SHARE LINK ON YOUTUBE.
 * @property {string} [audioSrc] - The link to the audio, if `audioOn` is true
 * @property {number | string} [startTime] - Start time of the video in seconds.  No clue why, but this doesn't work with longer videos???
 * @property {string} [allow] - The "allow" value of the video.  Useful for enabling or disabling things like fullscreen and autoplay.
 * @property {boolean} [isMuted] - If true, the video will be muted when the card opens.
 * @property {boolean} [isShowingControls] - If false, the video will not have any of the control buttons (play/pause, mute/volume, settings, fullscreen, etc.) displayed
 * @property {number | string} [videoWidth] - Width of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * @property {number | string} [videoHeight] - Height of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * @property {number | string} [videoWidth] - Width of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * */