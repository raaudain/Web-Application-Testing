import Display from "./Display";
import { render } from "@testing-library/react"
import React from "react";

test("Will you render?", () =>{
    const container = render(<Display />);
    //console.log(container)
})