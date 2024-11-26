import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'


export class OrderFoundPage extends BasePage {
  readonly openStatus: Locator

  constructor(page: Page) {
    //this.page=page
    super(page)
    this.openStatus = this.page.getByText('OPEN')

  }
}