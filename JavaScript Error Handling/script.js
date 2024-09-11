//! Catch Specific Errors
try {
    // some code
}catch(error) {
    if(error instanceof TypeError) {
        console.error("Type Error: ", error.message);
    }else if(error instanceof ReferenceError) {
        console.error("Reference Error: ", error.message);
    }else {
        console.error("General Error: ", error.message);
    }
}

//! use custom Error Classes
class CustomerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomerError';
    }
}
throw new CustomerError("This is a custom error");


//! Avoid silent errors
try {
    // Code that may throw an error
}catch(error) {
    console.log("Error: ", error.message);
}

//! clean Up resources
try {
    // Code that may throw an error
}finally {
    // clean up code
}