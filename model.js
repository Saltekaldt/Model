const model = {
    app:{//del 1 - overordnet viewstate
        currentPage: 'startPage',
        currentUser: '', 
        darkMode: false

    },
    viewstate: {//del 2 - viewstate per side - inputs
        userLogin:{
           name: "",
           password: "",
           age: "",
                
        },
        userActivity:{
           Name: '',
           Length: '',
           Difficulty: '',
           Rating: 0
        },
        aktivityPage:{
            rating: '',
            Komment: ''
        },
        registerUser:{
            name: '',
            password: '',
            age: '',
            img: '',
            bio: '',
            recentActivities: []
        }
    },
    //del 3
    activities: [
        {Name: 'Klatring', Length: '30 min', Difficulty: 'Vanskelig', Rating: 4},
        {Name: 'Dancing', Length: '1 h', Difficulty: 'moderat', Rating: 4},
        {Name: 'Running', Length: '15 min', Difficulty: 'Easy', Rating: 2},
        {Name: '', Length: '', Difficulty: '', Rating: 0},
        {Name: 'WeightLifting', Length: '1.5 h', Difficulty: 'Vanskelig', Rating: 2},
        {Name: 'Boxing', Length: '30 min', Difficulty: 'Vanskelig', Rating: 3},
        {Name: 'Football', Length: '1.5 h', Difficulty: 'Easy', Rating: 5},

    ],
    ratings: [
        
    ],
    users: [
        {
        name: 'morten',
        password: '',
        age: '',
        img: '',
        bio: '',
        recentActivities: []
    },

    ]
            
};