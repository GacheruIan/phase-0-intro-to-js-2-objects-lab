// Write your solution in this file!
const employee ={
    name: "Sam",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmp = {...employee}
    updateEmp[key] = value;
    return updateEmp;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const  updateEmp = { ...employee };
    delete updateEmp [key];
    return updateEmp ;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}