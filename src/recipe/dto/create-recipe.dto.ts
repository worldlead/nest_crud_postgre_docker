import { IsString, IsOptional } from 'class-validator';

export class CreateRecipeDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsString()
    ingredients: string;

    @IsString()
    instructions: string;

}
