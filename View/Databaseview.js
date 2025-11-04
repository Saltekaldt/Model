databaseview();

function databaseview(){
    document.getElementById("app").innerHTML = /*html*/`
    ${showHeader2()}<br><br><br><br><br>
    <div class="database-grid">

        <div class="found-disc-button">
            <button onclick="registerDiscView()">Register found disc</button>
        </div>

        <div class="search-bar" class="test">
            search: <input type="text"><br><br><br><br> Bane:
            ${createCourseSelect()}
            <br><br><br><br>
            farge:
            ${createColorSelect()}
        </div>

        ${printDiscs()}

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
};

function printDiscs(){
    const discs = model.database;
    const { search, course, farge } = model.viewstate.filterDisc;

    let html = /*html*/`
    <div class="search-result" class="test">
    `;

    for(i = 0; i < discs.length; i++){
        const disc = discs[i];
        html += /*html*/`
        <div class="search-result-info">
            <div class="search-result-time">dager til donasjon</div>
            <div class="search-result-disc-number">Disc ${i+1}</div>
            <div class="search-result-data">(${disc.navn}, ${disc.bane}, ${disc.farge}, Dato)</div>
        </div>
        `;
    };
    html += `</div>`;
    return html;
};

function createCourseSelect(){
    const discs = model.database;
    const courses = ["Oslo 1", "Bane 2", "Bane 3", 
                    "Bane 4", "Bane 5"];
    let html = /*html*/ `
        <select>
        <option value=""></option>
    `;
    for(i = 0; i < courses.length; i++){
        html += /*html*/ `
        <option value="${courses[i]}">${courses[i]}</option>`;
    };
    html += `</select>`;
    return html;
};

function createColorSelect(){
    const discs = model.database;
    const colors = ["Rød", "Grønn", "Blå", 
                    "Sort", "Hvit", "Rosa"];
    let html = /*html*/ `
        <select>
        <option value=""></option>
    `;
    for(i = 0; i < colors.length; i++){
        html += /*html*/ `
        <option value="${colors[i]}">${colors[i]}</option>`;
    };
    html += `</select>`;
    return html;
};
