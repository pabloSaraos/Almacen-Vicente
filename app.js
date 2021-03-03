const inputCode = document.getElementById("inputCode");
const btnQuery = document.getElementById("btnQuery");
const textNameProduct = document.getElementById("textNameProduct");
const textPriceProduct = document.getElementById("textPriceProduct");

const xhhtp  = new XMLHttpRequest()

const getProduct = (e) =>{
    e.preventDefault()
    xhhtp.open('GET','store.json',true);
    xhhtp.send();
    xhhtp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const codeInput = inputCode.value
            const products  = JSON.parse(this.responseText);

            
            products.map((product) =>{
                if(product.code == codeInput ){
                    textNameProduct.textContent   = product.name;
                    textPriceProduct.textContent  ="$ "+product.price;
                }
            
            })
        }
    }
}
btnQuery.addEventListener('click',getProduct);



