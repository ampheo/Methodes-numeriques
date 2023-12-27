function get() {
    var n = document.getElementById("n").value;
    document.write(`<style> 
    @font-face {
      font-family: Barbra;
      src: url(Barbra-High.ttf);
  }
  :root {
    --f-color: #000;
   --s-color: #D9D9D9;
  
  }
   button {
      padding: 1.3em 4em;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      border-radius: 20px;
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none ;
      font-family: "Barbra";
      border: none;
      margin-top: 2em !important;
    }
    .btnblack {
      color: #fff;
      background-color: #000;
    }
    .btnblack:hover{
      color: #000;
      background-color: #D9D9D9;
    }
   body{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Barbra";
      background-color: #D9D9D9;
   } 
   input{
      width: 46px;
      height: 35px;
      font-size: 22px; 
   }
   @media(max-width:768px){
    input{
    width: 32px;
    height: 28px;
    font-size: 19px; 
    }
  }
  h3{
    display:inline-block;
  }
    .lesValurs{
       padding-top:180px;
    }
    .n1{
       
       display:flex;
       justify-content: center;
       justify-items: center;
       
    }
    .btn2{
       display:none;
    }
    .slide-top {
      -webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
              animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   }
   
    @-webkit-keyframes slide-top {
       0% {
         -webkit-transform: translateY(0);
                 transform: translateY(0);
       }
       100% {
         -webkit-transform: translateY(-50px);
                 transform: translateY(-50px);
       }
     }
     @keyframes slide-top {
       0% {
         -webkit-transform: translateY(0);
                 transform: translateY(0);
       }
       100% {
         -webkit-transform: translateY(-50px);
                 transform: translateY(-50px);
       }
     }   
    </style>`
    )
    document.write(`
    <div class="lesValurs" > `)
    for(var i=0; i<n;i++){
        document.write(`<div>`)
        for(var j=0; j<n;j++){
        document.write(`
            <input type="number" id="val-${i}${j}">
              <h3>X${j+1}</h3>    `)}
           document.write(` = <input type="number" id="val-${i}">
           </div> <br>`)
        }
        document.write(`
        <div class="btn" style="display:flex; justify-content: center;">
        <div>
        <button type="button" class="btn btnblack" id="c">submite</button> 
       <input type="number" id="n1" value="${n}" style="display:none">
       </div></div></div></div>`)
       document.getElementById("c").onclick = function(){
        document.write(`
        <style>
        :root {
         --f-color: #000;
        --s-color: #D9D9D9;
       
       }
        button {
           padding: 1.3em 4em;
           font-size: 12px;
           text-transform: uppercase;
           letter-spacing: 2.5px;
           border-radius: 20px;
           transition: all 0.3s ease 0s;
           cursor: pointer;
           outline: none ;
           font-family: "Barbra";
           border: none;
           margin-top: 2em !important;
         }

        .lesValurs{
           display:none;
        }
        
        .btn2{
           display:flex;
           
           justify-content: center;
           align-items: center;
           margin: 100px 50%;
        }
        
        .btn2 button{
           width:300px;
           height:50px;
        }
        
    .btnblack {
      color: #fff;
      background-color: #000;
    }
    .btnblack:hover{
      color: #000;
      background-color: #D9D9D9;
    }
   body{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Barbra";
      background-color: #D9D9D9;
   } 
  h3{
    display:inline-block;
  }

        </style>
        <div class="btn2" >
        <div>
        <button type="button" id="1" value="1" onclick="gauss()" class="btnblack" >Gauss</button>
        <button type="button" id="2" value="2" onclick="saidle()" class="btnblack" >Gauss saidle</button>
        <button type="button" id="3" value="3" onclick="jacobi()" class="btnblack" >Jacobi</button>
        </div></div>
        `)}

}










