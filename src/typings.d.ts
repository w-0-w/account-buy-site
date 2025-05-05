/// <reference types="@ice/app/types" />

type TypeDataCategoriesItem = {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  name: string;
  path: string;
};

type TypeTabItem = {
  name: string;
  image: string;
  goodsLibraryId: number;
  sales: number;
  price: number;
  shortEn: string;
  path: string;
};

type TypeSkuChangeItem = {
  goodsImg: string;
  goodsName: string;
  sku: string;
  subSku: string;
  alonePrice: number;
  originalPrice: number;
};

/* - old ---------------------------- */
interface Window {
  tron: any;
  tronLink: any;
  tronWeb: any;
  imToken: any;
  okxwallet: any;
}

type TypePlatform =
  | 'bitpie'
  | 'coinbase'
  | 'imToken'
  | 'metaMask'
  | 'okex'
  | 'tokenPocket'
  | 'tronlink';

type TypeXListItem = 'TRC20' | 'ERC20' | 'BEP20';

type TypePayWay = {
  key: TypePlatform;
  name: string;
  icon: string;
  xList: TypeXListItem[];
  desc: string;
  fn?: (p: { item: TypePayWay; index: number }) => void;
};

type TypeWallet =
  | ''
  | 'okxwallet'
  | 'imToken'
  | 'tokenPocket'
  | 'bitKeep'
  | 'tronLink'
  | 'bitpie';

type TypeChain = '' | 'eth' | 'bsc' | 'tron' | 'okxc';

type TypeFlowInfoItem = {
  wallet: TypeWallet;
  chain: TypeChain;
  uca: {
    test: string;
    main: string;
  };
  trxLimit: {
    value: number;
    readable: string;
  };
  amount: string;
};
