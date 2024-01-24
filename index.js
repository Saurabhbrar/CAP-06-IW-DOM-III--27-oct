let myform = document.querySelector('form');
let mytask = document.getElementById('task');
let myprio = document.getElementById('priority');
let alldata = []
let tbody = document.querySelector('tbody')

myform.addEventListener('submit',function(s)
{
    s.preventDefault();
    let data = {};
    data.input1 = mytask.value 
    data.input2 = myprio.value
    
    alldata.push(data)
    //console.log(alldata)
    tbody.innerHTML = null
alldata.map((ele)=>
{
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    
    td1.innerText = ele.input1;
    td2.innerText = ele.input2;
    console.log(ele.input2)
    row.append(td1,td2);
    tbody.append(row)
    

    })

})