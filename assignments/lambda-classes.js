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
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
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
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
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
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    /**
     *
     *
     * @returns a list of subjects
     * @memberof Student
     */
    listSubjects() {
        return console.log(this.favSubjects.map(subject => console.log (subject)));
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
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
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