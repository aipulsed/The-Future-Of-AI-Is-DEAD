# Enterprise Readiness Plan (2026)

## Objective

Provide a non-destructive, additive roadmap to take this Next.js funnel application from a functional demo/scaffold to an enterprise production platform that is ready to deploy, operate, and sell.

## Current State Summary

The project route structure is broadly aligned with the business scope in the root README, but critical production subsystems are still placeholder-level.

Key findings:

1. Core APIs contain TODO placeholders and log-only behavior.
2. Dashboard and license surfaces use mock data, not persisted records.
3. Stripe webhook lifecycle is partially implemented (verification present, fulfillment persistence missing).
4. PWA icon assets are referenced but not currently present under public icons.
5. Local onboarding docs reference .env.example, but no file was present prior to this plan.

## Delivery Principles

1. Additive changes only until explicit migration windows are approved.
2. Backward-compatible APIs with versioning for all breaking evolution.
3. Infrastructure as code and auditable release gates.
4. Security, compliance, observability, and testability are first-class requirements.
5. Every phase has explicit acceptance criteria and rollback strategy.

## Recommended 2026 Next.js Structure

### Is `app/src/app`, `app/src`, `app/public` a correct modern layout?

Yes. For a single application in a monorepo-capable future, this is compliant and modern:

1. `app/src/app`: App Router routes and layouts.
2. `app/src/components`: UI modules.
3. `app/src/lib`: service utilities, integrations, and domain logic.
4. `app/public`: static assets, manifest, service worker.

### For npm workspaces readiness

Keep this app as one workspace package and add repository-level orchestration later:

1. Root workspace package for scripts and shared tooling.
2. `apps/web` or retain current `app` package path (both acceptable).
3. `packages/*` for shared ui, config, types, sdk clients.
4. Shared lint/tsconfig presets as internal packages.

No urgent refactor is required now. Current tree is valid for modern Next.js.

## Phased Plan

## Phase 0: Run Reliability and Baseline Hardening

Scope:

1. Confirm deterministic local run scripts and setup docs.
2. Add environment validation at startup (fail-fast for missing critical keys).
3. Align asset references with actual public files.

Acceptance criteria:

1. `npm run dev`, `npm run build`, `npm run start` documented and reproducible.
2. Missing required env vars produce clear startup diagnostics.
3. No broken asset references in layout, manifest, or metadata.

## Phase 1: Data Foundation and Transactional Integrity

Scope:

1. Introduce production database and migrations.
2. Persist leads, checkout sessions, orders, subscriptions, affiliate events.
3. Implement idempotent webhook handlers and retry-safe processing.

Acceptance criteria:

1. Every paid transaction creates auditable order and entitlement records.
2. Duplicate webhook delivery is safe and produces no double fulfillment.
3. Affiliate attribution survives full checkout lifecycle.

## Phase 2: Identity, Access, and Multi-Tenant Boundaries

Scope:

1. Add authentication for customer and affiliate dashboards.
2. Protect all non-public routes and API resources.
3. Introduce role-based authorization for admin/ops surfaces.

Acceptance criteria:

1. Unauthorized access attempts are blocked and logged.
2. Dashboard data is user-specific and source-of-truth backed.
3. Session security aligns with OWASP ASVS controls.

## Phase 3: Licensing and Product Fulfillment

Scope:

1. Implement real license issuance and domain activation counters.
2. Enforce software-license constraints from policy.
3. Connect download delivery to verified entitlements.

Acceptance criteria:

1. License keys are unique, revocable, and auditable.
2. Activation limits are enforced server-side.
3. Download links are access-controlled and traceable.

## Phase 4: Security, Compliance, and Risk Controls

Scope:

1. Add rate limiting, abuse controls, and schema validation.
2. Define data retention, deletion, and export workflows.
3. Harden security headers and secrets management.

Acceptance criteria:

1. Critical endpoints have abuse protection and input validation.
2. Privacy workflows support policy obligations.
3. Security scanning and dependency checks run in CI.

## Phase 5: Observability, QA, and Release Operations

Scope:

1. Structured logs, tracing, metrics, and alerting.
2. Unit, integration, and end-to-end test suites.
3. Staging parity, canary rollout, and rollback automation.

Acceptance criteria:

1. SLOs and alert thresholds are defined and monitored.
2. Critical funnel path has deterministic end-to-end coverage.
3. Releases are gated by quality and security checks.

## Phase 6: Commercial and Enterprise Go-Live

Scope:

1. Billing operations, refunds, payout workflows, and reconciliations.
2. Legal review and jurisdiction-specific terms/privacy controls.
3. Support, incident response, and customer success handoffs.

Acceptance criteria:

1. Finance can reconcile sales, commissions, and refunds daily.
2. Legal/compliance sign-off documented.
3. Support SLAs and runbooks are operational.

## Gaps to Close Before "Enterprise Production" Claim

1. Persistence layer for all business-critical events.
2. Real authN/authZ for protected surfaces.
3. End-to-end order fulfillment and entitlement controls.
4. Security and compliance controls in runtime and CI/CD.
5. Monitoring, on-call, and failure response workflows.
6. Test depth and release governance.

## Suggested KPI Targets

1. Checkout success rate >= 97%.
2. Webhook processing success >= 99.9%.
3. P95 API latency <= 300 ms for critical routes.
4. Mean time to detect incidents <= 5 minutes.
5. Mean time to recover <= 30 minutes.

## Immediate Next Actions

1. Implement Phase 0 in a dedicated PR with zero business-logic redesign.
2. Approve database and auth stack decisions for Phase 1 and Phase 2.
3. Define production architecture ADRs before major implementation waves.