function gauss(){
    document.write(`
    <style>
    .box{
      display:none
    }
    .btn2{
       display:none;
    }
    </style>
    `)
      
      let n = document.getElementById("n1").value;
       
      let a = []; let b = [];
       for(var i=0; i<n;i++){
    
          a[i] = [];  
          for(var j=0; j<n;j++){
        a[i][j] = +document.getElementById(`val-${i}${j}`).value;
      
       }
        b[i] = +document.getElementById(`val-${i}`).value;
    }
    console.log(a);
    console.log(b); 
    var temp;
    for( i=0;i<n;i++){
       for(j=i+1;j<n;j++){
          if(Math.abs(a[i][i]<a[j][i])){
          for(var i2=0;i2<n;i2++){
    
           temp=a[i][i2];
           a[i][i2]=a[j][i2];
           a[j][i2]=temp;
    
          }
          temp=b[i];
          b[i]=b[j];
          b[j]=temp;
          
         
       }}}
    
    let s1;
    for(let x=0;x<n-1;x++){
    for(i=x+1;i<n;i++){
    
        if(a[i][x] === 0){
         
            continue;
                }else{
           s1 = a[i][x] / a[x][x];
    
           
    for(j=x;j<n;j++){
    a[i][j]=a[i][j]-(s1*a[x][j]);
    }
    b[i]-=s1*b[x];
    }
    }}
    document.write(`<style> 
    body{
        display: flex;
        justify-content: space-around;
        font-family: "Barbra";
        background: #D9D9D9;
    }
   
  }
    .lesValurs{
       display:none;
    }
    .x{
       font-size:12px;
    }
    .afficherVal{
       word-spacing:10px;
    }


    .soulition h3{
      display:block;
      margin:5px 30px;
    }

    @media(max-width:768px){
      body{
         display: flex;
         flex-direction: column;
      } 
      h1{
         margin: 2em auto;

       }
    }
    </style>
    <h1>Gauss</h1>
    <div class="afficherVal">
    <div>
    `)
    for(var i=0; i<n;i++){
       document.write(`<div>`)
       for(var j=0; j<n;j++){
       document.write(`
             <h3>${(a[i][j].toFixed(2))}X<span class="x">${j+1}</span></h3> `)
          }
          document.write(` = <h3>${(b[i].toFixed(2))}</h3> 
         
          </div> <br> `)
       }
       document.write(`
       </div> </div>  
       <div class="soulition">`)
    
      let x=[] ;
       for(i=0;i<n;i++){
        x[i]=b[i];
       }
       for(j=n-1;j>=0;j--){
       if(a[j][j] !== 0){
       
         x[j]/=a[j][j];
       
         document.write(`<h3>X${j+1} : ${(x[j].toFixed(2))}</h3>`) 
        
       }
       else{
            x[j]=0;
        document.write(`<h3>X${j+1} : ${(x[j].toFixed(2))}</h3>`)
       }
       for(i=j-1;i>=0;i--){
       x[i]=x[i]-(x[j]*a[i][j]);
       }
       }
       document.write(`</div> </div>`)
    };












