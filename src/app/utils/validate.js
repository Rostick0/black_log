export const regEmailPattern = /\S+@\S+\.\S+/;


export const equalFields = (firsValue, secondValue, error) => {
    if (firsValue === secondValue) return true;

    return error;
}

// export const emailPattern = (email) => {

// }