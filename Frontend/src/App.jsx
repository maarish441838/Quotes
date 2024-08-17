import React, { Fragment } from 'react'
import MainNavigation from './components/mainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'
import NewQuote from './components/pages/NewQuotes'
import ShowQuote from './components/pages/ShowQuote'



function App() {
    return (
        <Fragment>
            <MainNavigation />
            <Routes>
                <Route path='/' element={<AllQuotes />} />
                <Route path='/new' element={<NewQuote />} />
                <Route path='/quote/:id' element={<ShowQuote />} />

            </Routes>
        </Fragment>

    )
}

export default App