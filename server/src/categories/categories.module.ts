import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesSchema } from './category.model';

@Module({

	imports: [MongooseModule.forFeature([{ name: 'Category', schema: CategoriesSchema }])],
	controllers: [CategoriesController],
	providers: [CategoriesService],
	exports: [CategoriesService],  // Export the service if needed in other modules
})
export class CategoriesModule { }
