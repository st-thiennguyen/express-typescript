import { PrismaClient } from '@prisma/client';
import { Category } from './categoryModel';

const prisma = new PrismaClient();

export const categoryRepository = {
  findAll: async (): Promise<Category[]> => {
    return prisma.category.findMany();
  },
  findById: async (id: number): Promise<Category | null> => {
    return prisma.category.findUnique({ where: { id } });
  },
  create: async (name: string): Promise<Category> => {
    return prisma.category.create({
      data: {
        name,
      },
    });
  },
  delete: async (id: number) => {
    return prisma.category.delete({ where: { id } });
  },
  update: async (id: number, updateName: string) => {
    return prisma.category.update({
      where: { id },
      data: { name: updateName },
    });
  },
};
