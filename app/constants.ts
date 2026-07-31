import type { Locale } from '@/app/types';

// Localization ////////////////////////////////////////////////////////////////////////////////////

export const LOCALE_EN_CA = 'en-CA' as const satisfies Locale;
export const LOCALE_EN_US = 'en-US' as const satisfies Locale;
export const LOCALE_ES_MX = 'es-MX' as const satisfies Locale;
export const LOCALE_ES_US = 'es-US' as const satisfies Locale;
export const LOCALE_FR_CA = 'fr-CA' as const satisfies Locale;

export const ALL_LOCALES: Locale[] = [
  LOCALE_EN_CA,
  LOCALE_EN_US,
  LOCALE_ES_MX,
  LOCALE_ES_US,
  LOCALE_FR_CA,
] as const;

// HTTP Status Codes ///////////////////////////////////////////////////////////////////////////////

// 2xx Success

/** The request succeeded. Standard response for successful GET, PUT, PATCH, DELETE requests. */
export const HTTP_OK = 200 as const;

/** The request succeeded and a new resource was created as a result (POST). */
export const HTTP_CREATED = 201 as const;

/** The request has been accepted for processing, but the processing has not been completed. */
export const HTTP_ACCEPTED = 202 as const;

/**
 * The server successfully processed the request and is not returning any content (common
 * for DELETE).
 */
export const HTTP_NO_CONTENT = 204 as const;

// 3xx Redirection

/** The request has more than one possible response. Rarely used in modern APIs. */
export const HTTP_MULTIPLE_CHOICES = 300 as const;

/** The resource has been permanently moved to a new URL. */
export const HTTP_MOVED_PERMANENTLY = 301 as const;

/** The resource has been temporarily moved to a new URL (most common redirect). */
export const HTTP_FOUND = 302 as const;

/** The response to the request can be found under another URI. Often used after POST. */
export const HTTP_SEE_OTHER = 303 as const;

/** The resource has not been modified since the last request (caching). */
export const HTTP_NOT_MODIFIED = 304 as const;

/** The resource has been temporarily moved to a new URL (HTTP/1.1 standard). */
export const HTTP_TEMPORARY_REDIRECT = 307 as const;

/** The resource has been permanently moved to a new URL (HTTP/1.1 standard). */
export const HTTP_PERMANENT_REDIRECT = 308 as const;

// 4xx Client Errors

/**
 * The server cannot or will not process the request due to something that is perceived to be
 * a client error.
 */
export const HTTP_BAD_REQUEST = 400 as const;

/**
 * The request has not been applied because it lacks valid authentication credentials for the
 * target resource.
 */
export const HTTP_UNAUTHORIZED = 401 as const;

/** The server understood the request but refuses to authorize it. */
export const HTTP_FORBIDDEN = 403 as const;

/** The origin server did not find a current representation for the target resource. */
export const HTTP_NOT_FOUND = 404 as const;

/**
 * The method received in the request-line is known by the origin server but not supported by
 * the target resource.
 */
export const HTTP_METHOD_NOT_ALLOWED = 405 as const;

/**
 * The server did not receive a complete request message within the time that it was prepared
 * to wait.
 */
export const HTTP_REQUEST_TIMEOUT = 408 as const;

/**
 * The request could not be completed due to a conflict with the current state of the target
 * resource.
 */
export const HTTP_CONFLICT = 409 as const;

/**
 * The target resource is no longer available at the origin server and this condition is likely
 * to be permanent.
 */
export const HTTP_GONE = 410 as const;

/**
 * The server is refusing to process a request because the request payload is larger than the
 * server is willing or able to process.
 */
export const HTTP_PAYLOAD_TOO_LARGE = 413 as const;

/**
 * The server is refusing to service the request because the payload is in a format not supported
 * by this method on the target resource.
 */
export const HTTP_UNSUPPORTED_MEDIA_TYPE = 415 as const;

/**
 * The server understands the content type of the request entity, and the syntax of the request
 * entity is correct, but it was unable to process the contained instructions. (Very popular for
 * validation errors)
 */
export const HTTP_UNPROCESSABLE_ENTITY = 422 as const;

/** The user has sent too many requests in a given amount of time ("rate limiting"). */
export const HTTP_TOO_MANY_REQUESTS = 429 as const;

// 5xx Server Errors

/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
export const HTTP_INTERNAL_SERVER_ERROR = 500 as const;

/** The server does not support the functionality required to fulfill the request. */
export const HTTP_NOT_IMPLEMENTED = 501 as const;

/**
 * The server, while acting as a gateway or proxy, received an invalid response from the upstream
 * server.
 */
export const HTTP_BAD_GATEWAY = 502 as const;

/**
 * The server is currently unable to handle the request due to a temporary overload or
 * maintenance.
 */
export const HTTP_SERVICE_UNAVAILABLE = 503 as const;

/**
 * The server, while acting as a gateway or proxy, did not receive a timely response from the
 * upstream server.
 */
export const HTTP_GATEWAY_TIMEOUT = 504 as const;
