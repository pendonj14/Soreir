# k6 Run — reservation.k6.js

- **Date:** 2026-05-14
- **Script:** `loadtests/reservation.k6.js`
- **Target:** `http://localhost:4000` (local dev, rate limiter disabled)
- **k6 version:** v2.0.0 (windows/amd64)
- **Scenario:** `ten_concurrent` — 10 constant VUs for 15s
- **Auth:** logged in once in `setup()`, token shared across VUs

## Thresholds — all passed

| Threshold                            | Result            |
| ------------------------------------ | ----------------- |
| `http_req_failed` rate < 0.05        | 0.00%             |
| `reservation_latency_ms` p(95) < 1500 | 279.83 ms         |
| `reservation_success` rate > 0.95    | 100.00%           |

## Checks

- `status is 201` — 140/140
- `has reservation id` — 140/140
- **Total:** 280/280 (100%)

## Latency (reservation_latency_ms)

| Stat | Value      |
| ---- | ---------- |
| avg  | 94.13 ms   |
| min  | 69.39 ms   |
| med  | 72.80 ms   |
| p(90) | 93.40 ms  |
| p(95) | 279.83 ms |
| max  | 468.20 ms |

## HTTP

- `http_req_duration` avg: 94.27 ms, p(95): 279.68 ms, max: 468.20 ms
- `http_req_failed`: 0.00% (0/141)
- `http_reqs`: 141 total, 9.04 req/s

## Execution

- Iterations: 140 complete, 0 interrupted (8.97 iter/s)
- Iteration duration: avg 1.09s, p(95) 1.28s (each VU sleeps 1s per iter)
- VUs: 10/10 throughout

## Network

- Received: 203 kB (13 kB/s)
- Sent: 74 kB (4.7 kB/s)

## Raw thresholds output

```
http_req_failed
  ✓ 'rate<0.05' rate=0.00%

reservation_latency_ms
  ✓ 'p(95)<1500' p(95)=279.83ms

reservation_success
  ✓ 'rate>0.95' rate=100.00%
```
