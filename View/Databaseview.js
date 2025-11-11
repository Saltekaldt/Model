function databaseview(){
    document.getElementById("app").innerHTML = /*html*/`
    ${showHeader2()}<br><br><br><br><br>
    <div class="database-grid">

        <div class="found-disc-button">
            <button class="regFoundDiscButton" onclick="registerDiscView()">Register found disc</button>
        </div>

        <div class="search-bar" class="test">
            search: <input type="text"><br><br><br><br> Bane:
            ${createCourseSelect()}
            <br><br><br><br>
            farge:
            ${createColorSelect()}
        </div>

        <div class="search-result" class="test">
        ${printDiscs()}
        </div>

        <div class="search-ordering" class="test">
            <select>
                <option>ny</option>
                <option>gammel</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>  
            </select>
        </div>
    </div>`;

    addInputEvents();
};

function printDiscs(){
    const discs = searchDatabase();
    const { search, course, farge } = model.viewstate.filterDisc;

    let html = "";

    for(let i = 0; i < discs.length; i++){
        const disc = discs[i];
        html += /*html*/`
        <div class="search-result-info">
            <div class="search-result-time">dager til donasjon</div>
            <div class="search-result-disc-number">Disc ${i+1}</div>
            <div class="search-result-data">(Navn: ${disc.name}, Eier: ${disc.navn}, Bane: ${disc.bane}, Farge: ${disc.farge}, Dato)</div>
        </div>
        `;
    };

    return html === "" ? "<div>No discs found...</div>" : html;
};

function createCourseSelect(){
    const courses = ["Oslo 1", "Bane 2", "Bane 3", "Bane 4", "Bane 5"];
    let html = /*html*/ `
        <select class="select-course">
        <option value="">Velg bane</option>
    `;
    for(let i = 0; i < courses.length; i++){
        const selected = courses[i] === model.viewstate.filterDisc.course ? " selected" : "";
        html += /*html*/ `<option value="${courses[i]}"${selected}>${courses[i]}</option>`;
    };
    html += `</select>`;
    return html;
};

function createColorSelect(){
    const colors = ["Rød", "Grønn", "Blå", "Sort", "Hvit", "Rosa"];
    let html = /*html*/ `
        <select class="select-color">
        <option value="">Velg farge</option>
    `;
    for(let i = 0; i < colors.length; i++){
        const selected = colors[i] === model.viewstate.filterDisc.farge ? " selected" : "";
        html += /*html*/ `<option value="${colors[i]}"${selected}>${colors[i]}</option>`;
    };
    html += `</select>`;
    return html;
};

function addInputEvents(){
    const searchInput = document.querySelector(".search-bar input[type='text']");
    const courseSelect = document.querySelector(".select-course");
    const colorSelect = document.querySelector(".select-color");

    if(searchInput){
        searchInput.addEventListener("input", function(){
            model.viewstate.filterDisc.search = this.value;
            updateResults();
        });
    };

    if(courseSelect){
        courseSelect.addEventListener("change", function(){
            model.viewstate.filterDisc.course = this.value;
            updateResults();
        });
    };

    if(colorSelect){
        colorSelect.addEventListener("change", function(){
            model.viewstate.filterDisc.farge = this.value;
            updateResults();
        });
    };
};

function updateResults(){
    const resultsDiv = document.querySelector(".search-result");
    resultsDiv.innerHTML = printDiscs();
};
