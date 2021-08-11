const employee = {
    name: "Melissa",
    streetAddress: "110 Woolsey Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,[key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const revisedEmployee = {
        ...employee
    }
    delete revisedEmployee[key];
    return revisedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}