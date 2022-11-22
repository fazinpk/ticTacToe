var clickCound=0;
var winStatus=false;
function mark(n){
    a=document.getElementsByClassName("row");
    if(!winStatus){

        if (a[n].textContent==""){
            clickCound=clickCound+1;
            if (clickCound%2==0){
                a[n].textContent="O"; 
            }else{
                a[n].textContent="X";
            }
        } 
        b = []
        for(i=0;i<9;i++){
            b.push(a[i].textContent);
            
    
        }
        console.log(b);
        if (b[0]+b[1]+b[2]=="OOO" || 
            b[3]+b[4]+b[5]=="OOO" || 
            b[6]+b[7]+b[8]=="OOO" || 
            b[0]+b[3]+b[6]=="OOO" ||
            b[1]+b[4]+b[7]=="OOO" ||
            b[2]+b[5]+b[8]=="OOO" ||
            b[0]+b[4]+b[8]=="OOO" ||
            b[2]+b[4]+b[6]=="OOO"){
            document.getElementById("p1_status").textContent = "P1:LOSS";
            document.getElementById("p2_status").textContent = "P2:WIN";
            winStatus=true;
        }else if(b[0]+b[1]+b[2]=="XXX" || 
        b[3]+b[4]+b[5]=="XXX" || 
        b[6]+b[7]+b[8]=="XXX" || 
        b[0]+b[3]+b[6]=="XXX" ||
        b[1]+b[4]+b[7]=="XXX" ||
        b[2]+b[5]+b[8]=="XXX" ||
        b[0]+b[4]+b[8]=="XXX" ||
        b[2]+b[4]+b[6]=="XXX"){
            document.getElementById("p1_status").textContent = "P1:WIN";
            document.getElementById("p2_status").textContent = "P2:LOSS";
            winStatus=true;
        }
    }
}
function reset(){
    a=document.getElementsByClassName("row");
    for(i=0;i<9;i++){
        a[i].textContent="";
        clickCound=0;
        winStatus=false;
        document.getElementById("p1_status").textContent = "P1:";
        document.getElementById("p2_status").textContent = "P2:";
    }
}