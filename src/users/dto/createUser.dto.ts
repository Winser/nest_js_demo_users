import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  full_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  role: string;

  @IsInt()
  efficiency: number;
}