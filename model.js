const model = {
    app:{//del 1 - overordnet viewstate
        currentPage: 'startPage',//dataBase, registerPage, contactPage, 
        currentUser: {
             name: 'Morten',
             password: 'Morten10',
             email: 'Morten@mortenmail.no',
             tlfNr: '12345678',
             id: 0,
             img: 'Images\Profilbilde1.jpg', 
            }, 
        darkMode: false

    },
    viewstate: {//del 2 - viewstate per side - inputs
        userLogin:{
           email: "",
           password: "",                
        },
        editProfile: {
            img: ""
        },
        
        registerfoundDisc:{
           name: '',
           bane: '',
           tlf: '',
           email: '',
           farge: '',
           status: '',
           dato: '',
        },
    
        registerUser:{
            name: '',
            password: '',
            repeatPassword: '',
            email: '',
            tlfNr: '',
        },
        filterDisc: {
            search: "",
            course: "",
            farge: ""
        }
    },


        //del 3'

        users:[{
             name: 'Morten',
             password: 'Morten10',
             email: 'Morten@mortenmail.no',
             tlfNr: '12345678',
             id: 0,
             img: '',
             userDisc: [], 
            },{
             name: 'Nada',
             password: 'Nada10',
             email: 'Nada@nadamail.no',
             tlfNr: '23456789',
             id: 1,
             img: '',
             userDisc: [],  
            }
    ],

    discAnsvarlig:[{
        name: 'Laurits',
        password: 'Laurits10',
        email: 'Laurits@Lauritsmail.no',
        tlfNr: '33456780',   
    }


    ],
    database:[{
        name: "Putter",
        bane: 'Oslo 1',
        farge: 'Rosa',
        navn: 'Morten',
        dato: '16.10.2025',
        status: 'Registrert',
        id: 0,
        
    },
    {
        name: "Driver",
        bane: 'Oslo 1',
        farge: 'Rosa',
        navn: 'Morten',
        dato: '22.10.2025',
        status: 'Savnet',
        id: 0,
    }

    ],

    
    contact: {
        discEmail: 'discansvarlig@Mortenmail.no',
        adminEmail: 'admin@Mortenmail.no',       
    },


}