
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
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

exports.Prisma.PaymentsHistoryScalarFieldEnum = {
  id: 'id',
  plan: 'plan',
  interval_count: 'interval_count',
  status: 'status',
  amount: 'amount',
  order_id: 'order_id',
  order_date: 'order_date',
  user_id: 'user_id'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
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

exports.Prisma.ClientKeyScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  client_secret: 'client_secret',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  total: 'total',
  user_id: 'user_id'
};

exports.Prisma.GalleryScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  user_id: 'user_id'
};

exports.Prisma.AlbumScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  thumbnail: 'thumbnail',
  user_id: 'user_id'
};

exports.Prisma.PictureScalarFieldEnum = {
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

exports.Prisma.EmbedLinksScalarFieldEnum = {
  id: 'id',
  html_links: 'html_links',
  direct_links: 'direct_links',
  markdown_links: 'markdown_links',
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
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
  bio: 'bio'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.PaymentsHistoryOrderByRelevanceFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  user_id: 'user_id'
};

exports.Prisma.SubscriptionOrderByRelevanceFieldEnum = {
  id: 'id',
  payment_id: 'payment_id',
  interval: 'interval',
  user_id: 'user_id'
};

exports.Prisma.ClientKeyOrderByRelevanceFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  client_secret: 'client_secret',
  user_id: 'user_id'
};

exports.Prisma.FavoriteOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id'
};

exports.Prisma.GalleryOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id'
};

exports.Prisma.AlbumOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  thumbnail: 'thumbnail',
  user_id: 'user_id'
};

exports.Prisma.PictureOrderByRelevanceFieldEnum = {
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

exports.Prisma.EmbedLinksOrderByRelevanceFieldEnum = {
  id: 'id',
  picture_id: 'picture_id'
};
exports.UserType = exports.$Enums.UserType = {
  User: 'User',
  Admin: 'Admin',
  Owner: 'Owner'
};

exports.UserPlan = exports.$Enums.UserPlan = {
  None: 'None',
  Gold: 'Gold',
  Diamond: 'Diamond',
  Netherite: 'Netherite'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  Success: 'Success',
  Failed: 'Failed',
  Pending: 'Pending'
};

exports.SubscriptionStatus = exports.$Enums.SubscriptionStatus = {
  Active: 'Active',
  Inactive: 'Inactive'
};

exports.PictureType = exports.$Enums.PictureType = {
  Internal: 'Internal',
  External: 'External'
};

exports.PictureStatus = exports.$Enums.PictureStatus = {
  Public: 'Public',
  Private: 'Private'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
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
