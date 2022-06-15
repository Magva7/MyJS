/**В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название
 * продукта и его стоимость.
 Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько,
 выведите название первого из них.

 Пример значений переменных:
 list = [
 {product: "Apple", price: 25},
 {product: "Cherry", price: 32},
 {product: "Strawberry", price: 45}
 ]
 Пример результата:
 "Strawberry"**/

let list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
];

let max_price = 0;
let product_with_max_price = ''; //продукт с максимальной ценой

for(let i in list){ //пробегаемся по всем элементам массива
    if(list[i].price > max_price){ //если цена текущего элемента больше максимальной
        max_price = list[i].price;  // тогда записываем текущую цену в максимальную
        product_with_max_price = list[i].product; // а название продукта записываем в переменную
    }
}

console.log(product_with_max_price);
