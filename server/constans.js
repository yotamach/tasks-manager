function ErrorResponse(err) {
	return {
		success: false,
		error: {
			message: err.message || "Internal server error",
			status: err.status || 500,
			name: err.name || "InternalServerError"
		}
	};
}

function NotFoundResponse(data) {
	return {
		success: false,
		error: {
			message: `${data} not found`,
			status: 404,
			name: "NotFound"
		}
	};
}

function UnAuthorizationResponse(message) {
	return {
		success: false,
		error: {
			message,
			status: 401,
			name: "UnAuthorization"
		}
	};
}

function ForbiddenError() {
	return {
		success: false,
		error: {
			message: "This call is forbnidden",
			status: 403,
			name: "ForbiddenError"
		}
	};
}

module.exports = {
	ErrorResponse,
	NotFoundResponse,
	UnAuthorizationResponse,
	ForbiddenError
};