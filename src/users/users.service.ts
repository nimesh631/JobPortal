import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
){}

 async create(createUserDto : CreateUserDto) :Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
 }

 async findAll(): Promise<User[]>{
    return await this.usersRepository.find();
 }

 async findOne(id: number): Promise<User>{
    return await this.usersRepository.findOne({where: {user_id: id}});
}

async update(id: number, updateUserDto: UpdateUserDto): Promise<User>{
    await this.usersRepository.update(id,updateUserDto);
    return await this.findOne(id);
}

async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
}

}
