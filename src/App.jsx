import React, { useState, useRef, useCallback } from 'react'
import useTuneSeach from './useiTuneSearch'
import ItemCard from './component/card'

export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    songs,
    hasMore,
    loading,
    error
  } = useTuneSeach(query, pageNumber)

  const observer = useRef()
  const lastSongElementRef = useCallback(node => {
    debugger;
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    debugger;
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <div className='App'>
      <div>Test Project for itunes search</div>
      <input type="text" value={query} placeholder='seach..' onChange={handleSearch}/>
      {songs.map((item, index) => {
        if (songs.length === index + 1) {
          return <div ref={lastSongElementRef} key={`item-${index+1}`} 
          style={{ 'padding': '5px', 'margin': '5px'}}>
          <ItemCard image={item.artworkUrl100} cardTitle={item.trackName}  previewUrl={item.trackViewUrl} />
          </div>
        } else {
          return <div key={`item-${index+1}`} style={{'margin': '5px'}}>
           <ItemCard image={item.artworkUrl100} cardTitle={item.trackName}  previewUrl={item.trackViewUrl} />
           </div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
      </div>
  )
}