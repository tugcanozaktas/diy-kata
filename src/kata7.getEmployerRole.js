const getEmployerRole = (employeeName, employees) => {
    for (let i = 0; i < employees.length; i++) {
        if(employees[i]["name"] === employeeName){
            return employees[i]["role"];
        }
    }
    
    return "There is no such employee";
};

module.exports = getEmployerRole;
