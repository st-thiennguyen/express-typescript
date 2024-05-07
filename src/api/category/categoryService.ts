import { StatusCodes } from 'http-status-codes';
import {
  ResponseStatus,
  ServiceResponse,
} from '../../common/model/serviceResponse';
import { categoryRepository } from './categoryRepository';

export const categoryService = {
  findAll: async () => {
    try {
      const categories = await categoryRepository.findAll();
      if (categories.length === 0) {
        return new ServiceResponse(
          ResponseStatus.Faild,
          'Category not found',
          categories,
          StatusCodes.NOT_FOUND
        );
      }
      return new ServiceResponse(
        ResponseStatus.Success,
        'Categories found',
        categories,
        StatusCodes.OK
      );
    } catch (error) {
      const errorMessage = `Error while finding categories ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      return new ServiceResponse(
        ResponseStatus.Faild,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },
  create: async (name: string) => {
    try {
      const category = await categoryRepository.create(name);
      if (category.id != null) {
        return new ServiceResponse(
          ResponseStatus.Success,
          'Create category successfully',
          category,
          StatusCodes.OK
        );
      }
      return new ServiceResponse(
        ResponseStatus.Faild,
        'Create category faild',
        null,
        StatusCodes.EXPECTATION_FAILED
      );
    } catch (error) {
      const errorMessage = `Error while create category ${
        (error as Error).message
      }`;
      console.error(errorMessage);
      return new ServiceResponse(
        ResponseStatus.Faild,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },
};
