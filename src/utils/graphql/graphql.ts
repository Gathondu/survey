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
  addCompany?: Maybe<Company>;
};


export type MutationAddCompanyArgs = {
  location: Scalars['String'];
  name: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  companies?: Maybe<Array<Maybe<Company>>>;
  company?: Maybe<Company>;
};


export type RootQueryTypeCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesQuery = { __typename?: 'RootQueryType', companies?: Array<{ __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null } | null> | null };

export type CompanyQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CompanyQuery = { __typename?: 'RootQueryType', company?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null } | null };

export type AddCompanyMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  website: Scalars['String'];
}>;


export type AddCompanyMutation = { __typename?: 'Mutation', addCompany?: { __typename?: 'Company', id?: string | null, name?: string | null, location?: string | null, website?: string | null, url?: string | null } | null };


export const CompaniesDocument = `
    query Companies {
  companies {
    id
    name
    location
    website
    url
  }
}
    `;
export const useCompaniesQuery = <
      TData = CompaniesQuery,
      TError = unknown
    >(
      variables?: CompaniesQueryVariables,
      options?: UseQueryOptions<CompaniesQuery, TError, TData>
    ) =>
    useQuery<CompaniesQuery, TError, TData>(
      variables === undefined ? ['Companies'] : ['Companies', variables],
      fetchData<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, variables),
      options
    );
export const CompanyDocument = `
    query Company($id: ID) {
  company(id: $id) {
    id
    name
    location
    website
    url
  }
}
    `;
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
    id
    name
    location
    website
    url
  }
}
    `;
export const useAddCompanyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddCompanyMutation, TError, AddCompanyMutationVariables, TContext>) =>
    useMutation<AddCompanyMutation, TError, AddCompanyMutationVariables, TContext>(
      ['addCompany'],
      (variables?: AddCompanyMutationVariables) => fetchData<AddCompanyMutation, AddCompanyMutationVariables>(AddCompanyDocument, variables)(),
      options
    );