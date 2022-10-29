import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchData } from "../graphql-fetcher";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: "Company";
  id?: Maybe<Scalars["ID"]>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addCompany?: Maybe<Company>;
};

export type MutationAddCompanyArgs = {
  location: Scalars["String"];
  name: Scalars["String"];
  website?: InputMaybe<Scalars["String"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  companies?: Maybe<Array<Maybe<Company>>>;
  company?: Maybe<Company>;
};

export type RootQueryTypeCompanyArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type CompaniesQueryVariables = Exact<{ [key: string]: never }>;

export type CompaniesQuery = {
  __typename?: "RootQueryType";
  companies?: Array<{
    __typename?: "Company";
    id?: string | null;
    name?: string | null;
    location?: string | null;
    website?: string | null;
    url?: string | null;
  } | null> | null;
};

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
export const useCompaniesQuery = <TData = CompaniesQuery, TError = unknown>(
  variables?: CompaniesQueryVariables,
  options?: UseQueryOptions<CompaniesQuery, TError, TData>
) =>
  useQuery<CompaniesQuery, TError, TData>(
    variables === undefined ? ["Companies"] : ["Companies", variables],
    fetchData<CompaniesQuery, CompaniesQueryVariables>(
      CompaniesDocument,
      variables
    ),
    options
  );