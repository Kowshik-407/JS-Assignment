console.log("Welcome to the Task 2 ::) ");

class User{
    constructor(name, age, email){
        this.name   = name;
        this.age    = age;
        this.email  = email;
    }
    login(){
        console.log(`${this.name} has logged in. `);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out. `);
        return this;
    }
}

class Moderator extends User{
    constructor(name, age, email){
        super(name, age, email);
        this.LUcoins = 0;
    }
    addCoins(){
        this.LUcoins++;
        console.log(`${this.name} had earned ${this.LUcoins} coins. `);
        return this;
    }
    removeCoins(){
        this.LUcoins--;
        console.log(`${this.name} had remain ${this.LUcoins} coins. `);
        return this;
    }
}

class Admin extends Moderator{
    constructor(name, age, email){
        super(name, age, email);
        this.Courses = [];
    }
    addCourse(user, Course){
        user.Courses.push(Course);
        console.table(user);
    }
    removeCourse(user, Course){
        user.Courses.pop(Course);
        console.table(user);
    }
}

let user1 = new User('Kowshik407', 18, 'aitha.kowshik3@gmail.com');
let user2 = new User('Aravind415', 19, 'varavind18@gmail.com');
let mod = new Moderator('Venky404  ', 20, 'venky15072000@gmail.com');
let admin = new Admin('Purush422 ', 21, 'basapurampurushtham23@gmail.com');

let users = [user1, user2, mod, admin];

users.forEach(element => {
    console.table(element);
})

console.log('%c User 1 functions ::> ', 'color : orange');
user1.login();
user1.logout();
console.log('%c User 1 functions ::> ', 'color : orange');
user2.login().logout();
console.log('%c mod functions ::> ', 'color : orange');
mod.login().addCoins().addCoins().logout().login().addCoins().removeCoins().removeCoins().logout();
console.log('%c admin functions ::> ', 'color : orange');
admin.login();
admin.addCourse(admin, 'Javascript');
admin.addCoins().addCoins().addCoins().logout();
admin.addCourse(admin, 'Python');
admin.addCoins().addCoins().logout();
admin.removeCourse(admin, 'Python');
admin.removeCoins().removeCoins().logout();

console.table(users);