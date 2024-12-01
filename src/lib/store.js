import { writable } from "svelte/store";

/** 
 * @type {import("svelte/store").Writable<'jeopardy' | 'question' | 'answer'>} 
 * 
 * The page that's open.
 * 
 * - `jeopardy` shows the Jeopardy board.
 * - `question` shows the a question from the board
 * - `answer` shows the answer to the question 
*/
export const page = writable("jeopardy");
/** 
 * @type {import("svelte/store").Writable<{questionProps: ScreenData, answerProps: ScreenData}>} 
 * 
 * The page that's open.
 * 
 * - `jeopardy` shows the Jeopardy board.
 * - `question` shows the a question from the board
 * - `answer` shows the answer to the question 
*/
export const currentQnA = writable({questionProps: {headerText: "OOPS!"}, answerProps: {headerText: "OOPS!"}});
export const lastCardsScore = writable(0);
export const dailyDoubleIndex = writable(0);