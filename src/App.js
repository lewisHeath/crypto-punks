import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';

function App() {

    const [punkListData, setPunklListData] = useState([]);
    const [selectedPunk, setSelectedPunk] = useState(0);

    useEffect(() => {
        const getMyNfs = async () => {
            const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x7847dbF9a57b4374D320A9c17dFb5D85741f2Abb&order_direction=asc');
            console.log(openSeaData.data.assets);
            setPunklListData(openSeaData.data.assets);
        }

        return getMyNfs()
    }, [])

    return (
        <div className='app'>
            <Header />
            {
                punkListData.length > 0 && (
                    <>
                        <Main punkListData={punkListData} selectedPunk={selectedPunk} />
                        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
                    </>
                )
            }
        </div>
    );
}

export default App;
