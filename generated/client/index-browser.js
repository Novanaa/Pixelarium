
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  provider_id: 'provider_id',
  name: 'name',
  email: 'email',
  password: 'password',
  picture: 'picture',
  type: 'type',
  bio: 'bio',
  site_admin: 'site_admin',
  is_member: 'is_member',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientKeyScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  client_id: 'client_id',
  client_secret: 'client_secret'
};

exports.Prisma.GalleryScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AlbumScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  is_private: 'is_private',
  thumbnail: 'thumbnail',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  favorited_pictures: 'favorited_pictures',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PictureScalarFieldEnum = {
  id: 'id',
  uniquekey: 'uniquekey',
  title: 'title',
  description: 'description',
  url: 'url',
  filename: 'filename',
  extension: 'extension',
  expires_in: 'expires_in',
  is_external_picture: 'is_external_picture',
  is_private: 'is_private',
  gallery_id: 'gallery_id',
  album_id: 'album_id',
  favorite_id: 'favorite_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  start_date: 'start_date',
  end_date: 'end_date',
  next_payments_date: 'next_payments_date',
  payment_id: 'payment_id',
  interval: 'interval',
  interval_count: 'interval_count',
  status: 'status',
  plan: 'plan'
};

exports.Prisma.PaymentsHistoryScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  order_id: 'order_id',
  plan: 'plan',
  interval_count: 'interval_count',
  amount: 'amount',
  status: 'status',
  order_date: 'order_date'
};

exports.Prisma.EmbedLinksScalarFieldEnum = {
  id: 'id',
  html_link: 'html_link',
  direct_link: 'direct_link',
  markdown_link: 'markdown_link',
  picture_id: 'picture_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  password: 'password',
  picture: 'picture',
  bio: 'bio'
};

exports.Prisma.ClientKeyOrderByRelevanceFieldEnum = {
  client_id: 'client_id',
  client_secret: 'client_secret'
};

exports.Prisma.AlbumOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description',
  thumbnail: 'thumbnail'
};

exports.Prisma.PictureOrderByRelevanceFieldEnum = {
  uniquekey: 'uniquekey',
  title: 'title',
  description: 'description',
  url: 'url',
  filename: 'filename',
  extension: 'extension'
};

exports.Prisma.SubscriptionOrderByRelevanceFieldEnum = {
  payment_id: 'payment_id',
  interval: 'interval'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.PaymentsHistoryOrderByRelevanceFieldEnum = {
  order_id: 'order_id'
};
exports.UserType = exports.$Enums.UserType = {
  User: 'User',
  Admin: 'Admin',
  Owner: 'Owner'
};

exports.status = exports.$Enums.status = {
  deactive: 'deactive',
  active: 'active'
};

exports.plan = exports.$Enums.plan = {
  none: 'none',
  Gold: 'Gold',
  Diamond: 'Diamond',
  Netherite: 'Netherite'
};

exports.subscriptionStatus = exports.$Enums.subscriptionStatus = {
  failed: 'failed',
  success: 'success',
  pending: 'pending'
};

exports.Prisma.ModelName = {
  User: 'User',
  ClientKey: 'ClientKey',
  Gallery: 'Gallery',
  Album: 'Album',
  Favorite: 'Favorite',
  Picture: 'Picture',
  Subscription: 'Subscription',
  PaymentsHistory: 'PaymentsHistory',
  EmbedLinks: 'EmbedLinks'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
