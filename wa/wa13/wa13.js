// Assignment 13: Human Resources

// Problem 1
const employeeName = {
    "employees":[
        {
            "firstName": "Sam", 
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21300,
            "raiseEligible": false
        }
    ]
};
console.log("Question 1");
console.log(employeeName);


// Problem 2
const companyName = {
    "company":[
        {
            "companyName": "Tech Stars",
            "website": "www.techstars.site",
            "employees":[
                {
                    "firstName": "Sam", 
                    "department": "Tech",
                    "designation": "Manager",
                    "salary": 40000,
                    "raiseEligible": true
                },
                {
                    "firstName": "Mary",
                    "department": "Finance",
                    "designation": "Trainee",
                    "salary": 18500,
                    "raiseEligible": true
                },
                {
                    "firstName": "Bill",
                    "department": "HR",
                    "designation": "Executive",
                    "salary": 21300,
                    "raiseEligible": false
                }
            ]
        }
    ]
};
console.log("Question 2");
console.log(companyName);


// Problem 3
const company3 = {
    "employeeList":[
        {
            "firstName": "Sam", 
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21300,
            "raiseEligible": false
        },
        {
            "firstName": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
        }
    ]
};
function addEmployee (obj, name, dep, des, sal, raise) {
    let employee = {
        "firstName": name,
        "department": dep,
        "designation": des,
        "salary": sal,
        "raiseEligible": raise
    }
    obj['employeeList'].push(employee);
}
addEmployee(company3, "Anna", "Tech", "Executive", 25600, false);
console.log("Question 3");
console.log(company3);


// Probelm 4
let salaryTotal = 0;
for(let i = 0; i < company3.employeeList.length; i++) {
    salaryTotal +=  company3.employeeList[i]['salary'];
};
console.log("Question 4");
console.log(salaryTotal);


// Probelm 5
for(let i = 0; i < company3.employeeList.length; i++) {
   if(company3.employeeList[i]['raiseEligible']){
    company3.employeeList[i]['salary'] += company3.employeeList[i]['salary'] * .1;
    company3.employeeList[i]['raiseEligible'] = false;

   }
};

console.log("Question 5");
console.log(company3);


// Problem 6
let arr = ['Anna', 'Sam'];
for(let i = 0; i < company3.employeeList.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(company3.employeeList[i]['firstName'] == arr[j]){
            company3.employeeList[i]['wfh'] = true;
        }else{
            company3.employeeList[i]['wfh'] = false;
        }
    }

}

console.log("Question 6")
console.log(company3)