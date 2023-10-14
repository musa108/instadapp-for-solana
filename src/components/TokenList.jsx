import React, { useState, useEffect } from 'react';
import { BsLink45Deg } from 'react-icons/bs';

function TokenList() {
  const [tokens, setTokens] = useState([]);
  const [displayedTokens, setDisplayedTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  const fetchTokenData = () => {
    fetch('https://token.jup.ag/all')
      .then((response) => response.json())
      .then((data) => {
        setTokens(data);
        setLoading(false);
        selectTokensForDisplay(data, startIndex);
      })
      .catch((error) => {
        console.error('Error fetching token data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTokenData();
  }, [startIndex]);

  const selectTokensForDisplay = (data, start) => {
    const selectedTokens = data.slice(start, start + 10);
    setDisplayedTokens(selectedTokens);
  };

  const handleShowMore = () => {
    setStartIndex(startIndex + 10);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className='text-2xl max-md:text-xl font-oswald ml-6 text-green-400'>Tokens</h2>
      <ul>
        {displayedTokens.map((token, index) => (
          <li key={index} className='text-green-200 font-nunito my-4 mx-4 p-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500  '>
            <div className='flex items-center gap-2 py-2'>
              <img
                src={token.logoURI}
                alt={token.symbol}
                width="40"
                height="40"
                className='rounded-full'
              />
              <strong>{token.symbol}:</strong> {token.name} 
            </div>
            <p className='flex items-center max-md:text-xs'>
                {token.address}
                <a
                  href={`https://solscan.io/address/${token.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-blue-700'
                >
                  <BsLink45Deg size={20} /> 
                </a>
              </p>
          </li>
        ))}
      </ul>
      <div className=" flex justify-end my-4 mr-8">
      <button className='rounded-md bg-green-400 font-nunito text-green-200 py-2 px-4 max-md:px-2' onClick={handleShowMore}>Show More Tokens</button>
      </div>
    </div>
  );
}

export default TokenList;
