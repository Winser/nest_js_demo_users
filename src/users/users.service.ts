import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserQueryDto } from "./dto/userQuery.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateUserDto) {
        return await this.prisma.user.create({ data });
    }

    async get(userQueryDto: UserQueryDto) {
        return await this.prisma.user.findMany({
            where: {
                ...userQueryDto
            }
        });
    }

    async update(id: number, data: UpdateUserDto) {
        return await this.prisma.user.update({
            where: { id },
            data
        });
    }

    async delete(id: number) {
        try {
            return await this.prisma.user.delete({
                where: { id }
            });
        } catch (error) {
            return null;
        }
    }

    async deleteAll() {
        return await this.prisma.user.deleteMany();
    }
}