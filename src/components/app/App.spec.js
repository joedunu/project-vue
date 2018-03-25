import { shallow, createLocalVue } from "@vue/test-utils"
import VueRouter from "vue-router"

import App from "./App.vue"

describe("App", () => {
	test("snapshot: App", () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)

        let cmp = shallow(App, {localVue})
		expect(cmp.element).toMatchSnapshot()
	})
})
