## 6. [클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리](https://www.youtube.com/watch?v=_DLhUBWsRtw&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=6)

* 클래스 안에는 변수와 함수가 있다. 변수는 속성(field), 함수는 행동(method)이라고 한다. 
* 클래스는 template, 오브젝트는 instance다. 

### 1. 클래스 선언과 오브젝트 생성
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
```

### 2. Getter & setters
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
    
    get age() {
        return this._age;
    }
    
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const ellie = new Person('ellie', -1);
console.log(ellie.age); // 0
```
* C++의 문법과 다르다!
  * `console.log(ellie.age);`를 하면 `get age()`가 호출된다. 
  * `this.age = age;`를 하면 `set age(value)`가 호출된다. **constructor 조차도!**
  * Swift와 거의 흡사하다! ~~Swift가 나중 언어임~~ 익숙해지면 편하다. 
* 따라서 엄밀히 말하면 지금 변수는 `name`과 `_age` 두개만 있는 것이다. 

### 3. public & private fields
```javascript
class Example {
	publicField = 2;
	#privateField = 0;
}

const foo = new Example();
console.log(foo.publicField); // 2
console.log(foo.privateField); // undefined
```

### 4. Static fields & methods
```javascript
class Article {
    static publisher = 'Dream Coding';
	constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

	static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
```
* 장점 : 메모리 사용을 줄일 수 있다. 

### 5. Inheritance
```javascript
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    getArea() { // overiding
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
console.log(rectangle.getArea()); // 200
```

### 6. Class checking: instanceof
```javascript
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true -> 다형성
console.log(triangle instanceof Object); // true -> 모든 class는 Object
```

## 7. [오브젝트 넌 뭐니?](https://www.youtube.com/watch?v=1Lbr29tzAA8&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=7)
### 1. 오브젝트 생성하기
```javascript
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

const ellie = { name: 'ellie', age: 4 };

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob); // true

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined
```
* 오브젝트는 key와 value의 집합체다.


### 2. Computed properties
```javascript
console.log(ellie.name); // dot
console.log(ellie['name']); // computed properties

function printValue(obj, key) {
    console.log(obj.key); // undefined
    console.log(obj[key]); // 이럴 때만 computed properties 쓴다.
}
```

### 3. Property value shorthand
```javascript
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

function makePerson(name, age) {
    return {
      name: name,
      age: age,
    };
}

const person4 = makePerson('ellie', 30);

function Person(name, age) { // 예전에는 이런 식으로 클래스 대용
    return {
        name, // name: name이면 생략 가능
        age,
    };
}

const person5 = Person('ellie', 30);
```

### 4. Constructor function
```javascript
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const person6 = new Person('ellie', 30);
```

### 5. in operator: property existence check (key in obj)
```javascript
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined
```

### 6. for..in vs for..of
```javascript
// for (key in obj)
for (let key in ellie) {
    console.log(key); // name age hasJob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
}

for (let value of array) {
    console.log(value); // 1 2 4 5
}

```

### 7. cloning
```javascript
const user = { name: 'ellie', age: 20 };
const user2 = user; // shallow copy
user2.name = 'coder';
console.log(user.name); // coder

// old way to deep copy
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

// new way to deep copy
const user4 = {};
Object.assign(user4, user);

const user4 = Object.assign({}, user);

// another example of Object.assign
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue -> 뒤에 같은 key가 나오면 덮어씌움
console.log(mixed.size); // big
```

## 8. [배열 제대로 알고 쓰자. 자바스크립트 배열 개념과 APIs 총정리](https://www.youtube.com/watch?v=yOdAVDuHUKQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=8)

### 1. Declaration

```javascript
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2.length); // 2
console.log(arr2[0]); // 1
```



### 3. Looping over an array

```javascript
// a. for
for (let i = 0 ; i < arr.length ; i++) {
	console.log(arr[i]);
}

// b. for of
for (let elem of arr) {
    console.log(elem);
}

// c. forEach API
arr.forEach((elem, index) => {
    console.log(elem, index);
});

arr.forEach((elem) => console.log(elem)); // arrow function 내용이 한 줄이면 중괄호 생략 가능
```



### 4. Addition, deletion, copy

```javascript
const arr = [1, 2];

// push: add an item to the end
arr.push(3);
console.log(arr); // [1, 2, 3]

// pop: remove an item from the end
arr.pop();
console.log(arr); // [1, 2]

// unshift: add an item to the beginning
arr.unshift(-1, 0);
console.log(arr); // [-1, 0, 1, 2]

// shift: remove an item from the beginning
arr.shift();
console.log(arr); // [0, 1, 2]
```

* 배열의 앞을 건드리는 함수들은 뒤를 건드리는 함수들보다 느리다. 자료구조상 그럴 수밖에.



```javascript
// splice(이어주다): remove an item by index position
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(1); // &arr[1] 요소 지우기
console.log(arr); // [1, 3, 4, 5, 6, 7, 8]
arr.splice(1, 2); // &arr[1]부터 2개 요소 지우기
console.log(arr); // [1, 5, 6, 7, 8]
arr.splice(1, 2, 100, 100); // &arr[1]부터 2개 요소 지운 뒤 그 자리에 [100, 100] 추가하여 이어주기
console.log(arr); // [1, 100, 100, 7, 8]

// combine two arrays
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```



### 5. Searching

```javascript
const arr = ['a', 'b', 'c', 'd', 'e', 'a'];

// indexOf - 앞에서부터 처음 일치하는 index
console.log(arr.indexOf('a')); // 0
console.log(arr.indexOf('z')); // -1
// lastIndexOf - 뒤에서부터 처음 일치하는 index
console.log(arr.lastIndexOf('a')); // 5

// includes
console.log(arr.includes('d')); // true
console.log(arr.includes('z')); // false
```

## 9. [유용한 10가지 배열 함수들. Array APIs 총 정리](https://www.youtube.com/watch?v=3CUjtKJ7PJg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=9)

### Q1. make a string out of an array
join

### Q2. make an array out of a string
split

### Q3. make this array reverse
reverse

### Q4. make new array without the first two elements
slice

### Q5. find a student with the score 90
```javascript
const result = students.find((student) => {
	return student.score === 90; // find는 첫번째로 true가 return되면 그 요소(ex> student)를 반환하는 API
});

const result = students.find((student) => student.score === 90);
```

### Q6. make an array of enrolled students
filter

### Q7. make an array containing only the students' scores
map

### Q8. check if there is a student with the score lower than 50
```javascript
const result = students.some((student) => student.score < 50); // 어느 한 student라도 해당 조건을 만족하면 true
const result = students.every((student) => student.score < 50); // 모든 student가 해당 조건을 만족해야 true
```

### Q9. compute students' average score
reduce: 누적