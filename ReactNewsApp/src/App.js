import {Route, Switch, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import Header from "./Components/Header/Header";
import MainNews from "./Components/MainPage/MainNews/MainNews";
import OtherNews from "./Components/MainPage/OtherNews/OtherNews";
import SpecificNewsPage from "./Components/NewsPage/SpecificNewsPage/SpecificNewsPage";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/UI/ScrollToTop/ScrollToTop";
import Loader from "./Components/UI/Loader/Loader";

function App() {
    const [BurgerActive, setBurgerActive] = useState(false);
    const [DropDownActiveCategory, setDropDownActiveCategory] = useState('');
    const [ActiveNewsFromServer, setActiveNewsFromServer] = useState({});
    const [StateChange, setStateChange] = useState(false);
    const [SpecificNewsFromClick, setSpecificNewsFromClick] = useState({});
    const [VisibleButtonScroll, setVisibleButtonScroll] = useState(false);
    const [LoadingPage, setLoadingPage] = useState(false);
    const [MainPageInput, setMainPageInput] = useState('');
    const lincCreate = (str) => {
        const ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').replace(/\s+/gi, ', ');
        return ars;
    }
    const headlineInputComparison = (headline, mainInput) => {
        const headlineEdited = lincCreate(headline).toLowerCase();
        const mainInputEdited = lincCreate(mainInput).toLowerCase();
        if (headlineEdited.includes(mainInputEdited)) {
            return true;
        } else if (WrongSequenceLetters(headline, mainInput)) {
            return true;
        } else if (RuToEng(mainInputEdited) !== '' && headlineEdited.includes(RuToEng(mainInputEdited))) {
            return true;
        } else if (RuToEng(mainInputEdited) !== '' && WrongSequenceLetters(headline, RuToEng(mainInput))) {
            return true;
        } else {
            return false;
        }
    }
    const RuToEng = (str) => {
        const strArr = str.split('');
        for (let i = 0; i < strArr.length; i++) {
            switch (strArr[i]) {
                case 'а':
                    strArr[i] = 'f';
                    break
                case 'б':
                    strArr[i] = ',';
                    break
                case 'в':
                    strArr[i] = 'd';
                    break
                case 'г':
                    strArr[i] = 'u';
                    break
                case 'д':
                    strArr[i] = 'l';
                    break
                case 'е':
                    strArr[i] = 't';
                    break
                case 'ё':
                    strArr[i] = '`';
                    break
                case 'ж':
                    strArr[i] = ';';
                    break
                case 'з':
                    strArr[i] = 'p';
                    break
                case 'й':
                    strArr[i] = 'q';
                    break
                case 'к':
                    strArr[i] = 'r';
                    break
                case 'л':
                    strArr[i] = 'k';
                    break
                case 'м':
                    strArr[i] = 'v';
                    break
                case 'н':
                    strArr[i] = 'y';
                    break
                case 'о':
                    strArr[i] = 'j';
                    break
                case 'п':
                    strArr[i] = 'g';
                    break
                case 'р':
                    strArr[i] = 'h';
                    break
                case 'с':
                    strArr[i] = 'c';
                    break
                case 'т':
                    strArr[i] = 'n';
                    break
                case 'у':
                    strArr[i] = 'e';
                    break
                case 'ф':
                    strArr[i] = 'a';
                    break
                case 'х':
                    strArr[i] = '[';
                    break
                case 'ц':
                    strArr[i] = 'w';
                    break
                case 'ч':
                    strArr[i] = 'x';
                    break
                case 'ш':
                    strArr[i] = 'i';
                    break
                case 'ь':
                    strArr[i] = 'm';
                    break
                case 'ы':
                    strArr[i] = 's';
                    break
                case 'ъ':
                    strArr[i] = ']';
                    break
                case 'щ':
                    strArr[i] = 'o';
                    break
                case "э":
                    strArr[i] = "'";
                    break
                case 'я':
                    strArr[i] = "z";
                    break
                case 'ю':
                    strArr[i] = '.';
                    break
                default:
                    strArr[i] = ''
                    break
            }
        }
        return strArr.join('')
    }
    const WrongSequenceLetters = (headline, mainInput) => {
        const headlineEdited = headline.toLowerCase().split(' ');
        const mainInputEdited = mainInput.toLowerCase().split('');
        let resultWords = [];
        for (let i = 0; i < headlineEdited.length; i++) {
            let res = 0;
            for (let j = 0; j < mainInputEdited.length; j++) {
                if (headlineEdited[i].indexOf(mainInputEdited[j]) !== (-1) && mainInputEdited.length<=headlineEdited[i].length) {
                    res = res + 1;
                }
            }
            if (res === mainInputEdited.length) {
                resultWords.push(true);
            } else {
                resultWords.push(false);
            }
        }
        return resultWords.includes(true)
    }
    const setVisible = () => {
        const isScrolled = document.documentElement.scrollTop;
        if (isScrolled > 300) {
            setVisibleButtonScroll(true);
        } else {
            setVisibleButtonScroll(false);
        }
    }
    const sortDataFromApi = (dataArr) => {
        dataArr.sort((a, b) => Date.parse(a.webPublicationDate).valueOf() > Date.parse(b.webPublicationDate).valueOf() ? -1 : 1);
    }
    const getDataFromApiForChoose = async () => {
        try {
            const dataServer = await axios.get(`https://content.guardianapis.com/search?q=${DropDownActiveCategory.toLowerCase()}&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`);
            const dataServerRes = dataServer.data.response.results;
            sortDataFromApi(dataServerRes)
            setActiveNewsFromServer(dataServerRes);
            setLoadingPage(true)
        } catch (e) {
            console.log(e)
        }
    }
    const getDataFromApiDefault = async () => {
        try {
            const dataServer = await axios.get('https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c');
            const dataServerRes = dataServer.data.response.results;
            sortDataFromApi(dataServerRes)
            setActiveNewsFromServer(dataServerRes);
            setLoadingPage(true)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getDataFromApiDefault().catch(err => {
            throw new Error('Error: ' + err)
        });
    }, []);
    useEffect(() => {
        if (Object.keys(ActiveNewsFromServer).length === 0) {
            getDataFromApiDefault()
        } else {
            getDataFromApiForChoose()
        }
    }, [StateChange]);
    useEffect(() => {
        window.addEventListener('scroll', setVisible);
        return () => window.removeEventListener('scroll', setVisible);
    }, [VisibleButtonScroll])
    return (
        <div className="App">
            <Header
                BurgerActive={BurgerActive}
                setBurgerActive={setBurgerActive}
                setDropDownActiveCategory={setDropDownActiveCategory}
                setActiveNewsFromServer={setActiveNewsFromServer}
                setStateChange={setStateChange}
                StateChange={StateChange}
                setMainPageInput={setMainPageInput}
                MainPageInput={MainPageInput}
            />
            <main>
                {!LoadingPage ? (<Loader/>) : (Object.keys(ActiveNewsFromServer).length !== 0 ? (
                    <Switch>
                        <Route path={'/'} exact>
                            <MainNews
                                lincCreate={lincCreate}
                                headlineInputComparison={headlineInputComparison}
                                ActiveNewsFromServer={ActiveNewsFromServer[0]}
                                setSpecificNewsFromClick={setSpecificNewsFromClick}
                                MainPageInput={MainPageInput}/>
                            <OtherNews lincCreate={lincCreate}
                                       headlineInputComparison={headlineInputComparison}
                                       ActiveNewsFromServer={ActiveNewsFromServer}
                                       setSpecificNewsFromClick={setSpecificNewsFromClick}
                                       MainPageInput={MainPageInput}/>
                            {VisibleButtonScroll ? <ScrollToTop setVisibleButtonScroll={setVisibleButtonScroll}
                                                                setVisible={setVisible}/> : null}
                        </Route>
                        <Route path={'/info/:id'}>
                            {Object.keys(SpecificNewsFromClick).length !== 0 ?
                                <SpecificNewsPage News={SpecificNewsFromClick}/> : null}
                        </Route>
                    </Switch>
                ) : null)}
            </main>
            <Footer/>
        </div>
    );
}

export default App;
