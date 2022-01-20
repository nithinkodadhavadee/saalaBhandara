let theString = `
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

// 8799: Pavan 

window.onload = function(){
    let totalDue = 0;
    let eachLine = theString.split("\n");

    for(let i = 2; i < eachLine.length-1; i++){
        console.log(eachLine[i].split(' ')[4]);
        totalDue = totalDue + parseInt(eachLine[i].split(' ')[4]);
    }
    console.log(totalDue);
    document.getElementById('content').innerHTML = marked.parse(theString);
    document.getElementById('total').innerHTML = marked.parse("## Total \nRs. " + String(totalDue));
}
