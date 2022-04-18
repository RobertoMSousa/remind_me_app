
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCollectionInput {
    name: string;
    launchDate?: Nullable<string>;
    description?: Nullable<string>;
    image?: Nullable<string>;
}

export class UpdateCollectionInput {
    id?: Nullable<string>;
    launchDate?: Nullable<string>;
    description?: Nullable<string>;
}

export class CreateNftInput {
    name?: Nullable<string>;
    mintedDate?: Nullable<string>;
    description?: Nullable<string>;
}

export class UpdateNftInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    mintedDate?: Nullable<string>;
    description?: Nullable<string>;
}

export class UpdateUsersCollectionInput {
    userEmail: string;
    collectionId: number;
}

export class CreateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export class UpdateUserInput {
    id?: Nullable<string>;
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export class Collection {
    id: string;
    name: string;
    launchDate?: Nullable<string>;
    description?: Nullable<string>;
    image?: Nullable<string>;
    nfts?: Nullable<Nullable<Nft>[]>;
    subscribers?: Nullable<Nullable<User>[]>;
}

export abstract class IQuery {
    abstract collections(): Nullable<Collection>[] | Promise<Nullable<Collection>[]>;

    abstract collection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract nfts(): Nullable<Nft>[] | Promise<Nullable<Nft>[]>;

    abstract nft(id: number): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract usersCollections(): Nullable<UsersCollection>[] | Promise<Nullable<UsersCollection>[]>;

    abstract usersCollection(id: number): Nullable<UsersCollection> | Promise<Nullable<UsersCollection>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCollection(createCollectionInput: CreateCollectionInput): Collection | Promise<Collection>;

    abstract updateCollection(updateCollectionInput: UpdateCollectionInput): Collection | Promise<Collection>;

    abstract removeCollection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract createNft(createNftInput: CreateNftInput): Nft | Promise<Nft>;

    abstract updateNft(updateNftInput: UpdateNftInput): Nft | Promise<Nft>;

    abstract removeNft(id: number): Nullable<Nft> | Promise<Nullable<Nft>>;

    abstract subscribeCollection(updateUsersCollectionInput?: Nullable<UpdateUsersCollectionInput>): Nullable<UsersCollection> | Promise<Nullable<UsersCollection>>;

    abstract unsubscribeCollection(updateUsersCollectionInput?: Nullable<UpdateUsersCollectionInput>): Nullable<UsersCollection> | Promise<Nullable<UsersCollection>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Nft {
    id: string;
    name?: Nullable<string>;
    mintedDate?: Nullable<string>;
    description?: Nullable<string>;
}

export class UsersCollection {
    collectionID: string;
    userID: string;
    userEmail: string;
}

export class User {
    id: string;
    email?: Nullable<string>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
