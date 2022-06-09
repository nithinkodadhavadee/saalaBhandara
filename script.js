let krishna = `
# Krishna AL
- [ ] Rs 1500 - Mpokket August
- [ ] Rs 250
- [ ] Rs 800 - TIE Internship
- [ ] Rs 150
- [ ] Rs 500
- [ ] Rs 300
- [ ] Rs 2600 - Phone Display
- [ ] Rs 11569 - Mpokket September, October, November
- [ ] Rs 847 - Raju Slice October
- [ ] Rs 705 - Raman Slice October
- [ ] Rs 384 - Zomato Firangi Bake 08/10/2021
- [ ] Rs 320 - Grill House
- [ ] Rs 100 - Sportingo - 13/10/2021
- [ ] Rs 100 - Mithun to Krishna 28/10/21
- [ ] Rs 705 - Raman Slice November
- [ ] Rs 254 - Slice November 
- [ ] Rs 705 - Raman Slice December
- [ ] Rs 365 - Nakul Slice December
- [ ] Rs 305 - Raman Slice 705 January - 400 Nandu slice baaki 
- [ ] Rs 305 - Raman Slice 705 February - 400 Nandu Slice Baaki
- [ ] Rs 2000 - Goa Pavan repayment
- [ ] Rs 750 - Dinner thing
- [ ] Rs 800 - 18th Reshmita mane meet
- [ ] Rs 100 - to be Return to Raman
- [ ] Rs 305 - Raman Slice 705 March - 400 Nandu Slice baaki
- [ ] Rs 1505 - Zudio 23/05/2022
- [ ] Rs 500 - Gopalan Bowling 23/05/2022
- [ ] Rs 1050 - Trends Round Neck 23/05/2022
- [ ] Rs 400 - Global 23/05/2022
- [ ] Rs 500 - Starbucks 02/06/2022
- [ ] Rs 500 - Fule 02/06/2022

`;

let ramana = `
# Janakiramana R
- [x] Rs 500 - Goa Pavan Repayment
- [ ] Rs 500 - some some thing 
- [x] Rs 300 - Kotigobba 2 
`;
// 8799: Pavan 

window.onload = function(){
    renderHTML(krishna, 'krishnaContent', 'krishnaTotal');
    renderHTML(ramana, 'ramanaContent', 'ramanaTotal');
}

function renderHTML(MDtoHTML, contentClass, totalClass){
    let totalDue = 0;
    let eachLine = MDtoHTML.split("\n");

    for(let i = 2; i < eachLine.length-1; i++){
        console.log(eachLine[i].split(' ')[4]);
        if(eachLine[i].split(' ')[1]==='['){
            totalDue = totalDue + parseInt(eachLine[i].split(' ')[4]);
        }
    }
    console.log(totalDue);
    document.getElementById(contentClass).innerHTML = marked.parse(MDtoHTML);
    document.getElementById(totalClass).innerHTML = marked.parse("## Total \nRs. " + String(totalDue));
}
