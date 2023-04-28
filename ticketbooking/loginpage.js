function login(){
    let db={0:['gokul','raam'],1:['harish','raam1'],2:['viji','raam2']};
    let user=document.getElementById('e1').value;
    let pass=document.getElementById('pass').value;
    let flag=false;

    for(let i=0;i<Object.keys(db).length;i++){
        if((db[i][0]==user)&&(db[i][1]==pass)){
            {
                flag=true;
            }
        }
    }
    if(flag==true){
        window.location.href='./Book trip 2.html';
    }
        else{
            alert("Invalid username or Incorrect password...Try again..!");
        }
    
}