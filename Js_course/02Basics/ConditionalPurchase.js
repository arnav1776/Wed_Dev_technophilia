var isLoggedIn = true;
var isEmaiVerified = true;
var cardInfo = true;

if (isLoggedIn) {
    console.log("Logged In Successfully");
    if (isEmaiVerified) {
        console.log("Email is Verified");
        if (cardInfo) {
            console.log("You can now make a purchase");
        }
    }
}

if (isLoggedIn && isEmaiVerified && cardInfo) {
    console.log("Allow User to make a Purchase");
}
else {
    console.log("Access Denied")
}