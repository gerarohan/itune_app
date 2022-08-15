import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useTuneSeach(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [songs, setSongs] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const pageSize = 10;

  useEffect(() => {
    setSongs([])
  }, [query])

  useEffect( () => {
    debugger;
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://itunes.apple.com/search?term=${query}&limit=${pageNumber * pageSize}`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setSongs(res.data.results);
      
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, songs, hasMore }
}
