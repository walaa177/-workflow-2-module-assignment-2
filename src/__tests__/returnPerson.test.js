import {returnPerson} from "../utilities/returnPerson";
 
test("return the person",()=>{
    expect(returnPerson()).toHaveProperty("name") ;
})