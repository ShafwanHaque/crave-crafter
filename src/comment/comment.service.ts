import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComments(adminId: string) {
    return 'this is the comments of the user';
  }
}