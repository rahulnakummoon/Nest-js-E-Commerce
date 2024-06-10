import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { Role } from '../enums/role.enum';

export class userDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid Email Format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  role?: Role;
}
