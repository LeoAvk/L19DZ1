
//         Задача 1:
// Создайте объект city1 (let city1 = {}), укажите у него свойства name (название города, строка)
//  со значением «ГородN» и population (населенность города, число) со значением 10 млн.
let city1 = {
    cityName: "Aleksandriya",
    population: 10000000
}
console.log(city1)


// Задача 2:
// Из обьекта johnDoe https://jsfiddle.net/72qkgetv/1/
// Вытащить и вывести в консоль следующие значения:

// - город из рабочего адреса
// - имя второго друга
// - номера телефонов через запятую
// - имя друга с наименьшим возрастом
// - роль пользователя, которая true (в данном случае isUser)

const maksTwen = {
    name: 'Mark',
    surname: 'Twen',
    age: 40
}

const sarahDoe = {
    name: 'Sarah',
    surname: 'Doe',
    age: 14
}

const johnDoe = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    hobbies: ['football', 'darts', 'swimming'],
    contacts: {
        phones: ['0987654', '1234567'],
        email: ['asd@asd.com', 'asdfd@asw.com']
    },
    address: {
        work: {
            city: 'Berlin',
            postCode: '03457'
        },
        home: {
            city: 'Munich',
            postCode: '12356'
        },
    },
    sallary: {
        main: 3000,
        bonus: 500,
        rate: 25
    },
    roles: {
        isAdmin: false,
        isModer: false,
        isUser: true
    },
    friends: [
        maksTwen,
        sarahDoe,
        {
            name: 'John',
            surname: 'Snow',
            age: 5000
        }
    ]
}

console.log(johnDoe.address.work.city);
console.log(johnDoe.friends[1].name);
console.log(johnDoe.contacts.phones);
console.log(johnDoe.friends[1].name, johnDoe.friends[1].age)
console.log(johnDoe.roles.isUser)



// Задача 3:
// Создать 5 обьектов автомобилей и наполнить их большим количеством данных:
// Год выпуска
// Вес
// Кузов
// Двигатель
// Трансмиссия
// Тормозная система
// Рулевое управление
// и т д

// поля должны называться на английском.

