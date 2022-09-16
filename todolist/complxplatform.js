// var str="<tr><td>Bob</td><td>India Maharashtra</td></tr>";

rowcnt=0;
data={};
function addData(){

    inputvalue = document.getElementById('todoinput').value;
    if (inputvalue){
        data[rowcnt]=inputvalue;


        deletebutoon="<img src='./cross.png' style='width:20px;height:20px;' onclick='delrow("+rowcnt+")' id='deletebtn-"+rowcnt+"'>";
        editbutoon="<button class='btn btn-primary btn-xs btn-sm'  id='editbtn-"+rowcnt+"' onclick='editrow("+rowcnt+")' >Edit</button>";

        td="<td class='td-"+rowcnt+"'><p id='data-"+rowcnt+"' > "+inputvalue+"</p></td>";
        span="<td><span id='span-"+rowcnt+"'>"+deletebutoon+editbutoon+"</span></td>";

        tr="<tr id='row-"+rowcnt+"'>"+td+span+"</tr>";


        var tableBody = document.getElementById("tBody");
        // tableBody.appendChild(tr);
        tableBody.innerHTML=tableBody.innerHTML+tr;
        rowcnt++;
        document.getElementById('todoinput').value="";


    }else{
        alert('Please Enter a valid or non empty input');
    }
}


function delrow(rowcnt){
    var elem = document.getElementById("row-"+rowcnt);
    elem.parentNode.removeChild(elem);
}
function editrow(rowcnt){
    var datat=document.getElementById("data-"+rowcnt);//   getElementsById('data-'+rowcnt);
    datat.setAttribute('style','display:none;');
    console.log(data);
    input=document.createElement('input');
    input.value=data[rowcnt];
    input.id='inputrow-'+rowcnt;

    l=document.getElementById('deletebtn-'+rowcnt);
    l.setAttribute('style','display:none;');
    l=document.getElementById('editbtn-'+rowcnt);
    l.setAttribute('style','display:none;');



    p=document.createElement('p');
    p.id='inputrowp-'+rowcnt;
    p.appendChild(input);

    input="<input type='text' class='form-control ' value='"+data[rowcnt]+"' id='inputrow-"+rowcnt+"' ></input>";
    p="<p id='inputrowp-"+rowcnt+"'>"+input+"</p>";

    q=document.getElementsByClassName("td-"+rowcnt);
    
    q[0].innerHTML=p;

    updatebtn="<button type='button' id='upbtn-"+rowcnt+"' class='btn btn-primary btn-xs btn' onclick='update("+rowcnt+")'>Update</button>";
    r=document.getElementById('span-'+rowcnt);
    r.innerHTML=r.innerHTML+updatebtn;

}
function update(rowcnt){
    inputvalue = document.getElementById('inputrow-'+rowcnt).value;
    if (inputvalue!=data[rowcnt]){
        data[rowcnt]=inputvalue;
           
    }else
    {
        alert('values is not changed');

    }
    ele=document.getElementsByClassName('td-'+rowcnt)[0];
        
        ele.innerHTML=data[rowcnt];
        l=document.getElementById('deletebtn-'+rowcnt);
        l.setAttribute('style','width:20px;height:20px;');
        l=document.getElementById('editbtn-'+rowcnt);
        l.setAttribute('style','');
        l=document.getElementById('upbtn-'+rowcnt);
        l.parentNode.removeChild(l);
}