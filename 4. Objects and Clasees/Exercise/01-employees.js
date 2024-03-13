function solve(employeeNames) {
    const employees = {};
    for (const name of employeeNames) {
        employees[name] = name.length
    }

    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
    }
}