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
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const Johnson = new Person({
    name: 'johnson',
    age: 34,
    location: 'lagos, nigeria',
    gender: 'male',
});

console.log(Johnson.speak());
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
        return `Today we are learning about ${subject}`;
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
        return `${student.name} receives a perfect score on ${subject}`;
    }
    
}

const nabeelah = new Instructor({
    name: 'nabeelah',
    age: 32,
    location: 'lagos, nigeria',
    gender: 'female',
    specialty: 'Javascript',
});

console.log(nabeelah.grade({
    name: 'Kelechi',
    class: 'js2',
},'Javascript'));


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
        return this.favSubjects.map(subject => console.log (subject))
    }

    /**
     *
     *
     * @param {*} subject
     * @returns
     * @memberof Student
     */
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    /**
     *
     *
     * @param {*} subject
     * @returns
     * @memberof Student
     */
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

const melvin = new Student({
    name: 'melvin',
    previousBackground: 'tailor',
    className: 'webeu2',
    favSubjects: [
        'html',
        'css',
        'react',
        'javascript'
    ],
});

console.log(melvin.listSubjects());



class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time`;
    }

    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Kelechi = new ProjectManager({
    name: 'kelechi',
    gradClassName: 'JS2',
    favInstructor: 'matt',
});
console.log(Kelechi.debugCode({name:'noble',},'react'));