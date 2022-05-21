/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect } from 'react'
import axios from 'axios'

const FooBar = () => {
  const [bar, setBar] = useState([])
  const [fooInfo, setFooInfo] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://foo_url')
        setBar(data['bar'])
        setFooInfo(data)
      } catch (error) {
        console.error(error)
        return 'This went wrong: ' + error
      }
    }
    fetchData()
  }, [setBar, setFooInfo])

  return (
    <div>
      <span>{bar}</span>
      <span>{fooInfo}</span>
    </div>
  )
}

export default FooBar
