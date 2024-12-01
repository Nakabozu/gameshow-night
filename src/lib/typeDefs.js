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
 * @property {ZoomOutImageType} [zoomOutImageData] - The link to the image that will be slowly zoomed out.  If provided, startingX, startingY, and startingZoom should be set.
 * @property {string} [videoSrc] - The link to the video. NOTE: THIS NEEDS TO BE COPIED FROM THE EMBEDDED SHARE LINK ON YOUTUBE.
 * @property {string} [audioSrc] - The link to an audio track.
 * @property {number | string} [startTime] - Start time of the video in seconds.  No clue why, but this doesn't work with longer videos???
 * @property {string} [allow] - The "allow" value of the video.  Useful for enabling or disabling things like fullscreen and autoplay.
 * @property {boolean} [isYoutube] - Whether or not this is a YouTube video that should be played in an `<iframe>` instead of a `<video>` element
 * @property {boolean} [isMuted] - If true, the video will be muted when the card opens.
 * @property {boolean} [isShowingControls] - If false, the video will not have any of the control buttons (play/pause, mute/volume, settings, fullscreen, etc.) displayed
 * @property {number | string} [videoWidth] - Width of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * @property {number | string} [videoHeight] - Height of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * @property {number | string} [videoWidth] - Width of the embedded YouTube video in pixels.  Do not at units like `px` to the end.
 * */

/** 
 * Props passed to the Open Screen component
 * @typedef {Object} ZoomOutImageType
 * @property {string} imageSrc - The link to the image.
 * @property {number} startingX - The starting **pixel** value of the CSS `left` property for a ZoomOutImage
 * @property {number} startingY - The starting **pixel** value of the CSS `top` property for a ZoomOutImage
 * @property {number} startingZoom - The starting **percent** value of the CSS `height` property for a ZoomOutImage
*/