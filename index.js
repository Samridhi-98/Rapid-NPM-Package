const entertainment = require("./components/entertainment");
const science = require("./components/science");

//const KEY="3c024bb258b14a3796b0ddd518d59c0f";
//sortBy-> relevancy, popularity
let sortBy = "popularity";

const callback = (data) => {
    console.log(data);
    return data;
}
//entertainment(callback, sortBy);
science(callback);

