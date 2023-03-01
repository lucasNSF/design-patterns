import { VeganDishBuilder } from './classes/vegan-dish-builder';
import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(mainDishBuilder.getMeal(), mainDishBuilder);

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();

console.log(veganDishBuilder.getMeal(), veganDishBuilder.getPrice());
