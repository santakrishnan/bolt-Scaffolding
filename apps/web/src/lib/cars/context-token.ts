import 'server-only'

export type CarsSearchContext = {
  make?: string
  model?: string
  year?: string
  trim?: string
  q?: string
  page?: string
  sort?: string
}

export function encodeCarsSearchContext(context: CarsSearchContext): string {
  const json = JSON.stringify(context)
  return Buffer.from(json, 'utf8').toString('base64url')
}

export function decodeCarsSearchContext(token: string): CarsSearchContext | null {
  try {
    const json = Buffer.from(token, 'base64url').toString('utf8')
    const parsed = JSON.parse(json) as unknown

    if (!parsed || typeof parsed !== 'object') return null

    const obj = parsed as Record<string, unknown>
    const pickString = (key: string) =>
      typeof obj[key] === 'string' ? (obj[key] as string) : undefined

    return {
      make: pickString('make'),
      model: pickString('model'),
      year: pickString('year'),
      trim: pickString('trim'),
      q: pickString('q'),
      page: pickString('page'),
      sort: pickString('sort'),
    }
  } catch {
    return null
  }
}
