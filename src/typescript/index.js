var UserRequest;
(function (UserRequest) {
    UserRequest["ReadData"] = "READ_DATA";
    // ReadData = 2,
    UserRequest["SaveData"] = "SAVE_DATA";
    UserRequest["UpdateData"] = "UPDATE_DATA";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest["ReadData"]);
