let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(var index=0; index < students.length; index++){
  console.log("name" + ":" + students[index].name + "," + "cohort" +":"+ students[index].cohort)
}



let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

var chars = users['employees'];
for(var i=0; i<chars.length; i++){
 
   for(var prop in chars[i]){
    console.log(i+1 + "-" + chars[i].first_name + "," + chars[i].last_name + "-" + chars[i][prop].length);
  }
}