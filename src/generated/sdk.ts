import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type _Service = {
   __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type GetGreetingRequest = {
  id: Scalars['ID'];
};

export type GetGreetingResponse = {
   __typename?: 'getGreetingResponse';
  greeting?: Maybe<Greeting>;
};

export type Greeting = {
   __typename?: 'Greeting';
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  upsertGreeting: UpsertGreetingOutput;
};


export type MutationUpsertGreetingArgs = {
  input: UpsertGreetingInput;
};

export type Query = {
   __typename?: 'Query';
  _service: _Service;
  getGreeting: GetGreetingResponse;
};


export type QueryGetGreetingArgs = {
  input: GetGreetingRequest;
};

export type UpsertGreetingInput = {
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type UpsertGreetingOutput = {
   __typename?: 'UpsertGreetingOutput';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type UsertGreetingMutationVariables = {
  input: UpsertGreetingInput;
};


export type UsertGreetingMutation = (
  { __typename?: 'Mutation' }
  & { upsertGreeting: (
    { __typename?: 'UpsertGreetingOutput' }
    & Pick<UpsertGreetingOutput, 'id' | 'message'>
  ) }
);

export type GetGreetingQueryVariables = {
  input: GetGreetingRequest;
};


export type GetGreetingQuery = (
  { __typename?: 'Query' }
  & { getGreeting: (
    { __typename?: 'getGreetingResponse' }
    & { greeting?: Maybe<(
      { __typename?: 'Greeting' }
      & Pick<Greeting, 'id' | 'message'>
    )> }
  ) }
);


export const UsertGreetingDocument = gql`
    mutation UsertGreeting($input: UpsertGreetingInput!) {
  upsertGreeting(input: $input) {
    id
    message
  }
}
    `;
export const GetGreetingDocument = gql`
    query GetGreeting($input: getGreetingRequest!) {
  getGreeting(input: $input) {
    greeting {
      id
      message
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    UsertGreeting(variables: UsertGreetingMutationVariables): Promise<UsertGreetingMutation> {
      return withWrapper(() => client.request<UsertGreetingMutation>(print(UsertGreetingDocument), variables));
    },
    GetGreeting(variables: GetGreetingQueryVariables): Promise<GetGreetingQuery> {
      return withWrapper(() => client.request<GetGreetingQuery>(print(GetGreetingDocument), variables));
    }
  };
}