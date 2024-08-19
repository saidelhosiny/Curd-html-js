var proudectNameInp    =document.getElementById("productName");
var proudectPriceInp   =document.getElementById("productPrice");
var proudectCompanyInp =document.getElementById("productCompany");
var proudectDescInp    =document.getElementById("productDesc");
var currentIndex=0;
var searchInp = document.getElementById("searchInp");
var searchRow = document.getElementById("searchRow");
var proudectContanier;
if(localStorage.getItem("proudect:")==null)
    {
        proudectContanier=[];
    }
   else
   {
       proudectContanier=JSON.parse(localStorage.getItem("proudect:"));
       dispalyProudect();
   }

var btn =document.getElementById("addBtn");

btn.onclick=function()
{
    if(reg()==true)
        {
            
      
    if(btn.innerHTML=="add product")
        {
           addProudect();
           dispalyProudect();
           clearform();
        }
    
    else
        {
            afteradd();
         dispalyProudect();
           clearform();
        }
}
      }

searchInp.onkeyup = function()
{
    searchProducts(searchInp.value)
}
function addProudect()
{
    var proudect=
        { name:proudectNameInp.value, price:proudectPriceInp.value , desc:proudectCompanyInp.value, text:proudectDescInp.value
        
        };
    proudectContanier.push(proudect);
    localStorage.setItem("proudect:",JSON.stringify(proudectContanier));
}
function searchProducts(term)
{
        var searchCols = "";
    
    for(var i= 0 ; i < proudectContanier.length ;i++)
        {
            if(proudectContanier[i].name.includes(term))
                {
                    
                searchCols +='<div class="col-md-3"> <div class="product"><h3>'+proudectContanier[i].name+'</h3><p>'+proudectContanier[i].desc+'</p><p class="text-danger">'+proudectContanier[i].price+'</p> <p class="text-info">'+proudectContanier[i].company+'</p><button class="btn btn-danger" onclick="deleteProduct('+i+')">delete</button></div></div>' 
                }
        }
    
    searchRow.innerHTML = searchCols;
}


function dispalyProudect()
{  
   var row="";
    for( var i=0 ;i< proudectContanier.length;i++)
        {
            row+=`  <div class="col-md-4">
         
            <p>`+proudectContanier[i].name+`</p>
            <h3>`+proudectContanier[i].price+`</h3>
            <p>`+proudectContanier[i].desc+`</p>
            <p>`+proudectContanier[i].text+`</p>

              <button class="btn btn-info py-3" onclick="deleteProudect(`+i+`)">Delete</button>

              <button class="btn btn-danger py-3" onclick="returnProudect(`+i+`)">Update</button>

         
        </div>`
        }
     document.getElementById("rowData").innerHTML=row;
}
function returnProudect(id)
{
    proudectNameInp.value    = proudectContanier[id].name;
    proudectPriceInp.value   = proudectContanier[id].price;
    proudectCompanyInp.value = proudectContanier[id].desc;
    proudectDescInp.value    = proudectContanier[id].text; 
    btn.innerHTML="update data";
    currentIndex=id;
} 

function reg()
{ 
    
    var regex=/^[A-Z]/;
    if(regex.test(proudectNameInp.value) == false)
        {
          alert("Enter productName frist character Uppercase   like  Camera");
          return false;   
        }
    else
        {
            return true;
        }
}

  /*function after()
{
  proudectContanier[currentIndex].name= proudectNameInp.value     ;
  proudectContanier[currentIndex].price=  proudectPriceInp.value   ;
  proudectContanier[currentIndex].desc =   proudectCompanyInp.value  ;
  proudectContanier[currentIndex].text=  proudectDescInp.value; 
    
     btn.innerHTML="add proudect";
    localStorage.setItem("proudect:",JSON.stringify(proudectContanier));
     dispalyProudect();
}*/













 /*var b= document.getElementById("addBtn2");
b.onclick=function()
{
    afteradd();
    dispalyProudect();
}*/
function afteradd()
{ 
    
     var proudect2=
        { name:proudectNameInp.value, price:proudectPriceInp.value ,  desc:proudectCompanyInp.value, text:proudectDescInp.value
        
        };
    btn.innerHTML="add proudect";
     proudectContanier.splice(currentIndex,1,proudect2);
     localStorage.setItem("proudect:",JSON.stringify(proudectContanier));
     dispalyProudect();
}
function clearform()
{
    var inputts= document.getElementsByClassName("form-control");
    for(var i=0 ;i<inputts.length;i++)
        {
            
            inputts[i].value="";
            
        }
}

function deleteProudect(id)
{
 proudectContanier.splice(id,1);
    localStorage.setItem("proudect:",JSON.stringify(proudectContanier));
    dispalyProudect();
}



