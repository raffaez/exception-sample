class AppError{
    public message: string;
    public type: string;

    constructor(message: string, type: string){
        this.message = message;
        this.type = type;
    }
}

try{
    console.log('Before the error');
    throw new AppError('My error', 'Abstract');
    console.log('After the error')
}catch(err){
    if(err instanceof AppError){
        console.log(`${err.type}: ${err.message}`);
    }else{
        console.log(`Error: ${err.message}`);
    }
}

console.log('The end');