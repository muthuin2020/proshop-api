import bcrypt from 'bcryptjs'

const users = [
    {
        'name': 'admin user',
        'email': 'admin@gmail.com',
        'password': await bcrypt.hash('123456', 10),
        'isAdmin': true
    },

    {
        'name': 'john Doe',
        'email': 'john@gmail.com',
        'password': await bcrypt.hash('123456', 10),
        'isAdmin': false
    },

    {
        'name': 'Darn Fuck',
        'email': 'darn@gmail.com',
        'password': await bcrypt.hash('123456', 10),
        'isAdmin': false
    }
]

export default users;