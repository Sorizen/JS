import './App.css';
import HeaderChuck from "./Components/HeaderChuck/HeaderChuck";
import CategoriesChuck from "./Components/CategotiesChuck/CategoriesChuck";
import {useEffect, useState} from "react";
import axios from "axios";
import JokesChuck from "./Components/JokesChuck/JokesChuck";
function App() {
    const [ChuckCategories, setChuckCategories] = useState([]);
    const [ActiveCategory, setActiveCategory] = useState('random');
    const [ActiveJoke, setActiveJoke] = useState('');
    const [Switcher, setSwitcher] = useState(false);
    const getJokeFromServerRandom = async () =>{
        const joke = await axios.get('https://api.chucknorris.io/jokes/random');
        setActiveJoke(joke.data.value);
    }
    const getJokeFromServerCategory = async (ActiveCategory) =>{
        const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${ActiveCategory}`);
        setActiveJoke(joke.data.value);
    }
    const getCategoriesFromServer = async () =>{
        const categories = await axios.get('https://api.chucknorris.io/jokes/categories');
        const categoriesArr = categories.data;
        categoriesArr.push('random');
        setChuckCategories(categoriesArr);
    }

    useEffect(()=>{
        getCategoriesFromServer().catch(err=>{throw new Error('Error: '+err)});
    }, [])
    useEffect(()=>{
        if(ActiveCategory === 'random'){
            getJokeFromServerRandom().catch(err=> {throw new Error('Error: '+err)});
        }
        else{
            getJokeFromServerCategory(ActiveCategory).catch(err=> {throw new Error('Error: '+err)});
        }
    }, [ActiveCategory, Switcher])

  return (
    <div className="App">
        <HeaderChuck/>
        <main>
            <CategoriesChuck setSwitcher = {setSwitcher} Switcher = {Switcher} categories={ChuckCategories} setActiveCategory = {setActiveCategory}/>
            <JokesChuck ActiveJoke = {ActiveJoke}/>
        </main>
    </div>
  );
}

export default App;
