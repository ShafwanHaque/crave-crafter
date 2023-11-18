import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AppController } from 'src/app.controller';
import { AdminService } from './admin.service';
import { CommentService } from 'src/comment/comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entities/admin.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Admin])],
    controllers: [AdminController],
    providers: [AdminService, CommentService],
    exports: [AdminService]
})
export class AdminModule {}
