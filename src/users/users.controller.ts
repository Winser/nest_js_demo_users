import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserQueryDto } from "./dto/userQuery.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post("create")
    async create(@Body() userDto: CreateUserDto) {
        const user = await this.usersService.create(userDto);
        return { success: true, result: { id: user.id } };
    }

    @Get(["get", "get/:id"])
    async get(@Param("id") id: number, @Query() userQueryDto: UserQueryDto) {
        const users = await this.usersService.get({ ...userQueryDto, id });
        return {
            success: true, result: {
                users: users
            }
        };
    }

    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() userDto: UpdateUserDto) {
        const user = await this.usersService.update(id, userDto);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return { success: true, result: user };

    }

    @Delete(["delete", "delete/:id"])
    async delete(@Param("id") id: number) {
        if (!id) {
            await this.usersService.deleteAll();
            return { success: true };
        }

        const user = await this.usersService.delete(id);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return { success: true, result: user };
    }
}
