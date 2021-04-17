import {spaceReplace} from "../utilities/spaceReplace";

test("speace replace from word", ()=>{
  expect(spaceReplace("walaa c")).toBe("walaa-c");
}) 