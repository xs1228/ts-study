var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var obj;
obj = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(obj);
