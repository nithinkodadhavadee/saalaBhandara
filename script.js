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
- [ ] Rs 305 - Raman Slice 705 - 400 Nandu lice baaki 
- [ ] Rs 2000 - Goa Pavan repayment
`;

let ramana = `
# Janakiramana R
- [x] Rs 500 - Goa Pavan Repayment
- [x] Rs 500 - some some thing 
- [ ] Rs 300 - Kotigobba 2 
`;
// 8799: Pavan 

window.onload = function(){
    let totalDue = 0;
    let eachLine = krishna.split("\n");

    for(let i = 2; i < eachLine.length-1; i++){
        console.log(eachLine[i].split(' ')[4]);
        if(eachLine[i].split(' ')[1]==='['){
            totalDue = totalDue + parseInt(eachLine[i].split(' ')[4]);
        }
    }
    console.log(totalDue);
    document.getElementById('krishnaContent').innerHTML = marked.parse(krishna);
    document.getElementById('krishnaTotal').innerHTML = marked.parse("## Total \nRs. " + String(totalDue));


    totalDue = 0;
    eachLine = ramana.split("\n");

    for(let i = 2; i < eachLine.length-1; i++){
        console.log(eachLine[i].split(' ')[4]);
        if(eachLine[i].split(' ')[1]==='['){
            totalDue = totalDue + parseInt(eachLine[i].split(' ')[4]);
        }
    }
    console.log(totalDue);
    document.getElementById('ramanaContent').innerHTML = marked.parse(ramana);
    document.getElementById('ramanaTotal').innerHTML = marked.parse("## Total \nRs. " + String(totalDue));
}
