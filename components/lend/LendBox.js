import styles from './LendBox.module.css';
import AssetRow from './Assets/AssetRow';
import { useState } from 'react';

const assets = [
  {
    name: 'Bitcoin',
    balance: '1.5 BTC',
    apy: '4%',
    canBeCollateral: true,
  },
  {
    name: 'Ethereum',
    balance: '5 ETH',
    apy: '2%',
    canBeCollateral: false,
  },
];

const LendBox = () => {
  return (
    <div className={styles.lendbox}>
      <h2>Supply Assets</h2>
      <div>
        <div className={styles.headerRow}>
          <span>Name</span>
          <span>Balance</span>
          <span>APY</span>
          <span>CanBeCollateral</span>
        </div>
        {assets.map((asset) => (
          <AssetRow key={asset.name} asset={asset} />
        ))}
      </div>
    </div>
  );
};

export default LendBox;