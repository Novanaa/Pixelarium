
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model ClientKey
 * 
 */
export type ClientKey = $Result.DefaultSelection<Prisma.$ClientKeyPayload>
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
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model AlbumPicture
 * 
 */
export type AlbumPicture = $Result.DefaultSelection<Prisma.$AlbumPicturePayload>
/**
 * Model Subcription
 * 
 */
export type Subcription = $Result.DefaultSelection<Prisma.$SubcriptionPayload>
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


export const status: {
  deactive: 'deactive',
  active: 'active'
};

export type status = (typeof status)[keyof typeof status]


export const plan: {
  none: 'none',
  Gold: 'Gold',
  Diamond: 'Diamond',
  Netherite: 'Netherite'
};

export type plan = (typeof plan)[keyof typeof plan]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type status = $Enums.status

export const status: typeof $Enums.status

export type plan = $Enums.plan

export const plan: typeof $Enums.plan

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
   * `prisma.clientKey`: Exposes CRUD operations for the **ClientKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientKeys
    * const clientKeys = await prisma.clientKey.findMany()
    * ```
    */
  get clientKey(): Prisma.ClientKeyDelegate<ExtArgs>;

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
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs>;

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
   * `prisma.albumPicture`: Exposes CRUD operations for the **AlbumPicture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumPictures
    * const albumPictures = await prisma.albumPicture.findMany()
    * ```
    */
  get albumPicture(): Prisma.AlbumPictureDelegate<ExtArgs>;

  /**
   * `prisma.subcription`: Exposes CRUD operations for the **Subcription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcriptions
    * const subcriptions = await prisma.subcription.findMany()
    * ```
    */
  get subcription(): Prisma.SubcriptionDelegate<ExtArgs>;

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
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
    ClientKey: 'ClientKey',
    Gallery: 'Gallery',
    Album: 'Album',
    Favorite: 'Favorite',
    Picture: 'Picture',
    AlbumPicture: 'AlbumPicture',
    Subcription: 'Subcription',
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
      modelProps: 'user' | 'clientKey' | 'gallery' | 'album' | 'favorite' | 'picture' | 'albumPicture' | 'subcription' | 'embedLinks'
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
      AlbumPicture: {
        payload: Prisma.$AlbumPicturePayload<ExtArgs>
        fields: Prisma.AlbumPictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumPictureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumPictureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>
          }
          findFirst: {
            args: Prisma.AlbumPictureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumPictureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>
          }
          findMany: {
            args: Prisma.AlbumPictureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>[]
          }
          create: {
            args: Prisma.AlbumPictureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>
          }
          createMany: {
            args: Prisma.AlbumPictureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumPictureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>
          }
          update: {
            args: Prisma.AlbumPictureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>
          }
          deleteMany: {
            args: Prisma.AlbumPictureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumPictureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumPictureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumPicturePayload>
          }
          aggregate: {
            args: Prisma.AlbumPictureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbumPicture>
          }
          groupBy: {
            args: Prisma.AlbumPictureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumPictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumPictureCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumPictureCountAggregateOutputType> | number
          }
        }
      }
      Subcription: {
        payload: Prisma.$SubcriptionPayload<ExtArgs>
        fields: Prisma.SubcriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          findFirst: {
            args: Prisma.SubcriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          findMany: {
            args: Prisma.SubcriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>[]
          }
          create: {
            args: Prisma.SubcriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          createMany: {
            args: Prisma.SubcriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubcriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          update: {
            args: Prisma.SubcriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubcriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubcriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubcriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          aggregate: {
            args: Prisma.SubcriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubcription>
          }
          groupBy: {
            args: Prisma.SubcriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubcriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<SubcriptionCountAggregateOutputType> | number
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
    album: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
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
   * Count Type AlbumPictureCountOutputType
   */

  export type AlbumPictureCountOutputType = {
    pictures: number
  }

  export type AlbumPictureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | AlbumPictureCountOutputTypeCountPicturesArgs
  }

  // Custom InputTypes

  /**
   * AlbumPictureCountOutputType without action
   */
  export type AlbumPictureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPictureCountOutputType
     */
    select?: AlbumPictureCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumPictureCountOutputType without action
   */
  export type AlbumPictureCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    id: number | null
    provider_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    provider_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    provider_id: number | null
    name: string | null
    email: string | null
    password: string | null
    picture: string | null
    type: $Enums.UserType | null
    bio: string | null
    site_admin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    provider_id: number | null
    name: string | null
    email: string | null
    password: string | null
    picture: string | null
    type: $Enums.UserType | null
    bio: string | null
    site_admin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    provider_id: number
    name: number
    email: number
    password: number
    picture: number
    type: number
    bio: number
    site_admin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    provider_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    provider_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    provider_id?: true
    name?: true
    email?: true
    password?: true
    picture?: true
    type?: true
    bio?: true
    site_admin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    provider_id?: true
    name?: true
    email?: true
    password?: true
    picture?: true
    type?: true
    bio?: true
    site_admin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    provider_id?: true
    name?: true
    email?: true
    password?: true
    picture?: true
    type?: true
    bio?: true
    site_admin?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    id: number
    provider_id: number
    name: string
    email: string | null
    password: string | null
    picture: string
    type: $Enums.UserType
    bio: string
    site_admin: boolean
    createdAt: Date
    updatedAt: Date
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
    provider_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    type?: boolean
    bio?: boolean
    site_admin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client_keys?: boolean | User$client_keysArgs<ExtArgs>
    gallery?: boolean | User$galleryArgs<ExtArgs>
    favorite_picture?: boolean | User$favorite_pictureArgs<ExtArgs>
    album?: boolean | User$albumArgs<ExtArgs>
    subcription?: boolean | User$subcriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    provider_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    type?: boolean
    bio?: boolean
    site_admin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client_keys?: boolean | User$client_keysArgs<ExtArgs>
    gallery?: boolean | User$galleryArgs<ExtArgs>
    favorite_picture?: boolean | User$favorite_pictureArgs<ExtArgs>
    album?: boolean | User$albumArgs<ExtArgs>
    subcription?: boolean | User$subcriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      client_keys: Prisma.$ClientKeyPayload<ExtArgs> | null
      gallery: Prisma.$GalleryPayload<ExtArgs> | null
      favorite_picture: Prisma.$FavoritePayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs>[]
      subcription: Prisma.$SubcriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provider_id: number
      name: string
      email: string | null
      password: string | null
      picture: string
      type: $Enums.UserType
      bio: string
      site_admin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
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

    client_keys<T extends User$client_keysArgs<ExtArgs> = {}>(args?: Subset<T, User$client_keysArgs<ExtArgs>>): Prisma__ClientKeyClient<$Result.GetResult<Prisma.$ClientKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    gallery<T extends User$galleryArgs<ExtArgs> = {}>(args?: Subset<T, User$galleryArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    favorite_picture<T extends User$favorite_pictureArgs<ExtArgs> = {}>(args?: Subset<T, User$favorite_pictureArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    album<T extends User$albumArgs<ExtArgs> = {}>(args?: Subset<T, User$albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findMany'> | Null>;

    subcription<T extends User$subcriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subcriptionArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly id: FieldRef<"User", 'Int'>
    readonly provider_id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly bio: FieldRef<"User", 'String'>
    readonly site_admin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
   * User.client_keys
   */
  export type User$client_keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.favorite_picture
   */
  export type User$favorite_pictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }


  /**
   * User.subcription
   */
  export type User$subcriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    where?: SubcriptionWhereInput
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
   * Model ClientKey
   */

  export type AggregateClientKey = {
    _count: ClientKeyCountAggregateOutputType | null
    _avg: ClientKeyAvgAggregateOutputType | null
    _sum: ClientKeySumAggregateOutputType | null
    _min: ClientKeyMinAggregateOutputType | null
    _max: ClientKeyMaxAggregateOutputType | null
  }

  export type ClientKeyAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ClientKeySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ClientKeyMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: string | null
    client_secret: string | null
  }

  export type ClientKeyMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    client_id: string | null
    client_secret: string | null
  }

  export type ClientKeyCountAggregateOutputType = {
    id: number
    user_id: number
    client_id: number
    client_secret: number
    _all: number
  }


  export type ClientKeyAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ClientKeySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ClientKeyMinAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    client_secret?: true
  }

  export type ClientKeyMaxAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    client_secret?: true
  }

  export type ClientKeyCountAggregateInputType = {
    id?: true
    user_id?: true
    client_id?: true
    client_secret?: true
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
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
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
     * Select which fields to average
    **/
    _avg?: ClientKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientKeySumAggregateInputType
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
    _avg?: ClientKeyAvgAggregateInputType
    _sum?: ClientKeySumAggregateInputType
    _min?: ClientKeyMinAggregateInputType
    _max?: ClientKeyMaxAggregateInputType
  }

  export type ClientKeyGroupByOutputType = {
    id: number
    user_id: number
    client_id: string | null
    client_secret: string | null
    _count: ClientKeyCountAggregateOutputType | null
    _avg: ClientKeyAvgAggregateOutputType | null
    _sum: ClientKeySumAggregateOutputType | null
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
    user_id?: boolean
    client_id?: boolean
    client_secret?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientKey"]>

  export type ClientKeySelectScalar = {
    id?: boolean
    user_id?: boolean
    client_id?: boolean
    client_secret?: boolean
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
      id: number
      user_id: number
      client_id: string | null
      client_secret: string | null
    }, ExtArgs["result"]["clientKey"]>
    composites: {}
  }


  type ClientKeyGetPayload<S extends boolean | null | undefined | ClientKeyDefaultArgs> = $Result.GetResult<Prisma.$ClientKeyPayload, S>

  type ClientKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientKeyFindManyArgs, 'select' | 'include' | 'distinct' > & {
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
    readonly id: FieldRef<"ClientKey", 'Int'>
    readonly user_id: FieldRef<"ClientKey", 'Int'>
    readonly client_id: FieldRef<"ClientKey", 'String'>
    readonly client_secret: FieldRef<"ClientKey", 'String'>
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
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
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
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
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
    orderBy?: ClientKeyOrderByWithRelationInput | ClientKeyOrderByWithRelationInput[]
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
    id: number | null
    user_id: number | null
  }

  export type GallerySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type GalleryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type GallerySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type GalleryMinAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
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
    id: number
    user_id: number
    createdAt: Date
    updatedAt: Date
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
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pictures?: boolean | Gallery$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
      id: number
      user_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }


  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' > & {
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
    readonly id: FieldRef<"Gallery", 'Int'>
    readonly user_id: FieldRef<"Gallery", 'Int'>
    readonly createdAt: FieldRef<"Gallery", 'DateTime'>
    readonly updatedAt: FieldRef<"Gallery", 'DateTime'>
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
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
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
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
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
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
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
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
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
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    description: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
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
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
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
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    title: string
    description: string
    user_id: number
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
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
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pictures?: boolean | Album$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | Album$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      pictures: Prisma.$AlbumPicturePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      user_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }


  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' > & {
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

    pictures<T extends Album$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Album$picturesArgs<ExtArgs>>): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly id: FieldRef<"Album", 'Int'>
    readonly title: FieldRef<"Album", 'String'>
    readonly description: FieldRef<"Album", 'String'>
    readonly user_id: FieldRef<"Album", 'Int'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updatedAt: FieldRef<"Album", 'DateTime'>
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
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
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
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
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
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
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
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    where?: AlbumPictureWhereInput
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
    id: number | null
    user_id: number | null
    favorited_pictures: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    favorited_pictures: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    favorited_pictures: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    favorited_pictures: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    user_id: number
    favorited_pictures: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    user_id?: true
    favorited_pictures?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    user_id?: true
    favorited_pictures?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    user_id?: true
    favorited_pictures?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    user_id?: true
    favorited_pictures?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    user_id?: true
    favorited_pictures?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
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
    id: number
    user_id: number
    favorited_pictures: number
    createdAt: Date
    updatedAt: Date
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
    user_id?: boolean
    favorited_pictures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pictures?: boolean | Favorite$picturesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FavoriteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    user_id?: boolean
    favorited_pictures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
      id: number
      user_id: number
      favorited_pictures: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }


  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' > & {
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
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly user_id: FieldRef<"Favorite", 'Int'>
    readonly favorited_pictures: FieldRef<"Favorite", 'Int'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
    readonly updatedAt: FieldRef<"Favorite", 'DateTime'>
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
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
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
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
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
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
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
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
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
    id: number | null
    expires_in: number | null
    gallery_id: number | null
    album_picture_id: number | null
    favorite_id: number | null
  }

  export type PictureSumAggregateOutputType = {
    id: number | null
    expires_in: number | null
    gallery_id: number | null
    album_picture_id: number | null
    favorite_id: number | null
  }

  export type PictureMinAggregateOutputType = {
    id: number | null
    uniquekey: string | null
    title: string | null
    description: string | null
    url: string | null
    is_favorited: boolean | null
    filename: string | null
    extension: string | null
    expires_in: number | null
    is_private: boolean | null
    gallery_id: number | null
    album_picture_id: number | null
    favorite_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PictureMaxAggregateOutputType = {
    id: number | null
    uniquekey: string | null
    title: string | null
    description: string | null
    url: string | null
    is_favorited: boolean | null
    filename: string | null
    extension: string | null
    expires_in: number | null
    is_private: boolean | null
    gallery_id: number | null
    album_picture_id: number | null
    favorite_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    uniquekey: number
    title: number
    description: number
    url: number
    is_favorited: number
    filename: number
    extension: number
    expires_in: number
    is_private: number
    gallery_id: number
    album_picture_id: number
    favorite_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    id?: true
    expires_in?: true
    gallery_id?: true
    album_picture_id?: true
    favorite_id?: true
  }

  export type PictureSumAggregateInputType = {
    id?: true
    expires_in?: true
    gallery_id?: true
    album_picture_id?: true
    favorite_id?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    uniquekey?: true
    title?: true
    description?: true
    url?: true
    is_favorited?: true
    filename?: true
    extension?: true
    expires_in?: true
    is_private?: true
    gallery_id?: true
    album_picture_id?: true
    favorite_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    uniquekey?: true
    title?: true
    description?: true
    url?: true
    is_favorited?: true
    filename?: true
    extension?: true
    expires_in?: true
    is_private?: true
    gallery_id?: true
    album_picture_id?: true
    favorite_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    uniquekey?: true
    title?: true
    description?: true
    url?: true
    is_favorited?: true
    filename?: true
    extension?: true
    expires_in?: true
    is_private?: true
    gallery_id?: true
    album_picture_id?: true
    favorite_id?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
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
    id: number
    uniquekey: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in: number | null
    is_private: boolean
    gallery_id: number
    album_picture_id: number | null
    favorite_id: number | null
    createdAt: Date
    updatedAt: Date
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
    uniquekey?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    is_favorited?: boolean
    filename?: boolean
    extension?: boolean
    expires_in?: boolean
    is_private?: boolean
    gallery_id?: boolean
    album_picture_id?: boolean
    favorite_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    embed_link?: boolean | Picture$embed_linkArgs<ExtArgs>
    favorite?: boolean | Picture$favoriteArgs<ExtArgs>
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
    album?: boolean | Picture$albumArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    uniquekey?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    is_favorited?: boolean
    filename?: boolean
    extension?: boolean
    expires_in?: boolean
    is_private?: boolean
    gallery_id?: boolean
    album_picture_id?: boolean
    favorite_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embed_link?: boolean | Picture$embed_linkArgs<ExtArgs>
    favorite?: boolean | Picture$favoriteArgs<ExtArgs>
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
    album?: boolean | Picture$albumArgs<ExtArgs>
  }


  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      embed_link: Prisma.$EmbedLinksPayload<ExtArgs> | null
      favorite: Prisma.$FavoritePayload<ExtArgs> | null
      gallery: Prisma.$GalleryPayload<ExtArgs>
      album: Prisma.$AlbumPicturePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uniquekey: string
      title: string
      description: string
      url: string
      is_favorited: boolean
      filename: string
      extension: string
      expires_in: number | null
      is_private: boolean
      gallery_id: number
      album_picture_id: number | null
      favorite_id: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }


  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' > & {
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

    embed_link<T extends Picture$embed_linkArgs<ExtArgs> = {}>(args?: Subset<T, Picture$embed_linkArgs<ExtArgs>>): Prisma__EmbedLinksClient<$Result.GetResult<Prisma.$EmbedLinksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    favorite<T extends Picture$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, Picture$favoriteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    gallery<T extends GalleryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalleryDefaultArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    album<T extends Picture$albumArgs<ExtArgs> = {}>(args?: Subset<T, Picture$albumArgs<ExtArgs>>): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly id: FieldRef<"Picture", 'Int'>
    readonly uniquekey: FieldRef<"Picture", 'String'>
    readonly title: FieldRef<"Picture", 'String'>
    readonly description: FieldRef<"Picture", 'String'>
    readonly url: FieldRef<"Picture", 'String'>
    readonly is_favorited: FieldRef<"Picture", 'Boolean'>
    readonly filename: FieldRef<"Picture", 'String'>
    readonly extension: FieldRef<"Picture", 'String'>
    readonly expires_in: FieldRef<"Picture", 'Int'>
    readonly is_private: FieldRef<"Picture", 'Boolean'>
    readonly gallery_id: FieldRef<"Picture", 'Int'>
    readonly album_picture_id: FieldRef<"Picture", 'Int'>
    readonly favorite_id: FieldRef<"Picture", 'Int'>
    readonly createdAt: FieldRef<"Picture", 'DateTime'>
    readonly updatedAt: FieldRef<"Picture", 'DateTime'>
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
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
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
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
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
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
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
   * Picture.embed_link
   */
  export type Picture$embed_linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    where?: AlbumPictureWhereInput
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
   * Model AlbumPicture
   */

  export type AggregateAlbumPicture = {
    _count: AlbumPictureCountAggregateOutputType | null
    _avg: AlbumPictureAvgAggregateOutputType | null
    _sum: AlbumPictureSumAggregateOutputType | null
    _min: AlbumPictureMinAggregateOutputType | null
    _max: AlbumPictureMaxAggregateOutputType | null
  }

  export type AlbumPictureAvgAggregateOutputType = {
    id: number | null
    album_id: number | null
  }

  export type AlbumPictureSumAggregateOutputType = {
    id: number | null
    album_id: number | null
  }

  export type AlbumPictureMinAggregateOutputType = {
    id: number | null
    album_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumPictureMaxAggregateOutputType = {
    id: number | null
    album_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumPictureCountAggregateOutputType = {
    id: number
    album_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlbumPictureAvgAggregateInputType = {
    id?: true
    album_id?: true
  }

  export type AlbumPictureSumAggregateInputType = {
    id?: true
    album_id?: true
  }

  export type AlbumPictureMinAggregateInputType = {
    id?: true
    album_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumPictureMaxAggregateInputType = {
    id?: true
    album_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumPictureCountAggregateInputType = {
    id?: true
    album_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumPictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumPicture to aggregate.
     */
    where?: AlbumPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPictures to fetch.
     */
    orderBy?: AlbumPictureOrderByWithRelationInput | AlbumPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumPictures
    **/
    _count?: true | AlbumPictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumPictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumPictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumPictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumPictureMaxAggregateInputType
  }

  export type GetAlbumPictureAggregateType<T extends AlbumPictureAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumPicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumPicture[P]>
      : GetScalarType<T[P], AggregateAlbumPicture[P]>
  }




  export type AlbumPictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumPictureWhereInput
    orderBy?: AlbumPictureOrderByWithAggregationInput | AlbumPictureOrderByWithAggregationInput[]
    by: AlbumPictureScalarFieldEnum[] | AlbumPictureScalarFieldEnum
    having?: AlbumPictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumPictureCountAggregateInputType | true
    _avg?: AlbumPictureAvgAggregateInputType
    _sum?: AlbumPictureSumAggregateInputType
    _min?: AlbumPictureMinAggregateInputType
    _max?: AlbumPictureMaxAggregateInputType
  }

  export type AlbumPictureGroupByOutputType = {
    id: number
    album_id: number
    createdAt: Date
    updatedAt: Date
    _count: AlbumPictureCountAggregateOutputType | null
    _avg: AlbumPictureAvgAggregateOutputType | null
    _sum: AlbumPictureSumAggregateOutputType | null
    _min: AlbumPictureMinAggregateOutputType | null
    _max: AlbumPictureMaxAggregateOutputType | null
  }

  type GetAlbumPictureGroupByPayload<T extends AlbumPictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumPictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumPictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumPictureGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumPictureGroupByOutputType[P]>
        }
      >
    >


  export type AlbumPictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pictures?: boolean | AlbumPicture$picturesArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    _count?: boolean | AlbumPictureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumPicture"]>

  export type AlbumPictureSelectScalar = {
    id?: boolean
    album_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumPictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | AlbumPicture$picturesArgs<ExtArgs>
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    _count?: boolean | AlbumPictureCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumPicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumPicture"
    objects: {
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      album: Prisma.$AlbumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      album_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["albumPicture"]>
    composites: {}
  }


  type AlbumPictureGetPayload<S extends boolean | null | undefined | AlbumPictureDefaultArgs> = $Result.GetResult<Prisma.$AlbumPicturePayload, S>

  type AlbumPictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumPictureFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AlbumPictureCountAggregateInputType | true
    }

  export interface AlbumPictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumPicture'], meta: { name: 'AlbumPicture' } }
    /**
     * Find zero or one AlbumPicture that matches the filter.
     * @param {AlbumPictureFindUniqueArgs} args - Arguments to find a AlbumPicture
     * @example
     * // Get one AlbumPicture
     * const albumPicture = await prisma.albumPicture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumPictureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumPictureFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AlbumPicture that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumPictureFindUniqueOrThrowArgs} args - Arguments to find a AlbumPicture
     * @example
     * // Get one AlbumPicture
     * const albumPicture = await prisma.albumPicture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumPictureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumPictureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AlbumPicture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureFindFirstArgs} args - Arguments to find a AlbumPicture
     * @example
     * // Get one AlbumPicture
     * const albumPicture = await prisma.albumPicture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumPictureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumPictureFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AlbumPicture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureFindFirstOrThrowArgs} args - Arguments to find a AlbumPicture
     * @example
     * // Get one AlbumPicture
     * const albumPicture = await prisma.albumPicture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumPictureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumPictureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AlbumPictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumPictures
     * const albumPictures = await prisma.albumPicture.findMany()
     * 
     * // Get first 10 AlbumPictures
     * const albumPictures = await prisma.albumPicture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumPictureWithIdOnly = await prisma.albumPicture.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumPictureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumPictureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AlbumPicture.
     * @param {AlbumPictureCreateArgs} args - Arguments to create a AlbumPicture.
     * @example
     * // Create one AlbumPicture
     * const AlbumPicture = await prisma.albumPicture.create({
     *   data: {
     *     // ... data to create a AlbumPicture
     *   }
     * })
     * 
    **/
    create<T extends AlbumPictureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumPictureCreateArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AlbumPictures.
     *     @param {AlbumPictureCreateManyArgs} args - Arguments to create many AlbumPictures.
     *     @example
     *     // Create many AlbumPictures
     *     const albumPicture = await prisma.albumPicture.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumPictureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumPictureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlbumPicture.
     * @param {AlbumPictureDeleteArgs} args - Arguments to delete one AlbumPicture.
     * @example
     * // Delete one AlbumPicture
     * const AlbumPicture = await prisma.albumPicture.delete({
     *   where: {
     *     // ... filter to delete one AlbumPicture
     *   }
     * })
     * 
    **/
    delete<T extends AlbumPictureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumPictureDeleteArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AlbumPicture.
     * @param {AlbumPictureUpdateArgs} args - Arguments to update one AlbumPicture.
     * @example
     * // Update one AlbumPicture
     * const albumPicture = await prisma.albumPicture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumPictureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumPictureUpdateArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AlbumPictures.
     * @param {AlbumPictureDeleteManyArgs} args - Arguments to filter AlbumPictures to delete.
     * @example
     * // Delete a few AlbumPictures
     * const { count } = await prisma.albumPicture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumPictureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumPictureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumPictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumPictures
     * const albumPicture = await prisma.albumPicture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumPictureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumPictureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlbumPicture.
     * @param {AlbumPictureUpsertArgs} args - Arguments to update or create a AlbumPicture.
     * @example
     * // Update or create a AlbumPicture
     * const albumPicture = await prisma.albumPicture.upsert({
     *   create: {
     *     // ... data to create a AlbumPicture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumPicture we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumPictureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumPictureUpsertArgs<ExtArgs>>
    ): Prisma__AlbumPictureClient<$Result.GetResult<Prisma.$AlbumPicturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AlbumPictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureCountArgs} args - Arguments to filter AlbumPictures to count.
     * @example
     * // Count the number of AlbumPictures
     * const count = await prisma.albumPicture.count({
     *   where: {
     *     // ... the filter for the AlbumPictures we want to count
     *   }
     * })
    **/
    count<T extends AlbumPictureCountArgs>(
      args?: Subset<T, AlbumPictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumPictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumPicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumPictureAggregateArgs>(args: Subset<T, AlbumPictureAggregateArgs>): Prisma.PrismaPromise<GetAlbumPictureAggregateType<T>>

    /**
     * Group by AlbumPicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumPictureGroupByArgs} args - Group by arguments.
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
      T extends AlbumPictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumPictureGroupByArgs['orderBy'] }
        : { orderBy?: AlbumPictureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumPictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumPicture model
   */
  readonly fields: AlbumPictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumPicture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumPictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pictures<T extends AlbumPicture$picturesArgs<ExtArgs> = {}>(args?: Subset<T, AlbumPicture$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, 'findMany'> | Null>;

    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the AlbumPicture model
   */ 
  interface AlbumPictureFieldRefs {
    readonly id: FieldRef<"AlbumPicture", 'Int'>
    readonly album_id: FieldRef<"AlbumPicture", 'Int'>
    readonly createdAt: FieldRef<"AlbumPicture", 'DateTime'>
    readonly updatedAt: FieldRef<"AlbumPicture", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AlbumPicture findUnique
   */
  export type AlbumPictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPicture to fetch.
     */
    where: AlbumPictureWhereUniqueInput
  }


  /**
   * AlbumPicture findUniqueOrThrow
   */
  export type AlbumPictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPicture to fetch.
     */
    where: AlbumPictureWhereUniqueInput
  }


  /**
   * AlbumPicture findFirst
   */
  export type AlbumPictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPicture to fetch.
     */
    where?: AlbumPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPictures to fetch.
     */
    orderBy?: AlbumPictureOrderByWithRelationInput | AlbumPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumPictures.
     */
    cursor?: AlbumPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumPictures.
     */
    distinct?: AlbumPictureScalarFieldEnum | AlbumPictureScalarFieldEnum[]
  }


  /**
   * AlbumPicture findFirstOrThrow
   */
  export type AlbumPictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPicture to fetch.
     */
    where?: AlbumPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPictures to fetch.
     */
    orderBy?: AlbumPictureOrderByWithRelationInput | AlbumPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumPictures.
     */
    cursor?: AlbumPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumPictures.
     */
    distinct?: AlbumPictureScalarFieldEnum | AlbumPictureScalarFieldEnum[]
  }


  /**
   * AlbumPicture findMany
   */
  export type AlbumPictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * Filter, which AlbumPictures to fetch.
     */
    where?: AlbumPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumPictures to fetch.
     */
    orderBy?: AlbumPictureOrderByWithRelationInput | AlbumPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumPictures.
     */
    cursor?: AlbumPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumPictures.
     */
    skip?: number
    distinct?: AlbumPictureScalarFieldEnum | AlbumPictureScalarFieldEnum[]
  }


  /**
   * AlbumPicture create
   */
  export type AlbumPictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumPicture.
     */
    data: XOR<AlbumPictureCreateInput, AlbumPictureUncheckedCreateInput>
  }


  /**
   * AlbumPicture createMany
   */
  export type AlbumPictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumPictures.
     */
    data: AlbumPictureCreateManyInput | AlbumPictureCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AlbumPicture update
   */
  export type AlbumPictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumPicture.
     */
    data: XOR<AlbumPictureUpdateInput, AlbumPictureUncheckedUpdateInput>
    /**
     * Choose, which AlbumPicture to update.
     */
    where: AlbumPictureWhereUniqueInput
  }


  /**
   * AlbumPicture updateMany
   */
  export type AlbumPictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumPictures.
     */
    data: XOR<AlbumPictureUpdateManyMutationInput, AlbumPictureUncheckedUpdateManyInput>
    /**
     * Filter which AlbumPictures to update
     */
    where?: AlbumPictureWhereInput
  }


  /**
   * AlbumPicture upsert
   */
  export type AlbumPictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumPicture to update in case it exists.
     */
    where: AlbumPictureWhereUniqueInput
    /**
     * In case the AlbumPicture found by the `where` argument doesn't exist, create a new AlbumPicture with this data.
     */
    create: XOR<AlbumPictureCreateInput, AlbumPictureUncheckedCreateInput>
    /**
     * In case the AlbumPicture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumPictureUpdateInput, AlbumPictureUncheckedUpdateInput>
  }


  /**
   * AlbumPicture delete
   */
  export type AlbumPictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
    /**
     * Filter which AlbumPicture to delete.
     */
    where: AlbumPictureWhereUniqueInput
  }


  /**
   * AlbumPicture deleteMany
   */
  export type AlbumPictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumPictures to delete
     */
    where?: AlbumPictureWhereInput
  }


  /**
   * AlbumPicture.pictures
   */
  export type AlbumPicture$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }


  /**
   * AlbumPicture without action
   */
  export type AlbumPictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumPicture
     */
    select?: AlbumPictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumPictureInclude<ExtArgs> | null
  }



  /**
   * Model Subcription
   */

  export type AggregateSubcription = {
    _count: SubcriptionCountAggregateOutputType | null
    _avg: SubcriptionAvgAggregateOutputType | null
    _sum: SubcriptionSumAggregateOutputType | null
    _min: SubcriptionMinAggregateOutputType | null
    _max: SubcriptionMaxAggregateOutputType | null
  }

  export type SubcriptionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type SubcriptionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type SubcriptionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    start_date: Date | null
    end_date: Date | null
    next_payments_date: Date | null
    order_id: string | null
    status: $Enums.status | null
    plan: $Enums.plan | null
  }

  export type SubcriptionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    start_date: Date | null
    end_date: Date | null
    next_payments_date: Date | null
    order_id: string | null
    status: $Enums.status | null
    plan: $Enums.plan | null
  }

  export type SubcriptionCountAggregateOutputType = {
    id: number
    user_id: number
    start_date: number
    end_date: number
    next_payments_date: number
    order_id: number
    status: number
    plan: number
    _all: number
  }


  export type SubcriptionAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type SubcriptionSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type SubcriptionMinAggregateInputType = {
    id?: true
    user_id?: true
    start_date?: true
    end_date?: true
    next_payments_date?: true
    order_id?: true
    status?: true
    plan?: true
  }

  export type SubcriptionMaxAggregateInputType = {
    id?: true
    user_id?: true
    start_date?: true
    end_date?: true
    next_payments_date?: true
    order_id?: true
    status?: true
    plan?: true
  }

  export type SubcriptionCountAggregateInputType = {
    id?: true
    user_id?: true
    start_date?: true
    end_date?: true
    next_payments_date?: true
    order_id?: true
    status?: true
    plan?: true
    _all?: true
  }

  export type SubcriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcription to aggregate.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcriptions
    **/
    _count?: true | SubcriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcriptionMaxAggregateInputType
  }

  export type GetSubcriptionAggregateType<T extends SubcriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcription[P]>
      : GetScalarType<T[P], AggregateSubcription[P]>
  }




  export type SubcriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcriptionWhereInput
    orderBy?: SubcriptionOrderByWithAggregationInput | SubcriptionOrderByWithAggregationInput[]
    by: SubcriptionScalarFieldEnum[] | SubcriptionScalarFieldEnum
    having?: SubcriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcriptionCountAggregateInputType | true
    _avg?: SubcriptionAvgAggregateInputType
    _sum?: SubcriptionSumAggregateInputType
    _min?: SubcriptionMinAggregateInputType
    _max?: SubcriptionMaxAggregateInputType
  }

  export type SubcriptionGroupByOutputType = {
    id: number
    user_id: number
    start_date: Date | null
    end_date: Date | null
    next_payments_date: Date | null
    order_id: string | null
    status: $Enums.status
    plan: $Enums.plan
    _count: SubcriptionCountAggregateOutputType | null
    _avg: SubcriptionAvgAggregateOutputType | null
    _sum: SubcriptionSumAggregateOutputType | null
    _min: SubcriptionMinAggregateOutputType | null
    _max: SubcriptionMaxAggregateOutputType | null
  }

  type GetSubcriptionGroupByPayload<T extends SubcriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubcriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubcriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    start_date?: boolean
    end_date?: boolean
    next_payments_date?: boolean
    order_id?: boolean
    status?: boolean
    plan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcription"]>

  export type SubcriptionSelectScalar = {
    id?: boolean
    user_id?: boolean
    start_date?: boolean
    end_date?: boolean
    next_payments_date?: boolean
    order_id?: boolean
    status?: boolean
    plan?: boolean
  }

  export type SubcriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SubcriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      start_date: Date | null
      end_date: Date | null
      next_payments_date: Date | null
      order_id: string | null
      status: $Enums.status
      plan: $Enums.plan
    }, ExtArgs["result"]["subcription"]>
    composites: {}
  }


  type SubcriptionGetPayload<S extends boolean | null | undefined | SubcriptionDefaultArgs> = $Result.GetResult<Prisma.$SubcriptionPayload, S>

  type SubcriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubcriptionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SubcriptionCountAggregateInputType | true
    }

  export interface SubcriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcription'], meta: { name: 'Subcription' } }
    /**
     * Find zero or one Subcription that matches the filter.
     * @param {SubcriptionFindUniqueArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubcriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubcriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subcription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubcriptionFindUniqueOrThrowArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubcriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubcriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subcription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionFindFirstArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubcriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubcriptionFindFirstArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subcription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionFindFirstOrThrowArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubcriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubcriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subcriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcriptions
     * const subcriptions = await prisma.subcription.findMany()
     * 
     * // Get first 10 Subcriptions
     * const subcriptions = await prisma.subcription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcriptionWithIdOnly = await prisma.subcription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubcriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubcriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subcription.
     * @param {SubcriptionCreateArgs} args - Arguments to create a Subcription.
     * @example
     * // Create one Subcription
     * const Subcription = await prisma.subcription.create({
     *   data: {
     *     // ... data to create a Subcription
     *   }
     * })
     * 
    **/
    create<T extends SubcriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubcriptionCreateArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subcriptions.
     *     @param {SubcriptionCreateManyArgs} args - Arguments to create many Subcriptions.
     *     @example
     *     // Create many Subcriptions
     *     const subcription = await prisma.subcription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubcriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubcriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subcription.
     * @param {SubcriptionDeleteArgs} args - Arguments to delete one Subcription.
     * @example
     * // Delete one Subcription
     * const Subcription = await prisma.subcription.delete({
     *   where: {
     *     // ... filter to delete one Subcription
     *   }
     * })
     * 
    **/
    delete<T extends SubcriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubcriptionDeleteArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subcription.
     * @param {SubcriptionUpdateArgs} args - Arguments to update one Subcription.
     * @example
     * // Update one Subcription
     * const subcription = await prisma.subcription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubcriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubcriptionUpdateArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subcriptions.
     * @param {SubcriptionDeleteManyArgs} args - Arguments to filter Subcriptions to delete.
     * @example
     * // Delete a few Subcriptions
     * const { count } = await prisma.subcription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubcriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubcriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcriptions
     * const subcription = await prisma.subcription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubcriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubcriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subcription.
     * @param {SubcriptionUpsertArgs} args - Arguments to update or create a Subcription.
     * @example
     * // Update or create a Subcription
     * const subcription = await prisma.subcription.upsert({
     *   create: {
     *     // ... data to create a Subcription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcription we want to update
     *   }
     * })
    **/
    upsert<T extends SubcriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubcriptionUpsertArgs<ExtArgs>>
    ): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subcriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionCountArgs} args - Arguments to filter Subcriptions to count.
     * @example
     * // Count the number of Subcriptions
     * const count = await prisma.subcription.count({
     *   where: {
     *     // ... the filter for the Subcriptions we want to count
     *   }
     * })
    **/
    count<T extends SubcriptionCountArgs>(
      args?: Subset<T, SubcriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcriptionAggregateArgs>(args: Subset<T, SubcriptionAggregateArgs>): Prisma.PrismaPromise<GetSubcriptionAggregateType<T>>

    /**
     * Group by Subcription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionGroupByArgs} args - Group by arguments.
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
      T extends SubcriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubcriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubcriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcription model
   */
  readonly fields: SubcriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Subcription model
   */ 
  interface SubcriptionFieldRefs {
    readonly id: FieldRef<"Subcription", 'Int'>
    readonly user_id: FieldRef<"Subcription", 'Int'>
    readonly start_date: FieldRef<"Subcription", 'DateTime'>
    readonly end_date: FieldRef<"Subcription", 'DateTime'>
    readonly next_payments_date: FieldRef<"Subcription", 'DateTime'>
    readonly order_id: FieldRef<"Subcription", 'String'>
    readonly status: FieldRef<"Subcription", 'status'>
    readonly plan: FieldRef<"Subcription", 'plan'>
  }
    

  // Custom InputTypes

  /**
   * Subcription findUnique
   */
  export type SubcriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where: SubcriptionWhereUniqueInput
  }


  /**
   * Subcription findUniqueOrThrow
   */
  export type SubcriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where: SubcriptionWhereUniqueInput
  }


  /**
   * Subcription findFirst
   */
  export type SubcriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcriptions.
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcriptions.
     */
    distinct?: SubcriptionScalarFieldEnum | SubcriptionScalarFieldEnum[]
  }


  /**
   * Subcription findFirstOrThrow
   */
  export type SubcriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcriptions.
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcriptions.
     */
    distinct?: SubcriptionScalarFieldEnum | SubcriptionScalarFieldEnum[]
  }


  /**
   * Subcription findMany
   */
  export type SubcriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcriptions to fetch.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcriptions.
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    distinct?: SubcriptionScalarFieldEnum | SubcriptionScalarFieldEnum[]
  }


  /**
   * Subcription create
   */
  export type SubcriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcription.
     */
    data: XOR<SubcriptionCreateInput, SubcriptionUncheckedCreateInput>
  }


  /**
   * Subcription createMany
   */
  export type SubcriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcriptions.
     */
    data: SubcriptionCreateManyInput | SubcriptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Subcription update
   */
  export type SubcriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcription.
     */
    data: XOR<SubcriptionUpdateInput, SubcriptionUncheckedUpdateInput>
    /**
     * Choose, which Subcription to update.
     */
    where: SubcriptionWhereUniqueInput
  }


  /**
   * Subcription updateMany
   */
  export type SubcriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcriptions.
     */
    data: XOR<SubcriptionUpdateManyMutationInput, SubcriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subcriptions to update
     */
    where?: SubcriptionWhereInput
  }


  /**
   * Subcription upsert
   */
  export type SubcriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcription to update in case it exists.
     */
    where: SubcriptionWhereUniqueInput
    /**
     * In case the Subcription found by the `where` argument doesn't exist, create a new Subcription with this data.
     */
    create: XOR<SubcriptionCreateInput, SubcriptionUncheckedCreateInput>
    /**
     * In case the Subcription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcriptionUpdateInput, SubcriptionUncheckedUpdateInput>
  }


  /**
   * Subcription delete
   */
  export type SubcriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter which Subcription to delete.
     */
    where: SubcriptionWhereUniqueInput
  }


  /**
   * Subcription deleteMany
   */
  export type SubcriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcriptions to delete
     */
    where?: SubcriptionWhereInput
  }


  /**
   * Subcription without action
   */
  export type SubcriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubcriptionInclude<ExtArgs> | null
  }



  /**
   * Model EmbedLinks
   */

  export type AggregateEmbedLinks = {
    _count: EmbedLinksCountAggregateOutputType | null
    _avg: EmbedLinksAvgAggregateOutputType | null
    _sum: EmbedLinksSumAggregateOutputType | null
    _min: EmbedLinksMinAggregateOutputType | null
    _max: EmbedLinksMaxAggregateOutputType | null
  }

  export type EmbedLinksAvgAggregateOutputType = {
    id: number | null
    picture_id: number | null
  }

  export type EmbedLinksSumAggregateOutputType = {
    id: number | null
    picture_id: number | null
  }

  export type EmbedLinksMinAggregateOutputType = {
    id: number | null
    picture_id: number | null
  }

  export type EmbedLinksMaxAggregateOutputType = {
    id: number | null
    picture_id: number | null
  }

  export type EmbedLinksCountAggregateOutputType = {
    id: number
    html_link: number
    direct_link: number
    markdown_link: number
    picture_id: number
    _all: number
  }


  export type EmbedLinksAvgAggregateInputType = {
    id?: true
    picture_id?: true
  }

  export type EmbedLinksSumAggregateInputType = {
    id?: true
    picture_id?: true
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
    html_link?: true
    direct_link?: true
    markdown_link?: true
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
    orderBy?: EmbedLinksOrderByWithRelationInput | EmbedLinksOrderByWithRelationInput[]
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
     * Select which fields to average
    **/
    _avg?: EmbedLinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmbedLinksSumAggregateInputType
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
    _avg?: EmbedLinksAvgAggregateInputType
    _sum?: EmbedLinksSumAggregateInputType
    _min?: EmbedLinksMinAggregateInputType
    _max?: EmbedLinksMaxAggregateInputType
  }

  export type EmbedLinksGroupByOutputType = {
    id: number
    html_link: JsonValue
    direct_link: JsonValue
    markdown_link: JsonValue
    picture_id: number
    _count: EmbedLinksCountAggregateOutputType | null
    _avg: EmbedLinksAvgAggregateOutputType | null
    _sum: EmbedLinksSumAggregateOutputType | null
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
    html_link?: boolean
    direct_link?: boolean
    markdown_link?: boolean
    picture_id?: boolean
    picture?: boolean | PictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedLinks"]>

  export type EmbedLinksSelectScalar = {
    id?: boolean
    html_link?: boolean
    direct_link?: boolean
    markdown_link?: boolean
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
      id: number
      html_link: Prisma.JsonValue
      direct_link: Prisma.JsonValue
      markdown_link: Prisma.JsonValue
      picture_id: number
    }, ExtArgs["result"]["embedLinks"]>
    composites: {}
  }


  type EmbedLinksGetPayload<S extends boolean | null | undefined | EmbedLinksDefaultArgs> = $Result.GetResult<Prisma.$EmbedLinksPayload, S>

  type EmbedLinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmbedLinksFindManyArgs, 'select' | 'include' | 'distinct' > & {
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
    readonly id: FieldRef<"EmbedLinks", 'Int'>
    readonly html_link: FieldRef<"EmbedLinks", 'Json'>
    readonly direct_link: FieldRef<"EmbedLinks", 'Json'>
    readonly markdown_link: FieldRef<"EmbedLinks", 'Json'>
    readonly picture_id: FieldRef<"EmbedLinks", 'Int'>
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
    orderBy?: EmbedLinksOrderByWithRelationInput | EmbedLinksOrderByWithRelationInput[]
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
    orderBy?: EmbedLinksOrderByWithRelationInput | EmbedLinksOrderByWithRelationInput[]
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
    orderBy?: EmbedLinksOrderByWithRelationInput | EmbedLinksOrderByWithRelationInput[]
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
    provider_id: 'provider_id',
    name: 'name',
    email: 'email',
    password: 'password',
    picture: 'picture',
    type: 'type',
    bio: 'bio',
    site_admin: 'site_admin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientKeyScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    client_id: 'client_id',
    client_secret: 'client_secret'
  };

  export type ClientKeyScalarFieldEnum = (typeof ClientKeyScalarFieldEnum)[keyof typeof ClientKeyScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    favorited_pictures: 'favorited_pictures',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    uniquekey: 'uniquekey',
    title: 'title',
    description: 'description',
    url: 'url',
    is_favorited: 'is_favorited',
    filename: 'filename',
    extension: 'extension',
    expires_in: 'expires_in',
    is_private: 'is_private',
    gallery_id: 'gallery_id',
    album_picture_id: 'album_picture_id',
    favorite_id: 'favorite_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const AlbumPictureScalarFieldEnum: {
    id: 'id',
    album_id: 'album_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlbumPictureScalarFieldEnum = (typeof AlbumPictureScalarFieldEnum)[keyof typeof AlbumPictureScalarFieldEnum]


  export const SubcriptionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    start_date: 'start_date',
    end_date: 'end_date',
    next_payments_date: 'next_payments_date',
    order_id: 'order_id',
    status: 'status',
    plan: 'plan'
  };

  export type SubcriptionScalarFieldEnum = (typeof SubcriptionScalarFieldEnum)[keyof typeof SubcriptionScalarFieldEnum]


  export const EmbedLinksScalarFieldEnum: {
    id: 'id',
    html_link: 'html_link',
    direct_link: 'direct_link',
    markdown_link: 'markdown_link',
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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'plan'
   */
  export type EnumplanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan'>
    


  /**
   * Reference to a field of type 'plan[]'
   */
  export type ListEnumplanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
    id?: IntFilter<"User"> | number
    provider_id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    picture?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    bio?: StringFilter<"User"> | string
    site_admin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    client_keys?: XOR<ClientKeyNullableRelationFilter, ClientKeyWhereInput> | null
    gallery?: XOR<GalleryNullableRelationFilter, GalleryWhereInput> | null
    favorite_picture?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    album?: AlbumListRelationFilter
    subcription?: XOR<SubcriptionNullableRelationFilter, SubcriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    provider_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    picture?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    site_admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client_keys?: ClientKeyOrderByWithRelationInput
    gallery?: GalleryOrderByWithRelationInput
    favorite_picture?: FavoriteOrderByWithRelationInput
    album?: AlbumOrderByRelationAggregateInput
    subcription?: SubcriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_id?: number
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    picture?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    bio?: StringFilter<"User"> | string
    site_admin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    client_keys?: XOR<ClientKeyNullableRelationFilter, ClientKeyWhereInput> | null
    gallery?: XOR<GalleryNullableRelationFilter, GalleryWhereInput> | null
    favorite_picture?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    album?: AlbumListRelationFilter
    subcription?: XOR<SubcriptionNullableRelationFilter, SubcriptionWhereInput> | null
  }, "id" | "provider_id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    provider_id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    picture?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    site_admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    provider_id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    bio?: StringWithAggregatesFilter<"User"> | string
    site_admin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientKeyWhereInput = {
    AND?: ClientKeyWhereInput | ClientKeyWhereInput[]
    OR?: ClientKeyWhereInput[]
    NOT?: ClientKeyWhereInput | ClientKeyWhereInput[]
    id?: IntFilter<"ClientKey"> | number
    user_id?: IntFilter<"ClientKey"> | number
    client_id?: StringNullableFilter<"ClientKey"> | string | null
    client_secret?: StringNullableFilter<"ClientKey"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ClientKeyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrderInput | SortOrder
    client_secret?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ClientKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    client_id?: string
    AND?: ClientKeyWhereInput | ClientKeyWhereInput[]
    OR?: ClientKeyWhereInput[]
    NOT?: ClientKeyWhereInput | ClientKeyWhereInput[]
    client_secret?: StringNullableFilter<"ClientKey"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id" | "client_id">

  export type ClientKeyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrderInput | SortOrder
    client_secret?: SortOrderInput | SortOrder
    _count?: ClientKeyCountOrderByAggregateInput
    _avg?: ClientKeyAvgOrderByAggregateInput
    _max?: ClientKeyMaxOrderByAggregateInput
    _min?: ClientKeyMinOrderByAggregateInput
    _sum?: ClientKeySumOrderByAggregateInput
  }

  export type ClientKeyScalarWhereWithAggregatesInput = {
    AND?: ClientKeyScalarWhereWithAggregatesInput | ClientKeyScalarWhereWithAggregatesInput[]
    OR?: ClientKeyScalarWhereWithAggregatesInput[]
    NOT?: ClientKeyScalarWhereWithAggregatesInput | ClientKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClientKey"> | number
    user_id?: IntWithAggregatesFilter<"ClientKey"> | number
    client_id?: StringNullableWithAggregatesFilter<"ClientKey"> | string | null
    client_secret?: StringNullableWithAggregatesFilter<"ClientKey"> | string | null
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: IntFilter<"Gallery"> | number
    user_id?: IntFilter<"Gallery"> | number
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"Gallery"> | number
    user_id?: IntWithAggregatesFilter<"Gallery"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    description?: StringFilter<"Album"> | string
    user_id?: IntFilter<"Album"> | number
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    pictures?: XOR<AlbumPictureNullableRelationFilter, AlbumPictureWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pictures?: AlbumPictureOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    description?: StringFilter<"Album"> | string
    user_id?: IntFilter<"Album"> | number
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    pictures?: XOR<AlbumPictureNullableRelationFilter, AlbumPictureWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    title?: StringWithAggregatesFilter<"Album"> | string
    description?: StringWithAggregatesFilter<"Album"> | string
    user_id?: IntWithAggregatesFilter<"Album"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    user_id?: IntFilter<"Favorite"> | number
    favorited_pictures?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    updatedAt?: DateTimeFilter<"Favorite"> | Date | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    favorited_pictures?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    updatedAt?: DateTimeFilter<"Favorite"> | Date | string
    pictures?: PictureListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"Favorite"> | number
    user_id?: IntWithAggregatesFilter<"Favorite"> | number
    favorited_pictures?: IntWithAggregatesFilter<"Favorite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: IntFilter<"Picture"> | number
    uniquekey?: StringFilter<"Picture"> | string
    title?: StringFilter<"Picture"> | string
    description?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    is_favorited?: BoolFilter<"Picture"> | boolean
    filename?: StringFilter<"Picture"> | string
    extension?: StringFilter<"Picture"> | string
    expires_in?: IntNullableFilter<"Picture"> | number | null
    is_private?: BoolFilter<"Picture"> | boolean
    gallery_id?: IntFilter<"Picture"> | number
    album_picture_id?: IntNullableFilter<"Picture"> | number | null
    favorite_id?: IntNullableFilter<"Picture"> | number | null
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    embed_link?: XOR<EmbedLinksNullableRelationFilter, EmbedLinksWhereInput> | null
    favorite?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    gallery?: XOR<GalleryRelationFilter, GalleryWhereInput>
    album?: XOR<AlbumPictureNullableRelationFilter, AlbumPictureWhereInput> | null
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    uniquekey?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    is_favorited?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    expires_in?: SortOrderInput | SortOrder
    is_private?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrderInput | SortOrder
    favorite_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    embed_link?: EmbedLinksOrderByWithRelationInput
    favorite?: FavoriteOrderByWithRelationInput
    gallery?: GalleryOrderByWithRelationInput
    album?: AlbumPictureOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    uniquekey?: StringFilter<"Picture"> | string
    title?: StringFilter<"Picture"> | string
    description?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    is_favorited?: BoolFilter<"Picture"> | boolean
    filename?: StringFilter<"Picture"> | string
    extension?: StringFilter<"Picture"> | string
    expires_in?: IntNullableFilter<"Picture"> | number | null
    is_private?: BoolFilter<"Picture"> | boolean
    gallery_id?: IntFilter<"Picture"> | number
    album_picture_id?: IntNullableFilter<"Picture"> | number | null
    favorite_id?: IntNullableFilter<"Picture"> | number | null
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
    embed_link?: XOR<EmbedLinksNullableRelationFilter, EmbedLinksWhereInput> | null
    favorite?: XOR<FavoriteNullableRelationFilter, FavoriteWhereInput> | null
    gallery?: XOR<GalleryRelationFilter, GalleryWhereInput>
    album?: XOR<AlbumPictureNullableRelationFilter, AlbumPictureWhereInput> | null
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    uniquekey?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    is_favorited?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    expires_in?: SortOrderInput | SortOrder
    is_private?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrderInput | SortOrder
    favorite_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"Picture"> | number
    uniquekey?: StringWithAggregatesFilter<"Picture"> | string
    title?: StringWithAggregatesFilter<"Picture"> | string
    description?: StringWithAggregatesFilter<"Picture"> | string
    url?: StringWithAggregatesFilter<"Picture"> | string
    is_favorited?: BoolWithAggregatesFilter<"Picture"> | boolean
    filename?: StringWithAggregatesFilter<"Picture"> | string
    extension?: StringWithAggregatesFilter<"Picture"> | string
    expires_in?: IntNullableWithAggregatesFilter<"Picture"> | number | null
    is_private?: BoolWithAggregatesFilter<"Picture"> | boolean
    gallery_id?: IntWithAggregatesFilter<"Picture"> | number
    album_picture_id?: IntNullableWithAggregatesFilter<"Picture"> | number | null
    favorite_id?: IntNullableWithAggregatesFilter<"Picture"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
  }

  export type AlbumPictureWhereInput = {
    AND?: AlbumPictureWhereInput | AlbumPictureWhereInput[]
    OR?: AlbumPictureWhereInput[]
    NOT?: AlbumPictureWhereInput | AlbumPictureWhereInput[]
    id?: IntFilter<"AlbumPicture"> | number
    album_id?: IntFilter<"AlbumPicture"> | number
    createdAt?: DateTimeFilter<"AlbumPicture"> | Date | string
    updatedAt?: DateTimeFilter<"AlbumPicture"> | Date | string
    pictures?: PictureListRelationFilter
    album?: XOR<AlbumRelationFilter, AlbumWhereInput>
  }

  export type AlbumPictureOrderByWithRelationInput = {
    id?: SortOrder
    album_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pictures?: PictureOrderByRelationAggregateInput
    album?: AlbumOrderByWithRelationInput
  }

  export type AlbumPictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    album_id?: number
    AND?: AlbumPictureWhereInput | AlbumPictureWhereInput[]
    OR?: AlbumPictureWhereInput[]
    NOT?: AlbumPictureWhereInput | AlbumPictureWhereInput[]
    createdAt?: DateTimeFilter<"AlbumPicture"> | Date | string
    updatedAt?: DateTimeFilter<"AlbumPicture"> | Date | string
    pictures?: PictureListRelationFilter
    album?: XOR<AlbumRelationFilter, AlbumWhereInput>
  }, "id" | "album_id">

  export type AlbumPictureOrderByWithAggregationInput = {
    id?: SortOrder
    album_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumPictureCountOrderByAggregateInput
    _avg?: AlbumPictureAvgOrderByAggregateInput
    _max?: AlbumPictureMaxOrderByAggregateInput
    _min?: AlbumPictureMinOrderByAggregateInput
    _sum?: AlbumPictureSumOrderByAggregateInput
  }

  export type AlbumPictureScalarWhereWithAggregatesInput = {
    AND?: AlbumPictureScalarWhereWithAggregatesInput | AlbumPictureScalarWhereWithAggregatesInput[]
    OR?: AlbumPictureScalarWhereWithAggregatesInput[]
    NOT?: AlbumPictureScalarWhereWithAggregatesInput | AlbumPictureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlbumPicture"> | number
    album_id?: IntWithAggregatesFilter<"AlbumPicture"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AlbumPicture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlbumPicture"> | Date | string
  }

  export type SubcriptionWhereInput = {
    AND?: SubcriptionWhereInput | SubcriptionWhereInput[]
    OR?: SubcriptionWhereInput[]
    NOT?: SubcriptionWhereInput | SubcriptionWhereInput[]
    id?: IntFilter<"Subcription"> | number
    user_id?: IntFilter<"Subcription"> | number
    start_date?: DateTimeNullableFilter<"Subcription"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Subcription"> | Date | string | null
    next_payments_date?: DateTimeNullableFilter<"Subcription"> | Date | string | null
    order_id?: StringNullableFilter<"Subcription"> | string | null
    status?: EnumstatusFilter<"Subcription"> | $Enums.status
    plan?: EnumplanFilter<"Subcription"> | $Enums.plan
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubcriptionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    next_payments_date?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    status?: SortOrder
    plan?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubcriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: SubcriptionWhereInput | SubcriptionWhereInput[]
    OR?: SubcriptionWhereInput[]
    NOT?: SubcriptionWhereInput | SubcriptionWhereInput[]
    start_date?: DateTimeNullableFilter<"Subcription"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Subcription"> | Date | string | null
    next_payments_date?: DateTimeNullableFilter<"Subcription"> | Date | string | null
    order_id?: StringNullableFilter<"Subcription"> | string | null
    status?: EnumstatusFilter<"Subcription"> | $Enums.status
    plan?: EnumplanFilter<"Subcription"> | $Enums.plan
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type SubcriptionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    next_payments_date?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    status?: SortOrder
    plan?: SortOrder
    _count?: SubcriptionCountOrderByAggregateInput
    _avg?: SubcriptionAvgOrderByAggregateInput
    _max?: SubcriptionMaxOrderByAggregateInput
    _min?: SubcriptionMinOrderByAggregateInput
    _sum?: SubcriptionSumOrderByAggregateInput
  }

  export type SubcriptionScalarWhereWithAggregatesInput = {
    AND?: SubcriptionScalarWhereWithAggregatesInput | SubcriptionScalarWhereWithAggregatesInput[]
    OR?: SubcriptionScalarWhereWithAggregatesInput[]
    NOT?: SubcriptionScalarWhereWithAggregatesInput | SubcriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subcription"> | number
    user_id?: IntWithAggregatesFilter<"Subcription"> | number
    start_date?: DateTimeNullableWithAggregatesFilter<"Subcription"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Subcription"> | Date | string | null
    next_payments_date?: DateTimeNullableWithAggregatesFilter<"Subcription"> | Date | string | null
    order_id?: StringNullableWithAggregatesFilter<"Subcription"> | string | null
    status?: EnumstatusWithAggregatesFilter<"Subcription"> | $Enums.status
    plan?: EnumplanWithAggregatesFilter<"Subcription"> | $Enums.plan
  }

  export type EmbedLinksWhereInput = {
    AND?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    OR?: EmbedLinksWhereInput[]
    NOT?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    id?: IntFilter<"EmbedLinks"> | number
    html_link?: JsonFilter<"EmbedLinks">
    direct_link?: JsonFilter<"EmbedLinks">
    markdown_link?: JsonFilter<"EmbedLinks">
    picture_id?: IntFilter<"EmbedLinks"> | number
    picture?: XOR<PictureRelationFilter, PictureWhereInput>
  }

  export type EmbedLinksOrderByWithRelationInput = {
    id?: SortOrder
    html_link?: SortOrder
    direct_link?: SortOrder
    markdown_link?: SortOrder
    picture_id?: SortOrder
    picture?: PictureOrderByWithRelationInput
  }

  export type EmbedLinksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    picture_id?: number
    AND?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    OR?: EmbedLinksWhereInput[]
    NOT?: EmbedLinksWhereInput | EmbedLinksWhereInput[]
    html_link?: JsonFilter<"EmbedLinks">
    direct_link?: JsonFilter<"EmbedLinks">
    markdown_link?: JsonFilter<"EmbedLinks">
    picture?: XOR<PictureRelationFilter, PictureWhereInput>
  }, "id" | "picture_id">

  export type EmbedLinksOrderByWithAggregationInput = {
    id?: SortOrder
    html_link?: SortOrder
    direct_link?: SortOrder
    markdown_link?: SortOrder
    picture_id?: SortOrder
    _count?: EmbedLinksCountOrderByAggregateInput
    _avg?: EmbedLinksAvgOrderByAggregateInput
    _max?: EmbedLinksMaxOrderByAggregateInput
    _min?: EmbedLinksMinOrderByAggregateInput
    _sum?: EmbedLinksSumOrderByAggregateInput
  }

  export type EmbedLinksScalarWhereWithAggregatesInput = {
    AND?: EmbedLinksScalarWhereWithAggregatesInput | EmbedLinksScalarWhereWithAggregatesInput[]
    OR?: EmbedLinksScalarWhereWithAggregatesInput[]
    NOT?: EmbedLinksScalarWhereWithAggregatesInput | EmbedLinksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmbedLinks"> | number
    html_link?: JsonWithAggregatesFilter<"EmbedLinks">
    direct_link?: JsonWithAggregatesFilter<"EmbedLinks">
    markdown_link?: JsonWithAggregatesFilter<"EmbedLinks">
    picture_id?: IntWithAggregatesFilter<"EmbedLinks"> | number
  }

  export type UserCreateInput = {
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientKeyCreateInput = {
    client_id?: string | null
    client_secret?: string | null
    user: UserCreateNestedOneWithoutClient_keysInput
  }

  export type ClientKeyUncheckedCreateInput = {
    id?: number
    user_id: number
    client_id?: string | null
    client_secret?: string | null
  }

  export type ClientKeyUpdateInput = {
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClient_keysNestedInput
  }

  export type ClientKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientKeyCreateManyInput = {
    id?: number
    user_id: number
    client_id?: string | null
    client_secret?: string | null
  }

  export type ClientKeyUpdateManyMutationInput = {
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GalleryCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutGalleryInput
    user: UserCreateNestedOneWithoutGalleryInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutGalleryNestedInput
    user?: UserUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryCreateManyInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: AlbumPictureCreateNestedOneWithoutAlbumInput
    user: UserCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: AlbumPictureUncheckedCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: AlbumPictureUpdateOneWithoutAlbumNestedInput
    user?: UserUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: AlbumPictureUncheckedUpdateOneWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    title: string
    description: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutFavoriteInput
    user: UserCreateNestedOneWithoutFavorite_pictureInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    user_id: number
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutFavoriteInput
  }

  export type FavoriteUpdateInput = {
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutFavoriteNestedInput
    user?: UserUpdateOneRequiredWithoutFavorite_pictureNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutFavoriteNestedInput
  }

  export type FavoriteCreateManyInput = {
    id?: number
    user_id: number
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateInput = {
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksCreateNestedOneWithoutPictureInput
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
    album?: AlbumPictureCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    album_picture_id?: number | null
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureUpdateInput = {
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUpdateOneWithoutPictureNestedInput
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
    album?: AlbumPictureUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureCreateManyInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    album_picture_id?: number | null
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PictureUpdateManyMutationInput = {
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPictureCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutAlbumInput
    album: AlbumCreateNestedOneWithoutPicturesInput
  }

  export type AlbumPictureUncheckedCreateInput = {
    id?: number
    album_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumPictureUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutAlbumNestedInput
    album?: AlbumUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type AlbumPictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    album_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumPictureCreateManyInput = {
    id?: number
    album_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumPictureUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    album_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubcriptionCreateInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    next_payments_date?: Date | string | null
    order_id?: string | null
    status?: $Enums.status
    plan?: $Enums.plan
    user: UserCreateNestedOneWithoutSubcriptionInput
  }

  export type SubcriptionUncheckedCreateInput = {
    id?: number
    user_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    next_payments_date?: Date | string | null
    order_id?: string | null
    status?: $Enums.status
    plan?: $Enums.plan
  }

  export type SubcriptionUpdateInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_payments_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    plan?: EnumplanFieldUpdateOperationsInput | $Enums.plan
    user?: UserUpdateOneRequiredWithoutSubcriptionNestedInput
  }

  export type SubcriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_payments_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    plan?: EnumplanFieldUpdateOperationsInput | $Enums.plan
  }

  export type SubcriptionCreateManyInput = {
    id?: number
    user_id: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    next_payments_date?: Date | string | null
    order_id?: string | null
    status?: $Enums.status
    plan?: $Enums.plan
  }

  export type SubcriptionUpdateManyMutationInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_payments_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    plan?: EnumplanFieldUpdateOperationsInput | $Enums.plan
  }

  export type SubcriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_payments_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    plan?: EnumplanFieldUpdateOperationsInput | $Enums.plan
  }

  export type EmbedLinksCreateInput = {
    html_link: JsonNullValueInput | InputJsonValue
    direct_link: JsonNullValueInput | InputJsonValue
    markdown_link: JsonNullValueInput | InputJsonValue
    picture: PictureCreateNestedOneWithoutEmbed_linkInput
  }

  export type EmbedLinksUncheckedCreateInput = {
    id?: number
    html_link: JsonNullValueInput | InputJsonValue
    direct_link: JsonNullValueInput | InputJsonValue
    markdown_link: JsonNullValueInput | InputJsonValue
    picture_id: number
  }

  export type EmbedLinksUpdateInput = {
    html_link?: JsonNullValueInput | InputJsonValue
    direct_link?: JsonNullValueInput | InputJsonValue
    markdown_link?: JsonNullValueInput | InputJsonValue
    picture?: PictureUpdateOneRequiredWithoutEmbed_linkNestedInput
  }

  export type EmbedLinksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_link?: JsonNullValueInput | InputJsonValue
    direct_link?: JsonNullValueInput | InputJsonValue
    markdown_link?: JsonNullValueInput | InputJsonValue
    picture_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmbedLinksCreateManyInput = {
    id?: number
    html_link: JsonNullValueInput | InputJsonValue
    direct_link: JsonNullValueInput | InputJsonValue
    markdown_link: JsonNullValueInput | InputJsonValue
    picture_id: number
  }

  export type EmbedLinksUpdateManyMutationInput = {
    html_link?: JsonNullValueInput | InputJsonValue
    direct_link?: JsonNullValueInput | InputJsonValue
    markdown_link?: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_link?: JsonNullValueInput | InputJsonValue
    direct_link?: JsonNullValueInput | InputJsonValue
    markdown_link?: JsonNullValueInput | InputJsonValue
    picture_id?: IntFieldUpdateOperationsInput | number
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type ClientKeyNullableRelationFilter = {
    is?: ClientKeyWhereInput | null
    isNot?: ClientKeyWhereInput | null
  }

  export type GalleryNullableRelationFilter = {
    is?: GalleryWhereInput | null
    isNot?: GalleryWhereInput | null
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

  export type SubcriptionNullableRelationFilter = {
    is?: SubcriptionWhereInput | null
    isNot?: SubcriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    site_admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    site_admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    site_admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClientKeyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
  }

  export type ClientKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ClientKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
  }

  export type ClientKeyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    client_secret?: SortOrder
  }

  export type ClientKeySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GallerySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type AlbumPictureNullableRelationFilter = {
    is?: AlbumPictureWhereInput | null
    isNot?: AlbumPictureWhereInput | null
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    favorited_pictures?: SortOrder
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

  export type EmbedLinksNullableRelationFilter = {
    is?: EmbedLinksWhereInput | null
    isNot?: EmbedLinksWhereInput | null
  }

  export type GalleryRelationFilter = {
    is?: GalleryWhereInput
    isNot?: GalleryWhereInput
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    uniquekey?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    is_favorited?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    expires_in?: SortOrder
    is_private?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrder
    favorite_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PictureAvgOrderByAggregateInput = {
    id?: SortOrder
    expires_in?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrder
    favorite_id?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    uniquekey?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    is_favorited?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    expires_in?: SortOrder
    is_private?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrder
    favorite_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    uniquekey?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    is_favorited?: SortOrder
    filename?: SortOrder
    extension?: SortOrder
    expires_in?: SortOrder
    is_private?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrder
    favorite_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PictureSumOrderByAggregateInput = {
    id?: SortOrder
    expires_in?: SortOrder
    gallery_id?: SortOrder
    album_picture_id?: SortOrder
    favorite_id?: SortOrder
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

  export type AlbumRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumPictureCountOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumPictureAvgOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
  }

  export type AlbumPictureMaxOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumPictureMinOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumPictureSumOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type EnumplanFilter<$PrismaModel = never> = {
    equals?: $Enums.plan | EnumplanFieldRefInput<$PrismaModel>
    in?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    not?: NestedEnumplanFilter<$PrismaModel> | $Enums.plan
  }

  export type SubcriptionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    next_payments_date?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    plan?: SortOrder
  }

  export type SubcriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type SubcriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    next_payments_date?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    plan?: SortOrder
  }

  export type SubcriptionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    next_payments_date?: SortOrder
    order_id?: SortOrder
    status?: SortOrder
    plan?: SortOrder
  }

  export type SubcriptionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type EnumplanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan | EnumplanFieldRefInput<$PrismaModel>
    in?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    not?: NestedEnumplanWithAggregatesFilter<$PrismaModel> | $Enums.plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplanFilter<$PrismaModel>
    _max?: NestedEnumplanFilter<$PrismaModel>
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

  export type PictureRelationFilter = {
    is?: PictureWhereInput
    isNot?: PictureWhereInput
  }

  export type EmbedLinksCountOrderByAggregateInput = {
    id?: SortOrder
    html_link?: SortOrder
    direct_link?: SortOrder
    markdown_link?: SortOrder
    picture_id?: SortOrder
  }

  export type EmbedLinksAvgOrderByAggregateInput = {
    id?: SortOrder
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

  export type EmbedLinksSumOrderByAggregateInput = {
    id?: SortOrder
    picture_id?: SortOrder
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

  export type ClientKeyCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    connect?: ClientKeyWhereUniqueInput
  }

  export type GalleryCreateNestedOneWithoutUserInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    connect?: GalleryWhereUniqueInput
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

  export type SubcriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    connect?: SubcriptionWhereUniqueInput
  }

  export type ClientKeyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    connect?: ClientKeyWhereUniqueInput
  }

  export type GalleryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    connect?: GalleryWhereUniqueInput
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

  export type SubcriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    connect?: SubcriptionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type ClientKeyUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClientKeyCreateOrConnectWithoutUserInput
    upsert?: ClientKeyUpsertWithoutUserInput
    disconnect?: ClientKeyWhereInput | boolean
    delete?: ClientKeyWhereInput | boolean
    connect?: ClientKeyWhereUniqueInput
    update?: XOR<XOR<ClientKeyUpdateToOneWithWhereWithoutUserInput, ClientKeyUpdateWithoutUserInput>, ClientKeyUncheckedUpdateWithoutUserInput>
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

  export type SubcriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    upsert?: SubcriptionUpsertWithoutUserInput
    disconnect?: SubcriptionWhereInput | boolean
    delete?: SubcriptionWhereInput | boolean
    connect?: SubcriptionWhereUniqueInput
    update?: XOR<XOR<SubcriptionUpdateToOneWithWhereWithoutUserInput, SubcriptionUpdateWithoutUserInput>, SubcriptionUncheckedUpdateWithoutUserInput>
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

  export type GalleryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutUserInput
    upsert?: GalleryUpsertWithoutUserInput
    disconnect?: GalleryWhereInput | boolean
    delete?: GalleryWhereInput | boolean
    connect?: GalleryWhereUniqueInput
    update?: XOR<XOR<GalleryUpdateToOneWithWhereWithoutUserInput, GalleryUpdateWithoutUserInput>, GalleryUncheckedUpdateWithoutUserInput>
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

  export type SubcriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    upsert?: SubcriptionUpsertWithoutUserInput
    disconnect?: SubcriptionWhereInput | boolean
    delete?: SubcriptionWhereInput | boolean
    connect?: SubcriptionWhereUniqueInput
    update?: XOR<XOR<SubcriptionUpdateToOneWithWhereWithoutUserInput, SubcriptionUpdateWithoutUserInput>, SubcriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutClient_keysInput = {
    create?: XOR<UserCreateWithoutClient_keysInput, UserUncheckedCreateWithoutClient_keysInput>
    connectOrCreate?: UserCreateOrConnectWithoutClient_keysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutClient_keysNestedInput = {
    create?: XOR<UserCreateWithoutClient_keysInput, UserUncheckedCreateWithoutClient_keysInput>
    connectOrCreate?: UserCreateOrConnectWithoutClient_keysInput
    upsert?: UserUpsertWithoutClient_keysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClient_keysInput, UserUpdateWithoutClient_keysInput>, UserUncheckedUpdateWithoutClient_keysInput>
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

  export type AlbumPictureCreateNestedOneWithoutAlbumInput = {
    create?: XOR<AlbumPictureCreateWithoutAlbumInput, AlbumPictureUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: AlbumPictureCreateOrConnectWithoutAlbumInput
    connect?: AlbumPictureWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAlbumInput = {
    create?: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumPictureUncheckedCreateNestedOneWithoutAlbumInput = {
    create?: XOR<AlbumPictureCreateWithoutAlbumInput, AlbumPictureUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: AlbumPictureCreateOrConnectWithoutAlbumInput
    connect?: AlbumPictureWhereUniqueInput
  }

  export type AlbumPictureUpdateOneWithoutAlbumNestedInput = {
    create?: XOR<AlbumPictureCreateWithoutAlbumInput, AlbumPictureUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: AlbumPictureCreateOrConnectWithoutAlbumInput
    upsert?: AlbumPictureUpsertWithoutAlbumInput
    disconnect?: AlbumPictureWhereInput | boolean
    delete?: AlbumPictureWhereInput | boolean
    connect?: AlbumPictureWhereUniqueInput
    update?: XOR<XOR<AlbumPictureUpdateToOneWithWhereWithoutAlbumInput, AlbumPictureUpdateWithoutAlbumInput>, AlbumPictureUncheckedUpdateWithoutAlbumInput>
  }

  export type UserUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumInput
    upsert?: UserUpsertWithoutAlbumInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumInput, UserUpdateWithoutAlbumInput>, UserUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumPictureUncheckedUpdateOneWithoutAlbumNestedInput = {
    create?: XOR<AlbumPictureCreateWithoutAlbumInput, AlbumPictureUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: AlbumPictureCreateOrConnectWithoutAlbumInput
    upsert?: AlbumPictureUpsertWithoutAlbumInput
    disconnect?: AlbumPictureWhereInput | boolean
    delete?: AlbumPictureWhereInput | boolean
    connect?: AlbumPictureWhereUniqueInput
    update?: XOR<XOR<AlbumPictureUpdateToOneWithWhereWithoutAlbumInput, AlbumPictureUpdateWithoutAlbumInput>, AlbumPictureUncheckedUpdateWithoutAlbumInput>
  }

  export type PictureCreateNestedManyWithoutFavoriteInput = {
    create?: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput> | PictureCreateWithoutFavoriteInput[] | PictureUncheckedCreateWithoutFavoriteInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutFavoriteInput | PictureCreateOrConnectWithoutFavoriteInput[]
    createMany?: PictureCreateManyFavoriteInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFavorite_pictureInput = {
    create?: XOR<UserCreateWithoutFavorite_pictureInput, UserUncheckedCreateWithoutFavorite_pictureInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavorite_pictureInput
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

  export type UserUpdateOneRequiredWithoutFavorite_pictureNestedInput = {
    create?: XOR<UserCreateWithoutFavorite_pictureInput, UserUncheckedCreateWithoutFavorite_pictureInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavorite_pictureInput
    upsert?: UserUpsertWithoutFavorite_pictureInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavorite_pictureInput, UserUpdateWithoutFavorite_pictureInput>, UserUncheckedUpdateWithoutFavorite_pictureInput>
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

  export type AlbumPictureCreateNestedOneWithoutPicturesInput = {
    create?: XOR<AlbumPictureCreateWithoutPicturesInput, AlbumPictureUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AlbumPictureCreateOrConnectWithoutPicturesInput
    connect?: AlbumPictureWhereUniqueInput
  }

  export type EmbedLinksUncheckedCreateNestedOneWithoutPictureInput = {
    create?: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
    connectOrCreate?: EmbedLinksCreateOrConnectWithoutPictureInput
    connect?: EmbedLinksWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type AlbumPictureUpdateOneWithoutPicturesNestedInput = {
    create?: XOR<AlbumPictureCreateWithoutPicturesInput, AlbumPictureUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AlbumPictureCreateOrConnectWithoutPicturesInput
    upsert?: AlbumPictureUpsertWithoutPicturesInput
    disconnect?: AlbumPictureWhereInput | boolean
    delete?: AlbumPictureWhereInput | boolean
    connect?: AlbumPictureWhereUniqueInput
    update?: XOR<XOR<AlbumPictureUpdateToOneWithWhereWithoutPicturesInput, AlbumPictureUpdateWithoutPicturesInput>, AlbumPictureUncheckedUpdateWithoutPicturesInput>
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

  export type PictureCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput> | PictureCreateWithoutAlbumInput[] | PictureUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAlbumInput | PictureCreateOrConnectWithoutAlbumInput[]
    createMany?: PictureCreateManyAlbumInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type AlbumCreateNestedOneWithoutPicturesInput = {
    create?: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPicturesInput
    connect?: AlbumWhereUniqueInput
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

  export type AlbumUpdateOneRequiredWithoutPicturesNestedInput = {
    create?: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPicturesInput
    upsert?: AlbumUpsertWithoutPicturesInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutPicturesInput, AlbumUpdateWithoutPicturesInput>, AlbumUncheckedUpdateWithoutPicturesInput>
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

  export type UserCreateNestedOneWithoutSubcriptionInput = {
    create?: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubcriptionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type EnumplanFieldUpdateOperationsInput = {
    set?: $Enums.plan
  }

  export type UserUpdateOneRequiredWithoutSubcriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubcriptionInput
    upsert?: UserUpsertWithoutSubcriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubcriptionInput, UserUpdateWithoutSubcriptionInput>, UserUncheckedUpdateWithoutSubcriptionInput>
  }

  export type PictureCreateNestedOneWithoutEmbed_linkInput = {
    create?: XOR<PictureCreateWithoutEmbed_linkInput, PictureUncheckedCreateWithoutEmbed_linkInput>
    connectOrCreate?: PictureCreateOrConnectWithoutEmbed_linkInput
    connect?: PictureWhereUniqueInput
  }

  export type PictureUpdateOneRequiredWithoutEmbed_linkNestedInput = {
    create?: XOR<PictureCreateWithoutEmbed_linkInput, PictureUncheckedCreateWithoutEmbed_linkInput>
    connectOrCreate?: PictureCreateOrConnectWithoutEmbed_linkInput
    upsert?: PictureUpsertWithoutEmbed_linkInput
    connect?: PictureWhereUniqueInput
    update?: XOR<XOR<PictureUpdateToOneWithWhereWithoutEmbed_linkInput, PictureUpdateWithoutEmbed_linkInput>, PictureUncheckedUpdateWithoutEmbed_linkInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumplanFilter<$PrismaModel = never> = {
    equals?: $Enums.plan | EnumplanFieldRefInput<$PrismaModel>
    in?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    not?: NestedEnumplanFilter<$PrismaModel> | $Enums.plan
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedEnumplanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan | EnumplanFieldRefInput<$PrismaModel>
    in?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    notIn?: $Enums.plan[] | ListEnumplanFieldRefInput<$PrismaModel>
    not?: NestedEnumplanWithAggregatesFilter<$PrismaModel> | $Enums.plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplanFilter<$PrismaModel>
    _max?: NestedEnumplanFilter<$PrismaModel>
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

  export type ClientKeyCreateWithoutUserInput = {
    client_id?: string | null
    client_secret?: string | null
  }

  export type ClientKeyUncheckedCreateWithoutUserInput = {
    id?: number
    client_id?: string | null
    client_secret?: string | null
  }

  export type ClientKeyCreateOrConnectWithoutUserInput = {
    where: ClientKeyWhereUniqueInput
    create: XOR<ClientKeyCreateWithoutUserInput, ClientKeyUncheckedCreateWithoutUserInput>
  }

  export type GalleryCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryCreateOrConnectWithoutUserInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutUserInput, GalleryUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateWithoutUserInput = {
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: number
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutFavoriteInput
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type AlbumCreateWithoutUserInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: AlbumPictureCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: AlbumPictureUncheckedCreateNestedOneWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutUserInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput>
  }

  export type AlbumCreateManyUserInputEnvelope = {
    data: AlbumCreateManyUserInput | AlbumCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubcriptionCreateWithoutUserInput = {
    start_date?: Date | string | null
    end_date?: Date | string | null
    next_payments_date?: Date | string | null
    order_id?: string | null
    status?: $Enums.status
    plan?: $Enums.plan
  }

  export type SubcriptionUncheckedCreateWithoutUserInput = {
    id?: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    next_payments_date?: Date | string | null
    order_id?: string | null
    status?: $Enums.status
    plan?: $Enums.plan
  }

  export type SubcriptionCreateOrConnectWithoutUserInput = {
    where: SubcriptionWhereUniqueInput
    create: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
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
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientKeyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutGalleryNestedInput
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
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    id?: IntFilter<"Album"> | number
    title?: StringFilter<"Album"> | string
    description?: StringFilter<"Album"> | string
    user_id?: IntFilter<"Album"> | number
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
  }

  export type SubcriptionUpsertWithoutUserInput = {
    update: XOR<SubcriptionUpdateWithoutUserInput, SubcriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    where?: SubcriptionWhereInput
  }

  export type SubcriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubcriptionWhereInput
    data: XOR<SubcriptionUpdateWithoutUserInput, SubcriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubcriptionUpdateWithoutUserInput = {
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_payments_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    plan?: EnumplanFieldUpdateOperationsInput | $Enums.plan
  }

  export type SubcriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_payments_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    plan?: EnumplanFieldUpdateOperationsInput | $Enums.plan
  }

  export type UserCreateWithoutClient_keysInput = {
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: GalleryCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClient_keysInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClient_keysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClient_keysInput, UserUncheckedCreateWithoutClient_keysInput>
  }

  export type UserUpsertWithoutClient_keysInput = {
    update: XOR<UserUpdateWithoutClient_keysInput, UserUncheckedUpdateWithoutClient_keysInput>
    create: XOR<UserCreateWithoutClient_keysInput, UserUncheckedCreateWithoutClient_keysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClient_keysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClient_keysInput, UserUncheckedUpdateWithoutClient_keysInput>
  }

  export type UserUpdateWithoutClient_keysInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClient_keysInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PictureCreateWithoutGalleryInput = {
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksCreateNestedOneWithoutPictureInput
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    album?: AlbumPictureCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutGalleryInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    album_picture_id?: number | null
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
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
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGalleryInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
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

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: IntFilter<"Picture"> | number
    uniquekey?: StringFilter<"Picture"> | string
    title?: StringFilter<"Picture"> | string
    description?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    is_favorited?: BoolFilter<"Picture"> | boolean
    filename?: StringFilter<"Picture"> | string
    extension?: StringFilter<"Picture"> | string
    expires_in?: IntNullableFilter<"Picture"> | number | null
    is_private?: BoolFilter<"Picture"> | boolean
    gallery_id?: IntFilter<"Picture"> | number
    album_picture_id?: IntNullableFilter<"Picture"> | number | null
    favorite_id?: IntNullableFilter<"Picture"> | number | null
    createdAt?: DateTimeFilter<"Picture"> | Date | string
    updatedAt?: DateTimeFilter<"Picture"> | Date | string
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
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AlbumPictureCreateWithoutAlbumInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureCreateNestedManyWithoutAlbumInput
  }

  export type AlbumPictureUncheckedCreateWithoutAlbumInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumPictureCreateOrConnectWithoutAlbumInput = {
    where: AlbumPictureWhereUniqueInput
    create: XOR<AlbumPictureCreateWithoutAlbumInput, AlbumPictureUncheckedCreateWithoutAlbumInput>
  }

  export type UserCreateWithoutAlbumInput = {
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteCreateNestedOneWithoutUserInput
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlbumInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlbumInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumInput, UserUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumPictureUpsertWithoutAlbumInput = {
    update: XOR<AlbumPictureUpdateWithoutAlbumInput, AlbumPictureUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumPictureCreateWithoutAlbumInput, AlbumPictureUncheckedCreateWithoutAlbumInput>
    where?: AlbumPictureWhereInput
  }

  export type AlbumPictureUpdateToOneWithWhereWithoutAlbumInput = {
    where?: AlbumPictureWhereInput
    data: XOR<AlbumPictureUpdateWithoutAlbumInput, AlbumPictureUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumPictureUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumPictureUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutAlbumNestedInput
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
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUpdateOneWithoutUserNestedInput
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PictureCreateWithoutFavoriteInput = {
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksCreateNestedOneWithoutPictureInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
    album?: AlbumPictureCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutFavoriteInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    album_picture_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureCreateOrConnectWithoutFavoriteInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutFavoriteInput, PictureUncheckedCreateWithoutFavoriteInput>
  }

  export type PictureCreateManyFavoriteInputEnvelope = {
    data: PictureCreateManyFavoriteInput | PictureCreateManyFavoriteInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFavorite_pictureInput = {
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavorite_pictureInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavorite_pictureInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavorite_pictureInput, UserUncheckedCreateWithoutFavorite_pictureInput>
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

  export type UserUpsertWithoutFavorite_pictureInput = {
    update: XOR<UserUpdateWithoutFavorite_pictureInput, UserUncheckedUpdateWithoutFavorite_pictureInput>
    create: XOR<UserCreateWithoutFavorite_pictureInput, UserUncheckedCreateWithoutFavorite_pictureInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavorite_pictureInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavorite_pictureInput, UserUncheckedUpdateWithoutFavorite_pictureInput>
  }

  export type UserUpdateWithoutFavorite_pictureInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavorite_pictureInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EmbedLinksCreateWithoutPictureInput = {
    html_link: JsonNullValueInput | InputJsonValue
    direct_link: JsonNullValueInput | InputJsonValue
    markdown_link: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksUncheckedCreateWithoutPictureInput = {
    id?: number
    html_link: JsonNullValueInput | InputJsonValue
    direct_link: JsonNullValueInput | InputJsonValue
    markdown_link: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksCreateOrConnectWithoutPictureInput = {
    where: EmbedLinksWhereUniqueInput
    create: XOR<EmbedLinksCreateWithoutPictureInput, EmbedLinksUncheckedCreateWithoutPictureInput>
  }

  export type FavoriteCreateWithoutPicturesInput = {
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFavorite_pictureInput
  }

  export type FavoriteUncheckedCreateWithoutPicturesInput = {
    id?: number
    user_id: number
    favorited_pictures: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutPicturesInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPicturesInput, FavoriteUncheckedCreateWithoutPicturesInput>
  }

  export type GalleryCreateWithoutPicturesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGalleryInput
  }

  export type GalleryUncheckedCreateWithoutPicturesInput = {
    id?: number
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryCreateOrConnectWithoutPicturesInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutPicturesInput, GalleryUncheckedCreateWithoutPicturesInput>
  }

  export type AlbumPictureCreateWithoutPicturesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutPicturesInput
  }

  export type AlbumPictureUncheckedCreateWithoutPicturesInput = {
    id?: number
    album_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumPictureCreateOrConnectWithoutPicturesInput = {
    where: AlbumPictureWhereUniqueInput
    create: XOR<AlbumPictureCreateWithoutPicturesInput, AlbumPictureUncheckedCreateWithoutPicturesInput>
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
    html_link?: JsonNullValueInput | InputJsonValue
    direct_link?: JsonNullValueInput | InputJsonValue
    markdown_link?: JsonNullValueInput | InputJsonValue
  }

  export type EmbedLinksUncheckedUpdateWithoutPictureInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_link?: JsonNullValueInput | InputJsonValue
    direct_link?: JsonNullValueInput | InputJsonValue
    markdown_link?: JsonNullValueInput | InputJsonValue
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
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavorite_pictureNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    favorited_pictures?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumPictureUpsertWithoutPicturesInput = {
    update: XOR<AlbumPictureUpdateWithoutPicturesInput, AlbumPictureUncheckedUpdateWithoutPicturesInput>
    create: XOR<AlbumPictureCreateWithoutPicturesInput, AlbumPictureUncheckedCreateWithoutPicturesInput>
    where?: AlbumPictureWhereInput
  }

  export type AlbumPictureUpdateToOneWithWhereWithoutPicturesInput = {
    where?: AlbumPictureWhereInput
    data: XOR<AlbumPictureUpdateWithoutPicturesInput, AlbumPictureUncheckedUpdateWithoutPicturesInput>
  }

  export type AlbumPictureUpdateWithoutPicturesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type AlbumPictureUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    album_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateWithoutAlbumInput = {
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksCreateNestedOneWithoutPictureInput
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutAlbumInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embed_link?: EmbedLinksUncheckedCreateNestedOneWithoutPictureInput
  }

  export type PictureCreateOrConnectWithoutAlbumInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutAlbumInput, PictureUncheckedCreateWithoutAlbumInput>
  }

  export type PictureCreateManyAlbumInputEnvelope = {
    data: PictureCreateManyAlbumInput | PictureCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type AlbumCreateWithoutPicturesInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutPicturesInput = {
    id?: number
    title: string
    description: string
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumCreateOrConnectWithoutPicturesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutPicturesInput, AlbumUncheckedCreateWithoutPicturesInput>
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
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutPicturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSubcriptionInput = {
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyCreateNestedOneWithoutUserInput
    gallery?: GalleryCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteCreateNestedOneWithoutUserInput
    album?: AlbumCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubcriptionInput = {
    id?: number
    provider_id: number
    name: string
    email?: string | null
    password?: string | null
    picture: string
    type?: $Enums.UserType
    bio: string
    site_admin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client_keys?: ClientKeyUncheckedCreateNestedOneWithoutUserInput
    gallery?: GalleryUncheckedCreateNestedOneWithoutUserInput
    favorite_picture?: FavoriteUncheckedCreateNestedOneWithoutUserInput
    album?: AlbumUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubcriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
  }

  export type UserUpsertWithoutSubcriptionInput = {
    update: XOR<UserUpdateWithoutSubcriptionInput, UserUncheckedUpdateWithoutSubcriptionInput>
    create: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubcriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubcriptionInput, UserUncheckedUpdateWithoutSubcriptionInput>
  }

  export type UserUpdateWithoutSubcriptionInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUpdateOneWithoutUserNestedInput
    gallery?: GalleryUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUpdateOneWithoutUserNestedInput
    album?: AlbumUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubcriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    bio?: StringFieldUpdateOperationsInput | string
    site_admin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client_keys?: ClientKeyUncheckedUpdateOneWithoutUserNestedInput
    gallery?: GalleryUncheckedUpdateOneWithoutUserNestedInput
    favorite_picture?: FavoriteUncheckedUpdateOneWithoutUserNestedInput
    album?: AlbumUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PictureCreateWithoutEmbed_linkInput = {
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    favorite?: FavoriteCreateNestedOneWithoutPicturesInput
    gallery: GalleryCreateNestedOneWithoutPicturesInput
    album?: AlbumPictureCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutEmbed_linkInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    album_picture_id?: number | null
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PictureCreateOrConnectWithoutEmbed_linkInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutEmbed_linkInput, PictureUncheckedCreateWithoutEmbed_linkInput>
  }

  export type PictureUpsertWithoutEmbed_linkInput = {
    update: XOR<PictureUpdateWithoutEmbed_linkInput, PictureUncheckedUpdateWithoutEmbed_linkInput>
    create: XOR<PictureCreateWithoutEmbed_linkInput, PictureUncheckedCreateWithoutEmbed_linkInput>
    where?: PictureWhereInput
  }

  export type PictureUpdateToOneWithWhereWithoutEmbed_linkInput = {
    where?: PictureWhereInput
    data: XOR<PictureUpdateWithoutEmbed_linkInput, PictureUncheckedUpdateWithoutEmbed_linkInput>
  }

  export type PictureUpdateWithoutEmbed_linkInput = {
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
    album?: AlbumPictureUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutEmbed_linkInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateManyUserInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: AlbumPictureUpdateOneWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: AlbumPictureUncheckedUpdateOneWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateManyGalleryInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    album_picture_id?: number | null
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PictureUpdateWithoutGalleryInput = {
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUpdateOneWithoutPictureNestedInput
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    album?: AlbumPictureUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateManyWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateManyFavoriteInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    album_picture_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PictureUpdateWithoutFavoriteInput = {
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUpdateOneWithoutPictureNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
    album?: AlbumPictureUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateManyWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    album_picture_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateManyAlbumInput = {
    id?: number
    uniquekey?: string
    title: string
    description: string
    url: string
    is_favorited: boolean
    filename: string
    extension: string
    expires_in?: number | null
    is_private?: boolean
    gallery_id: number
    favorite_id?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PictureUpdateWithoutAlbumInput = {
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUpdateOneWithoutPictureNestedInput
    favorite?: FavoriteUpdateOneWithoutPicturesNestedInput
    gallery?: GalleryUpdateOneRequiredWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embed_link?: EmbedLinksUncheckedUpdateOneWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniquekey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    filename?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    gallery_id?: IntFieldUpdateOperationsInput | number
    favorite_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryCountOutputTypeDefaultArgs instead
     */
    export type GalleryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteCountOutputTypeDefaultArgs instead
     */
    export type FavoriteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumPictureCountOutputTypeDefaultArgs instead
     */
    export type AlbumPictureCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumPictureCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientKeyDefaultArgs instead
     */
    export type ClientKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GalleryDefaultArgs instead
     */
    export type GalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GalleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumDefaultArgs instead
     */
    export type AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteDefaultArgs instead
     */
    export type FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PictureDefaultArgs instead
     */
    export type PictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PictureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumPictureDefaultArgs instead
     */
    export type AlbumPictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumPictureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubcriptionDefaultArgs instead
     */
    export type SubcriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubcriptionDefaultArgs<ExtArgs>
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