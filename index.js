// Write your solution in this file!
const employee =
{
    name: "Sam",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const updateEmp = {...employee}
    updateEmp[key] = value;
    return updateEmp;

}
updateEmployeeWithKeyAndValue()

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue()

function deleteFromEmployeeByKey(employee, key){
    const  updateEmp = { ...employee };
    delete updateEmp [key];
    return updateEmp ;
}
deleteFromEmployeeByKey()

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey()