import type { LrCreditDataViewModel, LrCreditResponseDto } from "@app/types/limeroad";
import { sleep } from "@app/core/utils";

import { lrCredit } from "../mocks";
import { AbstractService } from "../models/abstract-service";
import { transformLrCreditDtoToViewModel } from "../transforms/lr-credit";

class LrCreditService extends AbstractService {
  private static instance: LrCreditService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): LrCreditService {
    LrCreditService.instance ??= new LrCreditService();

    return LrCreditService.instance;
  }

  async getLrCredit(): Promise<LrCreditDataViewModel> {
    await sleep(300);

    const response: LrCreditResponseDto = {
      data: lrCredit
    };

    return transformLrCreditDtoToViewModel(response.data);
  }
}

export const lrCreditService = LrCreditService.getInstance();
