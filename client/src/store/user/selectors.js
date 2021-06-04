const getBoardSelector = (state) => state.board;
const getUserSelector = (state) => state.currentUser;
const getWinnerSelector = (state) => state.winner;

export {
	getBoardSelector,
	getUserSelector,
	getWinnerSelector
};