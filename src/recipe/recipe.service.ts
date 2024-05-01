import { Body, Injectable, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  
  async create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  async findAll() {
    return this.prisma.recipe.findMany();
  }

  async findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto
    });
  }

  async remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
