var AppError = /** @class */ (function () {
    function AppError(message, type) {
        this.message = message;
        this.type = type;
    }
    return AppError;
}());
try {
    console.log('Before the error');
    throw new AppError('My error', 'Abstract');
    console.log('After the error');
}
catch (err) {
    if (err instanceof AppError) {
        console.log("".concat(err.type, ": ").concat(err.message));
    }
    else {
        console.log("Error: ".concat(err.message));
    }
}
console.log('The end');
