import type {
  CheckoutDataViewModel,
  CheckoutQueryDto,
  CheckoutResponseDto
} from "@app/types/limeroad";
import { sleep } from "@app/core/utils";

import { checkout } from "../mocks/checkout";
import { AbstractService } from "../models/abstract-service";
import { transformCheckoutDataDtoToViewModel } from "../transforms/checkout";

class CheckoutService extends AbstractService {
  private static instance: CheckoutService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): CheckoutService {
    CheckoutService.instance ??= new CheckoutService();

    return CheckoutService.instance;
  }

  async getCheckout(_query: CheckoutQueryDto): Promise<CheckoutDataViewModel> {
    await sleep(10);

    const response: CheckoutResponseDto = {
      data: checkout
    };

    return transformCheckoutDataDtoToViewModel(response.data);
  }
}

export const checkoutService = CheckoutService.getInstance();
