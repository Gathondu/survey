import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { fetchData } from 'utils/Graphql/Graphql-Fetcher';
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

export type Branch = {
  __typename?: 'Branch';
  company?: Maybe<Company>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  branches?: Maybe<Array<Maybe<Branch>>>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Customer = Person & {
  __typename?: 'Customer';
  countryCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullDetails?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  promotions?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
};

export type Employee = Person & {
  __typename?: 'Employee';
  branch?: Maybe<Branch>;
  countryCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
  employer?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranch?: Maybe<Branch>;
  addCompany?: Maybe<Company>;
  addCustomer?: Maybe<Customer>;
  addEmployee?: Maybe<Employee>;
  addReview?: Maybe<Review>;
};


export type MutationAddBranchArgs = {
  company: Scalars['ID'];
  location: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddCompanyArgs = {
  location: Scalars['String'];
  name: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};


export type MutationAddCustomerArgs = {
  countryCode: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  promotions: Scalars['Boolean'];
};


export type MutationAddEmployeeArgs = {
  branch: Scalars['ID'];
  countryCode: Scalars['String'];
  email: Scalars['String'];
  employeeId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationAddReviewArgs = {
  comment: Scalars['String'];
  customer: Scalars['ID'];
  employee: Scalars['ID'];
  rating: Scalars['Int'];
};

export type Person = {
  countryCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  employee?: Maybe<Employee>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Int']>;
  reviewedOn?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  branch?: Maybe<Branch>;
  branches?: Maybe<Array<Maybe<Branch>>>;
  companies?: Maybe<Array<Maybe<Company>>>;
  company?: Maybe<Company>;
  customer?: Maybe<Customer>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type RootQueryTypeBranchArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeBranchesArgs = {
  recordsToGet: Scalars['String'];
};


export type RootQueryTypeCompaniesArgs = {
  recordsToGet: Scalars['String'];
};


export type RootQueryTypeCompanyArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeCustomerArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeCustomersArgs = {
  recordsToGet: Scalars['String'];
};


export type RootQueryTypeEmployeeArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeEmployeesArgs = {
  recordsToGet: Scalars['String'];
};


export type RootQueryTypeReviewArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeReviewsArgs = {
  recordsToGet: Scalars['String'];
};

export type BranchesQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type BranchesQuery = { __typename?: 'RootQueryType', branches?: Array<{ __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null> | null };

export type BranchQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BranchQuery = { __typename?: 'RootQueryType', branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null };

export type AddBranchMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  company: Scalars['ID'];
}>;


export type AddBranchMutation = { __typename?: 'Mutation', addBranch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null };

export type BranchDataFragment = { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null };

export type CompaniesQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type CompaniesQuery = { __typename?: 'RootQueryType', companies?: Array<{ __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null> | null };

export type CompanyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyQuery = { __typename?: 'RootQueryType', company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null };

export type AddCompanyMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  website: Scalars['String'];
}>;


export type AddCompanyMutation = { __typename?: 'Mutation', addCompany?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null };

export type CompanyDataFragment = { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null };

export type CustomersQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type CustomersQuery = { __typename?: 'RootQueryType', customers?: Array<{ __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null> | null };

export type CustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CustomerQuery = { __typename?: 'RootQueryType', customer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null };

export type AddCustomerMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  countryCode: Scalars['String'];
  phone: Scalars['String'];
  promotions: Scalars['Boolean'];
  email: Scalars['String'];
}>;


export type AddCustomerMutation = { __typename?: 'Mutation', addCustomer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null };

export type CustomerDataFragment = { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null };

export type EmployeesQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type EmployeesQuery = { __typename?: 'RootQueryType', employees?: Array<{ __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null> | null };

export type EmployeeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EmployeeQuery = { __typename?: 'RootQueryType', employee?: { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null };

export type AddEmployeeMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  branch: Scalars['ID'];
  countryCode: Scalars['String'];
  phone: Scalars['String'];
  employeeId: Scalars['String'];
  email: Scalars['String'];
}>;


export type AddEmployeeMutation = { __typename?: 'Mutation', addEmployee?: { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null };

export type EmployeeDataFragment = { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null };

export type ReviewsQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type ReviewsQuery = { __typename?: 'RootQueryType', reviews?: Array<{ __typename?: 'Review', id?: string | null, rating?: number | null, comment?: string | null, reviewedOn?: string | null, hidden?: boolean | null, url?: string | null, employee?: { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null, customer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null } | null> | null };

export type ReviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReviewQuery = { __typename?: 'RootQueryType', review?: { __typename?: 'Review', id?: string | null, rating?: number | null, comment?: string | null, reviewedOn?: string | null, hidden?: boolean | null, url?: string | null, employee?: { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null, customer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null } | null };

export type AddReviewMutationVariables = Exact<{
  rating: Scalars['Int'];
  comment: Scalars['String'];
  employee: Scalars['ID'];
  customer: Scalars['ID'];
}>;


export type AddReviewMutation = { __typename?: 'Mutation', addReview?: { __typename?: 'Review', id?: string | null, rating?: number | null, comment?: string | null, reviewedOn?: string | null, hidden?: boolean | null, url?: string | null, employee?: { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null, customer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null } | null };

export type ReviewDataFragment = { __typename?: 'Review', id?: string | null, rating?: number | null, comment?: string | null, reviewedOn?: string | null, hidden?: boolean | null, url?: string | null, employee?: { __typename?: 'Employee', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, employeeId?: string | null, fullName?: string | null, fullId?: string | null, url?: string | null, hidden?: boolean | null, branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullName?: string | null } | null> | null } | null } | null, customer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, promotions?: boolean | null, url?: string | null, hidden?: boolean | null, fullName?: string | null, fullDetails?: string | null } | null };

export const CompanyDataFragmentDoc = `
    fragment CompanyData on Company {
  id
  name
  location
  website
  url
  hidden
  branches {
    id
  }
}
    `;
export const BranchDataFragmentDoc = `
    fragment BranchData on Branch {
  id
  name
  location
  url
  hidden
  company {
    ...CompanyData
  }
  employees {
    id
    fullName
  }
}
    ${CompanyDataFragmentDoc}`;
export const EmployeeDataFragmentDoc = `
    fragment EmployeeData on Employee {
  id
  firstName
  lastName
  email
  phoneNumber
  employeeId
  fullName
  fullId
  url
  hidden
  branch {
    ...BranchData
  }
}
    ${BranchDataFragmentDoc}`;
export const CustomerDataFragmentDoc = `
    fragment CustomerData on Customer {
  id
  firstName
  lastName
  email
  phoneNumber
  promotions
  url
  hidden
  fullName
  fullDetails
}
    `;
export const ReviewDataFragmentDoc = `
    fragment ReviewData on Review {
  id
  rating
  comment
  employee {
    ...EmployeeData
  }
  customer {
    ...CustomerData
  }
  reviewedOn
  hidden
  url
}
    ${EmployeeDataFragmentDoc}
${CustomerDataFragmentDoc}`;
export const BranchesDocument = `
    query Branches($recordsToGet: String!) {
  branches(recordsToGet: $recordsToGet) {
    ...BranchData
  }
}
    ${BranchDataFragmentDoc}`;
export const useBranchesQuery = <
      TData = BranchesQuery,
      TError = unknown
    >(
      variables: BranchesQueryVariables,
      options?: UseQueryOptions<BranchesQuery, TError, TData>
    ) =>
    useQuery<BranchesQuery, TError, TData>(
      ['Branches', variables],
      fetchData<BranchesQuery, BranchesQueryVariables>(BranchesDocument, variables),
      options
    );
export const BranchDocument = `
    query Branch($id: ID!) {
  branch(id: $id) {
    ...BranchData
  }
}
    ${BranchDataFragmentDoc}`;
export const useBranchQuery = <
      TData = BranchQuery,
      TError = unknown
    >(
      variables: BranchQueryVariables,
      options?: UseQueryOptions<BranchQuery, TError, TData>
    ) =>
    useQuery<BranchQuery, TError, TData>(
      ['Branch', variables],
      fetchData<BranchQuery, BranchQueryVariables>(BranchDocument, variables),
      options
    );
export const AddBranchDocument = `
    mutation addBranch($name: String!, $location: String!, $company: ID!) {
  addBranch(name: $name, location: $location, company: $company) {
    ...BranchData
  }
}
    ${BranchDataFragmentDoc}`;
export const useAddBranchMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddBranchMutation, TError, AddBranchMutationVariables, TContext>) =>
    useMutation<AddBranchMutation, TError, AddBranchMutationVariables, TContext>(
      ['addBranch'],
      (variables?: AddBranchMutationVariables) => fetchData<AddBranchMutation, AddBranchMutationVariables>(AddBranchDocument, variables)(),
      options
    );
export const CompaniesDocument = `
    query Companies($recordsToGet: String!) {
  companies(recordsToGet: $recordsToGet) {
    ...CompanyData
  }
}
    ${CompanyDataFragmentDoc}`;
export const useCompaniesQuery = <
      TData = CompaniesQuery,
      TError = unknown
    >(
      variables: CompaniesQueryVariables,
      options?: UseQueryOptions<CompaniesQuery, TError, TData>
    ) =>
    useQuery<CompaniesQuery, TError, TData>(
      ['Companies', variables],
      fetchData<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, variables),
      options
    );
export const CompanyDocument = `
    query Company($id: ID!) {
  company(id: $id) {
    ...CompanyData
  }
}
    ${CompanyDataFragmentDoc}`;
export const useCompanyQuery = <
      TData = CompanyQuery,
      TError = unknown
    >(
      variables: CompanyQueryVariables,
      options?: UseQueryOptions<CompanyQuery, TError, TData>
    ) =>
    useQuery<CompanyQuery, TError, TData>(
      ['Company', variables],
      fetchData<CompanyQuery, CompanyQueryVariables>(CompanyDocument, variables),
      options
    );
export const AddCompanyDocument = `
    mutation addCompany($name: String!, $location: String!, $website: String!) {
  addCompany(name: $name, location: $location, website: $website) {
    ...CompanyData
  }
}
    ${CompanyDataFragmentDoc}`;
export const useAddCompanyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddCompanyMutation, TError, AddCompanyMutationVariables, TContext>) =>
    useMutation<AddCompanyMutation, TError, AddCompanyMutationVariables, TContext>(
      ['addCompany'],
      (variables?: AddCompanyMutationVariables) => fetchData<AddCompanyMutation, AddCompanyMutationVariables>(AddCompanyDocument, variables)(),
      options
    );
export const CustomersDocument = `
    query Customers($recordsToGet: String!) {
  customers(recordsToGet: $recordsToGet) {
    ...CustomerData
  }
}
    ${CustomerDataFragmentDoc}`;
export const useCustomersQuery = <
      TData = CustomersQuery,
      TError = unknown
    >(
      variables: CustomersQueryVariables,
      options?: UseQueryOptions<CustomersQuery, TError, TData>
    ) =>
    useQuery<CustomersQuery, TError, TData>(
      ['Customers', variables],
      fetchData<CustomersQuery, CustomersQueryVariables>(CustomersDocument, variables),
      options
    );
export const CustomerDocument = `
    query Customer($id: ID!) {
  customer(id: $id) {
    ...CustomerData
  }
}
    ${CustomerDataFragmentDoc}`;
export const useCustomerQuery = <
      TData = CustomerQuery,
      TError = unknown
    >(
      variables: CustomerQueryVariables,
      options?: UseQueryOptions<CustomerQuery, TError, TData>
    ) =>
    useQuery<CustomerQuery, TError, TData>(
      ['Customer', variables],
      fetchData<CustomerQuery, CustomerQueryVariables>(CustomerDocument, variables),
      options
    );
export const AddCustomerDocument = `
    mutation addCustomer($firstName: String!, $lastName: String!, $countryCode: String!, $phone: String!, $promotions: Boolean!, $email: String!) {
  addCustomer(
    firstName: $firstName
    lastName: $lastName
    countryCode: $countryCode
    phone: $phone
    email: $email
    promotions: $promotions
  ) {
    ...CustomerData
  }
}
    ${CustomerDataFragmentDoc}`;
export const useAddCustomerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddCustomerMutation, TError, AddCustomerMutationVariables, TContext>) =>
    useMutation<AddCustomerMutation, TError, AddCustomerMutationVariables, TContext>(
      ['addCustomer'],
      (variables?: AddCustomerMutationVariables) => fetchData<AddCustomerMutation, AddCustomerMutationVariables>(AddCustomerDocument, variables)(),
      options
    );
export const EmployeesDocument = `
    query Employees($recordsToGet: String!) {
  employees(recordsToGet: $recordsToGet) {
    ...EmployeeData
  }
}
    ${EmployeeDataFragmentDoc}`;
export const useEmployeesQuery = <
      TData = EmployeesQuery,
      TError = unknown
    >(
      variables: EmployeesQueryVariables,
      options?: UseQueryOptions<EmployeesQuery, TError, TData>
    ) =>
    useQuery<EmployeesQuery, TError, TData>(
      ['Employees', variables],
      fetchData<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, variables),
      options
    );
export const EmployeeDocument = `
    query Employee($id: ID!) {
  employee(id: $id) {
    ...EmployeeData
  }
}
    ${EmployeeDataFragmentDoc}`;
export const useEmployeeQuery = <
      TData = EmployeeQuery,
      TError = unknown
    >(
      variables: EmployeeQueryVariables,
      options?: UseQueryOptions<EmployeeQuery, TError, TData>
    ) =>
    useQuery<EmployeeQuery, TError, TData>(
      ['Employee', variables],
      fetchData<EmployeeQuery, EmployeeQueryVariables>(EmployeeDocument, variables),
      options
    );
export const AddEmployeeDocument = `
    mutation addEmployee($firstName: String!, $lastName: String!, $branch: ID!, $countryCode: String!, $phone: String!, $employeeId: String!, $email: String!) {
  addEmployee(
    firstName: $firstName
    lastName: $lastName
    countryCode: $countryCode
    phone: $phone
    email: $email
    employeeId: $employeeId
    branch: $branch
  ) {
    ...EmployeeData
  }
}
    ${EmployeeDataFragmentDoc}`;
export const useAddEmployeeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddEmployeeMutation, TError, AddEmployeeMutationVariables, TContext>) =>
    useMutation<AddEmployeeMutation, TError, AddEmployeeMutationVariables, TContext>(
      ['addEmployee'],
      (variables?: AddEmployeeMutationVariables) => fetchData<AddEmployeeMutation, AddEmployeeMutationVariables>(AddEmployeeDocument, variables)(),
      options
    );
