드림코딩 by 엘리 10 ~ 13번 영상 정리



## 🌂 [JSON 개념 정리와 활용방법 및 유용한 사이트 공유](https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10)



* Client와 Server 간의 request/response 규약을 적어놓은 것이 HTTP(Hypertext Transfer Protocol)
  * Hypertext는 Hyperlinks 뿐 아니라 문서나 이미지 등 리소스를 포함한 개념
* 웹 상에서 비동기적으로 서버로부터 정보를 받을 수 있는 기술이 바로 AJAX(Asynchronous JavaScript and XML)
  * **XML<sup>[1](#footnote_1)</sup>HttpRequest** Object(XHR), fetch() API
  * JSON으로도 정보를 주고받을 수 있는데 굳이 XML만을 이름에서 언급한 이유는?
    * AJAX와 XHR이 활발히 개발되고 있을 당시 Microsoft의 Outlook 개발팀이 활발히 참여하고 있었는데, 이때 Outlook 개발팀이 활용한게 XML이었기 때문. 
    * **XML으로 국한하여 이름을 지은건 실수였다. XML로 쓰면 파일 크기도 커져서 요즘에는 JSON<sup>[2](#footnote_2)</sup>을 더 많이 쓴다.**
  * JSON은 XML에 비해 읽기도 쉬울 뿐더러 파일 용량도 작다. *게다가 모든 언어에서 라이브러리만 사용하면 JSON을 읽고 만들 수 있다는 장점이!!*



### 1. Object to JSON: stringify(obj) = serialize

```javascript
let json = JSON.stringify(true);
console.log(json); // true

let json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol("id"), // JS에만 있는 특별한 객체이므로 JSON 포함 안됨
    jump: () => { // method도 JSON에 포함 안됨
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-02-10T13:20:22.670Z"}

// callback
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); // {"name":"tori","color","white"}

json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'ellie' : value; // 'name' value 값만 변경
});
console.log(json);

```



### 2. JSON to Object: parse(json) = deserialize

```javascript
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump(); // tori can jump!
obj.jump(); // error -> serialize하면서 method는 포함 안됨

console.log(rabbit.birthDate.getDate()); // 10 -> Date() Object
console.log(obj.birthDate.getDate()); // error -> birthDate는 이제 그냥 string에 불과

// callback
const obj = JSON.parse(json, (key, value) => {
   return key === 'birthDate' ? new Date(value) : value; 
});
console.log(rabbit.birthDate.getDate()); // 10
console.log(obj.birthDate.getDate()); // 10
```



[유용한 사이트]

* [JSON Diff](http://jsondiff.com)
* [JSON Beautifier](http://jsonbeautifier.org)
* [JSON Parser](http://jsonparser.org)
* [JSON Validator](http://tools.learningcontainer.com/json-validator/)



[각주]

1. <a name="footnote_1">eXtensible Markup Lanuage. HTML과 같은 류.</a>
2. <a name="footnote_2">JavaScript Object Notation. JavaScript Object를 생성할 때 쓰는 문법인 {key: value} 쌍 문법을 그대로 차용하여서 붙여진 이름이다</a>



## 🌂 [비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험](https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11)



* JavaScript is synchronous. 
  * Execute the code block in order after hoisting<sup>[1](#footnote_1)</sup>

```javascript
// example of synchronous
console.log('1');
console.log('2');
console.log('3');

// 1
// 2
// 3

// example of asynchronous
console.log('1');
setTimeout(() => console.log('2'), 1000); // 브라우저에게 요청을 보내놓고 안 끝나도 바로 다음으로 넘어감. 끝나면 callback 함수 실행.
console.log('3');

// 1
// 3
// 2 -> not in order, 언제 끝나는지 예측할 수 없음
```

```javascript
// Synchronous callback
function printImmediately(print) { // hoisting
    print();
}
printImmediately(() => console.log('hello'));
// 1
// 3
// hello
// 2

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 1
// 3
// hello
// 2
// async callback
```



* 콜백지옥 : 콜백 함수 안에서 다른 콜백 함수를 부르면서 nesting 되는 현상

```javascript
// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError) {
        setTimeout({
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
            	onError(new Error('no access'));
	        }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
	userStorage.getRoles(
        user, 
        userWithRole => {
        	alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
	    }, error => {console.log(error)});
	},
    error => {console.log(error)}
);
```

* 콜백 지옥의 문제점 : 가독성이 너무 떨어짐



[각주]

1. <a name="footnote_1">var, function declaration이 자동으로 제일 위에 올라가는 것</a>



## 🌂 [프로미스 개념부터 활용까지](https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=12)



* Promise(약속) : **Callback 지옥에 빠지지 않고** 비동기를 간편하게 처리할 수 있도록 도와주는 Object
  * state : pending(진행 중) -> fulfilled or rejected
  * Producer(정보 제공자)와 Consumer(정보 소비자)의 다른 견해 차이

### 1. Producer

```javascript
const promise = new Promise((resolve, reject) => {
   // 시간이 꽤 걸리는 일
    console.log('doing someting...');
    setTimeout() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// Promise를 만드는 순간 executor callback 함수(1st arg.)가 실행된다!
// console.log 자리에 네트워크 통신을 시작하는 코드를 위치시키는 것이 일반적.
```

* 하지만 역으로 생각하면 굳이 필요하지 않은데 통신을 시작해버릴 수도 있으니 주의!
  * 예> 특정 버튼을 누를 때만 통신이 필요한 경우



### 2. Consumers: then, catch, finally

```javascript
promise
    .then((value) => {
	    console.log(value); // 2s 이후 ellie
	})
	.catch(error => {
    	console.log(error);
	});
```

* then을 호출하면 다시 Promise가 return 되고, 다시 catch에 들어가는 방식.
  * 더 확실히 이해하기

```javascript
promise
	.then(value => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => { // 무조건 맨 끝에서 호출
		console.log('finally');
	})

// ellie
// finally
```



### 3. Promise chaining

```javascript
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then(num => num * 2)
	.then(num => num * 3)
	.then(num => {
    	return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); // 다른 서버와 또 통신
        })
	})
	.then(num => console.log(num));

// 1s + 1s 이후 5
```



### 4. Error Handling

```javascript
const getHen = () =>
	new Promise((resolve, reject) => {
       setTimeout(() => resolve('chicken'), 1000); 
    });

const getEgg = () =>
	new Promise((resolve, reject) => {
       setTimeout(() => resolve(`${hen} => egg`), 1000); 
    });

const cook = () =>
	new Promise((resolve, reject) => {
       setTimeout(() => resolve(`${egg} => fried egg`), 1000); 
    });

getHen()
	.then(hen => getEgg(hen)) // Promise
	.then(egg => cook(egg)) // Promise
	.then(meal => console.log(meal)); // string


getHen()
	.then(getEgg) // 암묵적으로 생략 가능
	.then(cook)
	.then(console.log);

// 1s + 1s + 1s 뒤 chicken => egg => fried egg
```

```javascript
const getHen = () =>
	new Promise((resolve, reject) => {
       setTimeout(() => resolve('chicken'), 1000); 
    });

const getEgg = () =>
	new Promise((resolve, reject) => {
       setTimeout(() => reject(new Error(`error! ${hen} => egg`), 1000); 
    });

const cook = () =>
	new Promise((resolve, reject) => {
       setTimeout(() => resolve(`${egg} => fried egg`), 1000); 
    });

getHen()
	.then(hen => getEgg(hen))
	.then(egg => cook(egg))
	.then(meal => console.log(meal));


getHen()
	.then(getEgg)
	.then(cook)
	.then(console.log);
	.catch(console.log);

// Error: error! chicken => egg

getHen()
	.then(getEgg)
	.catch(error => {
    	return 'bread'; // 대안
	})
	.then(cook)
	.then(console.log);
	.catch(console.log);

// bread => fried egg

```



### 5. Callback Hell 고치기(어려움)

```javascript
// BEFORE
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError) {
        setTimeout({
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
            	onError(new Error('no access'));
	        }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
	userStorage.getRoles(
        user, 
        userWithRole => {
        	alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
	    }, error => {console.log(error)});
	},
    error => {console.log(error)}
);
```

```javascript
// AFTER
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
  	      setTimeout(() => {
   	        	if (
   	            	(id === 'ellie' && password === 'dream') ||
   	            	(id === 'coder' && password === 'academy')
   	        	) {
   	            	resolve(id);
   	        	} else {
    	            reject(new Error('not found'));
       	    	}
       		}, 2000);
            
        });
    }
    
    getRoles(user) {
        return new Promise((resolve, reject) => {
        	setTimeout({
            	if (user === 'ellie') {
                	resolve({ name: 'ellie', role: 'admin' });
            	} else {
            		reject(new Error('no access'));
	        	}
        	}, 1000);       
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
	.then(userStorage.getRoles) // return된 id가 다시 인자로 들어감
	.then(user => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`));
	.catch(console.log);
```



## 🌂 [비동기의 꽃 JavaScript async와 await 그리고 유용한 Promise APIs](https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=13)



* `promise.then().then().then()...` 을 간결화해준다 -> syntactic sugar



### 1. async

```javascript
function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser(); // 10s 기다림
console.log(user);
```

```javascript
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        return 'ellie';
    });
}

const user = fetchUser();
console.log(user); // PromiseState: pending, PromiseResult: undefined

//

function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('ellie');
    });
}

const user = fetchUser();
console.log(user); // Promise {fulfilled, "ellie"}
user.then(console.log); // ellie

// 위 아래 동치!

async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
console.log(user); // Promise {fulfilled, "ellie"}
```



### 2. await : async 함수에서만 사용 가능

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getBanana() {
    return delay(3000)
	    .then(() => 'banana'); 
}

// 위 아래 동치

async function getBanana() {
    await delay(3000); // 마치 동기적인 것처럼
    return 'banana';
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

```

```javascript
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
	});
}

async function pickFruits() {
	const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`; // 3 + 1s 소요
}
```

* 왜 굳이 apple을 다 받은 뒤에야 banana를 받기 시작해야 돼?

```javascript
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
	const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`; // 3s 소요
}

pickFruits().then(console.log);
```



### 3. useful Promise APIs

```javascript
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
	const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`; // 3s 소요
}

// 위 아래 동치

function pickFruits() {
    return Promise.all([getApple(), getBanana()])
    	.then(fruits.join(' + ')
    );
}
```

```javascript
// 먼저 따지는 과일 먼저 가져오고 싶다면?
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(); // 'apple'
```

