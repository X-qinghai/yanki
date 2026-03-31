import type { Simplify } from 'type-fest'
import type { YankiParamsForAction } from 'yanki-connect'
import type { YankiModelName } from './model'

export type YankiNote = Simplify<
	Omit<YankiParamsForAction<'addNote'>['note'], 'fields' | 'modelName' | 'options'> & {
		cards?: number[]
		fields: {
			Back: string
			// Currently only Yanki - Basic (and reversed card with extra) has this field
			Extra?: string
			Front: string
			ObsidianLink?: string
			Source?: string
			YankiNamespace: string
		}
		modelName: YankiModelName
		noteId: number | undefined
	}
>
