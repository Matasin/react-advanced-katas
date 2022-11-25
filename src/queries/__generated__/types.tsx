export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  usersIds: Array<Maybe<Scalars['String']>>;
};

export type CompanyFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  usersIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usersIds_neq?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CompanyInput = {
  name: Scalars['String'];
  usersIds: Array<InputMaybe<Scalars['String']>>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany?: Maybe<Company>;
  createManyCompany?: Maybe<Array<Maybe<Company>>>;
  createManyOrder?: Maybe<Array<Maybe<Order>>>;
  createManyOrderPosition?: Maybe<Array<Maybe<OrderPosition>>>;
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createOrder?: Maybe<Order>;
  createOrderPosition?: Maybe<OrderPosition>;
  createProduct?: Maybe<Product>;
  createUser?: Maybe<User>;
  removeCompany?: Maybe<Company>;
  removeOrder?: Maybe<Order>;
  removeOrderPosition?: Maybe<OrderPosition>;
  removeProduct?: Maybe<Product>;
  removeUser?: Maybe<User>;
  updateCompany?: Maybe<Company>;
  updateOrder?: Maybe<Order>;
  updateOrderPosition?: Maybe<OrderPosition>;
  updateProduct?: Maybe<Product>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCompanyArgs = {
  name: Scalars['String'];
  usersIds: Array<InputMaybe<Scalars['String']>>;
};


export type MutationCreateManyCompanyArgs = {
  data?: InputMaybe<Array<InputMaybe<CompanyInput>>>;
};


export type MutationCreateManyOrderArgs = {
  data?: InputMaybe<Array<InputMaybe<OrderInput>>>;
};


export type MutationCreateManyOrderPositionArgs = {
  data?: InputMaybe<Array<InputMaybe<OrderPositionInput>>>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateOrderArgs = {
  orderPositionIds: Array<InputMaybe<Scalars['String']>>;
  status: Scalars['String'];
  totalPrice: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateOrderPositionArgs = {
  amount: Scalars['String'];
  pricePerUnit: Scalars['String'];
  productId: Scalars['String'];
  totalPrice: Scalars['String'];
};


export type MutationCreateProductArgs = {
  inStock: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  type: Scalars['String'];
};


export type MutationCreateUserArgs = {
  companyId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};


export type MutationRemoveCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveOrderPositionArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  usersIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  orderPositionIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOrderPositionArgs = {
  amount?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  pricePerUnit?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  inStock?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  companyId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  orderPositionIds: Array<Maybe<Scalars['String']>>;
  status: Scalars['String'];
  totalPrice: Scalars['String'];
  userId: Scalars['String'];
};

export type OrderFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  orderPositionIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderPositionIds_neq?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  q?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  status_neq?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['String']>;
  totalPrice_neq?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_neq?: InputMaybe<Scalars['String']>;
};

export type OrderInput = {
  orderPositionIds: Array<InputMaybe<Scalars['String']>>;
  status: Scalars['String'];
  totalPrice: Scalars['String'];
  userId: Scalars['String'];
};

export type OrderPosition = {
  __typename?: 'OrderPosition';
  amount: Scalars['String'];
  id: Scalars['ID'];
  pricePerUnit: Scalars['String'];
  productId: Scalars['String'];
  totalPrice: Scalars['String'];
};

export type OrderPositionFilter = {
  amount?: InputMaybe<Scalars['String']>;
  amount_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  pricePerUnit?: InputMaybe<Scalars['String']>;
  pricePerUnit_neq?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  productId_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['String']>;
  totalPrice_neq?: InputMaybe<Scalars['String']>;
};

export type OrderPositionInput = {
  amount: Scalars['String'];
  pricePerUnit: Scalars['String'];
  productId: Scalars['String'];
  totalPrice: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  inStock: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  type: Scalars['String'];
};

export type ProductFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  inStock?: InputMaybe<Scalars['String']>;
  inStock_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  price_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_neq?: InputMaybe<Scalars['String']>;
};

export type ProductInput = {
  inStock: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Company?: Maybe<Company>;
  Order?: Maybe<Order>;
  OrderPosition?: Maybe<OrderPosition>;
  Product?: Maybe<Product>;
  User?: Maybe<User>;
  _allCompaniesMeta?: Maybe<ListMetadata>;
  _allOrderPositionsMeta?: Maybe<ListMetadata>;
  _allOrdersMeta?: Maybe<ListMetadata>;
  _allProductsMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allCompanies?: Maybe<Array<Maybe<Company>>>;
  allOrderPositions?: Maybe<Array<Maybe<OrderPosition>>>;
  allOrders?: Maybe<Array<Maybe<Order>>>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderPositionArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type Query_AllCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllOrderPositionsMetaArgs = {
  filter?: InputMaybe<OrderPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllOrdersMetaArgs = {
  filter?: InputMaybe<OrderFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllCompaniesArgs = {
  filter?: InputMaybe<CompanyFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllOrderPositionsArgs = {
  filter?: InputMaybe<OrderPositionFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  companyId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type UserFilter = {
  companyId?: InputMaybe<Scalars['String']>;
  companyId_neq?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_neq?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_neq?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  role_neq?: InputMaybe<Scalars['String']>;
};

export type UserInput = {
  companyId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};
