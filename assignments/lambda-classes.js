// CODE here for your Lambda Classes

class Person {
    constructor(prop) {
        this.name = prop.name;
        this.age = prop.age;
        this.location = prop.location;
        this.gender = prop.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(prop) {
        super(prop);
        this.specialty = prop.specialty;
        this.favLanguage = prop.favLanguage;
        this.catchPhrase = prop.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(prop) {
        super(prop);
        this.previousBackground = prop.previousBackground;
        this.className = prop.className;
        this.favSubjects = prop.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(prop) {
        super(prop);
        this.gradClassName = prop.gradClassName;
        this.favInstructor = prop.favInstructor;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
    standUp(channels) {
        return `${this.name} announces to ${channels}, @channel standy times!`;
    }
}

const bill = new Instructor({
    name: 'Bill',
    location: 'New York City',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Happy Coding!'
});

const sam = new Instructor({
    name: 'Sam',
    location: 'Boise',
    age: 45,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Have Fun!'
});

const chris = new Student({
    name: 'Chris',
    location: 'Salt Lake City',
    age: 29,
    gender: 'male',
    previousBackground: 'Customer Service',
    className: 'CSPT6',
    favSubjects: ['CSS', 'JavaScript']
});

const fox = new Student({
    name: 'Fox',
    location: 'Denver',
    age: 18,
    gender: 'male',
    previousBackground: 'Waiter',
    className: 'CSPT6',
    favSubjects: ['HTML', 'Ruby']
});

const robert = new ProjectManager({
    name: 'Robert',
    location: 'Sacramento',
    age: '32',
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Daniel',
    specialty: 'CSS',
    favLanguage: 'CSS',
    catchPhrase: 'Good Luck!'
});

const matthew = new ProjectManager({
    name: 'Matthew',
    location: 'Memphis',
    age: '38',
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'Miguel',
    specialty: 'Front-end',
    favLanguage: 'React',
    catchPhrase: 'Happy to help!'
});


console.log(bill);
console.log(chris);
console.log(robert);
console.log(chris.listsSubjects());
console.log(fox.sprintChallenge('CSS'));
console.log(fox.PRAssignment('JavaScript'));
console.log(bill.demo('Python'));
console.log(sam.grade(fox.name, 'JavaScript'));
console.log(robert.standUp('help'));
console.log(matthew.debugsCode(chris.name, 'CSS'));
console.log(robert.grade(chris.name, 'HTML'));
console.log(fox.speak());
console.log(bill.speak());
console.log(robert.speak());