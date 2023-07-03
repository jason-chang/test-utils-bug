import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import Case from "../Case.vue";

describe("input", () => {
  test("test expose", async () => {
    let wrapper = mount(
      () => <Case />, 
      { attachTo: document.body }
    );
    const caseVM = wrapper.findComponent(Case).vm;
    
    console.log(caseVM.propLocal); // this shuold can be accessed, but not work
    console.log(caseVM.originalProp1);
    console.log(caseVM.originalProp2Alias); // this shuold can be accessed, but not work

    caseVM.originalFn1();
    caseVM.originalFn2Alias(); // this shuold can be called, but not work

    expect(true).toEqual(true);
  });
});