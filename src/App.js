import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {



    return (
        <div className='app'>
            <Header />
            <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value': 7 }]} image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'/>
        </div>
    );
}

export default App;
