import React, {Component} from 'react';
import Cell from '../cell/Cell';
import { connect } from 'react-redux'
import {Header} from 'semantic-ui-react'
import {updateBoard, getUser, getBoard, updateUser, setWinner, getWinner} from '../../store/actions';

const mapStateToProps = (state) => {
	return {
		currentUser: getUser(state),
		currentBoardState: getBoard(state),
		winner: getWinner(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeBoard: (row,col,currentUser) => {
			const action = updateBoard(row,col,currentUser);
			dispatch(action);
		},
		changeUser: (userId) => {
			const action = updateUser(userId);
			dispatch(action);
		},
		setWinner: () => {
			const action = setWinner();
			dispatch(action);
		}
	}
};

class Board extends Component {
	constructor(props) {
		super(props);
	}

	checkScore = () => {
		const {setWinner,currentBoardState} = this.props;
		const board = [...currentBoardState];
		console.log(board);
		for(let i=0;i<2;i++) {
			if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] !== -1) {
				setWinner();
			}
			if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] !== -1) {
				setWinner();
			}
		}
		if((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] !== -1) ||
			(board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== -1)) {
				setWinner();
		}
	}

	onSelect = (row,col) => {
		const {
			changeBoard,
			changeUser,
			currentUser
		} = this.props;
		changeBoard(row,col,currentUser);
		const nextUser = currentUser === 1 ? 2 : 1;
		changeUser(nextUser);
		this.checkScore();
	}

	showCells() {
		const {currentBoardState} = this.props;
		const board = [...currentBoardState];
		return board.map((row,index1) => {
			const rowView = row.map((item,index2) => <td key={index1+index2} onClick={() => this.onSelect(index1,index2)}><Cell val={item} /></td>)
			return <tr>{rowView}</tr>;
		});
	}
	getWinnerMessage= () => {
		const {getUser} = this.props;
		return <h1 className="">The winner is user {getUser}</h1>;
	}

	render() {
		const {winner} = this.props;
		return (
			<div>
				<Header as='h2' content='Board' />
				<table>
					<tbody>
						{winner ? this.getWinnerMessage() : this.showCells()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Board);