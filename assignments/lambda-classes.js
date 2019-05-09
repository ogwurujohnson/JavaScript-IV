// CODE here for your Lambda Classes
/**
 *
 *
 * @class Person
 */
class Person {
    /**
     *Creates an instance of Person.
     * @param {*} personAttributes
     * @memberof Person
     */
    constructor(personAttributes) {
        const {name, age, location, gender} = personAttributes;
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

   /**
    *
    *
    * @returns
    * @memberof Person
    */
   speak() {
        return console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}


/**
 *
 *
 * @class Instructor
 * @extends {Person}
 */
class Instructor extends Person {
    /**
     *Creates an instance of Instructor.
     * @param {*} instructorAttributes
     * @memberof Instructor
     */
    constructor(instructorAttributes) {
        super(instructorAttributes);
        const {specialty, favLanguage, catchPhrase} = instructorAttributes;
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    /**
     *
     *
     * @param {*} subject
     * @returns
     * @memberof Instructor
     */
    demo(subject) {
        return console.log(`Today we are learning about ${subject}`);
    }

    /**
     *
     *
     * @param {*} student
     * @param {*} subject
     * @returns
     * @memberof Instructor
     */
    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    
}


/**
 *
 *
 * @class Student
 * @extends {Person}
 */
class Student extends Person {

    /**
     *Creates an instance of Student.
     * @param {*} studentAttributes
     * @memberof Student
     */
    constructor(studentAttributes) {
        super(studentAttributes);
        const {previousBackground, className, favSubjects} = studentAttributes;
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = 80;
    }

    /**
     *
     *
     * @returns a list of subjects
     * @memberof Student
     */
    listSubjects() {
        this.favSubjects.map(subject => console.log (subject));
    }

    /**
     *
     *
     * @param {*} subject
     * @returns
     * @memberof Student
     */
    prAssignment(subject) {
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    /**
     *
     *
     * @param {*} subject
     * @returns
     * @memberof Student
     */
    sprintChallenge(subject) {
        return console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}


class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        const {gradClassName, favInstructor} = pmAttributes;
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return console.log(`${this.name} announces to ${channel}, @channel standup time`);
    }

    debugCode(student, subject) {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


// Person class Instances

const johnson = new Person({
    name: 'johnson',
    age: 34,
    location: 'lagos, nigeria',
    gender: 'male',
});

const melvine = new Person({
    name: 'melvine',
    age: 37,
    location: 'cameroon',
    gender: 'male',
});

// Instructor class Instances

const nabeelah = new Instructor({
    name: 'nabeelah',
    age: 27,
    location: 'lagos, nigeria',
    gender: 'female',
    specialty: 'Web Technology',
    favLanguage: 'JavaScript',
    catchPhrase: 'I am the best..yehh',
});

const kelechi = new Instructor({
    name: 'kelechi',
    age: 27,
    location: 'lagos, nigeria',
    gender: 'female',
    specialty: 'Mobile Development',
    favLanguage: 'Java',
    catchPhrase: 'I like trouble',
});

// Student class Instances
const noble = new Student({
    name: 'melvine',
    age: 17,
    location: 'lagos, nigeria',
    gender: 'male',
    previousBackground: 'Boxer',
    className: 'Webeu2 sprint2',
    favSubjects: ['CSS', 'HTML', 'JavaScript'],
});

const vincent = new Student({
    name: 'vincent',
    age: 18,
    location: 'jos, nigeria',
    gender: 'male',
    previousBackground: 'Newspaper vendor',
    className: 'Webeu2 sprint3',
    favSubjects: ['JavaScript', 'Ruby', 'Python'],
});

// Project Manager Instances
const ogbonna = new ProjectManager({
    name: 'ogbonna',
    age: 33,
    location: 'lagos, nigeria',
    gender: 'male',
    specialty: 'Mobile Development',
    favLanguage: 'Java',
    catchPhrase: 'Never stop learning',
    gradClassName: 'webeu1',
    favInstructor: 'Gabe',
});

const ade = new ProjectManager({
    name: 'ade',
    age: 35,
    location: 'lagos, nigeria',
    gender: 'male',
    specialty: 'Web Development',
    favLanguage: 'Ruby on Rails',
    catchPhrase: 'Always seek out growth',
    gradClassName: 'webeu1',
    favInstructor: 'Gabe',
});



// Person method
console.log('---------person methods---------------');
johnson.speak();
melvine.speak();

// Instructor methods
console.log('---------instructor methods---------------');
nabeelah.demo('JavaScript');
nabeelah.grade({name: 'johnson'}, 'JavaScript');

kelechi.demo('JavaScript');
kelechi.grade({name: 'melvine'}, 'JavaScript');

// Student methods
console.log('---------student methods---------------');
noble.listSubjects();
noble.prAssignment('Javascript');
noble.sprintChallenge('Javascript');

vincent.listSubjects();
vincent.prAssignment('Javascript');
vincent.sprintChallenge('Javascript');

// Project manager methods
console.log('---------project manager methods---------------');
ogbonna.standUp('webeu2 ogbonna');
ogbonna.debugCode({name: 'yusuf'}, 'css');

ade.standUp('webeu2 ade');
ade.debugCode({name: 'james'}, 'ruby');