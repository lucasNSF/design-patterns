import { MyDatabaseFunction } from './db/my-database-function';
// import { MyDatabaseClassic } from './db/my-database-classic';
import { myDb as myDatabase } from './module-a';

const myDb = MyDatabaseFunction;
myDb.add({ name: 'Roberto', age: 30 });
myDb.add({ name: 'Paulo', age: 50 });
myDb.add({ name: 'Luíza', age: 25 });

myDb.show();

console.log(myDatabase === myDb);
