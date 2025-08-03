import type { AddressDto } from "@app/types/limeroad";

import { AbstractService } from "../models/abstract-service";

class AddressService extends AbstractService {
  private static instance: AddressService | null = null;

  private constructor() {
    super();
    // Private constructor to prevent instantiation
    // from outside the class
  }

  static getInstance(): AddressService {
    AddressService.instance ??= new AddressService();

    return AddressService.instance;
  }

  async addAddress(address: object): Promise<void> {
    const data = {
      address
    };

    await this.getApiClient().post(`/address/create`, data);
  }

  async updateAddress(address: AddressDto): Promise<void> {
    const addressId = address.id;
    const url = `/address/${addressId}/update`;

    const data = {
      address
    };

    await this.getApiClient().put(url, data);
  }

  async updateDefaultAddress(addressId: number): Promise<void> {
    const url = `/address/${addressId}/default`;

    await this.getApiClient().put(url);
  }

  async removeAddress(addressId: number): Promise<void> {
    const url = `/address/${addressId}/delete`;

    await this.getApiClient().delete(url);
  }
}

export const addressService = AddressService.getInstance();
