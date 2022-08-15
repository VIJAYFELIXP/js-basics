console.log('ATLANTA FALCONS')

const atlantaFalcons = {

   Player1:{ firstName: "Patrick",
    lastName: "Mahomes",
    age: 26,
    qb: 15,
    college: 'texas tech',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player2:{ firstName: "Tom",
    lastName: "Brady",
    age: 45,
    qb: 12,
    college: 'Michigan',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player3:{ firstName: "Ezekiel",
    lastName: "Elliott",
    age: 27,
    qb: 21,
    college:'ohio' ,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player4:{ firstName: "Saquon",
    lastName: "Barkley",
    age: 25,
    qb: 26,
    college: 'penn state',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player5:{ firstName: "Aaron",
    lastName: "Rodgers",
    age: 38,
    qb: 12,
    college: 'california',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player6:{ firstName: "Drew",
    lastName: "Brees",
    age: 21,
    qb: 0,
    college: 'purdue',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player7:{ firstName: "Todd",
    lastName: "Gurley",
    age: 24,
    qb: 2,
    college: 'georgia',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player8:{ firstName: "Khalil",
    lastName: "Mack",
    age: 31,
    qb: 52,
    college: 'buffalo',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player9:{ firstName: "Ben",
    lastName: "Roethlisberger",
    age: 38,
    qb: 1,
    college: 'miami',
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player10:{ firstName: "Aaron",
    lastName: "Donald",
    age: 31,
    qb: 99,
    college:'pittsburgh' ,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},
Player11:{ firstName: "Kyler",
    lastName: " Murray",
    age: 25,
    qb: 1,
    college:'Oklahoma' ,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
},

}

console.log(JSON.stringify(atlantaFalcons))