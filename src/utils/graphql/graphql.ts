import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { fetchData } from '@utils/Graphql/Graphql-Fetcher';
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

export type Employee = {
  __typename?: 'Employee';
  branch?: Maybe<Branch>;
  employeeId?: Maybe<Scalars['String']>;
  employer?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullId?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranch?: Maybe<Branch>;
  addCompany?: Maybe<Company>;
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

export type RootQueryType = {
  __typename?: 'RootQueryType';
  branch?: Maybe<Branch>;
  branches?: Maybe<Array<Maybe<Branch>>>;
  companies?: Maybe<Array<Maybe<Company>>>;
  company?: Maybe<Company>;
};


export type RootQueryTypeBranchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type RootQueryTypeBranchesArgs = {
  recordsToGet?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCompaniesArgs = {
  recordsToGet?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BranchesQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type BranchesQuery = { __typename?: 'RootQueryType', branches?: Array<{ __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullname?: string | null } | null> | null } | null> | null };

export type BranchQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type BranchQuery = { __typename?: 'RootQueryType', branch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullname?: string | null } | null> | null } | null };

export type AddBranchMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  company: Scalars['ID'];
}>;


export type AddBranchMutation = { __typename?: 'Mutation', addBranch?: { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullname?: string | null } | null> | null } | null };

export type BranchDataFragment = { __typename?: 'Branch', id?: string | null, name?: string | null, location?: string | null, url?: string | null, hidden?: boolean | null, company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null, employees?: Array<{ __typename?: 'Employee', id?: string | null, fullname?: string | null } | null> | null };

export type CompaniesQueryVariables = Exact<{
  recordsToGet: Scalars['String'];
}>;


export type CompaniesQuery = { __typename?: 'RootQueryType', companies?: Array<{ __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null> | null };

export type CompanyQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CompanyQuery = { __typename?: 'RootQueryType', company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null };

export type AddCompanyMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  website: Scalars['String'];
}>;


export type AddCompanyMutation = { __typename?: 'Mutation', addCompany?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null } | null };

export type CompanyDataFragment = { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null, hidden?: boolean | null, branches?: Array<{ __typename?: 'Branch', id?: string | null } | null> | null };

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
    fullname
  }
}
    ${CompanyDataFragmentDoc}`;
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
    query Branch($id: ID) {
  branch(id: $id) {
    ...BranchData
  }
}
    ${BranchDataFragmentDoc}`;
export const useBranchQuery = <
      TData = BranchQuery,
      TError = unknown
    >(
      variables?: BranchQueryVariables,
      options?: UseQueryOptions<BranchQuery, TError, TData>
    ) =>
    useQuery<BranchQuery, TError, TData>(
      variables === undefined ? ['Branch'] : ['Branch', variables],
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
    query Company($id: ID) {
  company(id: $id) {
    ...CompanyData
  }
}
    ${CompanyDataFragmentDoc}`;
export const useCompanyQuery = <
      TData = CompanyQuery,
      TError = unknown
    >(
      variables?: CompanyQueryVariables,
      options?: UseQueryOptions<CompanyQuery, TError, TData>
    ) =>
    useQuery<CompanyQuery, TError, TData>(
      variables === undefined ? ['Company'] : ['Company', variables],
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