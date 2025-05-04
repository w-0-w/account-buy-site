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

type TypeSkuChangeItem = { alonePrice: number; originalPrice: number };