export const ReviewsDocument = `
    query Reviews($recordsToGet: String!) {
  reviews(recordsToGet: $recordsToGet) {
    ...ReviewData
  }
}
    ${ReviewDataFragmentDoc}`;
export const useReviewsQuery = <
      TData = ReviewsQuery,
      TError = unknown
    >(
      variables: ReviewsQueryVariables,
      options?: UseQueryOptions<ReviewsQuery, TError, TData>
    ) =>
    useQuery<ReviewsQuery, TError, TData>(
      ['Reviews', variables],
      fetchData<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, variables),
      options
    );
export const ReviewDocument = `
    query Review($id: ID!) {
  review(id: $id) {
    ...ReviewData
  }
}
    ${ReviewDataFragmentDoc}`;
export const useReviewQuery = <
      TData = ReviewQuery,
      TError = unknown
    >(
      variables: ReviewQueryVariables,
      options?: UseQueryOptions<ReviewQuery, TError, TData>
    ) =>
    useQuery<ReviewQuery, TError, TData>(
      ['Review', variables],
      fetchData<ReviewQuery, ReviewQueryVariables>(ReviewDocument, variables),
      options
    );
export const AddReviewDocument = `
    mutation addReview($rating: Int!, $comment: String!, $employee: ID!, $customer: ID!) {
  addReview(
    rating: $rating
    comment: $comment
    employee: $employee
    customer: $customer
  ) {
    ...ReviewData
  }
}
    ${ReviewDataFragmentDoc}`;
export const useAddReviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddReviewMutation, TError, AddReviewMutationVariables, TContext>) =>
    useMutation<AddReviewMutation, TError, AddReviewMutationVariables, TContext>(
      ['addReview'],
      (variables?: AddReviewMutationVariables) => fetchData<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, variables)(),
      options
    );