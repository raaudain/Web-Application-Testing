import React from "react";
import {render} from "@testing-library/react";
import Dashboard, {addFouls} from "./Dashboard"
import Display from "./Display"
import { tsExternalModuleReference } from "@babel/types";

test("addFouls adds points to strikes", props =>{
    let actual;
    let expected;

    actual = props.setStrikes(1)
    expected = 1;

    expect(actual).toBe(expected);
    expect(actual).not.toBe(0)

})