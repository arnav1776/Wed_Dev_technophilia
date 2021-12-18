var user = "testprep";

switch (user) {
    case "admin":
        console.log("Full Access");
        break;
    case "subadmin":
        console.log("Access to create/delete course");
        break;
    case "testprep":
        console.log("Access to create/delete tests");
        break;
    case "admin":
        console.log("Access to consume the content");
        break;

    default:
        console.log("Trial User");
        break;
}