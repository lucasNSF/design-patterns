import { MyDatabaseFunction } from './db/my-database-function';

const myDb = MyDatabaseFunction;
myDb.add({ name: 'Lucas', age: 20 });
myDb.add({ name: 'Ana', age: 19 });
myDb.add({ name: 'Maria', age: 30 });

export { myDb };
