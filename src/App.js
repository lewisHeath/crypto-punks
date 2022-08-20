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
            // 0x7847dbF9a57b4374D320A9c17dFb5D85741f2Abb
            // allow cors with axios
            const openSeaData = await fetch('https://testnets-api.opensea.io/assets?asset_contract_address=0xccB2Fe79393b86550D110b61948702dC7017732a&order_direction=asc');
            // const openSeaData = await fetch('https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&include_orders=false');
            // const data = await fetch('https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&include_orders=false')
            const openSeaDataJson = await openSeaData.json();   
            console.log(openSeaDataJson.assets);
            let data = openSeaDataJson.assets;
            //filter out the data without an id
            data = data.filter(item => item.id);
            //filter out the data without an image
            data = data.filter(item => item.image_url);
            console.log(data);
            setPunklListData(data);
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
