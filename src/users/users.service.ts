import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
){}

 async create(createUserDto : CreateUserDto) :Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
 }

 async findAll(): Promise<User[]>{
    return await this.userRepository.find();
 }

 async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user)
      throw new NotFoundException(`User with the id ${id} was not found.`);
    return user;
  }
async update(id: number, updateUserDto: UpdateUserDto): Promise<User>{
    await this.userRepository.update(id,updateUserDto);
    return await this.findOne(id);
}

async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
}

}
