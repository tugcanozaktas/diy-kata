const joinNames = namesObj => {
    var names = []
    for (let i = 0; i < namesObj.length; i++){
        if(i === namesObj.length - 1){
            names.push(" & " + namesObj[i]["name"]);
        } else if( i === namesObj.length - 2){
            names.push(" " + namesObj[i]["name"])
        }else if(i === 0){
            names.push(namesObj[i]["name"] + ",")
        }
        else{
            names.push(" " + namesObj[i]["name"] + ",");
        }
        
    }
    console.log(names.join(""))
    return names.join("");
};

module.exports = joinNames;
