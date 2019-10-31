import { Dashboard } from "./Dashboard"
import { render } from "@testing-library/react"
import React from "react"

test("Does this work?", () =>{
    expect(true).toBeTruthy();
    expect(false).toBeTruthy();
})

test("Stuff showing up?", ()=>{
    const container = render(<Dashboard />)
    container.getByText("Strikes");
    console.log(container)
})

