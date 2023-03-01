import { Rice, Beans } from './meal';
import { MealBuilderProtocol } from './../interfaces/meal-builder-protocol';
import { ComposedMeal } from './composed-meal';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): ComposedMeal {
    const meal = Object.assign({}, this._meal);
    this.reset();
    return meal;
  }

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
