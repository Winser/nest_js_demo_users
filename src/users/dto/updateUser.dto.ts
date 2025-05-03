import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  role: string;

  @IsInt()
  @IsOptional()
  efficiency: number;
}