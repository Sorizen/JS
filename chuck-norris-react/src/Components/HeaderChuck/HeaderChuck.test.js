import {render, screen} from '@testing-library/react';
import HeaderChuck from "./HeaderChuck";
describe('HeaderChuck component', ()=>{
    test('HeaderChuck renders', ()=>{
        render(<HeaderChuck/>);
        expect(screen.getByText('Chuck Norris')).toBeInTheDocument();
    })
    test('HeaderChuck snapshot without props', ()=>{
        const HeaderChuckPrev = render(<HeaderChuck/>);
        expect(HeaderChuckPrev).toMatchSnapshot();
    })
})