// Пример:
// let bmwX5 = {
//   weight: 3400,
//   ....
// }
let porshePanamera = {
    general: {
        price: 130000,
        type: 'car',
        bodyType: 'Saloon',
        brand: 'Porsche',
        model: 'Panamera',
        generation: 'Panamera',
        modification: '4.8 GTS',
        country: 'Germany',
        year: 2019,
        numberOfDoor: 5,
        numberOfSeats: 4,
        fullMass: 2480
    },
    engine: {
        location: 'front',
        engineCapacity: 4.806,
        power: 430,
        torque: 520,
    },
    transmission: {
        gearbox: 'АКПП7',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 288,
        acceleration: 4.5,
        fuelConsumption: {
            city: 16.1,
            track: 8,
            mixed: 10.9
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 4970,
        width: 1931,
        height: 1408
    }

}

let audiQ7 = {
    general: {
        price: 25000,
        type: 'car',
        bodyType: 'Sport Utility',
        brand: 'Audi',
        model: 'Q7',
        generation: 'Q7',
        modification: '4.2 GTS',
        country: 'Germany',
        year: 2019,
        numberOfDoor: 5,
        numberOfSeats: 7,
        fullMass: 2935
    },
    engine: {
        location: 'front',
        engineCapacity: 4.163,
        power: 350,
        torque: 440,
    },
    transmission: {
        gearbox: 'АКПП6',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 248,
        acceleration: 7.4,
        fuelConsumption: {
            city: 19.4,
            track: 10.2,
            mixed: 13.8
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 5086,
        width: 1983,
        height: 1737
    }
}

let toyotaCamry = {
    general: {
        price: 13500,
        type: 'car',
        bodyType: 'Sedan',
        brand: 'Toyota',
        model: 'Camry',
        generation: 'Camry',
        modification: 2.0,
        country: 'Japan',
        year: 2018,
        numberOfDoor: 4,
        numberOfSeats: 5,
        fullMass: 2100
    },
    engine: {
        location: 'front',
        engineCapacity: 1.998,
        power: 148,
        torque: 190,
    },
    transmission: {
        gearbox: 'АКПП4',
        typeOfDrive: 'front',
    },
    performanceIndicators: {
        topSpeed: 190,
        acceleration: 12.5,
        fuelConsumption: {
            city: 10,
            track: 7.3,
            mixed: 8.7
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 4825,
        width: 1825,
        height: 1480
    }
}

let skodaSuperb = {
    general: {
        price: 11000,
        type: 'car',
        bodyType: 'Universal',
        brand: 'Skoda',
        model: 'Superb',
        generation: 'Superb',
        modification: '3.6',
        country: 'Czech Republic',
        year: 2019,
        numberOfDoor: 5,
        numberOfSeats: 5,
        fullMass: 2297
    },
    engine: {
        location: 'front',
        engineCapacity: 3.597,
        power: 260,
        torque: 350,
    },
    transmission: {
        gearbox: 'АКПП6',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 247,
        acceleration: 6.6,
        fuelConsumption: {
            city: 14.4,
            track: 7.8,
            mixed: 10.2
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 4858,
        width: 1817,
        height: 1497
    }
}

let volkswagenTouareg = {
    general: {
        price: 19000,
        type: 'car',
        bodyType: 'Sport Utility',
        brand: 'Volkswagen',
        model: 'Touareg',
        generation: 'Touareg',
        modification: '4.2 ',
        country: 'Germany',
        year: 2017,
        numberOfDoor: 5,
        numberOfSeats: 5,
        fullMass: 2920
    },
    engine: {
        location: 'front',
        engineCapacity: 4.134,
        power: 340,
        torque: 800,
    },
    transmission: {
        gearbox: 'АКПП6',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 242,
        acceleration: 6.2,
        fuelConsumption: {
            city: 11.9,
            track: 7.4,
            mixed: 9.1
        },
        fuel: 'diesel'
    },
    proportions: {
        lenght: 4795,
        width: 1940,
        height: 1709
    }
}


console.log(porshePanamera);
console.log(audiQ7);
console.log(toyotaCamry);
console.log(volkswagenTouareg);
console.log(skodaSuperb)

// Задача 4:
// Добавить все автомобили в массив.
// И написать функции которые находит:

// - авто с ручной коробкой (трансмиссия)
// - самый тяжелый автомобиль (поле вес)
// - самый старый автомобиль (поле год выпуска)
// - авто с самым большим объемом двигателя (поле объем двигателя)
// - авто у которых откидывается крыша
// - считают средний вес всех автомобилей
// - считают средний обьем двигателя

// все эти свойства должны быть определены в объектах.

let porshePanamera = {
    general: {
        price: 130000,
        type: 'car',
        bodyType: 'Saloon',
        brand: 'Porsche',
        model: 'Panamera',
        generation: 'Panamera',
        modification: '4.8 GTS',
        country: 'Germany',
        year: 2019,
        numberOfDoor: 5,
        numberOfSeats: 4,
        fullMass: 2480
    },
    engine: {
        location: 'front',
        engineCapacity: 4.806,
        power: 430,
        torque: 520,
    },
    transmission: {
        gearbox: 'АКПП7',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 288,
        acceleration: 4.5,
        fuelConsumption: {
            city: 16.1,
            track: 8,
            mixed: 10.9
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 4970,
        width: 1931,
        height: 1408
    }

}

let audiQ7 = {
    general: {
        price: 25000,
        type: 'car',
        bodyType: 'Sport Utility',
        brand: 'Audi',
        model: 'Q7',
        generation: 'Q7',
        modification: '4.2 GTS',
        country: 'Germany',
        year: 2019,
        numberOfDoor: 5,
        numberOfSeats: 7,
        fullMass: 2935
    },
    engine: {
        location: 'front',
        engineCapacity: 4.163,
        power: 350,
        torque: 440,
    },
    transmission: {
        gearbox: 'АКПП6',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 248,
        acceleration: 7.4,
        fuelConsumption: {
            city: 19.4,
            track: 10.2,
            mixed: 13.8
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 5086,
        width: 1983,
        height: 1737
    }
}

let toyotaCamry = {
    general: {
        price: 13500,
        type: 'car',
        bodyType: 'Sedan',
        brand: 'Toyota',
        model: 'Camry',
        generation: 'Camry',
        modification: 2.0,
        country: 'Japan',
        year: 2018,
        numberOfDoor: 4,
        numberOfSeats: 5,
        fullMass: 2100
    },
    engine: {
        location: 'front',
        engineCapacity: 1.998,
        power: 148,
        torque: 190,
    },
    transmission: {
        gearbox: 'АКПП4',
        typeOfDrive: 'front',
    },
    performanceIndicators: {
        topSpeed: 190,
        acceleration: 12.5,
        fuelConsumption: {
            city: 10,
            track: 7.3,
            mixed: 8.7
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 4825,
        width: 1825,
        height: 1480
    }
}

let skodaSuperb = {
    general: {
        price: 11000,
        type: 'car',
        bodyType: 'Universal',
        brand: 'Skoda',
        model: 'Superb',
        generation: 'Superb',
        modification: '3.6',
        country: 'Czech Republic',
        year: 2019,
        numberOfDoor: 5,
        numberOfSeats: 5,
        fullMass: 2297
    },
    engine: {
        location: 'front',
        engineCapacity: 3.597,
        power: 260,
        torque: 350,
    },
    transmission: {
        gearbox: 'АКПП6',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 247,
        acceleration: 6.6,
        fuelConsumption: {
            city: 14.4,
            track: 7.8,
            mixed: 10.2
        },
        fuel: 'petrol'
    },
    proportions: {
        lenght: 4858,
        width: 1817,
        height: 1497
    }
}

let volkswagenTouareg = {
    general: {
        price: 19000,
        type: 'car',
        bodyType: 'Sport Utility',
        brand: 'Volkswagen',
        model: 'Touareg',
        generation: 'Touareg',
        modification: '4.2 ',
        country: 'Germany',
        year: 2017,
        numberOfDoor: 5,
        numberOfSeats: 5,
        fullMass: 2920
    },
    engine: {
        location: 'front',
        engineCapacity: 4.134,
        power: 340,
        torque: 800,
    },
    transmission: {
        gearbox: 'АКПП6',
        typeOfDrive: 'full permanent',
    },
    performanceIndicators: {
        topSpeed: 242,
        acceleration: 6.2,
        fuelConsumption: {
            city: 11.9,
            track: 7.4,
            mixed: 9.1
        },
        fuel: 'diesel'
    },
    proportions: {
        lenght: 4795,
        width: 1940,
        height: 1709
    }
}

const cars = [volkswagenTouareg, toyotaCamry, porshePanamera, audiQ7, skodaSuperb]

// function findOldestCar(carsArray) {
//     let oldestCar = null;
//     let minYear = carsArray[0].general.year;
//     for (let i = 1; i < carsArray.length; i++) {
//         minYear = Math.min(minYear, carsArray[i].general.year)
//     }
//     for (let i = 0; i < carsArray.length; i++) {
//         if (carsArray[i].general.year === minYear) {
//             oldestCar = carsArray[i];
//             break;
//         }
//     }
//     return oldestCar;
// }

// const res = findOldestCar(cars);
// console.log(res);

function findOldestCar(carsArray) {
    let oldestCar = carsArray[0].general.year;
    let oldestCarBrand = carsArray[0].general.brand;
    let oldestCarModel = carsArray[0].general.model;
    for (let i = 0; i < carsArray.length; i++) {
        if (oldestCar > carsArray[i].general.year) {
            oldestCar = carsArray[i].general.year
            oldestCarBrand = carsArray[i].general.brand
            oldestCarModel = carsArray[i].general.model
        }
    }
    return `Cамый старый автомобиль ${oldestCarBrand} ${oldestCarModel}, год: ${oldestCar}`
}
console.log(findOldestCar(cars))

function findHeaviestCar(carsArray){
    let maxHeavy = carsArray[0].general.fullMass;
    let maxHeavyCarsBrand = carsArray[0].general.brand;
    let maxHeavyCarsModel = carsArray[0].general.model;
    for (let i = 0; i < carsArray.length; i++){
        if (maxHeavy < carsArray[i].general.fullMass){
            maxHeavy = carsArray[i].general.fullMass
            maxHeavyCarsBrand = carsArray[i].general.brand
            maxHeavyCarsModel = carsArray[i].general.model
        }
    }
    return `Самый тяжелый автомобиль ${maxHeavyCarsBrand} ${maxHeavyCarsModel}, с весом ${maxHeavy} кг.`
}
console.log(findHeaviestCar(cars));

function findLargestEngineCapasity(carsArray){
    let maxEngineCapasity = carsArray[0].engine.engineCapacity;
    let maxEngineCarsBrand = carsArray[0].general.brand;
    let maxEngineCarsModel = carsArray[0].general.model;
    for (let i = 0; i < carsArray.length; i++){
        if (maxEngineCapasity < carsArray[i].engine.engineCapacity){
            maxEngineCapasity = carsArray[i].engine.engineCapacity
            maxEngineCarsBrand = carsArray[i].general.brand
            maxEngineCarsModel = carsArray[i].general.model
        }
    }
    return `Самый большой объем двигателя у автомобиля ${maxEngineCarsBrand} ${maxEngineCarsModel}, с объемом ${maxEngineCapasity}.`
}
console.log(findLargestEngineCapasity(cars));

function averageWeight(carsArray){
    let weight = 0;
    for (let i = 0; i < carsArray.length; i++){
        weight += carsArray[i].general.fullMass
    }
    return `Средний вес всех автомобилей : ${weight / carsArray.length} кг`
}
console.log(averageWeight(cars))

function averageEngineCapacity(carsArray){
    let capacity = 0;
    for (let i = 0; i < carsArray.length; i++)
    if (carsArray[i].engine.engineCapacity){
        capacity += carsArray[i].engine.engineCapacity
    }
    return `Средний объем двигателя всех автомобилей: ${capacity / carsArray.length}`
}
console.log(averageEngineCapacity(cars))

      
// Задача 5:
// В обьекте: https://jsfiddle.net/72qkgetv/2/

// - Достать из него данные так, чтобы получился текст:  “Киевский политехнический институт, вулиця Академіка Янгеля, 5, місто Київ, Украина»
// - Вывести координаты lat, lng.


const coordinates = {
    "results": [
        {
            "address_components": [
                {
                    "long_name": "5",
                    "short_name": "5",
                    "types": ["street_number"]
                },
                {
                    "long_name": "Киевский политехнический институт",
                    "short_name": "Киевский политехнический институт",
                    "types": ["establishment"]
                },
                {
                    "long_name": "вулиця Академіка Янгеля",
                    "short_name": "вулиця Академіка Янгеля",
                    "types": ["route"]
                },
                {
                    "long_name": "Солом'янський район",
                    "short_name": "Солом'янський район",
                    "types": ["sublocality_level_1", "sublocality", "political"]
                },
                {
                    "long_name": "Київ",
                    "short_name": "Київ",
                    "types": ["locality", "political"]
                },
                {
                    "long_name": "місто Київ",
                    "short_name": "місто Київ",
                    "types": ["administrative_area_level_2", "political"]
                },
                {
                    "long_name": "місто Київ",
                    "short_name": "місто Київ",
                    "types": ["administrative_area_level_1", "political"]
                },
                {
                    "long_name": "Украина",
                    "short_name": "UA",
                    "types": ["country", "political"]
                }
            ],
            "geometry": {
                "location": {
                    "lat": 50.449819,
                    "lng": 30.453404
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 50.4511679802915,
                        "lng": 30.4547529802915
                    },
                    "southwest": {
                        "lat": 50.4484700197085,
                        "lng": 30.4520550197085
                    }
                }
            },
            "types": ["street_address"]
        }
    ],
    "status": "OK"
}
console.log(coordinates.results[0].address_components[1].long_name, coordinates.results[0].address_components[2].long_name, coordinates.results[0].address_components[0].long_name, coordinates.results[0].address_components[5].long_name, coordinates.results[0].address_components[7].long_name);
console.log(coordinates.results[0].geometry.viewport.northeast.lat);
console.log(coordinates.results[0].geometry.viewport.northeast.lng);

// Задача 6:
// Создать объект.
// Запросить пользователя заполнить этот обьект спрашивая у наго по порядку ключ и значение через функцию prompt.
// Как только пользователь введет строку "END" - вывести получившийся объект в консоль.

function Object() {
    let key;
    let value;
    let obj = {};
    for (let i = 1; i > 0; i++) {
        key = prompt("Введите ключ");
        if (key === 'END' || key === 'end') {
            break;
        }
        value = prompt("Введите свойство")
        if (value === 'END' || value === 'end') {
            break
        }
        obj[key] = value
    }
    console.log(obj)
}
Object()


