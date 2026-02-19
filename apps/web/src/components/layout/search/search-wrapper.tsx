import { getSearchPageData } from '~/lib/search/data'
import { SearchClient } from './search-client'

export async function SearchWrapper() {
  const data = await getSearchPageData()

  return <SearchClient vehicles={data.vehicles} />
}
