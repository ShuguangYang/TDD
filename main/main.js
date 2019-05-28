module.exports = function main(inputs) {
    // write your code here...
    var price=0;
    if(inputs.distance<=2){
    	price=price+6;
    }
    else if(inputs.distance>2&&inputs.distance<=8){
    	price=6+(inputs.distance-2)*0.8;
    }
    else{
    	price=6+6*0.8+(inputs.distance-8)*1.2;
    }
    price = price + inputs.parkTime * 0.25;
    price=Math.round(price);
    return price;
};
