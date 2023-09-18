import { HomePageIN } from "../node/innocvHome"
import { ContactPageIN } from "../node/innocvContactPage"

describe('Check form is not sent when required fields are not set', () => {
    it('Sending form and not completing any field', () => {
      HomePageIN.visit();
      HomePageIN.goToContactPage();
      ContactPageIN.sendEmptyForm();
    })
})