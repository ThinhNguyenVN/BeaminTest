import { random } from 'lodash'
import Merchant, { MerchantApiPayload } from '../models/merchant'
import {
  nameMock,
  imageMock,
  distanceMock,
  descriptionMock,
  ratingMock,
  numOfOrderMock
} from '../services/mocks/merchant'
import { getRandomArray } from '../utils/array'
const COUNT_MERCHANT_PER_PAGE = 20
const MAX_MERCHANT_PAGE = 20

class MerchantService {
  private getMocksMerchant = (): Array<Merchant> => {
    const names = getRandomArray(nameMock, COUNT_MERCHANT_PER_PAGE)
    const descriptions = getRandomArray(descriptionMock, COUNT_MERCHANT_PER_PAGE)
    const images = getRandomArray(imageMock, COUNT_MERCHANT_PER_PAGE)
    const ratings = getRandomArray(ratingMock, COUNT_MERCHANT_PER_PAGE)
    const numOfOrders = getRandomArray(numOfOrderMock, COUNT_MERCHANT_PER_PAGE)
    const distances = getRandomArray(distanceMock, COUNT_MERCHANT_PER_PAGE)
    
    return names.map((name: string | null, index: number) => {
      return {
        name,
        id: index.toString(),
        description: descriptions[index],
        image: images[index],
        rating: ratings[index],
        numOfOrder: numOfOrders[index],
        distance: distances[index]
      }
    })
  }

  public getMerchantsAsyncWithFailedCase = (currentPage: number): Promise<MerchantApiPayload> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (random(10) % 7 === 0) {
          reject('Failed to Load')
        } else {
          const merchant = this.getMocksMerchant()
          resolve({
            currentPage,
            maxPage: MAX_MERCHANT_PAGE,
            data: merchant
          })
        }
      }, random(3) * 1000)
    })
  }

  public getMerchantsAsyncWithoutFailedCase = (currentPage: number): Promise<MerchantApiPayload> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const merchant = this.getMocksMerchant()
        resolve({
          currentPage,
          maxPage: MAX_MERCHANT_PAGE,
          data: merchant
        })
      }, random(3) * 1000)
    })
  }

  public getMerchantsSync = (currentPage: number): MerchantApiPayload => {
    const merchant = this.getMocksMerchant()
    return {
      currentPage,
      maxPage: MAX_MERCHANT_PAGE,
      data: merchant
    }
  }
}

export default MerchantService
