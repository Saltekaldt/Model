function registerFoundDisc(){
    const foundDisc = {...model.viewstate.registerfoundDisc};

    model.database.push(foundDisc);

    model.viewstate.registerfoundDisc = {
           name: '',
           bane: '',
           tlf: '',
           email: '',
           farge: '',
           status: '',
        };
};
