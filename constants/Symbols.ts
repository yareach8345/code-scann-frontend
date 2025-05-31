import type {AsyncDataExecuteOptions} from "#app/composables/asyncData";

export const POST_REFRESH_SYMBOL: InjectionKey<(opts?: AsyncDataExecuteOptions) => Promise<void>> = Symbol('postRefresh')