function saidle(){ 
    let n = document.getElementById("n1").value;
    
    document.write(`
    <style>
 body{
    display: flex;
    justify-content: space-around;
    font-family: "Barbra";
    background: #D9D9D9;
 
 }
 .box{
   display:none;
 }

 button{
   margin:auto;
 }
 
   .x{
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       
    }
    .btnblack {
      color: #fff;
      background-color: #000;
    }
    .btnblack:hover{
      color: #000;
      background-color: #D9D9D9;
    }
    @media(max-width:768px){

         body{
            display: flex;
            flex-direction: column;
         } 
      
       h2{
        display:block;
       }
       h1{
         font-size:25px !important ;
         margin: 2em auto;
       }
       .x0 div {
          margin:8px;
       }
       .x{
         display:flex;
         flex-direction: column;
       }
       .nbrSoulition{
       display: flex;
       align-items: center;
       justify-content: center;

       }
       .nbrSoulition input{
          margin: 0 10px;
       }
   }
   .nbrSoulition h4{
      padding: 0 1.5em ;
   }

    .btn2{
       display:none;
    }
     h2 {
       display: inline-block;
    }
   .xx0{
    display: inline-block;
    }
    .btn33{
       display: flex;
       justify-content:center;
       align-items: center;       
    }
    .sec1{
          display: flex;
          justify-content: center;
          color:black;
    }
    sup{
       color:black;
    }
    .nbrSoulition{
      display: flex;
    align-items: center;
}
    }
 </style>
 <div class="sec1">
    <h1>methode de gauss saidle</h1>
    </div>
 <div class="x">
 <div class="x0"> `)
  for(var i=0;i<n;i++){
    document.write(`<div>
    <h2>X${i+1}<sup>(0)</sup></h2> 
    <input type="number" id="x0${i}" class="xx0" value="0"></div>
    
    `)}
    document.write(`
    </div>
    <div class="nbrSoulition">
    <h4> nombre de soluition : </h4>
    <input type="number" id="soul">
    </div></div>
    </div>
    
    <div class="btn33">
    <button type="button" onclick="getx00()"  class="btn3 btnblack">submit</button>
    </div>
 `)
 };

 function getx00(){  
   
    let  n = +document.getElementById("n1").value;
    
    let a = []; let b = [];
        for(var i=0; i<n;i++){
           a[i] = [];  
           for(var j=0; j<n;j++){
         a[i][j] = +document.getElementById(`val-${i}${j}`).value;
        }
         b[i] = +document.getElementById(`val-${i}`).value;
     }
     var ns = +document.getElementById("soul").value;
     let x0=[];
     for(var i=0;i<n;i++){
    
      x0[i] = +document.getElementById(`x0${i}`).value;
     }
     console.log(a);
    console.log(b);
    
    
    let s=[];
    let s1;
    
    for(var k1=0;k1<n;k1++){
       for(var k=0;k<n;k++){
          for(i=0;i<n;i++){
             for(var i1=0;i1<n;i1++){
              s[i]=0;
             }
             for( j=0;j<n;j++){
                if(j !== i){
                   s[i]+=Math.abs(a[i][j]);
                }}}
    
                for(i=k;i<n-1;i++){
                   if(Math.abs(a[i][i]) >= Math.abs(s[i])){
                      continue;
                   }else{
                      for( j=0;j<n;j++){
                           
                         s1=a[i][j];
                         a[i][j]=a[i+1][j];
                         a[i+1][j]=s1;}
                         s1=b[i];
                         b[i]=b[i+1];
                         b[i+1]=s1;
                   }}}}
    document.write(`
     <style>
    body{
      display: flex;
      justify-content: space-around;
      font-family: "Barbra";
      background: #D9D9D9;

    }
     .x , .btn3{
        display:none;
     }
     @media(max-width:768px){
    body .saidleSoul h2{
        font-size:15px;
    }
    body{
      display: flex;
      flex-direction: column;
   } 
   }
    .saidleSoul{
       word-spacing:20px;
       display:flex;
       justify-content:center;
       align-items:center;
    }
    @media(max-width:768px){
      .saidleSoul > div{
        display:block;
      }

    }
     </style>
     `)

    
    let a1;
    document.write(`<div class="saidleSoul">
    <div>`)
    for(let k=0;k<ns;k++){
       for(i=0; i<n; i++){
    a1=0;
       
       for(j=0;j<n;j++){
       if(i !== j){
          a1+=a[i][j]*x0[j];
       }}
       x0[i]=(b[i]-a1)/a[i][i];
     
       document.write(`
      
       <h2>X${i+1}<sup>(${k+1})</sup>=${(x0[i]).toFixed(2)}</h2>
       `)}
       document.write(`
      <br>
       `)}
       document.write(`</div> </div>`)
    };
       










