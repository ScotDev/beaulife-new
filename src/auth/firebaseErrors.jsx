export const parseFirebaseAuthError = (errorMsg) => {
    let readableResponse;
    switch (errorMsg) {
        case "auth/email-already-in-use":
            readableResponse = "Email address already in use"
            break;
        case "auth/invalid-email":
            readableResponse = "Email address is invalid"
            break;
        default:
            break;
    }

    return readableResponse;
}