import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'
import { OrderFoundPage } from './order-found-page'
import { OrderNotFoundPage } from './order-not-found-page'

export class OrderPage extends BasePage {
  //private page: Page
  readonly statusButton: Locator
  readonly nameInput: Locator
  readonly phoneInput: Locator
  readonly commentInput: Locator
  readonly createOrderButton: Locator
  readonly okPopUpButton: Locator
  readonly orderCreationContainer: Locator
  readonly logOutButton: Locator
  readonly searchOrderInput: Locator
  readonly searchOrderSubmitButton: Locator

  constructor(page: Page) {
    //this.page=page
    super(page)
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.nameInput = this.page.getByTestId('username-input')
    this.commentInput = this.page.getByTestId('comment-input')
    this.phoneInput = this.page.getByTestId('phone-input')
    this.createOrderButton = this.page.getByTestId('createOrder-button')
    this.okPopUpButton = this.page.getByTestId('orderSuccessfullyCreated-popup-ok-button')
    this.orderCreationContainer = this.page.getByTestId('orderSuccessfullyCreated-popup')
    this.logOutButton = this.page.getByTestId('logout-button')
    this.searchOrderInput = this.page.getByTestId('searchOrder-input')
    this.searchOrderSubmitButton = this.page.getByTestId('searchOrder-submitButton')
  }

  async clickTrackAndReturnOrderFoundPage() {
    await this.searchOrderSubmitButton.click()
    return new OrderFoundPage(this.page)
  }
  async clickTrackAndReturnOrderNOtFoundPage() {
    await this.searchOrderSubmitButton.click()
    return new OrderNotFoundPage(this.page)
  }
}