function jacobi(){ 
    let n = document.getElementById("n1").value;
    document.write(`
    <style>
 body{
   display: flex;
   justify-content: space-around;
   font-family: "Barbra";
   background: #D9D9D9;
 }
 button{
   margin:auto;
 }
 
   .x{
       display: flex;
       justify-content:space-evenly;
       align-items: center;
       
    }
   }
    .btn2{
       display:none;
    }
     h2 {
       
       display: inline-block;
    }
   .xx0{
    display: inline-block;
    }
    
    .btn2{
       display:none;
    }
    .btn33{
       display: flex;
       justify-content:center;
       align-items: center;
       
    }
    .nbrSoulition h3{
      padding: 0 1.5em ;
   }
    @media(max-width:768px){
      body{
         display: flex;
         flex-direction: column;
      } 
        h2{
           display:block;
        }
        .x0{
           display:flex;
           flex-direction: column;
         }
        .x0 div {
        }
        .x{
         display:flex;
         flex-direction: column;
   }
        .nbrSoulition{
        display: flex;
        align-items: center;
        justify-content: center;
        }
     }
     .btnblack {
      color: #fff;
      background-color: #000;
    }
    .btnblack:hover{
      color: #000;
      background-color: #D9D9D9;
    }
    .sec1{
          display: flex;
          justify-content: center;
          color:black;
    }
 sup{
    color:black;
 }
 </style>
 <div class="sec1">
    <h1>methode de jacobi</h1>
    </div>
 <div class="x">
 <div class="x0"> `)
  for(var i=0;i<n;i++){
    document.write(`<div>
    <h2>X${i+1}<sup>(0)</sup></h2> 
    <input type="number" id="x0${i}" class="xx0" value="0"></div>
    
    `)}
    document.write(`
    </div>
    <div class="nbrSoulition">
    <h3> nombre de soluition : </h3>
    <input type="number" id="soul">
    </div></div>
    </div>
    <div class="btn33">
    <button type="button" onclick="getx0()"  class="btn3 btnblack">submit</button>
    </div>
 `)
 };
function getx0(){  
    let  n = +document.getElementById("n1").value;
    console.log(n);
    let a = []; let b = [];
        for(var i=0; i<n;i++){
           a[i] = [];  
           for(var j=0; j<n;j++){
         a[i][j] = +document.getElementById(`val-${i}${j}`).value;
        }
         b[i] = +document.getElementById(`val-${i}`).value;
     }
     console.log(a);
     console.log(b);
     var ns = +document.getElementById("soul").value;
     let x0=[];
     for(var i=0;i<n;i++){
      x0[i] = +document.getElementById(`x0${i}`).value;
     }
    document.write(`
     <style>
     .x , .btn3{
        display:none;
     }
    body{
        display: flex;
        justify-content: space-around;
        font-family: "Barbra";
        background: #D9D9D9;     
    }
    .saidleSoul{
       word-spacing:20px;
       display:flex;
       justify-content:center;
       align-items:center;    
    }
    @media(max-width:768px){
        .saidleSoul > div{
          display:block;
        }
        body{
         display: flex;
         flex-direction: column;
        }
      }
     </style>
     `)
     let s=[];
     let s1;
     
     for(var k1=0;k1<n;k1++){
        for(var k=0;k<n;k++){
           for(i=0;i<n;i++){
              for(var i1=0;i1<n;i1++){
               s[i]=0;
              }
              for( j=0;j<n;j++){
                 if(j !== i){
                    s[i]+=Math.abs(a[i][j]);
                 }}}
     
                 for(i=k;i<n-1;i++){
                    if(Math.abs(a[i][i]) >= Math.abs(s[i])){
                       continue;
                    }else{
                       for( j=0;j<n;j++){
                            
                          s1=a[i][j];
                          a[i][j]=a[i+1][j];
                          a[i+1][j]=s1;}
                          s1=b[i];
                          b[i]=b[i+1];
                          b[i+1]=s1;
                    }}}}
     console.log(a);
     console.log(b);
    let a1;
    let a2 =[];
    document.write(`<div class="saidleSoul">
    <div>`)
    for(let k=0;k<ns;k++){
       for(i=0; i<n; i++){
    a2[i]=0;
       
       for(j=0;j<n;j++){
       if(i !== j){
          a2[i]+=a[i][j]*x0[j];
          }}}
          for(i=0;i<n;i++){
       x0[i]=(b[i]-a2[i])/a[i][i];
       console.log(x0);
       document.write(`
       <h2>X${i+1}<sup>(${k+1})</sup>=${(x0[i]).toFixed(2)}</h2>
       `)}
       document.write(`
      <br>
       `)}
       document.write(`</div> </div>`)
    };