import {render, screen} from '@testing-library/react';
import CategoriesChuck from "./CategoriesChuck";
const ChuckCategoriesTest = ['animal', 'random', 'unit'];
describe('CategoriesChuck component', ()=>{
    test('CategoriesChuck renders', ()=>{
        render(<CategoriesChuck categories={ChuckCategoriesTest}/>);
        expect(screen.getByText(ChuckCategoriesTest[0])).toBeInTheDocument();
        expect(screen.getByText(ChuckCategoriesTest[1])).toBeInTheDocument();
        expect(screen.getByText(ChuckCategoriesTest[2])).toBeInTheDocument();
    })
    test('CategoriesChuck renders without props', ()=>{
        render(<CategoriesChuck/>);
        expect(screen.queryByText(ChuckCategoriesTest[0])).toBeNull();
        expect(screen.queryByText(ChuckCategoriesTest[1])).toBeNull();
        expect(screen.queryByText(ChuckCategoriesTest[2])).toBeNull();
    })
    test('CategoriesChuck snapshot with props', ()=>{
        const CategoriesChuckPrev = render(<CategoriesChuck categories={ChuckCategoriesTest}/>);
        expect(CategoriesChuckPrev).toMatchSnapshot();
    })
    test('CategoriesChuck snapshot without props', ()=>{
        const CategoriesChuckPrev = render(<CategoriesChuck/>);
        expect(CategoriesChuckPrev).toMatchSnapshot();
    })
})
