/**
 * In-memory sliding-window rate limiter.
 *
 * Works per-process (warm serverless instances, single-server deployments).
 * Sufficient for protecting low-traffic endpoints like a contact form.
 */

interface RateLimitConfig {
  /** Max requests allowed within the window */
  limit: number;
  /** Window duration in milliseconds */
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  /** Requests remaining in the current window */
  remaining: number;
  /** Epoch ms when the oldest request in the window expires */
  resetAt: number;
}

// Map of key → sorted list of request timestamps
const store = new Map<string, number[]>();

// Periodically purge expired entries to prevent unbounded memory growth
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of store.entries()) {
    // If the newest timestamp is old enough, the key is fully expired
    if (timestamps.length === 0 || now - timestamps[timestamps.length - 1] > 60 * 60 * 1000) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000); // run every 5 minutes

export function rateLimit(key: string, config: RateLimitConfig): RateLimitResult {
  const { limit, windowMs } = config;
  const now = Date.now();
  const windowStart = now - windowMs;

  // Get existing timestamps for this key, drop anything outside the window
  const timestamps = (store.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: timestamps[0] + windowMs,
    };
  }

  timestamps.push(now);
  store.set(key, timestamps);

  return {
    success: true,
    remaining: limit - timestamps.length,
    resetAt: timestamps[0] + windowMs,
  };
}
