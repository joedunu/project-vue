import { shallow } from "@vue/test-utils"
import PageFooter from "./PageFooter.vue"

describe("PageFooter", () => {
	test("snapshot: PageFooter", () => {
		let cmp = shallow(PageFooter, { data: {} })
		expect(cmp.element).toMatchSnapshot()
	})
})
