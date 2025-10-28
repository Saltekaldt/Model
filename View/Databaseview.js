databaseview()
function databaseview(){
    document.getElementById("app").innerHTML =  `
    ${showHeader2()}<br><br><br><br><br>
    <div class="database-grid">
        <div class="found-disc-button"><button> Register found disc</button></div>
        <div class="search-bar" class="test">search: <input type="text"><br><br><br><br> Bane:
            <select>
                <option>bane 1</option>
                <option>bane 2</option>
                <option>bane 3</option>
                <option>bane 4</option>
                <option>bane 5</option>  
            </select><br><br><br><br>
            farge:
            <select>
                <option>rød</option>
                <option>grønn</option>
                <option>blå</option>
                <option>sort</option>
                <option>hvit</option>  
            </select>
        
        
        </div>
        <div class="search-result" class="test">
            <div class="search-result-info">
                <div class="search-result-time">dager til donasjon</div>
                <div class="search-result-disc-number">Disc 1</div>
                <div class="search-result-data">(Navn, Bane, Farge, Dato)</div>
            </div>
            <div class="search-result-info">
                <div class="search-result-time">dager til donasjon</div>
                <div class="search-result-disc-number">Disc 2</div>
                <div class="search-result-data">(Navn, Bane, Farge, Dato)</div>
            </div>
            <div class="search-result-info">
                <div class="search-result-time">dager til donasjon</div>
                <div class="search-result-disc-number">Disc 3</div>
                <div class="search-result-data">(Navn, Bane, Farge, Dato)</div>
            </div>
            <div class="search-result-info">
                <div class="search-result-time">dager til donasjon</div>
                <div class="search-result-disc-number">Disc 4</div>
                <div class="search-result-data">(Navn, Bane, Farge, Dato)</div>
            </div>

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
    </div>

`}