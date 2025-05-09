/// <reference types="@ice/app/types" />

type TypeCurrency = '¥' | '$';

type TypeBizHookReturns = {
  lang: string;
  routePrefix: string;
  currency: TypeCurrency;
  comma: string;
};

type TypeDataCategoriesItem = {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  name: string;
  path: string;
};

type TypeHotTopItem = {
  id: number;
  goodsIcon: string;
  goodsCategoryName: string;
  price: number;
  shortEn: string;
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

type TypeOrderSkuInfo = TypeSkuChangeItem & {
  uPrice: number;
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

type TypePageNoteEnum =
  | 'security'
  | 'payment'
  | 'freight'
  | 'returns'
  | 'privacy-policy'
  | 'help';
