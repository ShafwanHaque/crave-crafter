import { Module, Options} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { Admin } from './entities/admin.entity';
import { Topic } from './entities/topic.entity';
import { Comment } from './entities/comment.entity';
import { RiderModule } from './rider/rider.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { VendorModule } from './vendor/vendor.module';
import { ProductsModule } from './products/products.module';
import { GroceryModule } from './grocery/grocery.module';
import { FoodModule } from './food/food.module';
import { PaymentModule } from './payment/payment.module';
import { CustomerModule } from './customer/customer.module';
@Module({
  imports: [AdminModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".local.env",
        //envFilePath: ".prod.env",
        
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        //entities: [Admin, Topic, Comment],
        synchronize:  configService.get<boolean>('DB_SYNC'),
        entities : [__dirname + '/**/*.entity{.ts,.js}'],
        logging :true
      }),
      inject: [ConfigService],
    }),
    RiderModule,
    OrderModule,
    OrderDetailsModule,
    VendorModule,
    ProductsModule,
    GroceryModule,
    FoodModule,
    PaymentModule,
    CustomerModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
