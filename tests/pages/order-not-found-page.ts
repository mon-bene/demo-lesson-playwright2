import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'


export class OrderNotFoundPage extends BasePage {
  readonly orderNotFoundContainer: Locator

  constructor(page: Page) {
    //this.page=page
    super(page)
    this.orderNotFoundContainer = this.page.getByTestId('orderNotFound-container')

  }
}