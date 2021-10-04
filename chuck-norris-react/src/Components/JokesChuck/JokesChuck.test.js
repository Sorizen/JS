import {render, screen} from '@testing-library/react';
import JokesChuck from "./JokesChuck";
const ActiveJoke = 'Chuck Norris can open an umbrella up your ass.';
describe('JokesChuck component', ()=>{
    test('JokesChuck renders', ()=>{
        render(<JokesChuck ActiveJoke={ActiveJoke}/>);
        expect(screen.getByText('Chuck Norris can open an umbrella up your ass.')).toBeInTheDocument();
    })
    test('JokesChuck renders without props', ()=>{
        render(<JokesChuck/>);
        expect(screen.queryByText('Chuck Norris can open an umbrella up your ass.')).toBeNull();
    })
    test('JokesChuck snapshot with props', ()=>{
        const JokesChuckPrev = render(<JokesChuck ActiveJoke={ActiveJoke}/>);;
        expect(JokesChuckPrev).toMatchSnapshot();
    })
    test('CategoriesChuck snapshot without props', ()=>{
        const JokesChuckPrev = render(<JokesChuck/>);
        expect(JokesChuckPrev).toMatchSnapshot();
    })
})