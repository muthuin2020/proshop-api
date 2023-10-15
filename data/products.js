const products = [
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },

    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
    {

        name: 'airPods',
        image: '/images/airpods.jpg',
        description: ' This is a best selleing airpods from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 10,
        ratings: 3.5,
        numReviews: 12
    },
    {

        name: 'alexa',
        image: '/images/alexa.jpg',
        description: ' This is a best selleing Alexa from Amazon ',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        ratings: 5.00,
        numReviews: 12
    },
    {

        name: 'camera',
        image: '/images/camera.jpg',
        description: ' This is a best selleing camera from Canon ',
        brand: 'Canon',
        category: 'Electronics',
        price: 56.99,
        countInStock: 13,
        ratings: 4.2,
        numReviews: 11
    },
    {

        name: 'mouse',
        image: '/images/mouse.jpg',
        description: ' This is a best selleing mouse from Lenova ',
        brand: 'Lenova',
        category: 'Electronics',
        price: 12.99,
        countInStock: 15,
        ratings: 1.5,
        numReviews: 20
    },
    {

        name: 'phone',
        image: '/images/phone.jpg',
        description: ' This is a best selleing phone from Samsung ',
        brand: 'Samsung',
        category: 'Electronics',
        price: 189.99,
        countInStock: 20,
        ratings: 3.9,
        numReviews: 11
    },
    {

        name: 'playstation',
        image: '/images/playstation.jpg',
        description: ' This is a best selleing playstation from NFS ',
        brand: 'NFS',
        category: 'Electronics',
        price: 240.99,
        countInStock: 4,
        ratings: 4.9,
        numReviews: 120
    }, {

        name: 'screens',
        image: '/images/screens.png',
        description: ' This is a best selleing screens from Mi Xiaomi',
        brand: 'MI',
        category: 'Electronics',
        price: 56.00,
        countInStock: 103,
        ratings: 2.50,
        numReviews: 120
    },
    {

        name: 'sample',
        image: '/images/sample.jpg',
        description: ' This is a best selleing sample from Apple ',
        brand: 'Apple',
        category: 'Electronics',
        price: 12.99,
        countInStock: 10,
        ratings: 2.8,
        numReviews: 12
    },
]

export default products;