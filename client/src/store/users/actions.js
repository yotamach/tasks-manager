import {actions} from './actionTypes';
import {getBoardSelector, getUserSelector, getWinnerSelector} from './selectors';
import store from '../index';

const state = store.getState();

let getBoard = (state) => {
	return getBoardSelector(state);
}

let getWinner = (state) => {
	return getWinnerSelector(state);
}

let getUser = (state) => {
	return getUserSelector(state);
}


let updateBoard = (row,col,currentUser) => {
	let board = [...getBoard(state)];
	board[row][col] = currentUser;
	const payload = {
		board
	};
	return { type: actions.CHANGE_BOARD, payload };
};

let updateUser = (userId) => {
	const payload = {
		currentUser: userId
	};
	return { type: actions.CHANGE_USER, payload };
};

let setWinner = () => {
	const payload = {
		winner: true
	};
	return { type: actions.WINNER   , payload };
};

export {
	updateBoard,
	getUser,
	getBoard,
	updateUser,
	setWinner,
	getWinner
};