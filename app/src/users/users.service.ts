import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { generateCode } from './utils/generateCode';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const user = new this.userModel({ ...createUserDto, code: generateCode() });
    return await user.save();
  }

  async getUserByPhone(phone: number): Promise<any> {
    return await this.userModel.findOne({ phone });
  }

  async removeUser(id: string): Promise<any> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
