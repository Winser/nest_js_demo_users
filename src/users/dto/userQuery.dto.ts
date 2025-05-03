import { Param } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UserQueryDto {
    @IsNumber()
    @IsOptional()
    @Transform(numberTransform)
    id?: number;

    @IsString()
    @IsOptional()
    full_name?: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsNumber({ maxDecimalPlaces: 0 })
    @Transform(numberTransform)
    @IsOptional()
    efficiency?: number;
}

function numberTransform({ value }) {
    if (value === "") {
        return undefined;
    }
    return parseInt(value);
}