import { Rice, Beans, Meat, Beverage, Dessert } from './meal';
import { MealBuilderProtocol } from './../interfaces/meal-builder-protocol';
import { ComposedMeal } from './composed-meal';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);

    this._meal.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): ComposedMeal {
    const meal = Object.assign({}, this._meal);
    this.reset();
    return meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }
}
