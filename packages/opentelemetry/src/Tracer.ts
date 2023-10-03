/**
 * @since 1.0.0
 */
import type * as Otel from "@opentelemetry/api"
import type { Tag } from "effect/Context"
import type { Effect } from "effect/Effect"
import type { Layer } from "effect/Layer"
import type * as Option from "effect/Option"
import type { ExternalSpan, Tracer } from "effect/Tracer"
import * as internal from "./internal/tracer"
import type { Resource } from "./Resource"

/**
 * @since 1.0.0
 * @category constructors
 */
export const make: Effect<Otel.Tracer, never, Tracer> = internal.make

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeExternalSpan: (
  options: {
    readonly traceId: string
    readonly spanId: string
    readonly traceFlags?: number | undefined
    readonly traceState?: string | Otel.TraceState | undefined
  }
) => ExternalSpan = internal.makeExternalSpan

/**
 * @since 1.0.0
 * @category accessors
 */
export const currentOtelSpan: Effect<never, never, Option.Option<Otel.Span>> = internal.currentOtelSpan

/**
 * @since 1.0.0
 * @category layers
 */
export const layer: Layer<Resource, never, never> = internal.layer

/**
 * @since 1.0.0
 * @category layers
 */
export const layerOtelTracer: Layer<Resource, never, Otel.Tracer> = internal.layerOtelTracer

/**
 * @since 1.0.0
 * @category tags
 */
export const OtelTracer: Tag<Otel.Tracer, Otel.Tracer> = internal.OtelTracer

/**
 * @since 1.0.0
 * @category tags
 */
export const TraceFlags: Tag<Otel.TraceFlags, Otel.TraceFlags> = internal.traceFlagsTag

/**
 * @since 1.0.0
 * @category tags
 */
export const TraceState: Tag<Otel.TraceState, Otel.TraceState> = internal.traceStateTag