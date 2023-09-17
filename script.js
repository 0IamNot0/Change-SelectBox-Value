let categorySelectBox = document.querySelector('.category')
let productSelectBox = document.querySelector('.product')

let DataTable = {
    IceCream :['chocolate ice cream','vanilla ice cream','magnum ice cream'],
    FruitJuice:['Orange juice','Strawberry juice'],
    Tea:['Green tea','Masala tea','black tea'],
}

categorySelectBox.addEventListener('change', function(){
    if (categorySelectBox.value === 'Please Select') {
        productSelectBox.innerHTML= ''
        productSelectBox.innerHTML= '<option>Select Product ...</option>'
    } else {
        let mainCategoryName = categorySelectBox.value
        let mainCategories = DataTable[mainCategoryName]
    
        productSelectBox.innerHTML = ''
    
        mainCategories.forEach(function (product) {
            let option = document.createElement('option');
            option.textContent = product;
            productSelectBox.appendChild(option);
        });
    }
})
