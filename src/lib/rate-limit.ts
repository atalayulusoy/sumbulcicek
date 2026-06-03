type RateLimitState = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitState>();

interface RateLimitOptions {
  key: string;
  limit?: number;
  windowMs?: number;
}

export function getRequestIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "127.0.0.1";
  }

  return request.headers.get("x-real-ip") ?? "127.0.0.1";
}

export function checkRateLimit({
  key,
  limit = 10,
  windowMs = 60_000,
}: RateLimitOptions) {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt < now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return { success: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { success: false, remaining: 0, retryAfter: existing.resetAt - now };
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);

  return { success: true, remaining: limit - existing.count };
}
