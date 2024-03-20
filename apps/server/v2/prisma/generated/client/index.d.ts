
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PaymentsHistory
 * 
 */
export type PaymentsHistory = $Result.DefaultSelection<Prisma.$PaymentsHistoryPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model ClientKey
 * 
 */
export type ClientKey = $Result.DefaultSelection<Prisma.$ClientKeyPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model EmbedLinks
 * 
 */
export type EmbedLinks = $Result.DefaultSelection<Prisma.$EmbedLinksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  User: 'User',
  Admin: 'Admin',
  Owner: 'Owner'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const UserPlan: {
  None: 'None',
  Gold: 'Gold',
  Diamond: 'Diamond',
  Netherite: 'Netherite'
};

export type UserPlan = (typeof UserPlan)[keyof typeof UserPlan]


export const OrderStatus: {
  Success: 'Success',
  Failed: 'Failed',
  Pending: 'Pending'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const SubscriptionStatus: {
  Active: 'Active',
  Inactive: 'Inactive'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PictureType: {
  Internal: 'Internal',
  External: 'External'
};

export type PictureType = (typeof PictureType)[keyof typeof PictureType]


export const PictureStatus: {
  Public: 'Public',
  Private: 'Private'
};

export type PictureStatus = (typeof PictureStatus)[keyof typeof PictureStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type UserPlan = $Enums.UserPlan

export const UserPlan: typeof $Enums.UserPlan

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PictureType = $Enums.PictureType

export const PictureType: typeof $Enums.PictureType

export type PictureStatus = $Enums.PictureStatus

export const PictureStatus: typeof $Enums.PictureStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.paymentsHistory`: Exposes CRUD operations for the **PaymentsHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentsHistories
    * const paymentsHistories = await prisma.paymentsHistory.findMany()
    * ```
    */
  get paymentsHistory(): Prisma.PaymentsHistoryDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.clientKey`: Exposes CRUD operations for the **ClientKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientKeys
    * const clientKeys = await prisma.clientKey.findMany()
    * ```
    */
  get clientKey(): Prisma.ClientKeyDelegate<ExtArgs>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs>;

  /**
   * `prisma.embedLinks`: Exposes CRUD operations for the **EmbedLinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmbedLinks
    * const embedLinks = await prisma.embedLinks.findMany()
    * ```
    */
  get embedLinks(): Prisma.EmbedLinksDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PaymentsHistory: 'PaymentsHistory',
    Subscription: 'Subscription',
    ClientKey: 'ClientKey',
    Favorite: 'Favorite',
    Gallery: 'Gallery',
    Album: 'Album',
    Picture: 'Picture',
    EmbedLinks: 'EmbedLinks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'paymentsHistory' | 'subscription' | 'clientKey' | 'favorite' | 'gallery' | 'album' | 'picture' | 'embedLinks'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PaymentsHistory: {
        payload: Prisma.$PaymentsHistoryPayload<ExtArgs>
        fields: Prisma.PaymentsHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentsHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentsHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentsHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentsHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentsHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>
          }
          update: {
            args: Prisma.PaymentsHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentsHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentsHistory>
          }
          groupBy: {
            args: Prisma.PaymentsHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsHistoryCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      ClientKey: {
        payload: Prisma.$ClientKeyPayload<ExtArgs>
        fields: Prisma.ClientKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientKeyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientKeyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          findFirst: {
            args: Prisma.ClientKeyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientKeyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          findMany: {
            args: Prisma.ClientKeyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>[]
          }
          create: {
            args: Prisma.ClientKeyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          createMany: {
            args: Prisma.ClientKeyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientKeyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          update: {
            args: Prisma.ClientKeyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          deleteMany: {
            args: Prisma.ClientKeyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientKeyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientKeyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientKeyPayload>
          }
          aggregate: {
            args: Prisma.ClientKeyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientKey>
          }
          groupBy: {
            args: Prisma.ClientKeyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientKeyCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientKeyCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>,
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>,
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      EmbedLinks: {
        payload: Prisma.$EmbedLinksPayload<ExtArgs>
        fields: Prisma.EmbedLinksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbedLinksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbedLinksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>
          }
          findFirst: {
            args: Prisma.EmbedLinksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbedLinksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>
          }
          findMany: {
            args: Prisma.EmbedLinksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>[]
          }
          create: {
            args: Prisma.EmbedLinksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>
          }
          createMany: {
            args: Prisma.EmbedLinksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmbedLinksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>
          }
          update: {
            args: Prisma.EmbedLinksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>
          }
          deleteMany: {
            args: Prisma.EmbedLinksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmbedLinksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmbedLinksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmbedLinksPayload>
          }
          aggregate: {
            args: Prisma.EmbedLinksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmbedLinks>
          }
          groupBy: {
            args: Prisma.EmbedLinksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmbedLinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbedLinksCountArgs<ExtArgs>,
            result: $Utils.Optional<EmbedLinksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    payment_history: number
    album: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_history?: boolean | UserCountOutputTypeCountPayment_historyArgs
    album?: boolean | UserCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayment_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsHistoryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }



  /**
   * Count Type FavoriteCountOutputType
   */

  export type FavoriteCountOutputType = {
    pictures: number
  }

  export type FavoriteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | FavoriteCountOutputTypeCountPicturesArgs
  }

  // Custom InputTypes

  /**
   * FavoriteCountOutputType without action
   */
  export type FavoriteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteCountOutputType
     */
    select?: FavoriteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FavoriteCountOutputType without action
   */
  export type FavoriteCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }



  /**
   * Count Type GalleryCountOutputType
   */

  export type GalleryCountOutputType = {
    pictures: number
  }

  export type GalleryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | GalleryCountOutputTypeCountPicturesArgs
  }

  // Custom InputTypes

  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCountOutputType
     */
    select?: GalleryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }



  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    pictures: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | AlbumCountOutputTypeCountPicturesArgs
  }

  // Custom InputTypes

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    origin_code: number | null
  }

  export type UserSumAggregateOutputType = {
    origin_code: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    origin_code: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    type: $Enums.UserType | null
    bio: string | null
    is_member: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    origin_code: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    type: $Enums.UserType | null
    bio: string | null
    is_member: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    origin_code: number
    name: number
    email: number
    password: number
    avatar: number
    type: number
    bio: number
    is_member: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    origin_code?: true
  }

  export type UserSumAggregateInputType = {
    origin_code?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    origin_code?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    type?: true
    bio?: true
    is_member?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    origin_code?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    type?: true
    bio?: true
    is_member?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    origin_code?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    type?: true
    bio?: true
    is_member?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    origin_code: number
    name: string
    email: string | null
    password: string | null
    avatar: string
    type: $Enums.UserType
    bio: string | null
    is_member: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin_code?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    type?: boolean
    bio?: boolean
    is_member?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_history?: boolean | User$payment_historyArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    gallery?: boolean | User$galleryArgs<ExtArgs>
    client_key?: boolean | User$client_keyArgs<ExtArgs>
    favorite?: boolean | User$favoriteArgs<ExtArgs>
    album?: boolean | User$albumArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    origin_code?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    type?: boolean
    bio?: boolean
    is_member?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_history?: boolean | User$payment_historyArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    gallery?: boolean | User$galleryArgs<ExtArgs>
    client_key?: boolean | User$client_keyArgs<ExtArgs>
    favorite?: boolean | User$favoriteArgs<ExtArgs>
    album?: boolean | User$albumArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      payment_history: Prisma.$PaymentsHistoryPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      gallery: Prisma.$GalleryPayload<ExtArgs> | null
      client_key: Prisma.$ClientKeyPayload<ExtArgs> | null
      favorite: Prisma.$FavoritePayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      origin_code: number
      name: string
      email: string | null
      password: string | null
      avatar: string
      type: $Enums.UserType
      bio: string | null
      is_member: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment_history<T extends User$payment_historyArgs<ExtArgs> = {}>(args?: Subset<T, User$payment_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    gallery<T extends User$galleryArgs<ExtArgs> = {}>(args?: Subset<T, User$galleryArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    client_key<T extends User$client_keyArgs<ExtArgs> = {}>(args?: Subset<T, User$client_keyArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    favorite<T extends User$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    album<T extends User$albumArgs<ExtArgs> = {}>(args?: Subset<T, User$albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly origin_code: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly bio: FieldRef<"User", 'String'>
    readonly is_member: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.payment_history
   */
  export type User$payment_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    where?: PaymentsHistoryWhereInput
    orderBy?: PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput | PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PaymentsHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsHistoryScalarFieldEnum | PaymentsHistoryScalarFieldEnum[]
  }


  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }


  /**
   * User.gallery
   */
  export type User$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    where?: GalleryWhereInput
  }


  /**
   * User.client_key
   */
  export type User$client_keyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    where?: ClientKeyWhereInput
  }


  /**
   * User.favorite
   */
  export type User$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
  }


  /**
   * User.album
   */
  export type User$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationAndSearchRelevanceInput | AlbumOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model PaymentsHistory
   */

  export type AggregatePaymentsHistory = {
    _count: PaymentsHistoryCountAggregateOutputType | null
    _avg: PaymentsHistoryAvgAggregateOutputType | null
    _sum: PaymentsHistorySumAggregateOutputType | null
    _min: PaymentsHistoryMinAggregateOutputType | null
    _max: PaymentsHistoryMaxAggregateOutputType | null
  }

  export type PaymentsHistoryAvgAggregateOutputType = {
    interval_count: number | null
    order_date: number | null
  }

  export type PaymentsHistorySumAggregateOutputType = {
    interval_count: number | null
    order_date: bigint | null
  }

  export type PaymentsHistoryMinAggregateOutputType = {
    id: string | null
    plan: $Enums.UserPlan | null
    interval_count: number | null
    status: $Enums.OrderStatus | null
    order_id: string | null
    order_date: bigint | null
    user_id: string | null
  }

  export type PaymentsHistoryMaxAggregateOutputType = {
    id: string | null
    plan: $Enums.UserPlan | null
    interval_count: number | null
    status: $Enums.OrderStatus | null
    order_id: string | null
    order_date: bigint | null
    user_id: string | null
  }

  export type PaymentsHistoryCountAggregateOutputType = {
    id: number
    plan: number
    interval_count: number
    status: number
    amount: number
    order_id: number
    order_date: number
    user_id: number
    _all: number
  }


  export type PaymentsHistoryAvgAggregateInputType = {
    interval_count?: true
    order_date?: true
  }

  export type PaymentsHistorySumAggregateInputType = {
    interval_count?: true
    order_date?: true
  }

  export type PaymentsHistoryMinAggregateInputType = {
    id?: true
    plan?: true
    interval_count?: true
    status?: true
    order_id?: true
    order_date?: true
    user_id?: true
  }

  export type PaymentsHistoryMaxAggregateInputType = {
    id?: true
    plan?: true
    interval_count?: true
    status?: true
    order_id?: true
    order_date?: true
    user_id?: true
  }

  export type PaymentsHistoryCountAggregateInputType = {
    id?: true
    plan?: true
    interval_count?: true
    status?: true
    amount?: true
    order_id?: true
    order_date?: true
    user_id?: true
    _all?: true
  }

  export type PaymentsHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentsHistory to aggregate.
     */
    where?: PaymentsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsHistories to fetch.
     */
    orderBy?: PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput | PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentsHistories
    **/
    _count?: true | PaymentsHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsHistoryMaxAggregateInputType
  }

  export type GetPaymentsHistoryAggregateType<T extends PaymentsHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentsHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentsHistory[P]>
      : GetScalarType<T[P], AggregatePaymentsHistory[P]>
  }




  export type PaymentsHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsHistoryWhereInput
    orderBy?: PaymentsHistoryOrderByWithAggregationInput | PaymentsHistoryOrderByWithAggregationInput[]
    by: PaymentsHistoryScalarFieldEnum[] | PaymentsHistoryScalarFieldEnum
    having?: PaymentsHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsHistoryCountAggregateInputType | true
    _avg?: PaymentsHistoryAvgAggregateInputType
    _sum?: PaymentsHistorySumAggregateInputType
    _min?: PaymentsHistoryMinAggregateInputType
    _max?: PaymentsHistoryMaxAggregateInputType
  }

  export type PaymentsHistoryGroupByOutputType = {
    id: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonValue
    order_id: string
    order_date: bigint
    user_id: string
    _count: PaymentsHistoryCountAggregateOutputType | null
    _avg: PaymentsHistoryAvgAggregateOutputType | null
    _sum: PaymentsHistorySumAggregateOutputType | null
    _min: PaymentsHistoryMinAggregateOutputType | null
    _max: PaymentsHistoryMaxAggregateOutputType | null
  }

  type GetPaymentsHistoryGroupByPayload<T extends PaymentsHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    interval_count?: boolean
    status?: boolean
    amount?: boolean
    order_id?: boolean
    order_date?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsHistory"]>

  export type PaymentsHistorySelectScalar = {
    id?: boolean
    plan?: boolean
    interval_count?: boolean
    status?: boolean
    amount?: boolean
    order_id?: boolean
    order_date?: boolean
    user_id?: boolean
  }

  export type PaymentsHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PaymentsHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentsHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: $Enums.UserPlan
      interval_count: number
      status: $Enums.OrderStatus
      amount: Prisma.JsonValue
      order_id: string
      order_date: bigint
      user_id: string
    }, ExtArgs["result"]["paymentsHistory"]>
    composites: {}
  }


  type PaymentsHistoryGetPayload<S extends boolean | null | undefined | PaymentsHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentsHistoryPayload, S>

  type PaymentsHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentsHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentsHistoryCountAggregateInputType | true
    }

  export interface PaymentsHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentsHistory'], meta: { name: 'PaymentsHistory' } }
    /**
     * Find zero or one PaymentsHistory that matches the filter.
     * @param {PaymentsHistoryFindUniqueArgs} args - Arguments to find a PaymentsHistory
     * @example
     * // Get one PaymentsHistory
     * const paymentsHistory = await prisma.paymentsHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentsHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentsHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentsHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentsHistory
     * @example
     * // Get one PaymentsHistory
     * const paymentsHistory = await prisma.paymentsHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentsHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentsHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryFindFirstArgs} args - Arguments to find a PaymentsHistory
     * @example
     * // Get one PaymentsHistory
     * const paymentsHistory = await prisma.paymentsHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentsHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentsHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentsHistory
     * @example
     * // Get one PaymentsHistory
     * const paymentsHistory = await prisma.paymentsHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentsHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentsHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentsHistories
     * const paymentsHistories = await prisma.paymentsHistory.findMany()
     * 
     * // Get first 10 PaymentsHistories
     * const paymentsHistories = await prisma.paymentsHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsHistoryWithIdOnly = await prisma.paymentsHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentsHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentsHistory.
     * @param {PaymentsHistoryCreateArgs} args - Arguments to create a PaymentsHistory.
     * @example
     * // Create one PaymentsHistory
     * const PaymentsHistory = await prisma.paymentsHistory.create({
     *   data: {
     *     // ... data to create a PaymentsHistory
     *   }
     * })
     * 
    **/
    create<T extends PaymentsHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsHistoryCreateArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentsHistories.
     *     @param {PaymentsHistoryCreateManyArgs} args - Arguments to create many PaymentsHistories.
     *     @example
     *     // Create many PaymentsHistories
     *     const paymentsHistory = await prisma.paymentsHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentsHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentsHistory.
     * @param {PaymentsHistoryDeleteArgs} args - Arguments to delete one PaymentsHistory.
     * @example
     * // Delete one PaymentsHistory
     * const PaymentsHistory = await prisma.paymentsHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentsHistory
     *   }
     * })
     * 
    **/
    delete<T extends PaymentsHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsHistoryDeleteArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentsHistory.
     * @param {PaymentsHistoryUpdateArgs} args - Arguments to update one PaymentsHistory.
     * @example
     * // Update one PaymentsHistory
     * const paymentsHistory = await prisma.paymentsHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentsHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsHistoryUpdateArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentsHistories.
     * @param {PaymentsHistoryDeleteManyArgs} args - Arguments to filter PaymentsHistories to delete.
     * @example
     * // Delete a few PaymentsHistories
     * const { count } = await prisma.paymentsHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentsHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentsHistories
     * const paymentsHistory = await prisma.paymentsHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentsHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentsHistory.
     * @param {PaymentsHistoryUpsertArgs} args - Arguments to update or create a PaymentsHistory.
     * @example
     * // Update or create a PaymentsHistory
     * const paymentsHistory = await prisma.paymentsHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentsHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentsHistory we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentsHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsHistoryUpsertArgs<ExtArgs>>
    ): Prisma__PaymentsHistoryClient<$Result.GetResult<Prisma.$PaymentsHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryCountArgs} args - Arguments to filter PaymentsHistories to count.
     * @example
     * // Count the number of PaymentsHistories
     * const count = await prisma.paymentsHistory.count({
     *   where: {
     *     // ... the filter for the PaymentsHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentsHistoryCountArgs>(
      args?: Subset<T, PaymentsHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsHistoryAggregateArgs>(args: Subset<T, PaymentsHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentsHistoryAggregateType<T>>

    /**
     * Group by PaymentsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentsHistory model
   */
  readonly fields: PaymentsHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentsHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentsHistory model
   */ 
  interface PaymentsHistoryFieldRefs {
    readonly id: FieldRef<"PaymentsHistory", 'String'>
    readonly plan: FieldRef<"PaymentsHistory", 'UserPlan'>
    readonly interval_count: FieldRef<"PaymentsHistory", 'Int'>
    readonly status: FieldRef<"PaymentsHistory", 'OrderStatus'>
    readonly amount: FieldRef<"PaymentsHistory", 'Json'>
    readonly order_id: FieldRef<"PaymentsHistory", 'String'>
    readonly order_date: FieldRef<"PaymentsHistory", 'BigInt'>
    readonly user_id: FieldRef<"PaymentsHistory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PaymentsHistory findUnique
   */
  export type PaymentsHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsHistory to fetch.
     */
    where: PaymentsHistoryWhereUniqueInput
  }


  /**
   * PaymentsHistory findUniqueOrThrow
   */
  export type PaymentsHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsHistory to fetch.
     */
    where: PaymentsHistoryWhereUniqueInput
  }


  /**
   * PaymentsHistory findFirst
   */
  export type PaymentsHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsHistory to fetch.
     */
    where?: PaymentsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsHistories to fetch.
     */
    orderBy?: PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput | PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentsHistories.
     */
    cursor?: PaymentsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentsHistories.
     */
    distinct?: PaymentsHistoryScalarFieldEnum | PaymentsHistoryScalarFieldEnum[]
  }


  /**
   * PaymentsHistory findFirstOrThrow
   */
  export type PaymentsHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsHistory to fetch.
     */
    where?: PaymentsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsHistories to fetch.
     */
    orderBy?: PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput | PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentsHistories.
     */
    cursor?: PaymentsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentsHistories.
     */
    distinct?: PaymentsHistoryScalarFieldEnum | PaymentsHistoryScalarFieldEnum[]
  }


  /**
   * PaymentsHistory findMany
   */
  export type PaymentsHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsHistories to fetch.
     */
    where?: PaymentsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsHistories to fetch.
     */
    orderBy?: PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput | PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentsHistories.
     */
    cursor?: PaymentsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsHistories.
     */
    skip?: number
    distinct?: PaymentsHistoryScalarFieldEnum | PaymentsHistoryScalarFieldEnum[]
  }


  /**
   * PaymentsHistory create
   */
  export type PaymentsHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentsHistory.
     */
    data: XOR<PaymentsHistoryCreateInput, PaymentsHistoryUncheckedCreateInput>
  }


  /**
   * PaymentsHistory createMany
   */
  export type PaymentsHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentsHistories.
     */
    data: PaymentsHistoryCreateManyInput | PaymentsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentsHistory update
   */
  export type PaymentsHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentsHistory.
     */
    data: XOR<PaymentsHistoryUpdateInput, PaymentsHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentsHistory to update.
     */
    where: PaymentsHistoryWhereUniqueInput
  }


  /**
   * PaymentsHistory updateMany
   */
  export type PaymentsHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentsHistories.
     */
    data: XOR<PaymentsHistoryUpdateManyMutationInput, PaymentsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentsHistories to update
     */
    where?: PaymentsHistoryWhereInput
  }


  /**
   * PaymentsHistory upsert
   */
  export type PaymentsHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentsHistory to update in case it exists.
     */
    where: PaymentsHistoryWhereUniqueInput
    /**
     * In case the PaymentsHistory found by the `where` argument doesn't exist, create a new PaymentsHistory with this data.
     */
    create: XOR<PaymentsHistoryCreateInput, PaymentsHistoryUncheckedCreateInput>
    /**
     * In case the PaymentsHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsHistoryUpdateInput, PaymentsHistoryUncheckedUpdateInput>
  }


  /**
   * PaymentsHistory delete
   */
  export type PaymentsHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
    /**
     * Filter which PaymentsHistory to delete.
     */
    where: PaymentsHistoryWhereUniqueInput
  }


  /**
   * PaymentsHistory deleteMany
   */
  export type PaymentsHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentsHistories to delete
     */
    where?: PaymentsHistoryWhereInput
  }


  /**
   * PaymentsHistory without action
   */
  export type PaymentsHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsHistory
     */
    select?: PaymentsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsHistoryInclude<ExtArgs> | null
  }



  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    start_date: number | null
    end_date: number | null
    next_payment_date: number | null
    interval_count: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    start_date: bigint | null
    end_date: bigint | null
    next_payment_date: bigint | null
    interval_count: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    start_date: bigint | null
    end_date: bigint | null
    next_payment_date: bigint | null
    interval_count: number | null
    payment_id: string | null
    interval: string | null
    status: $Enums.SubscriptionStatus | null
    plan: $Enums.UserPlan | null
    user_id: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    start_date: bigint | null
    end_date: bigint | null
    next_payment_date: bigint | null
    interval_count: number | null
    payment_id: string | null
    interval: string | null
    status: $Enums.SubscriptionStatus | null
    plan: $Enums.UserPlan | null
    user_id: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    start_date: number
    end_date: number
    next_payment_date: number
    interval_count: number
    payment_id: number
    interval: number
    status: number
    plan: number
    user_id: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    start_date?: true
    end_date?: true
    next_payment_date?: true
    interval_count?: true
  }

  export type SubscriptionSumAggregateInputType = {
    start_date?: true
    end_date?: true
    next_payment_date?: true
    interval_count?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    next_payment_date?: true
    interval_count?: true
    payment_id?: true
    interval?: true
    status?: true
    plan?: true
    user_id?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    next_payment_date?: true
    interval_count?: true
    payment_id?: true
    interval?: true
    status?: true
    plan?: true
    user_id?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    next_payment_date?: true
    interval_count?: true
    payment_id?: true
    interval?: true
    status?: true
    plan?: true
    user_id?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationAndSearchRelevanceInput | SubscriptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    start_date: bigint | null
    end_date: bigint | null
    next_payment_date: bigint | null
    interval_count: number | null
    payment_id: string | null
    interval: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.UserPlan
    user_id: string
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    next_payment_date?: boolean
    interval_count?: boolean
    payment_id?: boolean
    interval?: boolean
    status?: boolean
    plan?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    next_payment_date?: boolean
    interval_count?: boolean
    payment_id?: boolean
    interval?: boolean
    status?: boolean
    plan?: boolean
    user_id?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start_date: bigint | null
      end_date: bigint | null
      next_payment_date: bigint | null
      interval_count: number | null
      payment_id: string | null
      interval: string
      status: $Enums.SubscriptionStatus
      plan: $Enums.UserPlan
      user_id: string
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }


  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
    **/
    create<T extends SubscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subscriptions.
     *     @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscription = await prisma.subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
    **/
    delete<T extends SubscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
    **/
    upsert<T extends SubscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly start_date: FieldRef<"Subscription", 'BigInt'>
    readonly end_date: FieldRef<"Subscription", 'BigInt'>
    readonly next_payment_date: FieldRef<"Subscription", 'BigInt'>
    readonly interval_count: FieldRef<"Subscription", 'Int'>
    readonly payment_id: FieldRef<"Subscription", 'String'>
    readonly interval: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly plan: FieldRef<"Subscription", 'UserPlan'>
    readonly user_id: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationAndSearchRelevanceInput | SubscriptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationAndSearchRelevanceInput | SubscriptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationAndSearchRelevanceInput | SubscriptionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }


  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }


  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }


  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }


  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }



  /**
   * Model ClientKey
   */

  export type AggregateClientKey = {
    _count: ClientKeyCountAggregateOutputType | null
    _min: ClientKeyMinAggregateOutputType | null
    _max: ClientKeyMaxAggregateOutputType | null
  }

  export type ClientKeyMinAggregateOutputType = {
    id: string | null
    client_id: string | null
    client_secret: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ClientKeyMaxAggregateOutputType = {
    id: string | null
    client_id: string | null
    client_secret: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ClientKeyCountAggregateOutputType = {
    id: number
    client_id: number
    client_secret: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type ClientKeyMinAggregateInputType = {
    id?: true
    client_id?: true
    client_secret?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ClientKeyMaxAggregateInputType = {
    id?: true
    client_id?: true
    client_secret?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ClientKeyCountAggregateInputType = {
    id?: true
    client_id?: true
    client_secret?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type ClientKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientKey to aggregate.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationAndSearchRelevanceInput | ClientKeyOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientKeys
    **/
    _count?: true | ClientKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientKeyMaxAggregateInputType
  }

  export type GetClientKeyAggregateType<T extends ClientKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateClientKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientKey[P]>
      : GetScalarType<T[P], AggregateClientKey[P]>
  }




  export type ClientKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientKeyWhereInput
    orderBy?: ClientKeyOrderByWithAggregationInput | ClientKeyOrderByWithAggregationInput[]
    by: ClientKeyScalarFieldEnum[] | ClientKeyScalarFieldEnum
    having?: ClientKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientKeyCountAggregateInputType | true
    _min?: ClientKeyMinAggregateInputType
    _max?: ClientKeyMaxAggregateInputType
  }

  export type ClientKeyGroupByOutputType = {
    id: string
    client_id: string
    client_secret: string
    created_at: Date
    updated_at: Date
    user_id: string
    _count: ClientKeyCountAggregateOutputType | null
    _min: ClientKeyMinAggregateOutputType | null
    _max: ClientKeyMaxAggregateOutputType | null
  }

  type GetClientKeyGroupByPayload<T extends ClientKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ClientKeyGroupByOutputType[P]>
        }
      >
    >


  export type ClientKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    client_secret?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientKey"]>

  export type ClientKeySelectScalar = {
    id?: boolean
    client_id?: boolean
    client_secret?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type ClientKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ClientKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      client_id: string
      client_secret: string
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["clientKey"]>
    composites: {}
  }


  type ClientKeyGetPayload<S extends boolean | null | undefined | ClientKeyDefaultArgs> = $Result.GetResult<Prisma.$ClientKeyPayload, S>

  type ClientKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientKeyCountAggregateInputType | true
    }

  export interface ClientKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientKey'], meta: { name: 'ClientKey' } }
    /**
     * Find zero or one ClientKey that matches the filter.
     * @param {ClientKeyFindUniqueArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientKeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientKeyFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ClientKey that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientKeyFindUniqueOrThrowArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientKeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientKeyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ClientKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyFindFirstArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientKeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientKeyFindFirstArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ClientKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyFindFirstOrThrowArgs} args - Arguments to find a ClientKey
     * @example
     * // Get one ClientKey
     * const clientKey = await prisma.clientKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientKeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientKeyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ClientKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientKeys
     * const clientKeys = await prisma.clientKey.findMany()
     * 
     * // Get first 10 ClientKeys
     * const clientKeys = await prisma.clientKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientKeyWithIdOnly = await prisma.clientKey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientKeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientKeyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ClientKey.
     * @param {ClientKeyCreateArgs} args - Arguments to create a ClientKey.
     * @example
     * // Create one ClientKey
     * const ClientKey = await prisma.clientKey.create({
     *   data: {
     *     // ... data to create a ClientKey
     *   }
     * })
     * 
    **/
    create<T extends ClientKeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientKeyCreateArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ClientKeys.
     *     @param {ClientKeyCreateManyArgs} args - Arguments to create many ClientKeys.
     *     @example
     *     // Create many ClientKeys
     *     const clientKey = await prisma.clientKey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientKeyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientKeyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClientKey.
     * @param {ClientKeyDeleteArgs} args - Arguments to delete one ClientKey.
     * @example
     * // Delete one ClientKey
     * const ClientKey = await prisma.clientKey.delete({
     *   where: {
     *     // ... filter to delete one ClientKey
     *   }
     * })
     * 
    **/
    delete<T extends ClientKeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientKeyDeleteArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ClientKey.
     * @param {ClientKeyUpdateArgs} args - Arguments to update one ClientKey.
     * @example
     * // Update one ClientKey
     * const clientKey = await prisma.clientKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientKeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientKeyUpdateArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ClientKeys.
     * @param {ClientKeyDeleteManyArgs} args - Arguments to filter ClientKeys to delete.
     * @example
     * // Delete a few ClientKeys
     * const { count } = await prisma.clientKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientKeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientKeyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientKeys
     * const clientKey = await prisma.clientKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientKeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientKeyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientKey.
     * @param {ClientKeyUpsertArgs} args - Arguments to update or create a ClientKey.
     * @example
     * // Update or create a ClientKey
     * const clientKey = await prisma.clientKey.upsert({
     *   create: {
     *     // ... data to create a ClientKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientKey we want to update
     *   }
     * })
    **/
    upsert<T extends ClientKeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientKeyUpsertArgs<ExtArgs>>
    ): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ClientKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyCountArgs} args - Arguments to filter ClientKeys to count.
     * @example
     * // Count the number of ClientKeys
     * const count = await prisma.clientKey.count({
     *   where: {
     *     // ... the filter for the ClientKeys we want to count
     *   }
     * })
    **/
    count<T extends ClientKeyCountArgs>(
      args?: Subset<T, ClientKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientKeyAggregateArgs>(args: Subset<T, ClientKeyAggregateArgs>): Prisma.PrismaPromise<GetClientKeyAggregateType<T>>

    /**
     * Group by ClientKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientKeyGroupByArgs['orderBy'] }
        : { orderBy?: ClientKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientKey model
   */
  readonly fields: ClientKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ClientKey model
   */ 
  interface ClientKeyFieldRefs {
    readonly id: FieldRef<"ClientKey", 'String'>
    readonly client_id: FieldRef<"ClientKey", 'String'>
    readonly client_secret: FieldRef<"ClientKey", 'String'>
    readonly created_at: FieldRef<"ClientKey", 'DateTime'>
    readonly updated_at: FieldRef<"ClientKey", 'DateTime'>
    readonly user_id: FieldRef<"ClientKey", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ClientKey findUnique
   */
  export type ClientKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where: ClientKeyWhereUniqueInput
  }


  /**
   * ClientKey findUniqueOrThrow
   */
  export type ClientKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where: ClientKeyWhereUniqueInput
  }


  /**
   * ClientKey findFirst
   */
  export type ClientKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationAndSearchRelevanceInput | ClientKeyOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientKeys.
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientKeys.
     */
    distinct?: ClientKeyScalarFieldEnum | ClientKeyScalarFieldEnum[]
  }


  /**
   * ClientKey findFirstOrThrow
   */
  export type ClientKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKey to fetch.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationAndSearchRelevanceInput | ClientKeyOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientKeys.
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientKeys.
     */
    distinct?: ClientKeyScalarFieldEnum | ClientKeyScalarFieldEnum[]
  }


  /**
   * ClientKey findMany
   */
  export type ClientKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter, which ClientKeys to fetch.
     */
    where?: ClientKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientKeys to fetch.
     */
    orderBy?: ClientKeyOrderByWithRelationAndSearchRelevanceInput | ClientKeyOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientKeys.
     */
    cursor?: ClientKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientKeys.
     */
    skip?: number
    distinct?: ClientKeyScalarFieldEnum | ClientKeyScalarFieldEnum[]
  }


  /**
   * ClientKey create
   */
  export type ClientKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientKey.
     */
    data: XOR<ClientKeyCreateInput, ClientKeyUncheckedCreateInput>
  }


  /**
   * ClientKey createMany
   */
  export type ClientKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientKeys.
     */
    data: ClientKeyCreateManyInput | ClientKeyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ClientKey update
   */
  export type ClientKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientKey.
     */
    data: XOR<ClientKeyUpdateInput, ClientKeyUncheckedUpdateInput>
    /**
     * Choose, which ClientKey to update.
     */
    where: ClientKeyWhereUniqueInput
  }


  /**
   * ClientKey updateMany
   */
  export type ClientKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientKeys.
     */
    data: XOR<ClientKeyUpdateManyMutationInput, ClientKeyUncheckedUpdateManyInput>
    /**
     * Filter which ClientKeys to update
     */
    where?: ClientKeyWhereInput
  }


  /**
   * ClientKey upsert
   */
  export type ClientKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientKey to update in case it exists.
     */
    where: ClientKeyWhereUniqueInput
    /**
     * In case the ClientKey found by the `where` argument doesn't exist, create a new ClientKey with this data.
     */
    create: XOR<ClientKeyCreateInput, ClientKeyUncheckedCreateInput>
    /**
     * In case the ClientKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientKeyUpdateInput, ClientKeyUncheckedUpdateInput>
  }


  /**
   * ClientKey delete
   */
  export type ClientKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
    /**
     * Filter which ClientKey to delete.
     */
    where: ClientKeyWhereUniqueInput
  }


  /**
   * ClientKey deleteMany
   */
  export type ClientKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientKeys to delete
     */
    where?: ClientKeyWhereInput
  }


  /**
   * ClientKey without action
   */
  export type ClientKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientKey
     */
    select?: ClientKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientKeyInclude<ExtArgs> | null
  }



  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    total: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    total: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    total: number | null
    user_id: string | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    total: number | null
    user_id: string | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    total: number
    user_id: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    total?: true
  }

  export type FavoriteSumAggregateInputType = {
    total?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    total?: true
    user_id?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    total?: true
    user_id?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    total?: true
    user_id?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationAndSearchRelevanceInput | FavoriteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    total: number
    user_id: string
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    user_id?: boolean
    pictures?: boolean | Favorite$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FavoriteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    total?: boolean
    user_id?: boolean
  }

  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | Favorite$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FavoriteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      total: number
      user_id: string
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }


  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Favorite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoriteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
    **/
    create<T extends FavoriteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Favorites.
     *     @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorite = await prisma.favorite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoriteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pictures<T extends Favorite$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Favorite$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Favorite model
   */ 
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly total: FieldRef<"Favorite", 'Int'>
    readonly user_id: FieldRef<"Favorite", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationAndSearchRelevanceInput | FavoriteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationAndSearchRelevanceInput | FavoriteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationAndSearchRelevanceInput | FavoriteOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }


  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
  }


  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }


  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
  }


  /**
   * Favorite.pictures
   */
  export type Favorite$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
  }



  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _avg: GalleryAvgAggregateOutputType | null
    _sum: GallerySumAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryAvgAggregateOutputType = {
    created_at: number | null
  }

  export type GallerySumAggregateOutputType = {
    created_at: bigint | null
  }

  export type GalleryMinAggregateOutputType = {
    id: string | null
    created_at: bigint | null
    user_id: string | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: string | null
    created_at: bigint | null
    user_id: string | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    created_at: number
    user_id: number
    _all: number
  }


  export type GalleryAvgAggregateInputType = {
    created_at?: true
  }

  export type GallerySumAggregateInputType = {
    created_at?: true
  }

  export type GalleryMinAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    created_at?: true
    user_id?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _avg?: GalleryAvgAggregateInputType
    _sum?: GallerySumAggregateInputType
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: string
    created_at: bigint
    user_id: string
    _count: GalleryCountAggregateOutputType | null
    _avg: GalleryAvgAggregateOutputType | null
    _sum: GallerySumAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    user_id?: boolean
    pictures?: boolean | Gallery$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    created_at?: boolean
    user_id?: boolean
  }

  export type GalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | Gallery$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: bigint
      user_id: string
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }


  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GalleryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gallery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GalleryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GalleryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
    **/
    create<T extends GalleryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Galleries.
     *     @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     *     @example
     *     // Create many Galleries
     *     const gallery = await prisma.gallery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GalleryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
    **/
    delete<T extends GalleryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GalleryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GalleryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GalleryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
    **/
    upsert<T extends GalleryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>
    ): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pictures<T extends Gallery$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Gallery$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Gallery model
   */ 
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'String'>
    readonly created_at: FieldRef<"Gallery", 'BigInt'>
    readonly user_id: FieldRef<"Gallery", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationAndSearchRelevanceInput | GalleryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }


  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }


  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
  }


  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }


  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }


  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
  }


  /**
   * Gallery.pictures
   */
  export type Gallery$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GalleryInclude<ExtArgs> | null
  }



  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    user_id: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    user_id: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    user_id: number
    _all: number
  }


  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    user_id?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    user_id?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    user_id?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationAndSearchRelevanceInput | AlbumOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    title: string
    description: string
    thumbnail: string
    user_id: string
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    user_id?: boolean
    pictures?: boolean | Album$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    user_id?: boolean
  }

  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | Album$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      thumbnail: string
      user_id: string
    }, ExtArgs["result"]["album"]>
    composites: {}
  }


  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Album that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends AlbumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends AlbumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>
    ): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pictures<T extends Album$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Album$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Album model
   */ 
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly title: FieldRef<"Album", 'String'>
    readonly description: FieldRef<"Album", 'String'>
    readonly thumbnail: FieldRef<"Album", 'String'>
    readonly user_id: FieldRef<"Album", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationAndSearchRelevanceInput | AlbumOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationAndSearchRelevanceInput | AlbumOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationAndSearchRelevanceInput | AlbumOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }


  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
  }


  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }


  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
  }


  /**
   * Album.pictures
   */
  export type Album$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
  }



  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureAvgAggregateOutputType = {
    size: number | null
    created_at: number | null
  }

  export type PictureSumAggregateOutputType = {
    size: number | null
    created_at: bigint | null
  }

  export type PictureMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    size: number | null
    filename: string | null
    type: $Enums.PictureType | null
    extension: string | null
    status: $Enums.PictureStatus | null
    created_at: bigint | null
    favorite_id: string | null
    album_id: string | null
    gallery_id: string | null
  }

  export type PictureMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    link: string | null
    size: number | null
    filename: string | null
    type: $Enums.PictureType | null
    extension: string | null
    status: $Enums.PictureStatus | null
    created_at: bigint | null
    favorite_id: string | null
    album_id: string | null
    gallery_id: string | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    title: number
    description: number
    link: number
    expires_time: number
    size: number
    filename: number
    type: number
    extension: number
    status: number
    created_at: number
    favorite_id: number
    album_id: number
    gallery_id: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    size?: true
    created_at?: true
  }

  export type PictureSumAggregateInputType = {
    size?: true
    created_at?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    size?: true
    filename?: true
    type?: true
    extension?: true
    status?: true
    created_at?: true
    favorite_id?: true
    album_id?: true
    gallery_id?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    size?: true
    filename?: true
    type?: true
    extension?: true
    status?: true
    created_at?: true
    favorite_id?: true
    album_id?: true
    gallery_id?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    expires_time?: true
    size?: true
    filename?: true
    type?: true
    extension?: true
    status?: true
    created_at?: true
    favorite_id?: true
    album_id?: true
    gallery_id?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _avg?: PictureAvgAggregateInputType
    _sum?: PictureSumAggregateInputType
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: string
    title: string
    description: string
    link: string
    expires_time: JsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint
    favorite_id: string | null
    album_id: string | null
    gallery_id: string
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    expires_time?: boolean
    size?: boolean
    filename?: boolean
    type?: boolean
    extension?: boolean
    status?: boolean
    created_at?: boolean
    favorite_id?: boolean
    album_id?: boolean
    gallery_id?: boolean
    embed_links?: boolean | Picture$embed_linksArgs<ExtArgs>
    favorite?: boolean | Picture$favoriteArgs<ExtArgs>
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
    album?: boolean | Picture$albumArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    expires_time?: boolean
    size?: boolean
    filename?: boolean
    type?: boolean
    extension?: boolean
    status?: boolean
    created_at?: boolean
    favorite_id?: boolean
    album_id?: boolean
    gallery_id?: boolean
  }

  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embed_links?: boolean | Picture$embed_linksArgs<ExtArgs>
    favorite?: boolean | Picture$favoriteArgs<ExtArgs>
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
    album?: boolean | Picture$albumArgs<ExtArgs>
  }


  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      embed_links: Prisma.$EmbedLinksPayload<ExtArgs> | null
      favorite: Prisma.$FavoritePayload<ExtArgs> | null
      gallery: Prisma.$GalleryPayload<ExtArgs>
      album: Prisma.$AlbumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      link: string
      expires_time: Prisma.JsonValue
      size: number
      filename: string
      type: $Enums.PictureType
      extension: string
      status: $Enums.PictureStatus
      created_at: bigint
      favorite_id: string | null
      album_id: string | null
      gallery_id: string
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }


  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PictureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Picture that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PictureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PictureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
    **/
    create<T extends PictureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PictureCreateArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pictures.
     *     @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     *     @example
     *     // Create many Pictures
     *     const picture = await prisma.picture.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PictureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
    **/
    delete<T extends PictureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PictureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PictureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PictureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
    **/
    upsert<T extends PictureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>
    ): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    embed_links<T extends Picture$embed_linksArgs<ExtArgs> = {}>(args?: Subset<T, Picture$embed_linksArgs<ExtArgs>>): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    favorite<T extends Picture$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, Picture$favoriteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    gallery<T extends GalleryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalleryDefaultArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    album<T extends Picture$albumArgs<ExtArgs> = {}>(args?: Subset<T, Picture$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Picture model
   */ 
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'String'>
    readonly title: FieldRef<"Picture", 'String'>
    readonly description: FieldRef<"Picture", 'String'>
    readonly link: FieldRef<"Picture", 'String'>
    readonly expires_time: FieldRef<"Picture", 'Json'>
    readonly size: FieldRef<"Picture", 'Int'>
    readonly filename: FieldRef<"Picture", 'String'>
    readonly type: FieldRef<"Picture", 'PictureType'>
    readonly extension: FieldRef<"Picture", 'String'>
    readonly status: FieldRef<"Picture", 'PictureStatus'>
    readonly created_at: FieldRef<"Picture", 'BigInt'>
    readonly favorite_id: FieldRef<"Picture", 'String'>
    readonly album_id: FieldRef<"Picture", 'String'>
    readonly gallery_id: FieldRef<"Picture", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationAndSearchRelevanceInput | PictureOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }


  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
  }


  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }


  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }


  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
  }


  /**
   * Picture.embed_links
   */
  export type Picture$embed_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    where?: EmbedLinksWhereInput
  }


  /**
   * Picture.favorite
   */
  export type Picture$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
  }


  /**
   * Picture.album
   */
  export type Picture$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }


  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
  }



  /**
   * Model EmbedLinks
   */

  export type AggregateEmbedLinks = {
    _count: EmbedLinksCountAggregateOutputType | null
    _min: EmbedLinksMinAggregateOutputType | null
    _max: EmbedLinksMaxAggregateOutputType | null
  }

  export type EmbedLinksMinAggregateOutputType = {
    id: string | null
    picture_id: string | null
  }

  export type EmbedLinksMaxAggregateOutputType = {
    id: string | null
    picture_id: string | null
  }

  export type EmbedLinksCountAggregateOutputType = {
    id: number
    html_links: number
    direct_links: number
    markdown_links: number
    picture_id: number
    _all: number
  }


  export type EmbedLinksMinAggregateInputType = {
    id?: true
    picture_id?: true
  }

  export type EmbedLinksMaxAggregateInputType = {
    id?: true
    picture_id?: true
  }

  export type EmbedLinksCountAggregateInputType = {
    id?: true
    html_links?: true
    direct_links?: true
    markdown_links?: true
    picture_id?: true
    _all?: true
  }

  export type EmbedLinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbedLinks to aggregate.
     */
    where?: EmbedLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbedLinks to fetch.
     */
    orderBy?: EmbedLinksOrderByWithRelationAndSearchRelevanceInput | EmbedLinksOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbedLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbedLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmbedLinks
    **/
    _count?: true | EmbedLinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbedLinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbedLinksMaxAggregateInputType
  }

  export type GetEmbedLinksAggregateType<T extends EmbedLinksAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbedLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbedLinks[P]>
      : GetScalarType<T[P], AggregateEmbedLinks[P]>
  }




  export type EmbedLinksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbedLinksWhereInput
    orderBy?: EmbedLinksOrderByWithAggregationInput | EmbedLinksOrderByWithAggregationInput[]
    by: EmbedLinksScalarFieldEnum[] | EmbedLinksScalarFieldEnum
    having?: EmbedLinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbedLinksCountAggregateInputType | true
    _min?: EmbedLinksMinAggregateInputType
    _max?: EmbedLinksMaxAggregateInputType
  }

  export type EmbedLinksGroupByOutputType = {
    id: string
    html_links: JsonValue
    direct_links: JsonValue
    markdown_links: JsonValue
    picture_id: string
    _count: EmbedLinksCountAggregateOutputType | null
    _min: EmbedLinksMinAggregateOutputType | null
    _max: EmbedLinksMaxAggregateOutputType | null
  }

  type GetEmbedLinksGroupByPayload<T extends EmbedLinksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbedLinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbedLinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbedLinksGroupByOutputType[P]>
            : GetScalarType<T[P], EmbedLinksGroupByOutputType[P]>
        }
      >
    >


  export type EmbedLinksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    html_links?: boolean
    direct_links?: boolean
    markdown_links?: boolean
    picture_id?: boolean
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedLinks"]>

  export type EmbedLinksSelectScalar = {
    id?: boolean
    html_links?: boolean
    direct_links?: boolean
    markdown_links?: boolean
    picture_id?: boolean
  }

  export type EmbedLinksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }


  export type $EmbedLinksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmbedLinks"
    objects: {
      picture: Prisma.$PicturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      html_links: Prisma.JsonValue
      direct_links: Prisma.JsonValue
      markdown_links: Prisma.JsonValue
      picture_id: string
    }, ExtArgs["result"]["embedLinks"]>
    composites: {}
  }


  type EmbedLinksGetPayload<S extends boolean | null | undefined | EmbedLinksDefaultArgs> = $Result.GetResult<Prisma.$EmbedLinksPayload, S>

  type EmbedLinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmbedLinksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmbedLinksCountAggregateInputType | true
    }

  export interface EmbedLinksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmbedLinks'], meta: { name: 'EmbedLinks' } }
    /**
     * Find zero or one EmbedLinks that matches the filter.
     * @param {EmbedLinksFindUniqueArgs} args - Arguments to find a EmbedLinks
     * @example
     * // Get one EmbedLinks
     * const embedLinks = await prisma.embedLinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmbedLinksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmbedLinksFindUniqueArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EmbedLinks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmbedLinksFindUniqueOrThrowArgs} args - Arguments to find a EmbedLinks
     * @example
     * // Get one EmbedLinks
     * const embedLinks = await prisma.embedLinks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmbedLinksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmbedLinksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EmbedLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksFindFirstArgs} args - Arguments to find a EmbedLinks
     * @example
     * // Get one EmbedLinks
     * const embedLinks = await prisma.embedLinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmbedLinksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmbedLinksFindFirstArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EmbedLinks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksFindFirstOrThrowArgs} args - Arguments to find a EmbedLinks
     * @example
     * // Get one EmbedLinks
     * const embedLinks = await prisma.embedLinks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmbedLinksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmbedLinksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EmbedLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmbedLinks
     * const embedLinks = await prisma.embedLinks.findMany()
     * 
     * // Get first 10 EmbedLinks
     * const embedLinks = await prisma.embedLinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embedLinksWithIdOnly = await prisma.embedLinks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmbedLinksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmbedLinksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EmbedLinks.
     * @param {EmbedLinksCreateArgs} args - Arguments to create a EmbedLinks.
     * @example
     * // Create one EmbedLinks
     * const EmbedLinks = await prisma.embedLinks.create({
     *   data: {
     *     // ... data to create a EmbedLinks
     *   }
     * })
     * 
    **/
    create<T extends EmbedLinksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmbedLinksCreateArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EmbedLinks.
     *     @param {EmbedLinksCreateManyArgs} args - Arguments to create many EmbedLinks.
     *     @example
     *     // Create many EmbedLinks
     *     const embedLinks = await prisma.embedLinks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmbedLinksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmbedLinksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmbedLinks.
     * @param {EmbedLinksDeleteArgs} args - Arguments to delete one EmbedLinks.
     * @example
     * // Delete one EmbedLinks
     * const EmbedLinks = await prisma.embedLinks.delete({
     *   where: {
     *     // ... filter to delete one EmbedLinks
     *   }
     * })
     * 
    **/
    delete<T extends EmbedLinksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmbedLinksDeleteArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EmbedLinks.
     * @param {EmbedLinksUpdateArgs} args - Arguments to update one EmbedLinks.
     * @example
     * // Update one EmbedLinks
     * const embedLinks = await prisma.embedLinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmbedLinksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmbedLinksUpdateArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EmbedLinks.
     * @param {EmbedLinksDeleteManyArgs} args - Arguments to filter EmbedLinks to delete.
     * @example
     * // Delete a few EmbedLinks
     * const { count } = await prisma.embedLinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmbedLinksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmbedLinksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbedLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmbedLinks
     * const embedLinks = await prisma.embedLinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmbedLinksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmbedLinksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmbedLinks.
     * @param {EmbedLinksUpsertArgs} args - Arguments to update or create a EmbedLinks.
     * @example
     * // Update or create a EmbedLinks
     * const embedLinks = await prisma.embedLinks.upsert({
     *   create: {
     *     // ... data to create a EmbedLinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmbedLinks we want to update
     *   }
     * })
    **/
    upsert<T extends EmbedLinksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmbedLinksUpsertArgs<ExtArgs>>
    ): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EmbedLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksCountArgs} args - Arguments to filter EmbedLinks to count.
     * @example
     * // Count the number of EmbedLinks
     * const count = await prisma.embedLinks.count({
     *   where: {
     *     // ... the filter for the EmbedLinks we want to count
     *   }
     * })
    **/
    count<T extends EmbedLinksCountArgs>(
      args?: Subset<T, EmbedLinksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbedLinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmbedLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbedLinksAggregateArgs>(args: Subset<T, EmbedLinksAggregateArgs>): Prisma.PrismaPromise<GetEmbedLinksAggregateType<T>>

    /**
     * Group by EmbedLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedLinksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbedLinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbedLinksGroupByArgs['orderBy'] }
        : { orderBy?: EmbedLinksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbedLinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbedLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmbedLinks model
   */
  readonly fields: EmbedLinksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmbedLinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbedLinksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    picture<T extends PictureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PictureDefaultArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EmbedLinks model
   */ 
  interface EmbedLinksFieldRefs {
    readonly id: FieldRef<"EmbedLinks", 'String'>
    readonly html_links: FieldRef<"EmbedLinks", 'Json'>
    readonly direct_links: FieldRef<"EmbedLinks", 'Json'>
    readonly markdown_links: FieldRef<"EmbedLinks", 'Json'>
    readonly picture_id: FieldRef<"EmbedLinks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EmbedLinks findUnique
   */
  export type EmbedLinksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * Filter, which EmbedLinks to fetch.
     */
    where: EmbedLinksWhereUniqueInput
  }


  /**
   * EmbedLinks findUniqueOrThrow
   */
  export type EmbedLinksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * Filter, which EmbedLinks to fetch.
     */
    where: EmbedLinksWhereUniqueInput
  }


  /**
   * EmbedLinks findFirst
   */
  export type EmbedLinksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * Filter, which EmbedLinks to fetch.
     */
    where?: EmbedLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbedLinks to fetch.
     */
    orderBy?: EmbedLinksOrderByWithRelationAndSearchRelevanceInput | EmbedLinksOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbedLinks.
     */
    cursor?: EmbedLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbedLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbedLinks.
     */
    distinct?: EmbedLinksScalarFieldEnum | EmbedLinksScalarFieldEnum[]
  }


  /**
   * EmbedLinks findFirstOrThrow
   */
  export type EmbedLinksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * Filter, which EmbedLinks to fetch.
     */
    where?: EmbedLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbedLinks to fetch.
     */
    orderBy?: EmbedLinksOrderByWithRelationAndSearchRelevanceInput | EmbedLinksOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbedLinks.
     */
    cursor?: EmbedLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbedLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbedLinks.
     */
    distinct?: EmbedLinksScalarFieldEnum | EmbedLinksScalarFieldEnum[]
  }


  /**
   * EmbedLinks findMany
   */
  export type EmbedLinksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * Filter, which EmbedLinks to fetch.
     */
    where?: EmbedLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbedLinks to fetch.
     */
    orderBy?: EmbedLinksOrderByWithRelationAndSearchRelevanceInput | EmbedLinksOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmbedLinks.
     */
    cursor?: EmbedLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbedLinks.
     */
    skip?: number
    distinct?: EmbedLinksScalarFieldEnum | EmbedLinksScalarFieldEnum[]
  }


  /**
   * EmbedLinks create
   */
  export type EmbedLinksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * The data needed to create a EmbedLinks.
     */
    data: XOR<EmbedLinksCreateInput, EmbedLinksUncheckedCreateInput>
  }


  /**
   * EmbedLinks createMany
   */
  export type EmbedLinksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmbedLinks.
     */
    data: EmbedLinksCreateManyInput | EmbedLinksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EmbedLinks update
   */
  export type EmbedLinksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * The data needed to update a EmbedLinks.
     */
    data: XOR<EmbedLinksUpdateInput, EmbedLinksUncheckedUpdateInput>
    /**
     * Choose, which EmbedLinks to update.
     */
    where: EmbedLinksWhereUniqueInput
  }


  /**
   * EmbedLinks updateMany
   */
  export type EmbedLinksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmbedLinks.
     */
    data: XOR<EmbedLinksUpdateManyMutationInput, EmbedLinksUncheckedUpdateManyInput>
    /**
     * Filter which EmbedLinks to update
     */
    where?: EmbedLinksWhereInput
  }


  /**
   * EmbedLinks upsert
   */
  export type EmbedLinksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * The filter to search for the EmbedLinks to update in case it exists.
     */
    where: EmbedLinksWhereUniqueInput
    /**
     * In case the EmbedLinks found by the `where` argument doesn't exist, create a new EmbedLinks with this data.
     */
    create: XOR<EmbedLinksCreateInput, EmbedLinksUncheckedCreateInput>
    /**
     * In case the EmbedLinks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbedLinksUpdateInput, EmbedLinksUncheckedUpdateInput>
  }


  /**
   * EmbedLinks delete
   */
  export type EmbedLinksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
    /**
     * Filter which EmbedLinks to delete.
     */
    where: EmbedLinksWhereUniqueInput
  }


  /**
   * EmbedLinks deleteMany
   */
  export type EmbedLinksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbedLinks to delete
     */
    where?: EmbedLinksWhereInput
  }


  /**
   * EmbedLinks without action
   */
  export type EmbedLinksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbedLinks
     */
    select?: EmbedLinksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmbedLinksInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    origin_code: 'origin_code',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    type: 'type',
    bio: 'bio',
    is_member: 'is_member',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PaymentsHistoryScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    interval_count: 'interval_count',
    status: 'status',
    amount: 'amount',
    order_id: 'order_id',
    order_date: 'order_date',
    user_id: 'user_id'
  };

  export type PaymentsHistoryScalarFieldEnum = (typeof PaymentsHistoryScalarFieldEnum)[keyof typeof PaymentsHistoryScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    start_date: 'start_date',
    end_date: 'end_date',
    next_payment_date: 'next_payment_date',
    interval_count: 'interval_count',
    payment_id: 'payment_id',
    interval: 'interval',
    status: 'status',
    plan: 'plan',
    user_id: 'user_id'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const ClientKeyScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    client_secret: 'client_secret',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type ClientKeyScalarFieldEnum = (typeof ClientKeyScalarFieldEnum)[keyof typeof ClientKeyScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    total: 'total',
    user_id: 'user_id'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    user_id: 'user_id'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    user_id: 'user_id'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    link: 'link',
    expires_time: 'expires_time',
    size: 'size',
    filename: 'filename',
    type: 'type',
    extension: 'extension',
    status: 'status',
    created_at: 'created_at',
    favorite_id: 'favorite_id',
    album_id: 'album_id',
    gallery_id: 'gallery_id'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const EmbedLinksScalarFieldEnum: {
    id: 'id',
    html_links: 'html_links',
    direct_links: 'direct_links',
    markdown_links: 'markdown_links',
    picture_id: 'picture_id'
  };

  export type EmbedLinksScalarFieldEnum = (typeof EmbedLinksScalarFieldEnum)[keyof typeof EmbedLinksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    bio: 'bio'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const PaymentsHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    user_id: 'user_id'
  };

  export type PaymentsHistoryOrderByRelevanceFieldEnum = (typeof PaymentsHistoryOrderByRelevanceFieldEnum)[keyof typeof PaymentsHistoryOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    payment_id: 'payment_id',
    interval: 'interval',
    user_id: 'user_id'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const ClientKeyOrderByRelevanceFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    client_secret: 'client_secret',
    user_id: 'user_id'
  };

  export type ClientKeyOrderByRelevanceFieldEnum = (typeof ClientKeyOrderByRelevanceFieldEnum)[keyof typeof ClientKeyOrderByRelevanceFieldEnum]


  export const FavoriteOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type FavoriteOrderByRelevanceFieldEnum = (typeof FavoriteOrderByRelevanceFieldEnum)[keyof typeof FavoriteOrderByRelevanceFieldEnum]


  export const GalleryOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type GalleryOrderByRelevanceFieldEnum = (typeof GalleryOrderByRelevanceFieldEnum)[keyof typeof GalleryOrderByRelevanceFieldEnum]


  export const AlbumOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    user_id: 'user_id'
  };

  export type AlbumOrderByRelevanceFieldEnum = (typeof AlbumOrderByRelevanceFieldEnum)[keyof typeof AlbumOrderByRelevanceFieldEnum]


  export const PictureOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    link: 'link',
    filename: 'filename',
    extension: 'extension',
    favorite_id: 'favorite_id',
    album_id: 'album_id',
    gallery_id: 'gallery_id'
  };

  export type PictureOrderByRelevanceFieldEnum = (typeof PictureOrderByRelevanceFieldEnum)[keyof typeof PictureOrderByRelevanceFieldEnum]


  export const EmbedLinksOrderByRelevanceFieldEnum: {
    id: 'id',
    picture_id: 'picture_id'
  };

  export type EmbedLinksOrderByRelevanceFieldEnum = (typeof EmbedLinksOrderByRelevanceFieldEnum)[keyof typeof EmbedLinksOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserPlan'
   */
  export type EnumUserPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPlan'>
    


  /**
   * Reference to a field of type 'UserPlan[]'
   */
  export type ListEnumUserPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPlan[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PictureType'
   */
  export type EnumPictureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PictureType'>
    


  /**
   * Reference to a field of type 'PictureType[]'
   */
  export type ListEnumPictureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PictureType[]'>
    


  /**
   * Reference to a field of type 'PictureStatus'
   */
  export type EnumPictureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PictureStatus'>
    


  /**
   * Reference to a field of type 'PictureStatus[]'
   */
  export type ListEnumPictureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PictureStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    origin_code?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    bio?: StringNullableFilter<"User"> | string | null
    is_member?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    payment_history?: PaymentsHistoryListRelationFilter
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
    gallery?: XOR<GalleryNullableRelationFilter, GalleryWhereInput> | null
    client_key?: XOR<ClientKeyNullableRelationFilter, ClientKeyWhereInput> | null
    favorite?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    album?: AlbumListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    origin_code?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrder
    type?: SortOrder
    bio?: SortOrderInput | SortOrder
    is_member?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_history?: PaymentsHistoryOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationAndSearchRelevanceInput
    gallery?: GalleryOrderByWithRelationAndSearchRelevanceInput
    client_key?: ClientKeyOrderByWithRelationAndSearchRelevanceInput
    favorite?: FavoriteOrderByWithRelationAndSearchRelevanceInput
    album?: AlbumOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    origin_code?: number
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    bio?: StringNullableFilter<"User"> | string | null
    is_member?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    payment_history?: PaymentsHistoryListRelationFilter
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
    gallery?: XOR<GalleryNullableRelationFilter, GalleryWhereInput> | null
    client_key?: XOR<ClientKeyNullableRelationFilter, ClientKeyWhereInput> | null
    favorite?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    album?: AlbumListRelationFilter
  }, "id" | "origin_code" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    origin_code?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrder
    type?: SortOrder
    bio?: SortOrderInput | SortOrder
    is_member?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    origin_code?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_member?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PaymentsHistoryWhereInput = {
    AND?: PaymentsHistoryWhereInput | PaymentsHistoryWhereInput[]
    OR?: PaymentsHistoryWhereInput[]
    NOT?: PaymentsHistoryWhereInput | PaymentsHistoryWhereInput[]
    id?: StringFilter<"PaymentsHistory"> | string
    plan?: EnumUserPlanFilter<"PaymentsHistory"> | $Enums.UserPlan
    interval_count?: IntFilter<"PaymentsHistory"> | number
    status?: EnumOrderStatusFilter<"PaymentsHistory"> | $Enums.OrderStatus
    amount?: JsonFilter<"PaymentsHistory">
    order_id?: StringFilter<"PaymentsHistory"> | string
    order_date?: BigIntFilter<"PaymentsHistory"> | bigint | number
    user_id?: StringFilter<"PaymentsHistory"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PaymentsHistoryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    plan?: SortOrder
    interval_count?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    order_id?: SortOrder
    order_date?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: PaymentsHistoryOrderByRelevanceInput
  }

  export type PaymentsHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_id?: string
    AND?: PaymentsHistoryWhereInput | PaymentsHistoryWhereInput[]
    OR?: PaymentsHistoryWhereInput[]
    NOT?: PaymentsHistoryWhereInput | PaymentsHistoryWhereInput[]
    plan?: EnumUserPlanFilter<"PaymentsHistory"> | $Enums.UserPlan
    interval_count?: IntFilter<"PaymentsHistory"> | number
    status?: EnumOrderStatusFilter<"PaymentsHistory"> | $Enums.OrderStatus
    amount?: JsonFilter<"PaymentsHistory">
    order_date?: BigIntFilter<"PaymentsHistory"> | bigint | number
    user_id?: StringFilter<"PaymentsHistory"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "order_id">

  export type PaymentsHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    interval_count?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    order_id?: SortOrder
    order_date?: SortOrder
    user_id?: SortOrder
    _count?: PaymentsHistoryCountOrderByAggregateInput
    _avg?: PaymentsHistoryAvgOrderByAggregateInput
    _max?: PaymentsHistoryMaxOrderByAggregateInput
    _min?: PaymentsHistoryMinOrderByAggregateInput
    _sum?: PaymentsHistorySumOrderByAggregateInput
  }

  export type PaymentsHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentsHistoryScalarWhereWithAggregatesInput | PaymentsHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentsHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentsHistoryScalarWhereWithAggregatesInput | PaymentsHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentsHistory"> | string
    plan?: EnumUserPlanWithAggregatesFilter<"PaymentsHistory"> | $Enums.UserPlan
    interval_count?: IntWithAggregatesFilter<"PaymentsHistory"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"PaymentsHistory"> | $Enums.OrderStatus
    amount?: JsonWithAggregatesFilter<"PaymentsHistory">
    order_id?: StringWithAggregatesFilter<"PaymentsHistory"> | string
    order_date?: BigIntWithAggregatesFilter<"PaymentsHistory"> | bigint | number
    user_id?: StringWithAggregatesFilter<"PaymentsHistory"> | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    start_date?: BigIntNullableFilter<"Subscription"> | bigint | number | null
    end_date?: BigIntNullableFilter<"Subscription"> | bigint | number | null
    next_payment_date?: BigIntNullableFilter<"Subscription"> | bigint | number | null
    interval_count?: IntNullableFilter<"Subscription"> | number | null
    payment_id?: StringNullableFilter<"Subscription"> | string | null
    interval?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFilter<"Subscription"> | $Enums.UserPlan
    user_id?: StringFilter<"Subscription"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    next_payment_date?: SortOrderInput | SortOrder
    interval_count?: SortOrderInput | SortOrder
    payment_id?: SortOrderInput | SortOrder
    interval?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    start_date?: BigIntNullableFilter<"Subscription"> | bigint | number | null
    end_date?: BigIntNullableFilter<"Subscription"> | bigint | number | null
    next_payment_date?: BigIntNullableFilter<"Subscription"> | bigint | number | null
    interval_count?: IntNullableFilter<"Subscription"> | number | null
    payment_id?: StringNullableFilter<"Subscription"> | string | null
    interval?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFilter<"Subscription"> | $Enums.UserPlan
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    next_payment_date?: SortOrderInput | SortOrder
    interval_count?: SortOrderInput | SortOrder
    payment_id?: SortOrderInput | SortOrder
    interval?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    user_id?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    start_date?: BigIntNullableWithAggregatesFilter<"Subscription"> | bigint | number | null
    end_date?: BigIntNullableWithAggregatesFilter<"Subscription"> | bigint | number | null
    next_payment_date?: BigIntNullableWithAggregatesFilter<"Subscription"> | bigint | number | null
    interval_count?: IntNullableWithAggregatesFilter<"Subscription"> | number | null
    payment_id?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    interval?: StringWithAggregatesFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    plan?: EnumUserPlanWithAggregatesFilter<"Subscription"> | $Enums.UserPlan
    user_id?: StringWithAggregatesFilter<"Subscription"> | string
  }

  export type ClientKeyWhereInput = {
    AND?: ClientKeyWhereInput | ClientKeyWhereInput[]
    OR?: ClientKeyWhereInput[]
    NOT?: ClientKeyWhereInput | ClientKeyWhereInput[]
    id?: StringFilter<"ClientKey"> | string
    client_id?: StringFilter<"ClientKey"> | string
    client_secret?: StringFilter<"ClientKey"> | string
    created_at?: DateTimeFilter<"ClientKey"> | Date | string
    updated_at?: DateTimeFilter<"ClientKey"> | Date | string
    user_id?: StringFilter<"ClientKey"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ClientKeyOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ClientKeyOrderByRelevanceInput
  }

  export type ClientKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: ClientKeyWhereInput | ClientKeyWhereInput[]
    OR?: ClientKeyWhereInput[]
    NOT?: ClientKeyWhereInput | ClientKeyWhereInput[]
    client_id?: StringFilter<"ClientKey"> | string
    client_secret?: StringFilter<"ClientKey"> | string
    created_at?: DateTimeFilter<"ClientKey"> | Date | string
    updated_at?: DateTimeFilter<"ClientKey"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type ClientKeyOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: ClientKeyCountOrderByAggregateInput
    _max?: ClientKeyMaxOrderByAggregateInput
    _min?: ClientKeyMinOrderByAggregateInput
  }

  export type ClientKeyScalarWhereWithAggregatesInput = {
    AND?: ClientKeyScalarWhereWithAggregatesInput | ClientKeyScalarWhereWithAggregatesInput[]
    OR?: ClientKeyScalarWhereWithAggregatesInput[]
    NOT?: ClientKeyScalarWhereWithAggregatesInput | ClientKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientKey"> | string
    client_id?: StringWithAggregatesFilter<"ClientKey"> | string
    client_secret?: StringWithAggregatesFilter<"ClientKey"> | string
    created_at?: DateTimeWithAggregatesFilter<"ClientKey"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClientKey"> | Date | string
    user_id?: StringWithAggregatesFilter<"ClientKey"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    total?: IntFilter<"Favorite"> | number
    user_id?: StringFilter<"Favorite"> | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    total?: SortOrder
    user_id?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: FavoriteOrderByRelevanceInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    total?: IntFilter<"Favorite"> | number
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    user_id?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    total?: IntWithAggregatesFilter<"Favorite"> | number
    user_id?: StringWithAggregatesFilter<"Favorite"> | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: StringFilter<"Gallery"> | string
    created_at?: BigIntFilter<"Gallery"> | bigint | number
    user_id?: StringFilter<"Gallery"> | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GalleryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: GalleryOrderByRelevanceInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    created_at?: BigIntFilter<"Gallery"> | bigint | number
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _avg?: GalleryAvgOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
    _sum?: GallerySumOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gallery"> | string
    created_at?: BigIntWithAggregatesFilter<"Gallery"> | bigint | number
    user_id?: StringWithAggregatesFilter<"Gallery"> | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringFilter<"Album"> | string
    thumbnail?: StringFilter<"Album"> | string
    user_id?: StringFilter<"Album"> | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AlbumOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    user_id?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: AlbumOrderByRelevanceInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    description?: StringFilter<"Album"> | string
    thumbnail?: StringFilter<"Album"> | string
    user_id?: StringFilter<"Album"> | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    user_id?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    title?: StringWithAggregatesFilter<"Album"> | string
    description?: StringWithAggregatesFilter<"Album"> | string
    thumbnail?: StringWithAggregatesFilter<"Album"> | string
    user_id?: StringWithAggregatesFilter<"Album"> | string
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: StringFilter<"Picture"> | string
    title?: StringFilter<"Picture"> | string
    description?: StringFilter<"Picture"> | string
    link?: StringFilter<"Picture"> | string
    expires_time?: JsonFilter<"Picture">
    size?: IntFilter<"Picture"> | number
    filename?: StringFilter<"Picture"> | string
    type?: EnumPictureTypeFilter<"Picture"> | $Enums.PictureType
    extension?: StringFilter<"Picture"> | string
    status?: EnumPictureStatusFilter<"Picture"> | $Enums.PictureStatus
    created_at?: BigIntFilter<"Picture"> | bigint | number
    favorite_id?: StringNullableFilter<"Picture"> | string | null
    album_id?: StringNullableFilter<"Picture"> | string | null
    gallery_id?: StringFilter<"Picture"> | string
    embed_links?: XOR<EmbedLinksNullableRelationFilter, EmbedLinksWhereInput> | null
    favorite?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    gallery?: XOR<GalleryRelationFilter, GalleryWhereInput>
    album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
  }

  export type PictureOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    expires_time?: SortOrder
    size?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    extension?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    favorite_id?: SortOrderInput | SortOrder
    album_id?: SortOrderInput | SortOrder
    gallery_id?: SortOrder
    embed_links?: EmbedLinksOrderByWithRelationAndSearchRelevanceInput
    favorite?: FavoriteOrderByWithRelationAndSearchRelevanceInput
    gallery?: GalleryOrderByWithRelationAndSearchRelevanceInput
    album?: AlbumOrderByWithRelationAndSearchRelevanceInput
    _relevance?: PictureOrderByRelevanceInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    title?: StringFilter<"Picture"> | string
    description?: StringFilter<"Picture"> | string
    link?: StringFilter<"Picture"> | string
    expires_time?: JsonFilter<"Picture">
    size?: IntFilter<"Picture"> | number
    filename?: StringFilter<"Picture"> | string
    type?: EnumPictureTypeFilter<"Picture"> | $Enums.PictureType
    extension?: StringFilter<"Picture"> | string
    status?: EnumPictureStatusFilter<"Picture"> | $Enums.PictureStatus
    created_at?: BigIntFilter<"Picture"> | bigint | number
    favorite_id?: StringNullableFilter<"Picture"> | string | null
    album_id?: StringNullableFilter<"Picture"> | string | null
    gallery_id?: StringFilter<"Picture"> | string
    embed_links?: XOR<EmbedLinksNullableRelationFilter, EmbedLinksWhereInput> | null
    favorite?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    gallery?: XOR<GalleryRelationFilter, GalleryWhereInput>
    album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    expires_time?: SortOrder
    size?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    extension?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    favorite_id?: SortOrderInput | SortOrder
    album_id?: SortOrderInput | SortOrder
    gallery_id?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _avg?: PictureAvgOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
    _sum?: PictureSumOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Picture"> | string
    title?: StringWithAggregatesFilter<"Picture"> | string
    description?: StringWithAggregatesFilter<"Picture"> | string
    link?: StringWithAggregatesFilter<"Picture"> | string
    expires_time?: JsonWithAggregatesFilter<"Picture">
    size?: IntWithAggregatesFilter<"Picture"> | number
    filename?: StringWithAggregatesFilter<"Picture"> | string
    type?: EnumPictureTypeWithAggregatesFilter<"Picture"> | $Enums.PictureType
    extension?: StringWithAggregatesFilter<"Picture"> | string
    status?: EnumPictureStatusWithAggregatesFilter<"Picture"> | $Enums.PictureStatus
    created_at?: BigIntWithAggregatesFilter<"Picture"> | bigint | number
    favorite_id?: StringNullableWithAggregatesFilter<"Picture"> | string | null
    album_id?: StringNullableWithAggregatesFilter<"Picture"> | string | null
    gallery_id?: StringWithAggregatesFilter<"Picture"> | string
  }

  export type EmbedLinksWhereInput = {
    AND?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    OR?: EmbedLinksWhereInput[]
    NOT?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    id?: StringFilter<"EmbedLinks"> | string
    html_links?: JsonFilter<"EmbedLinks">
    direct_links?: JsonFilter<"EmbedLinks">
    markdown_links?: JsonFilter<"EmbedLinks">
    picture_id?: StringFilter<"EmbedLinks"> | string
    picture?: XOR<PictureRelationFilter, PictureWhereInput>
  }

  export type EmbedLinksOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    html_links?: SortOrder
    direct_links?: SortOrder
    markdown_links?: SortOrder
    picture_id?: SortOrder
    picture?: PictureOrderByWithRelationAndSearchRelevanceInput
    _relevance?: EmbedLinksOrderByRelevanceInput
  }

  export type EmbedLinksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    picture_id?: string
    AND?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    OR?: EmbedLinksWhereInput[]
    NOT?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    html_links?: JsonFilter<"EmbedLinks">
    direct_links?: JsonFilter<"EmbedLinks">
    markdown_links?: JsonFilter<"EmbedLinks">
    picture?: XOR<PictureRelationFilter, PictureWhereInput>
  }, "id" | "picture_id">

  export type EmbedLinksOrderByWithAggregationInput = {
    id?: SortOrder
    html_links?: SortOrder
    direct_links?: SortOrder
    markdown_links?: SortOrder
    picture_id?: SortOrder
    _count?: EmbedLinksCountOrderByAggregateInput
    _max?: EmbedLinksMaxOrderByAggregateInput
    _min?: EmbedLinksMinOrderByAggregateInput
  }

  export type EmbedLinksScalarWhereWithAggregatesInput = {
    AND?: EmbedLinksScalarWhereWithAggregatesInput | EmbedLinksScalarWhereWithAggregatesInput[]
    OR?: EmbedLinksScalarWhereWithAggregatesInput[]
    NOT?: EmbedLinksScalarWhereWithAggregatesInput | EmbedLinksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmbedLinks"> | string
    html_links?: JsonWithAggregatesFilter<"EmbedLinks">
    direct_links?: JsonWithAggregatesFilter<"EmbedLinks">
    markdown_links?: JsonWithAggregatesFilter<"EmbedLinks">
    picture_id?: StringWithAggregatesFilter<"EmbedLinks"> | string
  }

  export type UserCreateInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    client_key?: ClientKeyCreateNestedOneWithoutUserInput
    favorite?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    client_key?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    favorite?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsHistoryCreateInput = {
    id?: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonNullValueInput | InputJsonValue
    order_id: string
    order_date: bigint | number
    user: UserCreateNestedOneWithoutPayment_historyInput
  }

  export type PaymentsHistoryUncheckedCreateInput = {
    id?: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonNullValueInput | InputJsonValue
    order_id: string
    order_date: bigint | number
    user_id: string
  }

  export type PaymentsHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutPayment_historyNestedInput
  }

  export type PaymentsHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsHistoryCreateManyInput = {
    id?: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonNullValueInput | InputJsonValue
    order_id: string
    order_date: bigint | number
    user_id: string
  }

  export type PaymentsHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentsHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    start_date?: bigint | number | null
    end_date?: bigint | number | null
    next_payment_date?: bigint | number | null
    interval_count?: number | null
    payment_id?: string | null
    interval?: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.UserPlan
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    start_date?: bigint | number | null
    end_date?: bigint | number | null
    next_payment_date?: bigint | number | null
    interval_count?: number | null
    payment_id?: string | null
    interval?: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.UserPlan
    user_id: string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    end_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_payment_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    end_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_payment_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    start_date?: bigint | number | null
    end_date?: bigint | number | null
    next_payment_date?: bigint | number | null
    interval_count?: number | null
    payment_id?: string | null
    interval?: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.UserPlan
    user_id: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    end_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_payment_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    end_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_payment_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClientKeyCreateInput = {
    id?: string
    client_id: string
    client_secret: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutClient_keyInput
  }

  export type ClientKeyUncheckedCreateInput = {
    id?: string
    client_id: string
    client_secret: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type ClientKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClient_keyNestedInput
  }

  export type ClientKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClientKeyCreateManyInput = {
    id?: string
    client_id: string
    client_secret: string
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type ClientKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    id?: string
    total: number
    pictures?: PictureCreateNestedManyWithoutFavoriteInput
    user: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    total: number
    user_id: string
    pictures?: PictureUncheckedCreateNestedManyWithoutFavoriteInput
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUpdateManyWithoutFavoriteNestedInput
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    pictures?: PictureUncheckedUpdateManyWithoutFavoriteNestedInput
  }

  export type FavoriteCreateManyInput = {
    id?: string
    total: number
    user_id: string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCreateInput = {
    id?: string
    created_at: bigint | number
    pictures?: PictureCreateNestedManyWithoutGalleryInput
    user: UserCreateNestedOneWithoutGalleryInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: string
    created_at: bigint | number
    user_id: string
    pictures?: PictureUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    pictures?: PictureUpdateManyWithoutGalleryNestedInput
    user?: UserUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    pictures?: PictureUncheckedUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryCreateManyInput = {
    id?: string
    created_at: bigint | number
    user_id: string
  }

  export type GalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    pictures?: PictureCreateNestedManyWithoutAlbumInput
    user: UserCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    user_id: string
    pictures?: PictureUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    pictures?: PictureUpdateManyWithoutAlbumNestedInput
    user?: UserUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    pictures?: PictureUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    user_id: string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    embed_links?: EmbedLinksCreateNestedOneWithoutPictureInput
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
    album?: AlbumCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    album_id?: string | null
    gallery_id: string
    embed_links?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    embed_links?: EmbedLinksUpdateOneWithoutPictureNestedInput
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
    album?: AlbumUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
    embed_links?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureCreateManyInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    album_id?: string | null
    gallery_id: string
  }

  export type PictureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmbedLinksCreateInput = {
    id?: string
    html_links: JsonNullValueInput | InputJsonValue
    direct_links: JsonNullValueInput | InputJsonValue
    markdown_links: JsonNullValueInput | InputJsonValue
    picture: PictureCreateNestedOneWithoutEmbed_linksInput
  }

  export type EmbedLinksUncheckedCreateInput = {
    id?: string
    html_links: JsonNullValueInput | InputJsonValue
    direct_links: JsonNullValueInput | InputJsonValue
    markdown_links: JsonNullValueInput | InputJsonValue
    picture_id: string
  }

  export type EmbedLinksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    html_links?: JsonNullValueInput | InputJsonValue
    direct_links?: JsonNullValueInput | InputJsonValue
    markdown_links?: JsonNullValueInput | InputJsonValue
    picture?: PictureUpdateOneRequiredWithoutEmbed_linksNestedInput
  }

  export type EmbedLinksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    html_links?: JsonNullValueInput | InputJsonValue
    direct_links?: JsonNullValueInput | InputJsonValue
    markdown_links?: JsonNullValueInput | InputJsonValue
    picture_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmbedLinksCreateManyInput = {
    id?: string
    html_links: JsonNullValueInput | InputJsonValue
    direct_links: JsonNullValueInput | InputJsonValue
    markdown_links: JsonNullValueInput | InputJsonValue
    picture_id: string
  }

  export type EmbedLinksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    html_links?: JsonNullValueInput | InputJsonValue
    direct_links?: JsonNullValueInput | InputJsonValue
    markdown_links?: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    html_links?: JsonNullValueInput | InputJsonValue
    direct_links?: JsonNullValueInput | InputJsonValue
    markdown_links?: JsonNullValueInput | InputJsonValue
    picture_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PaymentsHistoryListRelationFilter = {
    every?: PaymentsHistoryWhereInput
    some?: PaymentsHistoryWhereInput
    none?: PaymentsHistoryWhereInput
  }

  export type SubscriptionNullableRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type GalleryNullableRelationFilter = {
    is?: GalleryWhereInput | null
    isNot?: GalleryWhereInput | null
  }

  export type ClientKeyNullableRelationFilter = {
    is?: ClientKeyWhereInput | null
    isNot?: ClientKeyWhereInput | null
  }

  export type FavoriteNullableRelationFilter = {
    is?: FavoriteWhereInput | null
    isNot?: FavoriteWhereInput | null
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentsHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    origin_code?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    is_member?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    origin_code?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    origin_code?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    is_member?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    origin_code?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    is_member?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    origin_code?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel>
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPlanFilter<$PrismaModel> | $Enums.UserPlan
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentsHistoryOrderByRelevanceInput = {
    fields: PaymentsHistoryOrderByRelevanceFieldEnum | PaymentsHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentsHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    interval_count?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    order_id?: SortOrder
    order_date?: SortOrder
    user_id?: SortOrder
  }

  export type PaymentsHistoryAvgOrderByAggregateInput = {
    interval_count?: SortOrder
    order_date?: SortOrder
  }

  export type PaymentsHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    interval_count?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    order_date?: SortOrder
    user_id?: SortOrder
  }

  export type PaymentsHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    interval_count?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    order_date?: SortOrder
    user_id?: SortOrder
  }

  export type PaymentsHistorySumOrderByAggregateInput = {
    interval_count?: SortOrder
    order_date?: SortOrder
  }

  export type EnumUserPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel>
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPlanWithAggregatesFilter<$PrismaModel> | $Enums.UserPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserPlanFilter<$PrismaModel>
    _max?: NestedEnumUserPlanFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    next_payment_date?: SortOrder
    interval_count?: SortOrder
    payment_id?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    user_id?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    start_date?: SortOrder
    end_date?: SortOrder
    next_payment_date?: SortOrder
    interval_count?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    next_payment_date?: SortOrder
    interval_count?: SortOrder
    payment_id?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    user_id?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    next_payment_date?: SortOrder
    interval_count?: SortOrder
    payment_id?: SortOrder
    interval?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    user_id?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    start_date?: SortOrder
    end_date?: SortOrder
    next_payment_date?: SortOrder
    interval_count?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type ClientKeyOrderByRelevanceInput = {
    fields: ClientKeyOrderByRelevanceFieldEnum | ClientKeyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientKeyCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ClientKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ClientKeyMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelevanceInput = {
    fields: FavoriteOrderByRelevanceFieldEnum | FavoriteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    user_id?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    user_id?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    user_id?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type GalleryOrderByRelevanceInput = {
    fields: GalleryOrderByRelevanceFieldEnum | GalleryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type GalleryAvgOrderByAggregateInput = {
    created_at?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type GallerySumOrderByAggregateInput = {
    created_at?: SortOrder
  }

  export type AlbumOrderByRelevanceInput = {
    fields: AlbumOrderByRelevanceFieldEnum | AlbumOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    user_id?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    user_id?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    user_id?: SortOrder
  }

  export type EnumPictureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeFilter<$PrismaModel> | $Enums.PictureType
  }

  export type EnumPictureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureStatus | EnumPictureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureStatusFilter<$PrismaModel> | $Enums.PictureStatus
  }

  export type EmbedLinksNullableRelationFilter = {
    is?: EmbedLinksWhereInput | null
    isNot?: EmbedLinksWhereInput | null
  }

  export type GalleryRelationFilter = {
    is?: GalleryWhereInput
    isNot?: GalleryWhereInput
  }

  export type AlbumNullableRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type PictureOrderByRelevanceInput = {
    fields: PictureOrderByRelevanceFieldEnum | PictureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    expires_time?: SortOrder
    size?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    extension?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    favorite_id?: SortOrder
    album_id?: SortOrder
    gallery_id?: SortOrder
  }

  export type PictureAvgOrderByAggregateInput = {
    size?: SortOrder
    created_at?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    size?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    extension?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    favorite_id?: SortOrder
    album_id?: SortOrder
    gallery_id?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    size?: SortOrder
    filename?: SortOrder
    type?: SortOrder
    extension?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    favorite_id?: SortOrder
    album_id?: SortOrder
    gallery_id?: SortOrder
  }

  export type PictureSumOrderByAggregateInput = {
    size?: SortOrder
    created_at?: SortOrder
  }

  export type EnumPictureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeWithAggregatesFilter<$PrismaModel> | $Enums.PictureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPictureTypeFilter<$PrismaModel>
    _max?: NestedEnumPictureTypeFilter<$PrismaModel>
  }

  export type EnumPictureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureStatus | EnumPictureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureStatusWithAggregatesFilter<$PrismaModel> | $Enums.PictureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPictureStatusFilter<$PrismaModel>
    _max?: NestedEnumPictureStatusFilter<$PrismaModel>
  }

  export type PictureRelationFilter = {
    is?: PictureWhereInput
    isNot?: PictureWhereInput
  }

  export type EmbedLinksOrderByRelevanceInput = {
    fields: EmbedLinksOrderByRelevanceFieldEnum | EmbedLinksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmbedLinksCountOrderByAggregateInput = {
    id?: SortOrder
    html_links?: SortOrder
    direct_links?: SortOrder
    markdown_links?: SortOrder
    picture_id?: SortOrder
  }

  export type EmbedLinksMaxOrderByAggregateInput = {
    id?: SortOrder
    picture_id?: SortOrder
  }

  export type EmbedLinksMinOrderByAggregateInput = {
    id?: SortOrder
    picture_id?: SortOrder
  }

  export type PaymentsHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsHistoryCreateWithoutUserInput, PaymentsHistoryUncheckedCreateWithoutUserInput> | PaymentsHistoryCreateWithoutUserInput[] | PaymentsHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsHistoryCreateOrConnectWithoutUserInput | PaymentsHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsHistoryCreateManyUserInputEnvelope
    connect?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type GalleryCreateNestedOneWithoutUserInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    connect?: GalleryWhereUniqueInput
  }

  export type ClientKeyCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    connect?: ClientKeyWhereUniqueInput
  }

  export type FavoriteCreateNestedOneWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput
    connect?: FavoriteWhereUniqueInput
  }

  export type AlbumCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsHistoryCreateWithoutUserInput, PaymentsHistoryUncheckedCreateWithoutUserInput> | PaymentsHistoryCreateWithoutUserInput[] | PaymentsHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsHistoryCreateOrConnectWithoutUserInput | PaymentsHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsHistoryCreateManyUserInputEnvelope
    connect?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type GalleryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    connect?: GalleryWhereUniqueInput
  }

  export type ClientKeyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    connect?: ClientKeyWhereUniqueInput
  }

  export type FavoriteUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput
    connect?: FavoriteWhereUniqueInput
  }

  export type AlbumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaymentsHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsHistoryCreateWithoutUserInput, PaymentsHistoryUncheckedCreateWithoutUserInput> | PaymentsHistoryCreateWithoutUserInput[] | PaymentsHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsHistoryCreateOrConnectWithoutUserInput | PaymentsHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentsHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsHistoryCreateManyUserInputEnvelope
    set?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    disconnect?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    delete?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    connect?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    update?: PaymentsHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentsHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsHistoryUpdateManyWithWhereWithoutUserInput | PaymentsHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsHistoryScalarWhereInput | PaymentsHistoryScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type GalleryUpdateOneWithoutUserNestedInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    upsert?: GalleryUpsertWithoutUserInput
    disconnect?: GalleryWhereInput | boolean
    delete?: GalleryWhereInput | boolean
    connect?: GalleryWhereUniqueInput
    update?: XOR<XOR<GalleryUpdateToOneWithWhereWithoutUserInput, GalleryUpdateWithoutUserInput>, GalleryUncheckedUpdateWithoutUserInput>
  }

  export type ClientKeyUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    upsert?: ClientKeyUpsertWithoutUserInput
    disconnect?: ClientKeyWhereInput | boolean
    delete?: ClientKeyWhereInput | boolean
    connect?: ClientKeyWhereUniqueInput
    update?: XOR<XOR<ClientKeyUpdateToOneWithWhereWithoutUserInput, ClientKeyUpdateWithoutUserInput>, ClientKeyUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateOneWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput
    upsert?: FavoriteUpsertWithoutUserInput
    disconnect?: FavoriteWhereInput | boolean
    delete?: FavoriteWhereInput | boolean
    connect?: FavoriteWhereUniqueInput
    update?: XOR<XOR<FavoriteUpdateToOneWithWhereWithoutUserInput, FavoriteUpdateWithoutUserInput>, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type AlbumUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserInput | AlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserInput | AlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserInput | AlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsHistoryCreateWithoutUserInput, PaymentsHistoryUncheckedCreateWithoutUserInput> | PaymentsHistoryCreateWithoutUserInput[] | PaymentsHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsHistoryCreateOrConnectWithoutUserInput | PaymentsHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentsHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsHistoryCreateManyUserInputEnvelope
    set?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    disconnect?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    delete?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    connect?: PaymentsHistoryWhereUniqueInput | PaymentsHistoryWhereUniqueInput[]
    update?: PaymentsHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentsHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsHistoryUpdateManyWithWhereWithoutUserInput | PaymentsHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsHistoryScalarWhereInput | PaymentsHistoryScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type GalleryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    upsert?: GalleryUpsertWithoutUserInput
    disconnect?: GalleryWhereInput | boolean
    delete?: GalleryWhereInput | boolean
    connect?: GalleryWhereUniqueInput
    update?: XOR<XOR<GalleryUpdateToOneWithWhereWithoutUserInput, GalleryUpdateWithoutUserInput>, GalleryUncheckedUpdateWithoutUserInput>
  }

  export type ClientKeyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    upsert?: ClientKeyUpsertWithoutUserInput
    disconnect?: ClientKeyWhereInput | boolean
    delete?: ClientKeyWhereInput | boolean
    connect?: ClientKeyWhereUniqueInput
    update?: XOR<XOR<ClientKeyUpdateToOneWithWhereWithoutUserInput, ClientKeyUpdateWithoutUserInput>, ClientKeyUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput
    upsert?: FavoriteUpsertWithoutUserInput
    disconnect?: FavoriteWhereInput | boolean
    delete?: FavoriteWhereInput | boolean
    connect?: FavoriteWhereUniqueInput
    update?: XOR<XOR<FavoriteUpdateToOneWithWhereWithoutUserInput, FavoriteUpdateWithoutUserInput>, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type AlbumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserInput | AlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserInput | AlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserInput | AlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPayment_historyInput = {
    create?: XOR<UserCreateWithoutPayment_historyInput, UserUncheckedCreateWithoutPayment_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayment_historyInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUserPlanFieldUpdateOperationsInput = {
    set?: $Enums.UserPlan
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutPayment_historyNestedInput = {
    create?: XOR<UserCreateWithoutPayment_historyInput, UserUncheckedCreateWithoutPayment_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayment_historyInput
    upsert?: UserUpsertWithoutPayment_historyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayment_historyInput, UserUpdateWithoutPayment_historyInput>, UserUncheckedUpdateWithoutPayment_historyInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutClient_keyInput = {
    create?: XOR<UserCreateWithoutClient_keyInput, UserUncheckedCreateWithoutClient_keyInput>
    connectOrCreate?: UserCreateOrConnectWithoutClient_keyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutClient_keyNestedInput = {
    create?: XOR<UserCreateWithoutClient_keyInput, UserUncheckedCreateWithoutClient_keyInput>
    connectOrCreate?: UserCreateOrConnectWithoutClient_keyInput
    upsert?: UserUpsertWithoutClient_keyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClient_keyInput, UserUpdateWithoutClient_keyInput>, UserUncheckedUpdateWithoutClient_keyInput>
  }

  export type PictureCreateNestedManyWithoutFavoriteInput = {
    create?: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput> | PictureCreateWithoutFavoriteInput[] | PictureUncheckedCreateWithoutFavoriteInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutFavoriteInput | PictureCreateOrConnectWithoutFavoriteInput[]
    createMany?: PictureCreateManyFavoriteInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type PictureUncheckedCreateNestedManyWithoutFavoriteInput = {
    create?: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput> | PictureCreateWithoutFavoriteInput[] | PictureUncheckedCreateWithoutFavoriteInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutFavoriteInput | PictureCreateOrConnectWithoutFavoriteInput[]
    createMany?: PictureCreateManyFavoriteInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PictureUpdateManyWithoutFavoriteNestedInput = {
    create?: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput> | PictureCreateWithoutFavoriteInput[] | PictureUncheckedCreateWithoutFavoriteInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutFavoriteInput | PictureCreateOrConnectWithoutFavoriteInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutFavoriteInput | PictureUpsertWithWhereUniqueWithoutFavoriteInput[]
    createMany?: PictureCreateManyFavoriteInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutFavoriteInput | PictureUpdateWithWhereUniqueWithoutFavoriteInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutFavoriteInput | PictureUpdateManyWithWhereWithoutFavoriteInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    upsert?: UserUpsertWithoutFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteInput, UserUpdateWithoutFavoriteInput>, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type PictureUncheckedUpdateManyWithoutFavoriteNestedInput = {
    create?: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput> | PictureCreateWithoutFavoriteInput[] | PictureUncheckedCreateWithoutFavoriteInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutFavoriteInput | PictureCreateOrConnectWithoutFavoriteInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutFavoriteInput | PictureUpsertWithWhereUniqueWithoutFavoriteInput[]
    createMany?: PictureCreateManyFavoriteInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutFavoriteInput | PictureUpdateWithWhereUniqueWithoutFavoriteInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutFavoriteInput | PictureUpdateManyWithWhereWithoutFavoriteInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type PictureCreateNestedManyWithoutGalleryInput = {
    create?: XOR<PictureCreateWithoutGalleryInput, PictureUncheckedCreateWithoutGalleryInput> | PictureCreateWithoutGalleryInput[] | PictureUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutGalleryInput | PictureCreateOrConnectWithoutGalleryInput[]
    createMany?: PictureCreateManyGalleryInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGalleryInput = {
    create?: XOR<UserCreateWithoutGalleryInput, UserUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGalleryInput
    connect?: UserWhereUniqueInput
  }

  export type PictureUncheckedCreateNestedManyWithoutGalleryInput = {
    create?: XOR<PictureCreateWithoutGalleryInput, PictureUncheckedCreateWithoutGalleryInput> | PictureCreateWithoutGalleryInput[] | PictureUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutGalleryInput | PictureCreateOrConnectWithoutGalleryInput[]
    createMany?: PictureCreateManyGalleryInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PictureUpdateManyWithoutGalleryNestedInput = {
    create?: XOR<PictureCreateWithoutGalleryInput, PictureUncheckedCreateWithoutGalleryInput> | PictureCreateWithoutGalleryInput[] | PictureUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutGalleryInput | PictureCreateOrConnectWithoutGalleryInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutGalleryInput | PictureUpsertWithWhereUniqueWithoutGalleryInput[]
    createMany?: PictureCreateManyGalleryInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutGalleryInput | PictureUpdateWithWhereUniqueWithoutGalleryInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutGalleryInput | PictureUpdateManyWithWhereWithoutGalleryInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<UserCreateWithoutGalleryInput, UserUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: UserCreateOrConnectWithoutGalleryInput
    upsert?: UserUpsertWithoutGalleryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGalleryInput, UserUpdateWithoutGalleryInput>, UserUncheckedUpdateWithoutGalleryInput>
  }

  export type PictureUncheckedUpdateManyWithoutGalleryNestedInput = {
    create?: XOR<PictureCreateWithoutGalleryInput, PictureUncheckedCreateWithoutGalleryInput> | PictureCreateWithoutGalleryInput[] | PictureUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutGalleryInput | PictureCreateOrConnectWithoutGalleryInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutGalleryInput | PictureUpsertWithWhereUniqueWithoutGalleryInput[]
    createMany?: PictureCreateManyGalleryInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutGalleryInput | PictureUpdateWithWhereUniqueWithoutGalleryInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutGalleryInput | PictureUpdateManyWithWhereWithoutGalleryInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type PictureCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput> | PictureCreateWithoutAlbumInput[] | PictureUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAlbumInput | PictureCreateOrConnectWithoutAlbumInput[]
    createMany?: PictureCreateManyAlbumInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAlbumInput = {
    create?: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumInput
    connect?: UserWhereUniqueInput
  }

  export type PictureUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput> | PictureCreateWithoutAlbumInput[] | PictureUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAlbumInput | PictureCreateOrConnectWithoutAlbumInput[]
    createMany?: PictureCreateManyAlbumInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PictureUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput> | PictureCreateWithoutAlbumInput[] | PictureUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAlbumInput | PictureCreateOrConnectWithoutAlbumInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutAlbumInput | PictureUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PictureCreateManyAlbumInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutAlbumInput | PictureUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutAlbumInput | PictureUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumInput
    upsert?: UserUpsertWithoutAlbumInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumInput, UserUpdateWithoutAlbumInput>, UserUncheckedUpdateWithoutAlbumInput>
  }

  export type PictureUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput> | PictureCreateWithoutAlbumInput[] | PictureUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAlbumInput | PictureCreateOrConnectWithoutAlbumInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutAlbumInput | PictureUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PictureCreateManyAlbumInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutAlbumInput | PictureUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutAlbumInput | PictureUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type EmbedLinksCreateNestedOneWithoutPictureInput = {
    create?: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
    connectOrCreate?: EmbedLinksCreateOrConnectWithoutPictureInput
    connect?: EmbedLinksWhereUniqueInput
  }

  export type FavoriteCreateNestedOneWithoutPicturesInput = {
    create?: XOR<FavoriteCreateWithoutPicturesInput, FavoriteUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: FavoriteCreateOrConnectWithoutPicturesInput
    connect?: FavoriteWhereUniqueInput
  }

  export type GalleryCreateNestedOneWithoutPicturesInput = {
    create?: XOR<GalleryCreateWithoutPicturesInput, GalleryUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutPicturesInput
    connect?: GalleryWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutPicturesInput = {
    create?: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPicturesInput
    connect?: AlbumWhereUniqueInput
  }

  export type EmbedLinksUncheckedCreateNestedOneWithoutPictureInput = {
    create?: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
    connectOrCreate?: EmbedLinksCreateOrConnectWithoutPictureInput
    connect?: EmbedLinksWhereUniqueInput
  }

  export type EnumPictureTypeFieldUpdateOperationsInput = {
    set?: $Enums.PictureType
  }

  export type EnumPictureStatusFieldUpdateOperationsInput = {
    set?: $Enums.PictureStatus
  }

  export type EmbedLinksUpdateOneWithoutPictureNestedInput = {
    create?: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
    connectOrCreate?: EmbedLinksCreateOrConnectWithoutPictureInput
    upsert?: EmbedLinksUpsertWithoutPictureInput
    disconnect?: EmbedLinksWhereInput | boolean
    delete?: EmbedLinksWhereInput | boolean
    connect?: EmbedLinksWhereUniqueInput
    update?: XOR<XOR<EmbedLinksUpdateToOneWithWhereWithoutPictureInput, EmbedLinksUpdateWithoutPictureInput>, EmbedLinksUncheckedUpdateWithoutPictureInput>
  }

  export type FavoriteUpdateOneWithoutPicturesNestedInput = {
    create?: XOR<FavoriteCreateWithoutPicturesInput, FavoriteUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: FavoriteCreateOrConnectWithoutPicturesInput
    upsert?: FavoriteUpsertWithoutPicturesInput
    disconnect?: FavoriteWhereInput | boolean
    delete?: FavoriteWhereInput | boolean
    connect?: FavoriteWhereUniqueInput
    update?: XOR<XOR<FavoriteUpdateToOneWithWhereWithoutPicturesInput, FavoriteUpdateWithoutPicturesInput>, FavoriteUncheckedUpdateWithoutPicturesInput>
  }

  export type GalleryUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<GalleryCreateWithoutPicturesInput, GalleryUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutPicturesInput
    upsert?: GalleryUpsertWithoutPicturesInput
    connect?: GalleryWhereUniqueInput
    update?: XOR<XOR<GalleryUpdateToOneWithWhereWithoutPicturesInput, GalleryUpdateWithoutPicturesInput>, GalleryUncheckedUpdateWithoutPicturesInput>
  }

  export type AlbumUpdateOneWithoutPicturesNestedInput = {
    create?: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPicturesInput
    upsert?: AlbumUpsertWithoutPicturesInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutPicturesInput, AlbumUpdateWithoutPicturesInput>, AlbumUncheckedUpdateWithoutPicturesInput>
  }

  export type EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput = {
    create?: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
    connectOrCreate?: EmbedLinksCreateOrConnectWithoutPictureInput
    upsert?: EmbedLinksUpsertWithoutPictureInput
    disconnect?: EmbedLinksWhereInput | boolean
    delete?: EmbedLinksWhereInput | boolean
    connect?: EmbedLinksWhereUniqueInput
    update?: XOR<XOR<EmbedLinksUpdateToOneWithWhereWithoutPictureInput, EmbedLinksUpdateWithoutPictureInput>, EmbedLinksUncheckedUpdateWithoutPictureInput>
  }

  export type PictureCreateNestedOneWithoutEmbed_linksInput = {
    create?: XOR<PictureCreateWithoutEmbed_linksInput, PictureUncheckedCreateWithoutEmbed_linksInput>
    connectOrCreate?: PictureCreateOrConnectWithoutEmbed_linksInput
    connect?: PictureWhereUniqueInput
  }

  export type PictureUpdateOneRequiredWithoutEmbed_linksNestedInput = {
    create?: XOR<PictureCreateWithoutEmbed_linksInput, PictureUncheckedCreateWithoutEmbed_linksInput>
    connectOrCreate?: PictureCreateOrConnectWithoutEmbed_linksInput
    upsert?: PictureUpsertWithoutEmbed_linksInput
    connect?: PictureWhereUniqueInput
    update?: XOR<XOR<PictureUpdateToOneWithWhereWithoutEmbed_linksInput, PictureUpdateWithoutEmbed_linksInput>, PictureUncheckedUpdateWithoutEmbed_linksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel>
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPlanFilter<$PrismaModel> | $Enums.UserPlan
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumUserPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel>
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPlanWithAggregatesFilter<$PrismaModel> | $Enums.UserPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserPlanFilter<$PrismaModel>
    _max?: NestedEnumUserPlanFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPictureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeFilter<$PrismaModel> | $Enums.PictureType
  }

  export type NestedEnumPictureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureStatus | EnumPictureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureStatusFilter<$PrismaModel> | $Enums.PictureStatus
  }

  export type NestedEnumPictureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeWithAggregatesFilter<$PrismaModel> | $Enums.PictureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPictureTypeFilter<$PrismaModel>
    _max?: NestedEnumPictureTypeFilter<$PrismaModel>
  }

  export type NestedEnumPictureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureStatus | EnumPictureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureStatus[] | ListEnumPictureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureStatusWithAggregatesFilter<$PrismaModel> | $Enums.PictureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPictureStatusFilter<$PrismaModel>
    _max?: NestedEnumPictureStatusFilter<$PrismaModel>
  }

  export type PaymentsHistoryCreateWithoutUserInput = {
    id?: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonNullValueInput | InputJsonValue
    order_id: string
    order_date: bigint | number
  }

  export type PaymentsHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonNullValueInput | InputJsonValue
    order_id: string
    order_date: bigint | number
  }

  export type PaymentsHistoryCreateOrConnectWithoutUserInput = {
    where: PaymentsHistoryWhereUniqueInput
    create: XOR<PaymentsHistoryCreateWithoutUserInput, PaymentsHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentsHistoryCreateManyUserInputEnvelope = {
    data: PaymentsHistoryCreateManyUserInput | PaymentsHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    start_date?: bigint | number | null
    end_date?: bigint | number | null
    next_payment_date?: bigint | number | null
    interval_count?: number | null
    payment_id?: string | null
    interval?: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.UserPlan
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    start_date?: bigint | number | null
    end_date?: bigint | number | null
    next_payment_date?: bigint | number | null
    interval_count?: number | null
    payment_id?: string | null
    interval?: string
    status: $Enums.SubscriptionStatus
    plan: $Enums.UserPlan
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type GalleryCreateWithoutUserInput = {
    id?: string
    created_at: bigint | number
    pictures?: PictureCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUncheckedCreateWithoutUserInput = {
    id?: string
    created_at: bigint | number
    pictures?: PictureUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryCreateOrConnectWithoutUserInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
  }

  export type ClientKeyCreateWithoutUserInput = {
    id?: string
    client_id: string
    client_secret: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClientKeyUncheckedCreateWithoutUserInput = {
    id?: string
    client_id: string
    client_secret: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClientKeyCreateOrConnectWithoutUserInput = {
    where: ClientKeyWhereUniqueInput
    create: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    total: number
    pictures?: PictureCreateNestedManyWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    total: number
    pictures?: PictureUncheckedCreateNestedManyWithoutFavoriteInput
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type AlbumCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    pictures?: PictureCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    pictures?: PictureUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutUserInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput>
  }

  export type AlbumCreateManyUserInputEnvelope = {
    data: AlbumCreateManyUserInput | AlbumCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentsHistoryWhereUniqueInput
    update: XOR<PaymentsHistoryUpdateWithoutUserInput, PaymentsHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentsHistoryCreateWithoutUserInput, PaymentsHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentsHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentsHistoryWhereUniqueInput
    data: XOR<PaymentsHistoryUpdateWithoutUserInput, PaymentsHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PaymentsHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PaymentsHistoryScalarWhereInput
    data: XOR<PaymentsHistoryUpdateManyMutationInput, PaymentsHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentsHistoryScalarWhereInput = {
    AND?: PaymentsHistoryScalarWhereInput | PaymentsHistoryScalarWhereInput[]
    OR?: PaymentsHistoryScalarWhereInput[]
    NOT?: PaymentsHistoryScalarWhereInput | PaymentsHistoryScalarWhereInput[]
    id?: StringFilter<"PaymentsHistory"> | string
    plan?: EnumUserPlanFilter<"PaymentsHistory"> | $Enums.UserPlan
    interval_count?: IntFilter<"PaymentsHistory"> | number
    status?: EnumOrderStatusFilter<"PaymentsHistory"> | $Enums.OrderStatus
    amount?: JsonFilter<"PaymentsHistory">
    order_id?: StringFilter<"PaymentsHistory"> | string
    order_date?: BigIntFilter<"PaymentsHistory"> | bigint | number
    user_id?: StringFilter<"PaymentsHistory"> | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    end_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_payment_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    end_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    next_payment_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    interval_count?: NullableIntFieldUpdateOperationsInput | number | null
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
  }

  export type GalleryUpsertWithoutUserInput = {
    update: XOR<GalleryUpdateWithoutUserInput, GalleryUncheckedUpdateWithoutUserInput>
    create: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    where?: GalleryWhereInput
  }

  export type GalleryUpdateToOneWithWhereWithoutUserInput = {
    where?: GalleryWhereInput
    data: XOR<GalleryUpdateWithoutUserInput, GalleryUncheckedUpdateWithoutUserInput>
  }

  export type GalleryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    pictures?: PictureUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    pictures?: PictureUncheckedUpdateManyWithoutGalleryNestedInput
  }

  export type ClientKeyUpsertWithoutUserInput = {
    update: XOR<ClientKeyUpdateWithoutUserInput, ClientKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    where?: ClientKeyWhereInput
  }

  export type ClientKeyUpdateToOneWithWhereWithoutUserInput = {
    where?: ClientKeyWhereInput
    data: XOR<ClientKeyUpdateWithoutUserInput, ClientKeyUncheckedUpdateWithoutUserInput>
  }

  export type ClientKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpsertWithoutUserInput = {
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
    where?: FavoriteWhereInput
  }

  export type FavoriteUpdateToOneWithWhereWithoutUserInput = {
    where?: FavoriteWhereInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUpdateManyWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    pictures?: PictureUncheckedUpdateManyWithoutFavoriteNestedInput
  }

  export type AlbumUpsertWithWhereUniqueWithoutUserInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutUserInput, AlbumUncheckedUpdateWithoutUserInput>
    create: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutUserInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutUserInput, AlbumUncheckedUpdateWithoutUserInput>
  }

  export type AlbumUpdateManyWithWhereWithoutUserInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutUserInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringFilter<"Album"> | string
    thumbnail?: StringFilter<"Album"> | string
    user_id?: StringFilter<"Album"> | string
  }

  export type UserCreateWithoutPayment_historyInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    client_key?: ClientKeyCreateNestedOneWithoutUserInput
    favorite?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayment_historyInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    client_key?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    favorite?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayment_historyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayment_historyInput, UserUncheckedCreateWithoutPayment_historyInput>
  }

  export type UserUpsertWithoutPayment_historyInput = {
    update: XOR<UserUpdateWithoutPayment_historyInput, UserUncheckedUpdateWithoutPayment_historyInput>
    create: XOR<UserCreateWithoutPayment_historyInput, UserUncheckedCreateWithoutPayment_historyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayment_historyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayment_historyInput, UserUncheckedUpdateWithoutPayment_historyInput>
  }

  export type UserUpdateWithoutPayment_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayment_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryCreateNestedManyWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    client_key?: ClientKeyCreateNestedOneWithoutUserInput
    favorite?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    client_key?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    favorite?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUpdateManyWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClient_keyInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    favorite?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClient_keyInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    favorite?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClient_keyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClient_keyInput, UserUncheckedCreateWithoutClient_keyInput>
  }

  export type UserUpsertWithoutClient_keyInput = {
    update: XOR<UserUpdateWithoutClient_keyInput, UserUncheckedUpdateWithoutClient_keyInput>
    create: XOR<UserCreateWithoutClient_keyInput, UserUncheckedCreateWithoutClient_keyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClient_keyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClient_keyInput, UserUncheckedUpdateWithoutClient_keyInput>
  }

  export type UserUpdateWithoutClient_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClient_keyInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PictureCreateWithoutFavoriteInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    embed_links?: EmbedLinksCreateNestedOneWithoutPictureInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
    album?: AlbumCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutFavoriteInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    album_id?: string | null
    gallery_id: string
    embed_links?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureCreateOrConnectWithoutFavoriteInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput>
  }

  export type PictureCreateManyFavoriteInputEnvelope = {
    data: PictureCreateManyFavoriteInput | PictureCreateManyFavoriteInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFavoriteInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    client_key?: ClientKeyCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    client_key?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
  }

  export type PictureUpsertWithWhereUniqueWithoutFavoriteInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutFavoriteInput, PictureUncheckedUpdateWithoutFavoriteInput>
    create: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutFavoriteInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutFavoriteInput, PictureUncheckedUpdateWithoutFavoriteInput>
  }

  export type PictureUpdateManyWithWhereWithoutFavoriteInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutFavoriteInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: StringFilter<"Picture"> | string
    title?: StringFilter<"Picture"> | string
    description?: StringFilter<"Picture"> | string
    link?: StringFilter<"Picture"> | string
    expires_time?: JsonFilter<"Picture">
    size?: IntFilter<"Picture"> | number
    filename?: StringFilter<"Picture"> | string
    type?: EnumPictureTypeFilter<"Picture"> | $Enums.PictureType
    extension?: StringFilter<"Picture"> | string
    status?: EnumPictureStatusFilter<"Picture"> | $Enums.PictureStatus
    created_at?: BigIntFilter<"Picture"> | bigint | number
    favorite_id?: StringNullableFilter<"Picture"> | string | null
    album_id?: StringNullableFilter<"Picture"> | string | null
    gallery_id?: StringFilter<"Picture"> | string
  }

  export type UserUpsertWithoutFavoriteInput = {
    update: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type UserUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PictureCreateWithoutGalleryInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    embed_links?: EmbedLinksCreateNestedOneWithoutPictureInput
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    album?: AlbumCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutGalleryInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    album_id?: string | null
    embed_links?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureCreateOrConnectWithoutGalleryInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutGalleryInput, PictureUncheckedCreateWithoutGalleryInput>
  }

  export type PictureCreateManyGalleryInputEnvelope = {
    data: PictureCreateManyGalleryInput | PictureCreateManyGalleryInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGalleryInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    client_key?: ClientKeyCreateNestedOneWithoutUserInput
    favorite?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGalleryInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    client_key?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    favorite?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGalleryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGalleryInput, UserUncheckedCreateWithoutGalleryInput>
  }

  export type PictureUpsertWithWhereUniqueWithoutGalleryInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutGalleryInput, PictureUncheckedUpdateWithoutGalleryInput>
    create: XOR<PictureCreateWithoutGalleryInput, PictureUncheckedCreateWithoutGalleryInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutGalleryInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutGalleryInput, PictureUncheckedUpdateWithoutGalleryInput>
  }

  export type PictureUpdateManyWithWhereWithoutGalleryInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutGalleryInput>
  }

  export type UserUpsertWithoutGalleryInput = {
    update: XOR<UserUpdateWithoutGalleryInput, UserUncheckedUpdateWithoutGalleryInput>
    create: XOR<UserCreateWithoutGalleryInput, UserUncheckedCreateWithoutGalleryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGalleryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGalleryInput, UserUncheckedUpdateWithoutGalleryInput>
  }

  export type UserUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PictureCreateWithoutAlbumInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    embed_links?: EmbedLinksCreateNestedOneWithoutPictureInput
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutAlbumInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    gallery_id: string
    embed_links?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureCreateOrConnectWithoutAlbumInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput>
  }

  export type PictureCreateManyAlbumInputEnvelope = {
    data: PictureCreateManyAlbumInput | PictureCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAlbumInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    client_key?: ClientKeyCreateNestedOneWithoutUserInput
    favorite?: FavoriteCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlbumInput = {
    id?: string
    origin_code: number
    name: string
    email?: string | null
    password?: string | null
    avatar: string
    type: $Enums.UserType
    bio?: string | null
    is_member?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment_history?: PaymentsHistoryUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    client_key?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    favorite?: FavoriteUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlbumInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
  }

  export type PictureUpsertWithWhereUniqueWithoutAlbumInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutAlbumInput, PictureUncheckedUpdateWithoutAlbumInput>
    create: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutAlbumInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutAlbumInput, PictureUncheckedUpdateWithoutAlbumInput>
  }

  export type PictureUpdateManyWithWhereWithoutAlbumInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutAlbumInput>
  }

  export type UserUpsertWithoutAlbumInput = {
    update: XOR<UserUpdateWithoutAlbumInput, UserUncheckedUpdateWithoutAlbumInput>
    create: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlbumInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlbumInput, UserUncheckedUpdateWithoutAlbumInput>
  }

  export type UserUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin_code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_member?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_history?: PaymentsHistoryUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    client_key?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    favorite?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EmbedLinksCreateWithoutPictureInput = {
    id?: string
    html_links: JsonNullValueInput | InputJsonValue
    direct_links: JsonNullValueInput | InputJsonValue
    markdown_links: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksUncheckedCreateWithoutPictureInput = {
    id?: string
    html_links: JsonNullValueInput | InputJsonValue
    direct_links: JsonNullValueInput | InputJsonValue
    markdown_links: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksCreateOrConnectWithoutPictureInput = {
    where: EmbedLinksWhereUniqueInput
    create: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
  }

  export type FavoriteCreateWithoutPicturesInput = {
    id?: string
    total: number
    user: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutPicturesInput = {
    id?: string
    total: number
    user_id: string
  }

  export type FavoriteCreateOrConnectWithoutPicturesInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPicturesInput, FavoriteUncheckedCreateWithoutPicturesInput>
  }

  export type GalleryCreateWithoutPicturesInput = {
    id?: string
    created_at: bigint | number
    user: UserCreateNestedOneWithoutGalleryInput
  }

  export type GalleryUncheckedCreateWithoutPicturesInput = {
    id?: string
    created_at: bigint | number
    user_id: string
  }

  export type GalleryCreateOrConnectWithoutPicturesInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutPicturesInput, GalleryUncheckedCreateWithoutPicturesInput>
  }

  export type AlbumCreateWithoutPicturesInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    user: UserCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutPicturesInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    user_id: string
  }

  export type AlbumCreateOrConnectWithoutPicturesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
  }

  export type EmbedLinksUpsertWithoutPictureInput = {
    update: XOR<EmbedLinksUpdateWithoutPictureInput, EmbedLinksUncheckedUpdateWithoutPictureInput>
    create: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
    where?: EmbedLinksWhereInput
  }

  export type EmbedLinksUpdateToOneWithWhereWithoutPictureInput = {
    where?: EmbedLinksWhereInput
    data: XOR<EmbedLinksUpdateWithoutPictureInput, EmbedLinksUncheckedUpdateWithoutPictureInput>
  }

  export type EmbedLinksUpdateWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    html_links?: JsonNullValueInput | InputJsonValue
    direct_links?: JsonNullValueInput | InputJsonValue
    markdown_links?: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksUncheckedUpdateWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    html_links?: JsonNullValueInput | InputJsonValue
    direct_links?: JsonNullValueInput | InputJsonValue
    markdown_links?: JsonNullValueInput | InputJsonValue
  }

  export type FavoriteUpsertWithoutPicturesInput = {
    update: XOR<FavoriteUpdateWithoutPicturesInput, FavoriteUncheckedUpdateWithoutPicturesInput>
    create: XOR<FavoriteCreateWithoutPicturesInput, FavoriteUncheckedCreateWithoutPicturesInput>
    where?: FavoriteWhereInput
  }

  export type FavoriteUpdateToOneWithWhereWithoutPicturesInput = {
    where?: FavoriteWhereInput
    data: XOR<FavoriteUpdateWithoutPicturesInput, FavoriteUncheckedUpdateWithoutPicturesInput>
  }

  export type FavoriteUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryUpsertWithoutPicturesInput = {
    update: XOR<GalleryUpdateWithoutPicturesInput, GalleryUncheckedUpdateWithoutPicturesInput>
    create: XOR<GalleryCreateWithoutPicturesInput, GalleryUncheckedCreateWithoutPicturesInput>
    where?: GalleryWhereInput
  }

  export type GalleryUpdateToOneWithWhereWithoutPicturesInput = {
    where?: GalleryWhereInput
    data: XOR<GalleryUpdateWithoutPicturesInput, GalleryUncheckedUpdateWithoutPicturesInput>
  }

  export type GalleryUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUpsertWithoutPicturesInput = {
    update: XOR<AlbumUpdateWithoutPicturesInput, AlbumUncheckedUpdateWithoutPicturesInput>
    create: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutPicturesInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutPicturesInput, AlbumUncheckedUpdateWithoutPicturesInput>
  }

  export type AlbumUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateWithoutEmbed_linksInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
    album?: AlbumCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutEmbed_linksInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    album_id?: string | null
    gallery_id: string
  }

  export type PictureCreateOrConnectWithoutEmbed_linksInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutEmbed_linksInput, PictureUncheckedCreateWithoutEmbed_linksInput>
  }

  export type PictureUpsertWithoutEmbed_linksInput = {
    update: XOR<PictureUpdateWithoutEmbed_linksInput, PictureUncheckedUpdateWithoutEmbed_linksInput>
    create: XOR<PictureCreateWithoutEmbed_linksInput, PictureUncheckedCreateWithoutEmbed_linksInput>
    where?: PictureWhereInput
  }

  export type PictureUpdateToOneWithWhereWithoutEmbed_linksInput = {
    where?: PictureWhereInput
    data: XOR<PictureUpdateWithoutEmbed_linksInput, PictureUncheckedUpdateWithoutEmbed_linksInput>
  }

  export type PictureUpdateWithoutEmbed_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
    album?: AlbumUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutEmbed_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsHistoryCreateManyUserInput = {
    id?: string
    plan: $Enums.UserPlan
    interval_count: number
    status: $Enums.OrderStatus
    amount: JsonNullValueInput | InputJsonValue
    order_id: string
    order_date: bigint | number
  }

  export type AlbumCreateManyUserInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
  }

  export type PaymentsHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentsHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentsHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan
    interval_count?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    amount?: JsonNullValueInput | InputJsonValue
    order_id?: StringFieldUpdateOperationsInput | string
    order_date?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AlbumUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    pictures?: PictureUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    pictures?: PictureUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateManyFavoriteInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    album_id?: string | null
    gallery_id: string
  }

  export type PictureUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    embed_links?: EmbedLinksUpdateOneWithoutPictureNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
    album?: AlbumUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
    embed_links?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateManyWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateManyGalleryInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    album_id?: string | null
  }

  export type PictureUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    embed_links?: EmbedLinksUpdateOneWithoutPictureNestedInput
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    album?: AlbumUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
    embed_links?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateManyWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    album_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureCreateManyAlbumInput = {
    id?: string
    title: string
    description: string
    link: string
    expires_time: JsonNullValueInput | InputJsonValue
    size: number
    filename: string
    type: $Enums.PictureType
    extension: string
    status: $Enums.PictureStatus
    created_at: bigint | number
    favorite_id?: string | null
    gallery_id: string
  }

  export type PictureUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    embed_links?: EmbedLinksUpdateOneWithoutPictureNestedInput
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
    embed_links?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    expires_time?: JsonNullValueInput | InputJsonValue
    size?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    extension?: StringFieldUpdateOperationsInput | string
    status?: EnumPictureStatusFieldUpdateOperationsInput | $Enums.PictureStatus
    created_at?: BigIntFieldUpdateOperationsInput | bigint | number
    favorite_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteCountOutputTypeDefaultArgs instead
     */
    export type FavoriteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryCountOutputTypeDefaultArgs instead
     */
    export type GalleryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumCountOutputTypeDefaultArgs instead
     */
    export type AlbumCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentsHistoryDefaultArgs instead
     */
    export type PaymentsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentsHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientKeyDefaultArgs instead
     */
    export type ClientKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteDefaultArgs instead
     */
    export type FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryDefaultArgs instead
     */
    export type GalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumDefaultArgs instead
     */
    export type AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PictureDefaultArgs instead
     */
    export type PictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PictureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmbedLinksDefaultArgs instead
     */
    export type EmbedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmbedLinksDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}