import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://artiom:artiom@cluster0.tzbidvu.mongodb.net/shopping-list?retryWrites=true&w=majority',
    ),
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
