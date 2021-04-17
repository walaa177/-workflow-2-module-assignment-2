
import Heading from "../components/Heading";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

const wrapper = shallow(Heading());

test("rutern the header h1", ()=>{
    expect(wrapper.text()).toEqual('Workflow 2');
}) 