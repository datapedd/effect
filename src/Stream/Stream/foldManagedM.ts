import type * as T from "../../Effect"
import type * as M from "../../Managed"
import type { Stream } from "./definitions"
import { foldWhileManagedM } from "./foldWhileManagedM"

/**
 * Executes an effectful fold over the stream of values.
 * Returns a Managed value that represents the scope of the stream.
 */
export function foldManagedM<S>(s: S) {
  return <O, R1, E1>(f: (s: S, o: O) => T.Effect<R1, E1, S>) => <R, E>(
    self: Stream<R, E, O>
  ): M.Managed<R & R1, E | E1, S> => foldWhileManagedM(s)((_) => true)(f)(self)
}
