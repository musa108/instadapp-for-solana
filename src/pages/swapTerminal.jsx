import React, { useEffect } from 'react';
import NavBar from '../components/navBar';

const SwapTerminal = () => {
  
  useEffect(() => {
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: 'https://withered-neat-haze.solana-mainnet.quiknode.pro/2b7fe59fd762642b2ce5b5550ddd80cc4475c849/',
      formProps: {
        fixedOutputMint: false,
      },
    });
  }, []);
    
    return (
        <div >
          <NavBar/>
          <div id="integrated-terminal"></div>
        </div>
    );
}

export default SwapTerminal;
